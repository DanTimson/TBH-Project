# backend/app/routers/hotels.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from datetime import date
from typing import List, Optional
import asyncpg

router = APIRouter(prefix="/hotels", tags=["hotels"])

class HotelResponse(BaseModel):
    id: int
    name: str
    legal_address: str
    rating: float
    photos: List[str]
    distance_km: float
    properties: List[str]
    min_price: float
    free_cancellation: bool

class HotelDetailsResponse(BaseModel):
    id: int
    name: str
    legal_address: str
    rating: float
    photos: List[str]
    inn: str
    properties: List[str]
    rooms: List[dict]

async def get_db_conn():
    return await asyncpg.connect(
        user="admin",
        password="admin",
        database="travel_db",
        host="db"
    )

@router.get("/search", response_model=List[HotelResponse])
async def search_hotels(
    city: str,
    check_in_date: date,
    check_out_date: date
):
    try:
        conn = await get_db_conn()
        query = """
            SELECT 
                h.hotel_id,
                h.name,
                h.legal_address,
                h.rating,
                h.photos,
                c.distance_km,
                ARRAY_AGG(p.name) as properties,
                MIN(rt.price_per_night) as min_price,
                BOOL_OR(hp.free_cancellation) as free_cancellation
            FROM hotels h
            JOIN cities_distances c ON h.city_id = c.to_city_id
            JOIN hotel_properties hp ON h.hotel_id = hp.hotel_id
            JOIN properties p ON hp.property_id = p.property_id
            JOIN room_types rt ON h.hotel_id = rt.hotel_id
            WHERE c.from_city_id = (
                SELECT city_id FROM cities WHERE name = $1
            )
            GROUP BY h.hotel_id, c.distance_km
        """
        results = await conn.fetch(query, city)
        
        return [{
            "id": r["hotel_id"],
            "name": r["name"],
            "legal_address": r["legal_address"],
            "rating": r["rating"],
            "photos": r["photos"],
            "distance_km": r["distance_km"],
            "properties": r["properties"],
            "min_price": float(r["min_price"]),
            "free_cancellation": r["free_cancellation"]
        } for r in results]
        
    except Exception as e:
        raise HTTPException(500, "Ошибка поиска отелей") from e
    finally:
        await conn.close()

@router.get("/{hotel_id}", response_model=HotelDetailsResponse)
async def get_hotel_details(hotel_id: int):
    try:
        conn = await get_db_conn()
        
        # Get basic hotel info
        hotel = await conn.fetchrow("""
            SELECT * FROM hotels 
            WHERE hotel_id = $1
        """, hotel_id)
        
        if not hotel:
            raise HTTPException(404, "Отель не найден")
            
        # Get hotel properties
        properties = await conn.fetch("""
            SELECT p.name FROM hotel_properties hp
            JOIN properties p ON hp.property_id = p.property_id
            WHERE hp.hotel_id = $1
        """, hotel_id)
        
        # Get room types with amenities
        rooms = await conn.fetch("""
            SELECT 
                rt.room_type_id,
                rt.name,
                rt.max_occupancy,
                rt.price_per_night,
                ARRAY_AGG(p.name) as amenities
            FROM room_types rt
            LEFT JOIN room_amenities ra ON rt.room_type_id = ra.room_type_id
            LEFT JOIN properties p ON ra.property_id = p.property_id
            WHERE rt.hotel_id = $1
            GROUP BY rt.room_type_id
        """, hotel_id)
        
        return {
            "id": hotel["hotel_id"],
            "name": hotel["name"],
            "legal_address": hotel["legal_address"],
            "rating": float(hotel["rating"]),
            "photos": hotel["photos"],
            "inn": hotel["inn"],
            "properties": [p["name"] for p in properties],
            "rooms": [{
                "room_type_id": r["room_type_id"],
                "name": r["name"],
                "max_occupancy": r["max_occupancy"],
                "price_per_night": float(r["price_per_night"]),
                "amenities": r["amenities"]
            } for r in rooms]
        }
        
    except asyncpg.exceptions.DataError:
        raise HTTPException(400, "Некорректный ID отеля")
    finally:
        await conn.close()
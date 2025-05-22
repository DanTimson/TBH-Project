
from fastapi import APIRouter, Query, HTTPException
from datetime import date, datetime
from pydantic import BaseModel
from typing import List
import asyncpg

router = APIRouter(prefix="/search", tags=["Search"])

class Station(BaseModel):
    id: int
    name: str
    city: str

class TrainClass(BaseModel):
    name: str  # "Люкс", "Купе" и т.д.
    available_seats: int
    price: float  # RUB

class TrainSearchResult(BaseModel):
    id: int
    train_number: str
    carrier: str
    departure_station: Station
    arrival_station: Station
    departure_time: datetime
    duration_minutes: int
    classes: List[TrainClass]
    train_tags: List[str] = []

@router.get("/trains", response_model=List[TrainSearchResult])
async def search_trains(
    departureCity: str = Query(..., min_length=3, example="Москва"),
    arrivalCity: str = Query(..., min_length=3, example="Санкт-Петербург"),
    departureDate: date = Query(..., example="2024-12-25")
):
    """Search for Russian railway trains (РЖД, Сапсан, etc.)"""
    return [
        {
            "id": 1,
            "train_number": "025А",
            "carrier": "РЖД",
            "departure_station": {
                "id": 1,
                "name": "Казанский вокзал",
                "city": "Москва"
            },
            "arrival_station": {
                "id": 2,
                "name": "Московский вокзал",
                "city": "Санкт-Петербург"
            },
            "departure_time": "2024-12-25T23:55:00",
            "duration_minutes": 420,
            "classes": [
                {
                    "name": "Люкс",
                    "available_seats": 4,
                    "price": 15000.00
                },
                {
                    "name": "Купе",
                    "available_seats": 8,
                    "price": 10000.00
                }
            ],
            "train_tags": ["Фирменный", "Скоростной"]
        },
        {
            "id": 1,
            "train_number": "025А",
            "carrier": "РЖД",
            "departure_station": {
                "id": 1,
                "name": "Казанский вокзал",
                "city": "Москва"
            },
            "arrival_station": {
                "id": 2,
                "name": "Московский вокзал",
                "city": "Санкт-Петербург"
            },
            "departure_time": "2024-12-25T23:55:00",
            "duration_minutes": 420,
            "classes": [
                {
                    "name": "Люкс",
                    "available_seats": 4,
                    "price": 15000.00
                },
                {
                    "name": "Купе",
                    "available_seats": 8,
                    "price": 10000.00
                }
            ],
            "train_tags": ["Фирменный", "Скоростной"]
        }
    ]

class HotelSearchResult(BaseModel):
    id: int
    name: str
    address: str
    distance_km: float
    room_type: str
    breakfast_included: bool
    price: float  # RUB
    stay_info: str
    free_cancellation: bool
    pay_at_hotel: bool
    free_wifi: bool
    rating: float

async def get_db_conn():
    return await asyncpg.connect(
        user="admin",
        password="admin",
        database="travel_db",
        host="db"
    )

@router.get("/hotels", response_model=List[HotelSearchResult])
async def search_hotels(
    city: str = Query(..., min_length=3),
    checkInDate: date = Query(...)
):
    try:
        conn = await get_db_conn()
        query = """
            SELECT 
                h.hotel_id as id,
                h.name,
                h.legal_address as address,
                h.rating,
                COALESCE(cd.distance_km, 0) as distance_km,
                rt.name as room_type,
                rt.price_per_night as price,
                BOOL_OR(p.name = 'Завтрак включен') as breakfast_included,
                BOOL_OR(p.name = 'Бесплатная отмена') as free_cancellation,
                BOOL_OR(p.name = 'Оплата в отеле') as pay_at_hotel,
                BOOL_OR(p.name = 'Бесплатный Wi-Fi') as free_wifi
            FROM hotels h
            JOIN cities c ON h.city_id = c.city_id
            LEFT JOIN cities_distances cd 
                ON cd.from_city_id = c.city_id 
                AND cd.to_city_id = c.city_id
            JOIN hotel_properties hp ON h.hotel_id = hp.hotel_id
            JOIN properties p ON hp.property_id = p.property_id
            JOIN LATERAL (
                SELECT name, price_per_night 
                FROM room_types 
                WHERE hotel_id = h.hotel_id 
                ORDER BY price_per_night 
                LIMIT 1
            ) rt ON TRUE
            WHERE c.name = $1
            GROUP BY 
                h.hotel_id, 
                rt.name, 
                rt.price_per_night, 
                cd.distance_km
        """
        results = await conn.fetch(query, city)
        
        return [{
            "id": r["id"],
            "name": r["name"],
            "address": r["address"],
            "distance_km": float(r["distance_km"]),
            "room_type": r["room_type"],
            "breakfast_included": r["breakfast_included"],
            "price": float(r["price"]),
            "stay_info": "1 ночь, 2 гостя",  # Dynamic calculation needs checkOutDate
            "free_cancellation": r["free_cancellation"],
            "pay_at_hotel": r["pay_at_hotel"],
            "free_wifi": r["free_wifi"],
            "rating": float(r["rating"])
        } for r in results]
        
    except Exception as e:
        raise HTTPException(500, detail="Ошибка поиска отелей") from e
    finally:
        await conn.close()
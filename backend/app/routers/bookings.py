from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from datetime import date, datetime
from typing import Optional
import uuid
import asyncpg

router = APIRouter(prefix="/bookings", tags=["Bookings"])

class TrainBookingCreate(BaseModel):
    user_id: uuid.UUID
    train_number: str
    departure_station_id: int
    arrival_station_id: int
    departure_time: datetime
    seat_class: str
    passengers: list[str]  # Passport names

async def get_db_conn():
    return await asyncpg.connect(
        user="admin",
        password="admin",
        database="travel_db",
        host="db"
    )

@router.post("/trains")
async def create_train_booking(booking: TrainBookingCreate):
    # Implement booking logic with Sirena-Travel API
    return {
        "booking_id": "RZD-2024-12345",
        "status": "подтверждено"
    }

class HotelBookingCreate(BaseModel):
    user_id: uuid.UUID
    hotel_id: int
    room_type_id: int
    check_in: date
    check_out: date
    guests: int

class HotelBookingResponse(BaseModel):
    booking_id: str
    status: str

@router.post("/hotels")
async def create_hotel_booking(booking: HotelBookingCreate):
    try:
        conn = await get_db_conn()
        async with conn.transaction():
            # Check room availability
            room = await conn.fetchrow(
                """SELECT price_per_night FROM room_types 
                WHERE room_type_id = $1""",
                booking.room_type_id
            )
            
            if not room:
                raise HTTPException(404, "Room type not found")
            
            total_price = room['price_per_night'] * (booking.check_out - booking.check_in).days
            
            # Create booking
            booking_id = await conn.fetchval(
                """INSERT INTO hotel_bookings
                (user_id, hotel_id, room_type_id, check_in_date, check_out_date, total_price)
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING booking_id""",
                booking.user_id, booking.hotel_id, booking.room_type_id,
                booking.check_in, booking.check_out, total_price
            )
            
        return {"booking_id": booking_id, "total_price": total_price}
    
    except asyncpg.exceptions.IntegrityConstraintViolationError as e:
        raise HTTPException(400, "Invalid booking data") from e
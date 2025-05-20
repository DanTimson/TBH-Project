from fastapi import APIRouter, Query
from datetime import date
from pydantic import BaseModel
from typing import List

router = APIRouter(prefix="/search", tags=["Search"])

class Station(BaseModel):
    id: int
    name: str
    city: str

class TrainSearchResult(BaseModel):
    id: int
    departure_station: Station
    arrival_station: Station
    departure_time: str  # ISO format
    duration_minutes: int

@router.get("/trains", response_model=List[TrainSearchResult])
async def search_trains(
    departureCity: str = Query(..., min_length=3),
    arrivalCity: str = Query(..., min_length=3),
    departureDate: date = Query(...)
):
    # Mock data - replace with actual database/Sirena-Travel API integration
    return [
        {
            "id": 1,
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
            "departure_time": "2024-12-25T08:00:00",
            "duration_minutes": 240
        }
    ]

class HotelSearchResult(BaseModel):
    id: int
    name: str
    rating: float
    min_price: float

@router.get("/hotels", response_model=List[HotelSearchResult])
async def search_hotels(
    city: str = Query(..., min_length=3),
    checkInDate: date = Query(...)
):
    # Mock data - replace with Ostrovok.ru API integration
    return [
        {
            "id": 1,
            "name": "Гостиница Космос",
            "rating": 4.5,
            "min_price": 4500.00
        }
    ]
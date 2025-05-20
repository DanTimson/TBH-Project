from fastapi import APIRouter, Query
from datetime import date, datetime
from pydantic import BaseModel
from typing import List

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

@router.get("/hotels", response_model=List[HotelSearchResult])
async def search_hotels(
    city: str = Query(..., min_length=3),
    checkInDate: date = Query(...)
):
    # Mock data - replace with Ostrovok.ru API integration
    return [
    {
        "id": 1,
        "name": "Гранд Отель",
        "address": "ул. Центральная, 1",
        "distance_km": 1.2,
        "room_type": "Стандартный двухместный номер",
        "breakfast_included": True,
        "price": 12500.00,
        "stay_info": "2 ночи, 2 гостя",
        "free_cancellation": True,
        "pay_at_hotel": True,
        "free_wifi": True,
        "rating": 4.5
    }
    ]
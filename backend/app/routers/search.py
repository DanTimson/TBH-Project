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
    trainNumber: str
    carrier: str
    departureStation: Station
    arrivalStation: Station
    departureTime: datetime
    durationMinutes: int
    classes: List[TrainClass]
    trainTags: List[str] = []

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
            "trainNumber": "025А",
            "carrier": "РЖД",
            "departureStation": {
                "id": 1,
                "name": "Казанский вокзал",
                "city": "Москва"
            },
            "arrivalStation": {
                "id": 2,
                "name": "Московский вокзал",
                "city": "Санкт-Петербург"
            },
            "departureTime": "2024-12-25T23:55:00",
            "durationMinutes": 420,
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
            "trainTags": ["Фирменный", "Скоростной"]
        },
        {
            "id": 1,
            "trainNumber": "025А",
            "carrier": "РЖД",
            "departureStation": {
                "id": 1,
                "name": "Казанский вокзал",
                "city": "Москва"
            },
            "arrivalStation": {
                "id": 2,
                "name": "Московский вокзал",
                "city": "Санкт-Петербург"
            },
            "departureTime": "2024-12-25T23:55:00",
            "durationMinutes": 420,
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
            "trainTags": ["Фирменный", "Скоростной"]
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
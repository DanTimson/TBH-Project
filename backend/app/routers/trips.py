from fastapi import APIRouter
from pydantic import BaseModel
from datetime import date
from typing import List

router = APIRouter(prefix="/trips", tags=["Trips"])

class TripLeg(BaseModel):
    type: str  # "train"|"hotel"
    booking_id: str
    departure_date: date
    departure_city: str

class TripCreate(BaseModel):
    name: str
    employee_id: str
    legs: List[TripLeg]

@router.post("")
async def create_trip(trip: TripCreate):
    """Create multi-leg business trip (Moscow->Kazan->SPb)"""
    return {
        "trip_id": "RU-2024-54321",
        "total_cost_rub": 25400.50,
        "approval_required": True
    }
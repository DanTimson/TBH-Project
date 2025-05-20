from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from typing import List, Optional
import uuid
from datetime import datetime, date

from routers import search, bookings

app = FastAPI()
app.include_router(search.router)
app.include_router(bookings.router)



app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # React default
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Authentication Setup ---
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

class UserCreate(BaseModel):
    email: str
    password: str

class UserResponse(BaseModel):
    id: uuid.UUID
    email: str
    created_at: datetime

class LoginResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"

# --- Bookings Schemas ---
class TrainBookingCreate(BaseModel):
    train_id: int
    departure_station_id: int
    arrival_station_id: int
    departure_time: datetime
    seat_class: str

class HotelBookingCreate(BaseModel):
    hotel_id: int
    room_type_id: int
    check_in_date: date
    check_out_date: date

# --- Search Schemas ---
class Station(BaseModel):
    id: int
    name: str
    city: str

class TrainSearchResult(BaseModel):
    id: int
    departure_station: Station
    arrival_station: Station
    departure_time: datetime
    duration_minutes: int

# --- Authentication Endpoints ---
@app.post("/auth/register", response_model=UserResponse, tags=["Authentication"])
async def register(user: UserCreate):
    # Implement registration logic
    return {
        "id": uuid.uuid4(),
        "email": user.email,
        "created_at": datetime.now()
    }

@app.post("/auth/login", response_model=LoginResponse, tags=["Authentication"])
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    # Implement login logic
    return {"access_token": "fake-token", "token_type": "bearer"}

# --- Booking Endpoints ---
@app.post("/bookings/trains", tags=["Bookings"])
async def create_train_booking(booking: TrainBookingCreate, 
                              token: str = Depends(oauth2_scheme)):
    # Implement booking logic
    return {"message": "Train booking created"}

@app.post("/bookings/hotels", tags=["Bookings"])
async def create_hotel_booking(booking: HotelBookingCreate, 
                              token: str = Depends(oauth2_scheme)):
    # Implement booking logic
    return {"message": "Hotel booking created"}

# --- Search Endpoints ---
@app.get("/search/trains", response_model=List[TrainSearchResult], tags=["Search"])
async def search_trains(
    departureCity: str,
    arrivalCity: str,
    departureDate: date
):
    # Implement search logic
    return [{
        "id": 1,
        "departure_station": {"id": 1, "name": "Moscow", "city": "Moscow"},
        "arrival_station": {"id": 2, "name": "St Petersburg", "city": "St Petersburg"},
        "departure_time": datetime.now(),
        "duration_minutes": 240
    }]
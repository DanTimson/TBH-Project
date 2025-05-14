-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Cities
CREATE TABLE cities (
    city_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- 2. Stations (Normalized Table)
CREATE TABLE stations (
    station_id SERIAL PRIMARY KEY,
    city_id INTEGER NOT NULL REFERENCES cities(city_id),
    name VARCHAR(100) NOT NULL,
    code VARCHAR(10) UNIQUE NOT NULL  -- e.g., "MOW" for Moscow
);

-- 3. City Distances (Directed Graph)
CREATE TABLE cities_distances (
    from_city_id INTEGER NOT NULL REFERENCES cities(city_id),
    to_city_id INTEGER NOT NULL REFERENCES cities(city_id),
    train_duration_minutes INTEGER,
    plane_duration_minutes INTEGER,
    distance_km INTEGER,
    PRIMARY KEY (from_city_id, to_city_id),
    CHECK (from_city_id <> to_city_id)  -- Prevent self-references
);

-- 4. Hotels
CREATE TABLE hotels (
    hotel_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    city_id INTEGER NOT NULL REFERENCES cities(city_id),
    rating DECIMAL(3,2) NOT NULL CHECK (rating BETWEEN 0 AND 5),
    photos JSONB  -- Store URLs or paths
);

-- 5. Room Types (Normalized Table)
CREATE TABLE room_types (
    room_type_id SERIAL PRIMARY KEY,
    hotel_id INTEGER NOT NULL REFERENCES hotels(hotel_id),
    name VARCHAR(50) NOT NULL,           -- e.g., "Deluxe Suite"
    max_occupancy INTEGER NOT NULL,       -- e.g., 2 guests
    price_per_night DECIMAL(10,2) NOT NULL,
    UNIQUE (hotel_id, name)  -- Avoid duplicate room types per hotel
);

-- 6. Hotel Properties (Amenities)
CREATE TABLE properties (
    property_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE  -- e.g., "Wi-Fi", "Pool"
);

-- 7. Hotel-Property Mapping (Many-to-Many)
CREATE TABLE hotel_properties (
    hotel_id INTEGER NOT NULL REFERENCES hotels(hotel_id),
    property_id INTEGER NOT NULL REFERENCES properties(property_id),
    PRIMARY KEY (hotel_id, property_id)
);

-- 8. Guests (Users)
CREATE TABLE guests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    full_name TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 9. Purchase History
CREATE TABLE purchase_log (
    purchase_id SERIAL PRIMARY KEY,
    guest_id UUID NOT NULL REFERENCES guests(id),
    payment_method TEXT NOT NULL,  -- "credit_card", "paypal"
    status TEXT NOT NULL,          -- "pending", "completed", "refunded"
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 10. Train Bookings (Updated with Stations)
CREATE TABLE train_bookings (
    id SERIAL PRIMARY KEY,
    guest_id UUID NOT NULL REFERENCES guests(id),
    purchase_id INTEGER REFERENCES purchase_log(purchase_id),
    train_number VARCHAR(20) NOT NULL,
    departure_station_id INTEGER NOT NULL REFERENCES stations(station_id),
    arrival_station_id INTEGER NOT NULL REFERENCES stations(station_id),
    departure_time TIMESTAMP NOT NULL,
    arrival_time TIMESTAMP NOT NULL,
    carriage_number VARCHAR(20),    -- e.g., "Car 12"
    seat_class VARCHAR(50) NOT NULL, -- "business", "economy"
    price DECIMAL(10,2) NOT NULL
);

-- 11. Hotel Bookings (Updated with Room Types)
CREATE TABLE hotel_bookings (
    id SERIAL PRIMARY KEY,
    guest_id UUID NOT NULL REFERENCES guests(id),
    purchase_id INTEGER REFERENCES purchase_log(purchase_id),
    hotel_id INTEGER NOT NULL REFERENCES hotels(hotel_id),
    room_type_id INTEGER NOT NULL REFERENCES room_types(room_type_id),
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    total_price DECIMAL(10,2) NOT NULL
);

-- 12. Application Logs (Audit)
CREATE TABLE app_log (
    log_id SERIAL PRIMARY KEY,
    log_level INTEGER,              -- 1: DEBUG, 2: INFO, 3: ERROR
    message TEXT,
    log_time TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    user_id UUID REFERENCES guests(id)
);

-- Indexes
CREATE INDEX idx_guests_email ON guests(email);
CREATE INDEX idx_train_bookings_departure ON train_bookings(departure_time);
CREATE INDEX idx_hotel_bookings_checkin ON hotel_bookings(check_in_date);
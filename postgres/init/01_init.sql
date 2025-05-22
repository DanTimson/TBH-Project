-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREATE DATABASE travel_db 
--     TEMPLATE template0 
--     ENCODING 'UTF8' 
--     LC_COLLATE 'ru_RU.UTF-8' 
--     LC_CTYPE 'ru_RU.UTF-8';

\connect travel_db

-- 1. Cities
CREATE TABLE cities (
    city_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    timezone VARCHAR(50) NOT NULL DEFAULT 'Europe/Moscow'
);

-- 2. Stations (Normalized Table)
CREATE TABLE stations (
    station_id SERIAL PRIMARY KEY,
    city_id INTEGER NOT NULL REFERENCES cities(city_id),
    name VARCHAR(100) NOT NULL,
    code VARCHAR(10) UNIQUE NOT NULL CHECK (code ~ '^[А-Я0-9]{3}$')
);

-- 3. City Distances (Directed Graph)
CREATE TABLE cities_distances (
    from_city_id INTEGER NOT NULL REFERENCES cities(city_id),
    to_city_id INTEGER NOT NULL REFERENCES cities(city_id),
    train_duration_minutes INTEGER CHECK (train_duration_minutes > 0),
    plane_duration_minutes INTEGER CHECK (plane_duration_minutes > 0),
    distance_km INTEGER CHECK (distance_km > 0),
    PRIMARY KEY (from_city_id, to_city_id)
);

-- 4. Hotels
CREATE TABLE hotels (
    hotel_id SERIAL PRIMARY KEY,
    city_id INTEGER REFERENCES cities(city_id),
    name TEXT NOT NULL,
    legal_address TEXT NOT NULL,
    inn VARCHAR(12) NOT NULL CHECK (inn ~ '^\d{10,12}$'),
    rating DECIMAL(2,1) NOT NULL CHECK (rating BETWEEN 0 AND 5),
    photos JSONB CHECK (jsonb_typeof(photos) = 'array')
);

-- 5. Room Types (Normalized Table)
CREATE TABLE room_types (
    room_type_id SERIAL PRIMARY KEY,
    hotel_id INTEGER NOT NULL REFERENCES hotels(hotel_id),
    name VARCHAR(50) NOT NULL,
    max_occupancy INTEGER NOT NULL CHECK (max_occupancy > 0),
    price_per_night DECIMAL(10,2) NOT NULL CHECK (price_per_night > 0),
    UNIQUE (hotel_id, name)
);

-- 6. Hotel Properties (Amenities)
CREATE TABLE properties (
    property_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

-- 7. Hotel-Property Mapping (Many-to-Many)
CREATE TABLE hotel_properties (
    hotel_id INTEGER NOT NULL REFERENCES hotels(hotel_id),
    property_id INTEGER NOT NULL REFERENCES properties(property_id),
    PRIMARY KEY (hotel_id, property_id)
);

-- 8. Users
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$'),
    password_hash TEXT NOT NULL,
    full_name TEXT,
    phone VARCHAR(20) CHECK (phone ~ '^\+7\d{10}$'),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 9. Purchase History
CREATE TABLE payment_log (
    payment_id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    amount DECIMAL(12,2) NOT NULL CHECK (amount > 0),
    currency CHAR(3) NOT NULL DEFAULT 'RUB',
    provider VARCHAR(50) NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('pending', 'completed', 'refunded')),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 10. Train Bookings (Updated with Stations)
CREATE TABLE train_bookings (
    booking_id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    payment_id INTEGER REFERENCES payment_log(payment_id),
    train_number VARCHAR(20) NOT NULL CHECK (train_number ~ '^\d{3}[А-Я]$'),
    departure_station_id INTEGER NOT NULL REFERENCES stations(station_id),
    arrival_station_id INTEGER NOT NULL REFERENCES stations(station_id),
    departure_time TIMESTAMPTZ NOT NULL,
    arrival_time TIMESTAMPTZ NOT NULL,
    carriage_number VARCHAR(20),
    seat_class VARCHAR(50) NOT NULL CHECK (seat_class IN ('Плацкарт', 'Купе', 'СВ')),
    price DECIMAL(10,2) NOT NULL CHECK (price > 0)
);

-- 11. Hotel Bookings (Updated with Room Types)
CREATE TABLE hotel_bookings (
    booking_id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    payment_id INTEGER REFERENCES payment_log(payment_id),
    hotel_id INTEGER NOT NULL REFERENCES hotels(hotel_id),
    room_type_id INTEGER NOT NULL REFERENCES room_types(room_type_id),
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    total_price DECIMAL(10,2) NOT NULL CHECK (total_price > 0),
    CHECK (check_out_date > check_in_date)
);

-- 12. Application Logs (Audit)
CREATE TABLE audit_log (
    log_id SERIAL PRIMARY KEY,
    log_level INTEGER NOT NULL CHECK (log_level BETWEEN 1 AND 3),
    message TEXT NOT NULL,
    user_id UUID REFERENCES users(id),
    ip_address INET,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_train_departures ON train_bookings(departure_time);
CREATE INDEX idx_hotel_checkins ON hotel_bookings(check_in_date);

-- Enable PostGIS for geographic queries
-- CREATE EXTENSION postgis;

-- Add geographic coordinates to cities
-- ALTER TABLE cities ADD COLUMN coordinates GEOMETRY(POINT, 4326);
-- CREATE INDEX idx_cities_geo ON cities USING GIST (coordinates);

-- Sample data for testing
INSERT INTO cities (name) VALUES
    ('Москва'),
    ('Санкт-Петербург'),
    ('Казань');

INSERT INTO stations (city_id, name, code) VALUES
    (1, 'Казанский вокзал', 'МСК'),
    (2, 'Московский вокзал', 'СПБ'),
    (3, 'Центральный вокзал', 'КЗН');
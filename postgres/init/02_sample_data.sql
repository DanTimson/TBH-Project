-- Sample users
INSERT INTO users (email, password_hash, full_name, phone) VALUES
    ('ivan.petrov@example.com', 'hashed_password_1', 'Иван Петров', '+79161234567'),
    ('anna.sidorova@example.com', 'hashed_password_2', 'Анна Сидорова', '+79269876543');

-- Sample hotels and rooms
INSERT INTO hotels (name, legal_address, inn, rating, photos) VALUES
    ('Гранд Отель Москва', 'ул. Тверская, 1', '770123456789', 4.5, '["photo1.jpg", "photo2.jpg"]'),
    ('Санкт-Петербург Плаза', 'Невский пр-т, 10', '780987654321', 4.7, '["photo3.jpg"]');

INSERT INTO room_types (hotel_id, name, max_occupancy, price_per_night) VALUES
    (1, 'Люкс', 2, 15000.00),
    (1, 'Стандарт', 2, 8000.00),
    (2, 'Делюкс', 2, 12000.00);

-- Sample properties
INSERT INTO properties (name) VALUES
    ('Бесплатный Wi-Fi'),
    ('Бассейн'),
    ('Спа-центр');

INSERT INTO hotel_properties VALUES
    (1, 1), (1, 3), (2, 1), (2, 2);

-- Sample train routes
INSERT INTO cities_distances (from_city_id, to_city_id, train_duration_minutes, distance_km) VALUES
    (1, 2, 240, 650),  -- Moscow -> SPb
    (1, 3, 420, 800);  -- Moscow -> Kazan
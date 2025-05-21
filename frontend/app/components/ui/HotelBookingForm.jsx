import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createHotelBooking } from '../services/bookingService';

export default function HotelBookingForm({ hotelId, roomTypeId }) {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await createHotelBooking({
                user_id: localStorage.getItem('userId'), // Get from auth
                hotel_id: hotelId,
                room_type_id: roomTypeId,
                check_in: checkIn,
                check_out: checkOut,
                guests: guests
            });
            
            navigate(`/booking-confirmation/${response.booking_id}`);
        } catch (error) {
            alert(`Ошибка бронирования: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label>Дата заезда:</label>
                <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Дата выезда:</label>
                <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Количество гостей:</label>
                <input
                    type="number"
                    min="1"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Забронировать
            </button>
        </form>
    );
}
export const fetchHotelDetails = async (hotelId) => {
  const response = await fetch(`/hotels/${hotelId}`);
  if (!response.ok) {
    throw new Error('Ошибка загрузки данных отеля');
  }
  return response.json();
};

export const bookRoom = async (hotelId, roomTypeId, dates) => {
  const response = await fetch(`/bookings/hotels`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      hotel_id: hotelId,
      room_type_id: roomTypeId,
      check_in: dates.startDate,
      check_out: dates.endDate
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Ошибка бронирования');
  }

  return response.json();
};
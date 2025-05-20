export const createTrainBooking = async (bookingData) => {
  const response = await fetch('/bookings/trains', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingData)
  });
  
  if (!response.ok) throw new Error('Ошибка бронирования поезда');
  return response.json();
};

export const createHotelBooking = async (bookingData) => {
  const response = await fetch('/bookings/hotels', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingData)
  });
  
  if (!response.ok) throw new Error('Ошибка бронирования отеля');
  return response.json();
};
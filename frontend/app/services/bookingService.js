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
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...bookingData,
            check_in: formatDate(bookingData.check_in),
            check_out: formatDate(bookingData.check_out)
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Ошибка бронирования');
    }

    return response.json();
};

function formatDate(dateString) {
    return new Date(dateString).toISOString().split('T')[0];
}
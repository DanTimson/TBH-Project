export const searchTrains = async (departureCity, arrivalCity, date) => {
  const params = new URLSearchParams({
    departureCity,
    arrivalCity,
    departureDate: date.toISOString().split('T')[0]
  });
  
  const response = await fetch(`/search/trains?${params}`);
  if (!response.ok) throw new Error('Ошибка поиска поездов');
  return response.json();
};

export const searchHotels = async (city, checkInDate) => {
  const params = new URLSearchParams({
    city,
    checkInDate: checkInDate.toISOString().split('T')[0]
  });
  
  const response = await fetch(`/search/hotels?${params}`);
  if (!response.ok) throw new Error('Ошибка поиска отелей');
  return response.json();
};
const API_BASE = '';

const handleResponse = async (response) => {
  const contentType = response.headers.get('content-type');
  
  // if (!contentType?.includes('application/json')) {
  //   const text = await response.text();
  //   console.error('Non-JSON response:', text);
  //   throw new Error('Некорректный ответ сервера');
  // }

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || `Ошибка ${response.status}`);
  }

  return response.json();
};

export const searchTrains = async (departureCity, arrivalCity, date) => {
  const params = new URLSearchParams({
    departureCity: encodeURIComponent(departureCity),
    arrivalCity: encodeURIComponent(arrivalCity),
    departureDate: date.toISOString().split('T')[0]
  });

  try {
    const response = await fetch(`${API_BASE}/search/trains?${params}`, {
      headers: { 'Accept': 'application/json' }
    });
    return await handleResponse(response);
  } catch (error) {
    console.error('Train search failed:', error);
    throw new Error(`Ошибка поиска поездов: ${error.message}`);
  }
};

export const searchHotels = async (city, checkInDate) => {
  const params = new URLSearchParams({
    city: encodeURIComponent(city),
    checkInDate: checkInDate.toISOString().split('T')[0]
  });

  try {
    const response = await fetch(`${API_BASE}/search/hotels?${params}`, {
      headers: { 'Accept': 'application/json' }
    });
    return await handleResponse(response);
  } catch (error) {
    console.error('Hotel search failed:', error);
    throw new Error(`Ошибка поиска отелей: ${error.message}`);
  }
};
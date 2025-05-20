const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

export const searchTrains = async (departureCity, arrivalCity, date) => {
  const params = new URLSearchParams({
    departureCity,
    arrivalCity,
    departureDate: date.toISOString().split('T')[0]
  });

  try {
    console.log('Sending train search request:', params.toString());
    const response = await fetch(`${API_BASE}/search/trains?${params}`);
    
    console.log('Received response:', response.status);
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Search error details:', errorData);
      throw new Error(errorData.detail || 'Ошибка поиска поездов');
    }

    const data = await response.json();
    console.log('Received train data:', data);
    return data;
  } catch (error) {
    console.error('Train search failed:', error);
    throw error;
  }
};

export const searchHotels = async (city, checkInDate) => {
  const params = new URLSearchParams({
    city,
    checkInDate: checkInDate.toISOString().split('T')[0]
  });

  try {
    console.log('Sending hotel search request:', params.toString());
    const response = await fetch(`${API_BASE}/search/hotels?${params}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Hotel search error:', errorData);
      throw new Error(errorData.detail || 'Ошибка поиска отелей');
    }

    const data = await response.json();
    console.log('Received hotel data:', data);
    return data;
  } catch (error) {
    console.error('Hotel search failed:', error);
    throw error;
  }
};
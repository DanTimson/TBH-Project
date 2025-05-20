export const createTrip = async (tripData) => {
  const response = await fetch('/trips', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...tripData,
      legs: tripData.legs.map(leg => ({
        ...leg,
        departure_date: leg.departure_date.toISOString().split('T')[0]
      }))
    })
  });
  return response.json();
};
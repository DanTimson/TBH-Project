import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Bed, Wifi, Tv, Utensils, Clock } from 'lucide-react';
import NavbarDesktop from "../components/ui/NavbarDesktop";
import Search from "../components/ui/Search";
import Button from "../components/ui/Button";
import { fetchHotelDetails } from '../services/hotelService';

const amenityTranslation = {
  'Бесплатный Wi-Fi': 'wifi',
  'Телевизор': 'tv',
  'Ресторан': 'dining',
  'Кондиционер': 'bed',
  'Доступ для инвалидов': 'wheelchair'
};

export default function HotelRoomPage() {
  const { hotelId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get dates from URL query parameters
  const checkInDate = searchParams.get('checkInDate');
  const checkOutDate = searchParams.get('checkOutDate');

  useEffect(() => {
    const loadHotelData = async () => {
      try {
        // Fetch hotel data using native fetch
        const response = await fetch(`/api/hotels/${hotelId}`);
        if (!response.ok) throw new Error('Ошибка загрузки');
        
        const data = await response.json();
        
        // Process rooms data
        const processedRooms = data.rooms.map(room => ({
          ...room,
          room_type_id: room.room_type_id,
          name: room.name,
          max_occupancy: room.max_occupancy,
          price_per_night: room.price_per_night,
          amenities: room.amenities.map(name => ({
            icon: amenityTranslation[name] || 'bed',
            name
          })),
          free_cancellation: data.free_cancellation,
          payment_options: [
            ...(data.pay_at_hotel ? ['Оплата в отеле'] : []),
            ...(data.free_cancellation ? ['Бесплатная отмена'] : [])
          ]
        }));

        setHotel(data);
        setRooms(processedRooms);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadHotelData();
  }, [hotelId]);

  const handleBookRoom = (roomTypeId) => {
    navigate(`/booking/hotel/${hotelId}`, {
      state: {
        roomTypeId,
        checkInDate,
        checkOutDate
      }
    });
  };

  
  if (loading) return (
    <div className="text-center py-8">
      <div className="animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent rounded-full"></div>
    </div>
  );
  if (error) return (
    <div className="text-red-500 text-center py-8">
      Ошибка: {error}
      <Button 
        className="mt-4"
        onClick={() => window.location.reload()}
      >
        Попробовать снова
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-[120px]">
      {/* Шапка */}
      <header className="flex w-full items-center justify-center gap-5 p-5 relative bg-base-0">
        <Button 
            variant="ghost"
            className="w-[52px] h-[52px] p-0"
            onClick={() => {
            console.log('Navigating back'); 
            navigate(-1);
            }}
            text="Назад"
        >
        </Button>

        <div className="flex items-center gap-2 relative self-stretch w-full bg-base-0 rounded mt-5">
        <search className="flex flex-col items-center gap-6 w-full grow bg-base-0">
          {/* Search Section */}
            <Search />
        </search>
        </div>

        <div className="flex items-center gap-4 mt-5">
          <h1 className="text-2xl font-bold">{hotel?.name}</h1>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">{hotel?.rating}</span>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main className="p-6">
        <HotelRoomDetails 
          rooms={rooms}
          onBook={handleBookRoom}
          hotelId={hotelId}
        />
      </main>

        {/* Gradient Overlay */}
        <div className="bottom-gradient" />

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[110px]">
        <NavbarDesktop />
      </div>
    </div>
  );
};
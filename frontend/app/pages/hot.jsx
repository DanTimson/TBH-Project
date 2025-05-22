import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavbarDesktop from "../components/ui/NavbarDesktop";
import Button from "../components/ui/Button";
import HotelCard from "../components/ui/HotelCard/HotelCard";
import { ChevronLeft, Search as SearchIcon } from "lucide-react";
import Search from "../components/ui/Search";
import { searchHotels } from '../services/searchService';
import avatar from '../assets/14.jpg'

const hotelsExample = [
    {
      id: 1,
      name: "Гранд Отель",
      address: "ул. Центральная, 1",
      distanceToCenter: "1 км до центра",
      roomType: "Стандартный двухместный номер",
      breakfast: "Континентальный завтрак включён",
      price: "12 500 ₽",
      stayInfo: "2 ночи, 2 гостя",
      badges: [
        { id: 1, text: "Бесплатная отмена" },
        { id: 2, text: "Оплата на месте" },
      ],
    },
    {
      id: 2,
      name: "Президент Отель",
      address: "ул. Набережная, 5",
      distanceToCenter: "0.5 км до центра",
      roomType: "Люкс с видом на море",
      breakfast: "Шведский стол включён",
      price: "24 300 ₽",
      stayInfo: "3 ночи, 2 гостя",
      badges: [
        { id: 1, text: "Бесплатная отмена" },
        { id: 2, text: "Оплата на месте" },
        { id: 3, text: "Бесплатный Wi-Fi" },
      ],
    },
  ];

export default function HotelPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
// Get search parameters from URL
  const searchParams = new URLSearchParams(location.search);
  const city = searchParams.get('city');
  const checkInDate = searchParams.get('checkInDate');

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true);
        const data = await searchHotels(
          city || 'Москва', // Default to Moscow
          checkInDate ? new Date(checkInDate) : new Date()
        );
        setHotels(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [city, checkInDate]);

  const handleHotelClick = (hotelId) => {
    navigate(`/room-details/${hotelId}`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (loading) return (
    <div className="text-center py-8 text-gray-600">
      <div className="animate-spin inline-block w-6 h-6 border-2 border-current border-t-transparent rounded-full mb-2" />
      <p>Ищем подходящие отели...</p>
    </div>
  );

  if (error) return (
    <div className="text-center py-8 text-red-600">
      <p>Ошибка загрузки данных: {error}</p>
      <Button 
        className="mt-4"
        // text = "Попробовать снова"
        onClick={() => window.location.reload()}
      >
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-[100px]">
      {/* Header */}
      <header className="flex w-full items-center justify-center gap-5 p-5 relative bg-base-0">
        <Button 
            variant="ghost"
            className="w-[52px] h-[52px] p-0"
            onClick={() => {
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

        <div className="relative w-[72px] h-[72px] bg-base-5 rounded-full overflow-hidden cursor-pointer"
          onClick={() => navigate('/user-profile')}
        >
          <img
            src={avatar}
            alt="Аватар пользователя"
            className="w-full h-full rounded-full object-cover border-2 border-base-5"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-[110px] overflow-y-auto w-full bg-base-5">
        
        

        {hotels.map(hotel => (
          <div 
            key={hotel.id}
            onClick={() => handleHotelClick(hotel.id)}
            className="mb-6 cursor-pointer hover:shadow-md transition-shadow"
          >
            <HotelCard 
              name={hotel.name}
              address={hotel.address}
              distanceToCenter={`${hotel.distance_km} км до центра`}
              roomType={hotel.room_type}
              breakfast={hotel.breakfast_included ? "Завтрак включён" : "Без питания"}
              price={formatPrice(hotel.price)}
              stayInfo={hotel.stay_info}
              badges={[
                ...(hotel.free_cancellation ? [{ id: 1, text: "Бесплатная отмена" }] : []),
                ...(hotel.pay_at_hotel ? [{ id: 2, text: "Оплата на месте" }] : []),
                ...(hotel.free_wifi ? [{ id: 3, text: "Бесплатный Wi-Fi" }] : [])
              ]}
            />
          </div>
        ))}
        
        
      </main>
      
        {/* Gradient Overlay */}
        <div className="bottom-gradient" />
      
            {/* Footer Navigation */}
          <div className="fixed bottom-0 left-0 right-0 z-50 h-[110px]">
            <NavbarDesktop />
          </div>
    </div>
  );
}
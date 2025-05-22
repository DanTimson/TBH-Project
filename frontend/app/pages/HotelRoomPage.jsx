import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Bed, Wifi, Tv, Utensils, Clock } from 'lucide-react';
import NavbarDesktop from "../components/ui/NavbarDesktop";
import Search from "../components/ui/Search";
import Button from "../components/ui/Button";
import { fetchHotelDetails } from '../services/hotelService';

const amenityIcons = {
  'Бесплатный Wi-Fi': <Wifi className="w-5 h-5" />,
  'Телевизор': <Tv className="w-5 h-5" />,
  'Ресторан': <Utensils className="w-5 h-5" />,
  'Кондиционер': <Bed className="w-5 h-5" />
};

export default function HotelRoomPage() {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHotelData = async () => {
      try {
        const data = await fetchHotelDetails(hotelId);
        setHotel(data);
        setRooms(data.rooms.map(room => ({
          ...room,
          badges: [
            { id: 1, text: "Бесплатная отмена" },
            { id: 2, text: "Оплата на месте" }
          ],
          amenities: room.amenities.map(name => ({
            icon: amenityIcons[name] || <Clock className="w-5 h-5" />,
            text: name
          }))
        })));
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      } finally {
        setLoading(false);
      }
    };

    loadHotelData();
  }, [hotelId]);
  
  if (loading) return (
    <div className="text-center py-8">
      <div className="animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent rounded-full"></div>
    </div>
  );
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

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
        {roomTypes.map((room) => (
          <div key={room.id} className="bg-white rounded-lg shadow-md p-6 mb-6">
            {/* Тип номера */}
            <div className="mb-4">
              <h1 className="text-xl font-bold mb-2">{room.type}</h1>
              <p className="text-gray-600">{room.area}, {room.beds}</p>
              
              {/* Удобства */}
              <div className="flex items-center mt-3 space-x-4">
                {room.amenities.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-1 text-gray-500">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Условия */}
            <div className="border-t border-gray-100 pt-4 mb-4">
              <p className="text-sm">{room.cancellation}</p>
              <p className="text-sm">{room.payment}</p>
              <p className="text-sm">{room.nights}, {room.guests}</p>
            </div>

            {/* Цена и кнопка */}
            <div className="flex justify-between items-center border-t border-gray-100 pt-4">
              <div>
                <p className="text-lg font-bold text-[#6D81D8]">{room.price}</p>
                <p className="text-sm text-gray-500">за весь период</p>
              </div>
              <Button
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
                text="Забронировать"
                onClick={() => console.log('Бронируем номер', room.id)}
              >
              </Button>
            </div>
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
};
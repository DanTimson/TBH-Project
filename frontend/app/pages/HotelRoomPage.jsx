import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Tv, Wifi, Search as SearchIcon } from 'lucide-react';
import NavbarDesktop from "../components/ui/NavbarDesktop";
import Button from "../components/ui/Button";

const HotelRoomPage = () => {
  const navigate = useNavigate();

  // Mock данные - в реальном приложении будет запрос к API
  const roomTypes = [
    {
      id: 1,
      type: "Стандартный номер",
      area: "20 м²",
      beds: "1 двуспальная кровать",
      amenities: [
        { icon: <Heart size={18} />, text: "Кондиционер" },
        { icon: <Tv size={18} />, text: "Телевизор" },
        { icon: <Wifi size={18} />, text: "Wi-Fi" }
      ],
      cancellation: "Бесплатная отмена",
      payment: "Оплата на месте",
      nights: "2 ночи",
      guests: "2 гостя",
      price: "12 500 ₽"
    },
    {
      id: 2,
      type: "Люкс",
      area: "35 м²",
      beds: "1 двуспальная кровать + диван",
      amenities: [
        { icon: <Heart size={18} />, text: "Кондиционер" },
        { icon: <Tv size={18} />, text: "Телевизор" },
        { icon: <Wifi size={18} />, text: "Wi-Fi" },
        { icon: <Heart size={18} />, text: "Мини-бар" }
      ],
      cancellation: "Бесплатная отмена",
      payment: "Оплата картой",
      nights: "2 ночи",
      guests: "2 гостя",
      price: "24 300 ₽"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-[120px]">
      {/* Шапка */}
      <header className="page-header p-6">
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

        <div className="flex h-16 items-center gap-2 px-3 py-1.5 relative self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8] mt-5">
          <div className="flex items-center gap-2 w-full">
            <input
              type="text"
              placeholder="Поиск"
              className="w-full px-2 py-1.5 border-none focus:outline-none bg-transparent italic"
            />
            <button
              type="button"
              className="bg-transparent hover:bg-[#8796e8] p-1 rounded"
            >
              <SearchIcon className="relative w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative w-[72px] h-[72px] bg-base-5 rounded-full overflow-hidden">
          <div className="inline-flex flex-col items-center gap-[3px] relative top-[18px] left-3">
            <div className="w-6 h-6 rounded-xl bg-base-30" />
            <div className="w-12 h-12 rounded-3xl bg-base-30" />
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
                onClick={() => console.log('Бронируем номер', room.id)}
              >
                Забронировать
              </Button>
            </div>
          </div>
        ))}
      </main>

      {/* Навбар */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <NavbarDesktop />
      </div>
    </div>
  );
};

export default HotelRoomPage;
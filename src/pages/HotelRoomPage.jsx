import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NavbarDesktop from "../components/ui/NavbarDesktop";

const HotelDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // В реальном приложении здесь будет запрос к API для получения данных отеля по ID
  const hotel = {
    id: 1,
    name: "Гранд Отель",
    // ... остальные данные отеля
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-[100px]">
      <div className="p-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-[#6D81D8] mb-4"
        >
          <ArrowLeft className="mr-2" /> Назад
        </button>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">{hotel.name}</h1>
          {/* Добавьте остальную информацию об отеле */}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <NavbarDesktop />
      </div>
    </div>
  );
};

export default HotelDetailsPage;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Train, ChevronLeft} from 'lucide-react';
import NavbarDesktop from "../components/ui/NavbarDesktop";
import Button from "../components/ui/Button";
import Search from "../components/ui/Search";
import TrainCard from "../components/ui/TrainCard/TrainCard";

const TrainDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [train, setTrain] = useState(null);

  // Mock data - в реальном приложении это будет запрос к API
  useEffect(() => {
    const mockTrain = {
      id: 1,
      trainNumber: "025А",
      class: "00A",
      carrier: "РЖД",
      wagons: ["01", "02", "03", "04", "05", "06"],
      seats: [
        { number: "01", class: "Плацкарт", price: "₽5,200" },
        { number: "02", class: "Плацкарт", price: "₽5,200" },
        { number: "03", class: "Плацкарт", price: "₽5,200" },
        { number: "04", class: "Плацкарт", price: "₽5,200" },
        { number: "05", class: "Плацкарт", price: "₽5,200" },
        { number: "06", class: "Плацкарт", price: "₽5,200" }
      ],
      seatTypes: [
        "Боковое верхнее",
        "боковое нижнее",
        "Нижнее купе",
        "Верхнее купе",
        "Нижнее купе"
      ]
    };
    setTrain(mockTrain);
  }, [id]);

  if (!train) return <div className="p-6">Загрузка...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка */}
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

        <div className="relative w-[72px] h-[72px] bg-base-5 rounded-full overflow-hidden">
          <div className="inline-flex flex-col items-center gap-[3px] relative top-[18px] left-3">
            <div className="w-6 h-6 rounded-xl bg-base-30" />
            <div className="w-12 h-12 rounded-3xl bg-base-30" />
          </div>
        </div>
      </header>
      
      <main className="pt-[180px] pb-[120px] px-6">
        <div className="text-center mb-6">
            <h1 className="text-lg font-bold">Вагон {train.wagons[0]} • Класс вагона {train.class}</h1>
            <p className="text-sm text-gray-500">{train.carrier}</p>
          </div>
        {/* Список вагонов */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h2 className="font-semibold mb-3">Выберите вагон</h2>
          <div className="space-y-2">
            {train.wagons.map((wagon, index) => (
              <button
                key={index}
                className="flex justify-between items-center w-full p-3 border-b border-gray-100 last:border-0 text-left hover:bg-gray-50"
                onClick={() => console.log('Выбран вагон:', wagon)}
              >
                <span className="font-medium">{wagon}</span>
                <ChevronRight size={18} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Список мест */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h2 className="font-semibold mb-3">Место {train.seats[0].number} [{train.seats[0].class}]</h2>
          <p className="text-lg font-bold text-[#6D81D8] mb-4">{train.seats[0].price}</p>
          
          <div className="space-y-3">
            {train.seats.map((seat, index) => (
              <button
                key={index}
                className="flex justify-between items-center w-full p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50"
                onClick={() => console.log('Выбрано место:', seat)}
              >
                <p className="font-medium">Место {seat.number} [{seat.class}]</p>
                <p className="text-[#6D81D8] font-medium">{seat.price}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Виды мест */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <h2 className="font-semibold mb-3">Вид места</h2>
          <div className="space-y-3">
            {train.seatTypes.map((type, index) => (
              <button
                key={index}
                className="flex items-center w-full p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50"
                onClick={() => console.log('Тип места:', type)}
              >
                <div className="w-4 h-4 rounded-full border border-gray-300 mr-3"></div>
                <p>{type}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Кнопка продолжения */}
        <button
          className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          onClick={() => navigate('/hotel')}
          text="Продолжить"
        >
          <div className="flex items-center justify-center">
            Продолжить
            <ChevronRight className="ml-2" size={18} />
          </div>
        </button>
       
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

export default TrainDetailsPage;
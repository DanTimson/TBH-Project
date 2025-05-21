import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Train, ChevronLeft, ChevronDown, Clock, ArrowRight, User, ArrowUpDown } from 'lucide-react';
import NavbarDesktop from "../components/ui/NavbarDesktop";
import Button from "../components/ui/Button";
import TrainCard from "../components/ui/TrainCard/TrainCard";
import { Search as SearchIcon} from "lucide-react";
import Search from "../components/ui/Search";
import { searchTrains } from '../services/searchService'; // Create this service

// Пример данных поездов
const trainsExample = [
  {
    id: 1,
    trainTags: ["Фирменный", "Скоростной"],
    trainNumber: "025А Москва-Санкт-Петербург",
    carrier: "РЖД",
    departurePoint: "Москва (Курский вокзал)",
    arrivalPoint: "Санкт-Петербург (Главный)",
    route: "Москва → Тверь → Санкт-Петербург",
    departureTime: "23:55",
    arrivalTime: "06:55",
    duration: "07 ч 00 мин",
    departureStation: "Курский вокзал",
    arrivalStation: "Главный вокзал",
    departureCity: "Москва",
    arrivalCity: "Санкт-Петербург",
    cabinClasses: [
      { type: "Люкс", seats: "4", price: "₽15,000" },
      { type: "Купе", seats: "8", price: "₽10,000" },
      { type: "Плацкарт", seats: "12", price: "₽7,500" }
    ]
  },
  {
    id: 2,
    trainTags: ["Двухэтажный"],
    trainNumber: "104Й Москва-Сочи",
    carrier: "РЖД Премиум",
    departurePoint: "Москва (Павелецкий вокзал)",
    arrivalPoint: "Сочи (Железнодорожный вокзал)",
    route: "Москва → Рязань → Сочи",
    departureTime: "22:30",
    arrivalTime: "12:45",
    duration: "14 ч 15 мин",
    departureStation: "Павелецкий вокзал",
    arrivalStation: "Сочи ЖД вокзал",
    departureCity: "Москва",
    arrivalCity: "Сочи",
    cabinClasses: [
      { type: "СВ", seats: "6", price: "₽18,000" },
      { type: "Купе", seats: "10", price: "₽12,000" }
    ]
  },
  {
    id: 3,
    trainTags: ["Скорый", "Ночной"],
    trainNumber: "015А Москва-Казань",
    carrier: "РЖД",
    departurePoint: "Москва (Казанский вокзал)",
    arrivalPoint: "Казань (Центральный)",
    route: "Москва → Владимир → Казань",
    departureTime: "21:15",
    arrivalTime: "06:30",
    duration: "09 ч 15 мин",
    departureStation: "Казанский вокзал",
    arrivalStation: "Центральный вокзал",
    departureCity: "Москва",
    arrivalCity: "Казань",
    cabinClasses: [
      { type: "Люкс", seats: "4", price: "₽14,000" },
      { type: "Купе", seats: "8", price: "₽9,000" },
      { type: "Плацкарт", seats: "12", price: "₽6,000" }
    ]
  }
];


const TrainSearchPage = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('price');  
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const searchParams = new URLSearchParams(location.search);
  const departureCity = searchParams.get('from');
  const arrivalCity = searchParams.get('to');
  const departureDate = searchParams.get('date');

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        setLoading(true);
        const data = await searchTrains(
          departureCity || 'Москва', // Fallback for demo
          arrivalCity || 'Санкт-Петербург', 
          departureDate ? new Date(departureDate) : new Date()
        );
        setTrains(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrains();
  }, [departureCity, arrivalCity, departureDate]);


  const handleTrainCardClick = (trainId) => {
    navigate(`/train1/${trainId}`); // Переход на страницу деталей с ID поезда
  };

  // Format duration from minutes to "Xч Yм"
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}ч ${remainingMinutes.toString().padStart(2, '0')}м`;
  };

  // Format price in RUB
  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 pb-[110px]">
      {/* Header */}
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

        <div className="relative w-[72px] h-[72px] bg-base-5 rounded-full overflow-hidden">
          <div className="inline-flex flex-col items-center gap-[3px] relative top-[18px] left-3">
            <div className="w-6 h-6 rounded-xl bg-base-30" />
            <div className="w-12 h-12 rounded-3xl bg-base-30" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-[110px] overflow-y-auto w-full bg-base-5">
        <div className="text-center py-8 text-gray-600">
          <div className="animate-spin inline-block w-6 h-6 border-2 border-current border-t-transparent rounded-full mb-2" />
          <p>Ищем подходящие поезда...</p>
        </div>
        
      </main>

      <div className="bottom-gradient" />

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[110px]">
        <NavbarDesktop />
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gray-50 pb-[110px]">
      {/* Header */}
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

        <div className="relative w-[72px] h-[72px] bg-base-5 rounded-full overflow-hidden">
          <div className="inline-flex flex-col items-center gap-[3px] relative top-[18px] left-3">
            <div className="w-6 h-6 rounded-xl bg-base-30" />
            <div className="w-12 h-12 rounded-3xl bg-base-30" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-[110px] overflow-y-auto w-full bg-base-5">
        <div className="text-center py-8 text-red-600">
          <p>Ошибка загрузки данных: {error}</p>
          <Button 
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Попробовать снова
          </Button>
        </div>

      </main>

        {/* Gradient Overlay */}
        <div className="bottom-gradient" />

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[110px]">
        <NavbarDesktop />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-[110px]">
      {/* Header */}
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

        <div className="relative w-[72px] h-[72px] bg-base-5 rounded-full overflow-hidden">
          <div className="inline-flex flex-col items-center gap-[3px] relative top-[18px] left-3">
            <div className="w-6 h-6 rounded-xl bg-base-30" />
            <div className="w-12 h-12 rounded-3xl bg-base-30" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-[110px] overflow-y-auto w-full bg-base-5">
      
        {/* Фильтры и сортировка */}
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-[#6D81D8] text-white rounded-lg flex items-center">
              <span>Фильтры</span>
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
            
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-8 py-2 border rounded-lg bg-white"
              >
                <option value="price">По цене</option>
                <option value="time">По времени</option>
                <option value="duration">По длительности</option>
              </select>
              <ArrowUpDown className="w-4 h-4 absolute right-3 top-2.5 text-gray-400" />
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            Найдено {trains.length} поездов
          </div>
        </div>

        {/* Список поездов */}
        <div className="max-w-6xl mx-auto space-y-6">
          {trains.map(train => (
            <div 
              key={train.id}
              onClick={() => handleTrainCardClick(train.id)} // Добавляем обработчик клика
              className="cursor-pointer hover:shadow-lg transition-shadow" // Добавляем стили для интерактивности
            >
              <TrainCard
                key={train.id}
                trainTags={train.train_tags}
                trainNumber={train.train_number}
                carrier={train.carrier}
                departurePoint={train.departure_station.name}
                arrivalPoint={train.arrival_station.name}
                route={train.route}
                departureTime={new Date(train.departure_time)
                  .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                arrivalTime={new Date(
                  new Date(train.departure_time).getTime() + train.duration_minutes * 60000
                ).toLocaleTimeString('ru-RU', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
                duration={`${Math.floor(train.duration_minutes/60)}ч ${train.duration_minutes%60}м`}
                departureStation={train.departure_station.name}
                arrivalStation={train.arrival_station.name}
                departureCity={train.departure_city}
                arrivalCity={train.arrival_city}
                cabinClasses={train.classes.map(c => ({
                  type: c.name,
                  seats: c.available_seats,
                  price: `₽${c.price.toLocaleString('ru-RU')}`
                }))}
              />
            </div>
          ))}
          
        </div>

        
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

export default TrainSearchPage;
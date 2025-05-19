import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Train, ChevronLeft, ChevronDown, Clock, ArrowRight, User, ArrowUpDown } from 'lucide-react';
import NavbarDesktop from "../components/ui/NavbarDesktop";
import Button from "../components/ui/Button";
import TrainCard from "../components/ui/TrainCard/TrainCard";
import { Search as SearchIcon} from "lucide-react";
import Search from "../components/ui/Search";

const TrainSearchPage = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('price');
  
  // Пример данных поездов
const trains = [
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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Шапка */}
      <header className="page-header">
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
      
      <search className="flex flex-col items-center gap-6 px-32 py-8 w-full grow bg-gray-50 overflow-y-auto">
        {/* Search Section */}
          <Search />
      </search>
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
          <TrainCard
            key={train.id}
            trainTags={train.trainTags}
            trainNumber={train.trainNumber}
            carrier={train.carrier}
            departurePoint={train.departurePoint}
            arrivalPoint={train.arrivalPoint}
            route={train.route}
            departureTime={train.departureTime}
            arrivalTime={train.arrivalTime}
            duration={train.duration}
            departureStation={train.departureStation}
            arrivalStation={train.arrivalStation}
            departureCity={train.departureCity}
            arrivalCity={train.arrivalCity}
            cabinClasses={train.cabinClasses}
          />
        ))}
      </div>
      
      <NavbarDesktop />
    </div>
  );
};

export default TrainSearchPage;
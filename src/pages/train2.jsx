import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Train, ChevronLeft, ChevronDown, Clock, ArrowRight, User, ArrowUpDown } from 'lucide-react';
import NavbarDesktop from "../components/ui/NavbarDesktop";

const TrainSearchPage = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('price');
  
  // Пример данных поездов
  const trains = [
    {
      id: 1,
      name: 'Сапсан №123',
      carrier: 'РЖД',
      from: 'Москва (Курский вокзал)',
      to: 'Санкт-Петербург (Главный)',
      departure: '08:00',
      arrival: '12:40',
      duration: '4ч 40м',
      carClass: 'Купе',
      seats: 24,
      price: 3500,
      isDoubleDecker: true,
      isHighSpeed: true
    },
    // ... другие поезда
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Шапка */}
      <header className="max-w-6xl mx-auto flex items-center justify-between mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-[#6D81D8] hover:text-[#5A6DC2] transition-colors"
        >
          <ChevronLeft className="w-6 h-6 mr-2" />
          Назад
        </button>
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <Train className="w-6 h-6 mr-2 text-[#6D81D8]" />
          Поиск поездов
        </h1>
        <div className="w-6"></div>
      </header>

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
          <div key={train.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Шапка карточки */}
            <div className="p-4 border-b flex justify-between items-center">
              <div>
                <h2 className="font-bold text-lg flex items-center">
                  {train.name}
                  {train.isHighSpeed && (
                    <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      Скоростной
                    </span>
                  )}
                  {train.isDoubleDecker && (
                    <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                      Двухэтажный
                    </span>
                  )}
                </h2>
                <p className="text-sm text-gray-500">
                  {train.carrier} • {train.from} → {train.to}
                </p>
              </div>
              <div className="text-lg font-semibold">
                от {train.price.toLocaleString()} ₽
              </div>
            </div>
            
            {/* Детали рейса */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gray-400 mr-2" />
                <div>
                  <p className="font-medium">{train.departure}</p>
                  <p className="text-sm text-gray-500">{train.from}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center text-sm text-gray-500">
                <p>{train.duration}</p>
                <ArrowRight className="w-4 h-4 my-1" />
              </div>
              
              <div className="flex items-center">
                <div>
                  <p className="font-medium">{train.arrival}</p>
                  <p className="text-sm text-gray-500">{train.to}</p>
                </div>
              </div>
            </div>
            
            {/* Класс и места */}
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              <div className="flex items-center">
                <User className="w-5 h-5 text-gray-400 mr-2" />
                <span className="font-medium">{train.carClass}</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-gray-500">Осталось {train.seats} мест</span>
              </div>
              
              <button 
                onClick={() => navigate(`/train/${train.id}`)}
                className="px-6 py-2 bg-[#6D81D8] hover:bg-[#5A6DC2] text-white rounded-lg transition-colors"
              >
                Выбрать места
              </button>
            </div>
          </div>
        ))}
      </div>
      <NavbarDesktop />
    </div>
  );
};

export default TrainSearchPage;
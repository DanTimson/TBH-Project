import React from 'react';
import { Link } from 'react-router-dom';
//import NavbarDesktop from "../../components/ui/NavbarDesktop";

export default function TrainPage() {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Поезд туда</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Москва → Санкт-Петербург</h2>
        <ul className="space-y-2 mb-6">
          <li>🚆 Номер поезда: 012А</li>
          <li>⏱ Время в пути: 4 ч 10 мин</li>
          <li>🕑 Отправление: 08:00</li>
          <li>🛌 Вагон: 5, место: 12 (купе)</li>
        </ul>
        <p className="font-bold text-lg">Цена: 2 500 ₽</p>
      </div>
      <Link 
        to="/" 
        className="mt-6 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        ← На главную
      </Link>
      
    </div>
  );
}
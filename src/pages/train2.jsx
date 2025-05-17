import React from 'react';
import { Link } from 'react-router-dom';

export default function TrainPage2() {
  return (
    <div className="min-h-screen bg-purple-50 p-8">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Поезд обратно</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Санкт-Петербург → Москва</h2>
        <ul className="space-y-2 mb-6">
          <li>🚆 Номер поезда: 013А</li>
          <li>⏱ Время в пути: 4 ч 30 мин</li>
          <li>🕑 Отправление: 18:00</li>
          <li>🛌 Вагон: 3, место: 7 (плацкарт)</li>
        </ul>
        <p className="font-bold text-lg">Цена: 1 800 ₽</p>
      </div>
      <Link 
        to="/" 
        className="mt-6 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        ← На главную
      </Link>
    </div>
  );
}
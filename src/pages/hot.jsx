import React from 'react';
import { Link } from 'react-router-dom';

export default function HotelPage() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Страница отелей</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Отель "Премиум"</h2>
        <ul className="space-y-2 mb-6">
          <li>📍 Адрес: ул. Центральная, 15</li>
          <li>🚶 500 м до центра</li>
          <li>🛏️ Люкс с видом на море</li>
          <li>🍳 Завтрак включён</li>
        </ul>
        <div className="bg-blue-100 p-4 rounded-md">
          <p className="font-bold text-lg">Цена: 5 000 ₽ / ночь</p>
          <p>2 ночи, 2 гостя</p>
        </div>
      </div>
      <Link 
        to="/" 
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        ← На главную
      </Link>
    </div>
  );
}
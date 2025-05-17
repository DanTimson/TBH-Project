import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, ChevronLeft, CreditCard, Package } from 'lucide-react';

const CartPage = () => {
  const navigate = useNavigate();
  
  // Пример данных корзины
  const cartItems = [
    { id: 1, name: 'Отель "Премиум"', price: 15000, nights: 3 },
    { id: 2, name: 'Билет на поезд Москва-СПб', price: 2500 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

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
          <ShoppingCart className="w-6 h-6 mr-2 text-[#6D81D8]" />
          Корзина
        </h1>
        <div className="w-6"></div> {/* Для выравнивания */}
      </header>

      {/* Основное содержимое */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Список товаров */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Ваши бронирования ({cartItems.length})</h2>
          
          {cartItems.map(item => (
            <div key={item.id} className="border-b border-gray-200 py-4 last:border-0">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  {item.nights && (
                    <p className="text-sm text-gray-500">{item.nights} ночи</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-medium">{item.price.toLocaleString()} ₽</p>
                  <button className="text-sm text-red-500 hover:text-red-700">
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}

          {cartItems.length === 0 && (
            <div className="text-center py-12">
              <Package className="mx-auto w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-500">Ваша корзина пуста</p>
              <Link 
                to="/hotel" 
                className="mt-4 inline-block text-[#6D81D8] hover:text-[#5A6DC2]"
              >
                Найти отели
              </Link>
            </div>
          )}
        </div>

        {/* Панель итого */}
        <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-6">
          <h2 className="text-xl font-semibold mb-4">Итого</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Промежуточный итог</span>
              <span>{subtotal.toLocaleString()} ₽</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Скидка</span>
              <span className="text-green-500">-0 ₽</span>
            </div>
            <div className="border-t border-gray-200 pt-3 flex justify-between font-medium">
              <span>Общая сумма</span>
              <span className="text-lg">{(subtotal).toLocaleString()} ₽</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/checkout')}
            className="w-full bg-[#6D81D8] hover:bg-[#5A6DC2] text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            disabled={cartItems.length === 0}
          >
            <CreditCard className="w-5 h-5 mr-2" />
            Перейти к оплате
          </button>

          <p className="mt-4 text-sm text-gray-500 text-center">
            Бесплатная отмена в течение 24 часов
          </p>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
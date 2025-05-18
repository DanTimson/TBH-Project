import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, CreditCard, Package, Search as SearchIcon } from 'lucide-react';
import NavbarDesktop from "../components/ui/NavbarDesktop";
import Button from "../components/ui/Button";

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
        <header className="flex w-full h-[140px] items-center justify-center gap-5 p-5 relative bg-base-0">
            <Button 
                variant="ghost"
                className="w-[52px] h-[52px] p-0"
                onClick={() => {
                console.log('Navigating back'); 
                navigate(-1);
                }}
                text="Назад"
                > 
                <ChevronLeft className="w-8 h-8 text-[#6D81D8]" />
            </Button>

            <div className="flex flex-col items-start gap-1 relative flex-1 grow">
              <div className="flex h-16 items-center gap-2 px-3 py-1.5 relative self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8]">
                <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
                  <span className="relative w-fit mt-[-1.00px] font-body-m-italic text-base-40 italic">
                    Поиск
                  </span>
                </div>
                <SearchIcon className="relative w-6 h-6" />
              </div>
            </div>

            <div className="relative w-[72px] h-[72px] bg-base-5 rounded-full overflow-hidden">
              <div className="inline-flex flex-col items-center gap-[3px] relative top-[18px] left-3">
                <div className="w-6 h-6 rounded-xl bg-base-30" />
                <div className="w-12 h-12 rounded-3xl bg-base-30" />
              </div>
            </div>
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
      <NavbarDesktop />
    </div>
  );
};

export default CartPage;
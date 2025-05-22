import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, CreditCard, Package, Search as SearchIcon, RotateCcw } from 'lucide-react';
import NavbarDesktop from "../components/ui/NavbarDesktop";
import Button from "../components/ui/Button";
import Search from "../components/ui/Search";
import avatar from '../assets/14.jpg'

const CartPage = () => {
  const navigate = useNavigate();

  // Состояние для хранения товаров в корзине
  const [cartItems, setCartItems] = React.useState([
    { id: 1, name: 'Отель "Премиум"', price: 15000, nights: 3 },
    { id: 2, name: 'Билет на поезд Москва-СПб', price: 2500 },
  ]);

  // Для хранения удалённого элемента и таймера
  const [deletedItem, setDeletedItem] = React.useState(null);
  const [showUndo, setShowUndo] = React.useState(false);

  // Подсчёт промежуточной суммы
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Функция удаления товара
  const handleDelete = (id) => {
    const deleted = cartItems.find(item => item.id === id);
    setCartItems(cartItems.filter(item => item.id !== id));
    setDeletedItem(deleted);
    setShowUndo(true);

    // Автоматически очищаем после 5 секунд
    setTimeout(() => {
      setShowUndo(false);
      setDeletedItem(null);
    }, 5000);
  };

  // Функция отмены удаления
  const handleUndo = () => {
    if (deletedItem) {
      setCartItems(prev => [...prev, deletedItem]);
      setDeletedItem(null);
      setShowUndo(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-[110px]">
      {/* Шапка */}
      <header className="flex w-full items-center justify-center gap-5 p-5 relative bg-base-0">
        <Button 
          variant="ghost"
          className="w-[52px] h-[52px] p-0"
          onClick={() => {
            console.log('Navigating back'); 
            navigate(-1);
          }}
          text="Назад"
        />

        <div className="flex items-center gap-2 relative self-stretch w-full bg-base-0 rounded mt-5">
          <search className="flex flex-col items-center gap-6 w-full grow bg-base-0">
            {/* Search Section */}
            <Search />
          </search>
        </div>

        <div className="relative w-[72px] h-[72px] bg-base-5 rounded-full overflow-hidden">
          <img
            src={avatar}
            alt="Аватар пользователя"
            className="w-full h-full rounded-full object-cover border-2 border-base-5"
          />
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6">
        {/* Список товаров */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Ваши бронирования ({cartItems.length})</h2>

          {cartItems.length > 0 ? (
            cartItems.map(item => (
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
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-sm text-red-500 hover:text-red-700"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
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

          {/* Сообщение об удалении с возможностью отмены */}
          {showUndo && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4 rounded-md shadow-sm flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-sm text-yellow-800">Элемент удален</span>
              </div>
              <button
                onClick={handleUndo}
                className="text-sm text-[#6D81D8] hover:text-[#5A6DC2] flex items-center"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Отменить
              </button>
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

      {/* Gradient Overlay */}
      <div className="bottom-gradient" />
      
      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[110px]">
        <NavbarDesktop />
      </div>
    </div>
  );
};

export default CartPage;
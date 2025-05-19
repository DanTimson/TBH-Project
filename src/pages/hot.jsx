import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDesktop from "../components/ui/NavbarDesktop";
import { useNavigate } from 'react-router-dom';
import Button from "../components/ui/Button";
import { ChevronLeft, Search as SearchIcon} from "lucide-react";
import Search from "../components/ui/Search";

export default function HotelPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-8">
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

      <search className="flex flex-col items-center gap-6 px-32 py-8 w-full grow bg-white overflow-y-auto">
        {/* Search Section */}
          <Search />
      </search>

      <main className="mt-8">
        {/* Карточка отеля */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-4">Отель "Премиум"</h2>
              <p className="text-gray-500">ул. Центральная, 15</p>
              <p className="text-gray-500">500 м до центра</p>
            </div>
            <div>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                Выбрать номер
              </button>
            </div>
          </div>
          <div className="mt-4">
            <p>Бесплатная отмена</p>
            <p>Оплата на месте</p>
          </div>
          <div className="mt-4 flex justify-between">
            <p className="font-bold text-lg">Цена: 5 000 ₽ / ночь</p>
            <p>2 ночи, 2 гостя</p>
          </div>
        </div>

        {/* Другие карточки */}
        {/* ... */}
      </main>
      <NavbarDesktop />
    </div>
  );
}
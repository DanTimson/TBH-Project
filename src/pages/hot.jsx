import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDesktop from "../components/ui/NavbarDesktop";
import { useNavigate } from 'react-router-dom';
import Button from "../components/ui/Button";
import { ChevronLeft, Search as SearchIcon} from "lucide-react";

export default function HotelPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 p-8">
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
      <NavbarDesktop />
    </div>
  );
}
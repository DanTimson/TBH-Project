import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDesktop from "../components/ui/NavbarDesktop";
import { useNavigate } from 'react-router-dom';
import Button from "../components/ui/Button";
import HotelCard from "../components/ui/HotelCard/HotelCard";
import { ChevronLeft, Search as SearchIcon} from "lucide-react";
import Search from "../components/ui/Search";

export default function HotelPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="flex w-full h-[140px] bg-gray-50 items-center justify-center gap-5 p-5 relative bg-base-0">
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

      <main className="mt-8">
        {/* Карточка отеля */}
        <HotelCard>          
        </HotelCard>

        {/* Другие карточки */}
        {/* ... */}
      </main>
      <NavbarDesktop />
    </div>
  );
}
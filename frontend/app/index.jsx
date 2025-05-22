import React from "react";
import Button from "./components/ui/Button";
import avatar from './assets/14.jpg'
import Search from "./components/ui/Search";
import NewsCard from "./components/ui/NewsCard/NewsCard";
import NewsCardContent from "./components/ui/NewsCard/NewsCardContent";
import NavbarDesktop from "./components/ui/NavbarDesktop";
import { useNavigate } from 'react-router-dom';

export default function InputPageExample() {
  const navigate = useNavigate();
  const cardData = [
    { id: 1, card_id: 1, text: "Деловые проездные"},
    { id: 2, card_id: 1, text: "Подарочные карты" },
    { id: 3, card_id: 1, text: "Скидочные карты" },
    { id: 4, card_id: 2, text: "Льгота «Скидка детям – 50%»" },
    { id: 5, card_id: 2, text: "«Путешествуй с детьми»" },
    { id: 6, card_id: 2, text: "«Для пассажиров 60+»"},
    { id: 7, card_id: 2, text: "«В День рождения лучше поездом!»" },
    { id: 8, card_id: 2, text: "«Клуб путешественников»" },
  ];

  const cardHeaders = [
    { id: 1, title: "Проездные и подарочные карты" }, 
    { id: 2, title: "Акции и скидки" },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative bg-red-5-duplicate">
      {/* Header */}
      <header className="flex w-full items-center justify-center gap-5 p-5 relative bg-base-0">
        <div className="w-[72px] h-[72px]"></div>

        <div className="flex items-center gap-2 relative self-stretch w-full bg-base-0 rounded mt-5">
        <search className="flex flex-col items-center gap-6 w-full grow bg-base-0">
          {/* Search Section */}
            <Search />
        </search>
        </div>

        <div className="relative w-[72px] h-[72px] bg-base-5 rounded-full overflow-hidden cursor-pointer"
         onClick={() => navigate('/user-profile')}
        >
          <img
            src={avatar}
            alt="Аватар пользователя"
            className="w-full h-full rounded-full object-cover border-2 border-base-5"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-[110px] overflow-y-auto w-full bg-base-5">
        {/* News Card Grid */}
        <div className="flex flex-col w-[1178px] mx-auto items-start gap-6 py-6">
          {[...Array(Math.ceil(cardHeaders.length / 2))].map((_, rowIndex) => (
            <div key={rowIndex} className="flex justify-between w-full">
              {/* Create 2 cards per row */}
              {[0, 1].map((colIndex) => {
                const cardHeaderIndex = rowIndex * 2 + colIndex;
                if (cardHeaderIndex >= cardHeaders.length) return null;
                
                const header = cardHeaders[cardHeaderIndex];
                const filteredItems = cardData
                  .filter(item => item.card_id === header.id)
                  .map(item => item.text);
                
                return (
                  <NewsCard 
                    key={header.id} 
                    headerText={header.title}
                    newsItems={filteredItems}
                    itemsCount={filteredItems.length}
                  />
                );
              })}
            </div>
          ))}
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
}
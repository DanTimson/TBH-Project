import React from "react";
import Button from "./components/ui/Button";
import { ChevronLeft, Search as SearchIcon, Calendar, ChevronDown } from "lucide-react";

import Search from "./components/ui/Search";
import NewsCard from "./components/ui/NewsCard/NewsCard";
import NewsCardContent from "./components/ui/NewsCard/NewsCardContent";
import NavbarDesktop from "./components/ui/NavbarDesktop";
import { useNavigate } from 'react-router-dom';
import RadioBox from "./components/ui/RadioBox";
import CheckBox from "./components/ui/CheckBox";
import TextField from "./components/ui/TextField";

export default function InputPageExample() {
  const navigate = useNavigate();
  const cardData = [
    { id: 1, text: "Новость 1: Lorem ipsum dolor sit amet" },
    { id: 2, text: "Новость 2: Consectetur adipiscing elit" },
    { id: 3, text: "Новость 3: Sed do eiusmod tempor" },
    { id: 4, text: "Новость 4: Incididunt ut labore et dolore" },
    { id: 5, text: "Новость 5: Magna aliqua ut enim ad minim" },
    { id: 6, text: "Новость 6: Quis nostrud exercitation" },
    { id: 7, text: "Новость 7: Ullamco laboris nisi ut" },
    { id: 8, text: "Новость 8: Aliquip ex ea commodo" },
  ];

  const cardHeaders = [
    "Latest Updates", 
    "Breaking News", 
    "Trending Stories", 
    "Editor's Picks",
    "Latest Updates", 
    "Breaking News", 
    "Trending Stories", 
    "Editor's Picks"
  ];


  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative bg-red-5-duplicate">
      {/* Header */}
      <header className="flex w-full h-[152px] items-center justify-center gap-5 p-5 relative bg-base-0">
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

        <div className="flex items-center gap-2 px-3 py-1.5 relative self-stretch w-full bg-base-0 rounded mt-5">
        <search className="flex flex-col items-center gap-6 w-full grow bg-base-5">
          {/* Search Section */}
            <Search />
        </search>
        </div>

        <div className="relative w-[72px] h-[72px] bg-base-5 rounded-full overflow-hidden">
          <div className="inline-flex flex-col items-center gap-[3px] relative top-[18px] left-3">
            <div className="w-6 h-6 rounded-xl bg-base-30" />
            <div className="w-12 h-12 rounded-3xl bg-base-30" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-[110px] overflow-y-auto w-full bg-base-5">
        


        {/* News Card Grid */}
        <div className="flex flex-col w-[1178px] mx-auto items-start gap-6 py-6">
          {[...Array(Math.ceil(cardHeaders.length / 2))].map((_, rowIndex) => (
            <div key={rowIndex} className="flex justify-between w-full">
              {/* Create 2 cards, each with all news items */}
              {[1, 2].map((cardIndex) => (
                <NewsCard 
                  key={cardIndex} 
                  headerText={cardHeaders[rowIndex * 2 + cardIndex-1]}
                  newsItems={cardData.map(item => item.text)}
                  itemsCount={6} // Show all 6 items
                />
              ))}
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="bottom-gradient" />
      </main>



      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[110px]">
        <NavbarDesktop />
      </div>
    </div>
  );
}

import React from "react";
import Button from "./components/ui/Button";
import { ChevronLeft, Search as SearchIcon, Calendar, ChevronDown } from "lucide-react";

import Search from "./components/ui/Search";
import NewsCard from "./components/ui/NewsCard/NewsCard";
import NewsCardContent from "./components/ui/NewsCard/NewsCardContent";
import NavbarDesktop from "./components/ui/NavbarDesktop";
import NavbarCell from "./components/ui/NavbarCell";

export default function InputPageExample() {
  const cardData = [
    { id: 1, text: "Новость 1: Lorem ipsum dolor sit amet" },
    { id: 2, text: "Новость 2: Consectetur adipiscing elit" },
    { id: 3, text: "Новость 3: Sed do eiusmod tempor" },
    { id: 4, text: "Новость 4: Incididunt ut labore et dolore" },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative bg-red-5-duplicate">
      {/* Header */}
      <header className="flex w-full h-[140px] items-center justify-center gap-5 p-5 relative bg-base-0">
        <Button variant="ghost" className="w-[52px] h-[52px] p-0">
          <ChevronLeft className="w-8 h-8" />
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

      {/* Main Content */}
      <main className="flex flex-col items-center gap-6 px-32 py-[92px] flex-1 w-full grow bg-base-5 overflow-y-scroll">
        {/* Search Section */}
        <Search />

        {/* News Card Grid */}
        <div className="flex flex-col w-[1178px] items-start gap-6">
          {[0, 2].map((start) => (
            <div key={start} className="flex justify-between w-full">
              {cardData.slice(start, start + 2).map((card) => (
                <NewsCard key={card.id}>
                  <NewsCardContent text={card.text} />
                </NewsCard>
              ))}
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="bottom-gradient" />
      </main>



      {/* Footer Navigation */}
      <NavbarDesktop />
    </div>
  );
}

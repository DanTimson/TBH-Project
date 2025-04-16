import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Bed,
  Calendar,
  ChevronDown,
  ChevronLeft,
  Search as SearchIcon,
  ShoppingCart,
  Train,
} from "lucide-react";
import React from "react";

export default function InputPageExample() {
  // Data for location inputs
  const locations = {
    origin: "Москва",
    destination: "Нижний Новгород",
  };

  // Data for date inputs
  const dates = {
    departure: "01 апр, вт",
    return: "02 апр, ср",
  };

  // Data for content cards (empty placeholders in this case)
  const contentCards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  // Data for navigation items
  const navigationItems = [
    { icon: Calendar, active: true },
    { icon: Train, active: false },
    { icon: Bed, active: false },
    { icon: Train, active: false },
    { icon: ShoppingCart, active: false },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative bg-red-5-duplicate">
      {/* Header */}
      <header className="flex w-full max-w-[1440px] h-[140px] items-center justify-center gap-5 p-5 relative bg-base-0">
        <Button variant="ghost" className="w-[52px] h-[52px] p-0 rounded">
          <ChevronLeft className="w-8 h-8" />
        </Button>

        <div className="flex flex-col items-start gap-1 relative flex-1 grow">
          <div className="flex h-16 items-center gap-2 px-3 py-1.5 relative self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8]">
            <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
              <Input
                className="border-0 p-0 h-auto font-body-m-italic text-base-40 placeholder:text-base-40 focus-visible:ring-0"
                placeholder="Поиск"
              />
            </div>
            <SearchIcon className="w-6 h-6" />
          </div>
        </div>

        <div className="relative w-[72px] h-[72px] bg-base-5 rounded-[100px] overflow-hidden">
          <div className="inline-flex flex-col items-center gap-[3px] relative top-[18px] left-3">
            <div className="w-6 h-6 rounded-xl relative bg-base-30" />
            <div className="w-12 h-12 rounded-3xl relative bg-base-30" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-6 px-32 py-[92px] relative flex-1 self-stretch w-full grow bg-base-5 overflow-hidden overflow-y-scroll">
        {/* Search Form */}
        <div className="flex items-center justify-center gap-3 relative self-stretch w-full">
          <div className="inline-flex items-center justify-center">
            <div className="inline-flex items-center justify-center">
              {/* Origin Input */}
              <div className="flex-col w-[300px] items-center justify-center gap-1 p-0.5">
                <div className="flex-col items-start gap-1 self-stretch w-full">
                  <div className="h-[50px] flex items-center gap-2 px-3 py-1.5 self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8]">
                    <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
                      <span className="w-fit mt-[-1.00px] font-body-s-italic text-base-40">
                        {locations.origin}
                      </span>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Destination Input */}
              <div className="w-[300px] items-center gap-3 p-0.5 flex relative">
                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <div className="h-[50px] flex items-center gap-2 px-3 py-1.5 self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8]">
                    <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
                      <span className="w-fit mt-[-1.00px] font-body-s-italic text-base-40">
                        {locations.destination}
                      </span>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center">
              {/* Departure Date Input */}
              <div className="w-[200px] items-center gap-3 p-0.5 flex relative">
                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <div className="h-[50px] flex items-center gap-2 px-3 py-1.5 self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8]">
                    <Calendar className="w-4 h-4 text-base-40" />
                    <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
                      <span className="w-fit mt-[-1.00px] font-body-s-italic text-base-40">
                        {dates.departure}
                      </span>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Return Date Input */}
              <div className="w-[200px] items-center gap-3 p-0.5 flex relative">
                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <div className="h-[50px] flex items-center gap-2 px-3 py-1.5 self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8]">
                    <Calendar className="w-4 h-4 text-base-40" />
                    <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
                      <span className="w-fit mt-[-1.00px] font-body-s-italic text-base-40">
                        {dates.return}
                      </span>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <Button className="h-[52px] flex-1 bg-[#6d81d8] hover:bg-[#5a6dc4] text-base-0 font-body-m-regular rounded">
            Найти
          </Button>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col w-full max-w-[1178px] items-start gap-6">
          {/* First row of cards */}
          <div className="flex items-center justify-between relative self-stretch w-full">
            {contentCards.slice(0, 2).map((card) => (
              <Card
                key={card.id}
                className="w-[572px] h-[332px] bg-base-0 shadow-none"
              >
                <CardContent className="p-0 h-full"></CardContent>
              </Card>
            ))}
          </div>

          {/* Second row of cards */}
          <div className="flex items-center justify-between relative self-stretch w-full">
            {contentCards.slice(2, 4).map((card) => (
              <Card
                key={card.id}
                className="w-[572px] h-[332px] bg-base-0 shadow-none"
              >
                <CardContent className="p-0 h-full"></CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute w-full max-w-[1440px] h-[104px] bottom-0 left-0 [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.35)_100%)]" />
      </main>

      {/* Bottom Navigation */}
      <footer className="flex w-full max-w-[1440px] h-[140px] items-center justify-center relative bg-base-0">
        {/* Calendar Button (Active) */}
        <div className="flex w-60 items-center justify-center p-5 relative self-stretch bg-base-0">
          <div className="flex items-center justify-center p-6 relative flex-1 grow bg-[#6d81d8] rounded-[20px] overflow-hidden">
            <Calendar className="w-[52px] h-[52px] text-white" />
          </div>
        </div>

        {/* Middle Navigation Items */}
        <div className="flex items-center justify-center gap-6 px-[180px] py-0 relative flex-1 self-stretch grow bg-base-0">
          {navigationItems.slice(1, 4).map((item, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] border-4 border-solid border-base-20 h-auto"
            >
              <item.icon className="w-[52px] h-[52px]" />
            </Button>
          ))}
        </div>

        {/* Cart Button */}
        <div className="flex w-60 items-center justify-center p-5 relative self-stretch bg-base-0">
          <Button
            variant="outline"
            className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] border-4 border-solid border-base-20 h-auto"
          >
            <ShoppingCart className="w-[52px] h-[52px]" />
          </Button>
        </div>
      </footer>
    </div>
  );
}

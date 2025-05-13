import { Button } from "@/components/ui/Button2";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bed,
  Calendar,
  ChevronDown,
  ChevronLeft,
  Search as SearchIcon,
  ShoppingCart,
  Train as TrainIcon,
} from "lucide-react";
import React from "react";

export default function InputPageExample() {
  // Data for the search form fields
  const searchFormData = {
    origin: "Москва",
    destination: "Нижний Новгород",
    departDate: "01 апр, вт",
    returnDate: "02 апр, ср",
  };

  // Data for the navigation items
  const navigationItems = [
    { icon: <Calendar className="w-[52px] h-[52px]" />, active: true },
    { icon: <TrainIcon className="w-[52px] h-[52px]" />, active: false },
    { icon: <Bed className="w-[52px] h-[52px]" />, active: false },
    { icon: <TrainIcon className="w-[52px] h-[52px]" />, active: false },
    { icon: <ShoppingCart className="w-[52px] h-[52px]" />, active: false },
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
              <span className="relative w-fit mt-[-1.00px] font-body-m-italic font-[number:var(--body-m-italic-font-weight)] [font-style:var(--body-m-italic-font-style)] text-base-40 text-[length:var(--body-m-italic-font-size)] tracking-[var(--body-m-italic-letter-spacing)] leading-[var(--body-m-italic-line-height)] whitespace-nowrap">
                Поиск
              </span>
            </div>
            <SearchIcon className="relative w-6 h-6" />
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
        <div className="flex items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
              {/* Origin Field */}
              <div className="flex-col w-[300px] items-center justify-center gap-1 p-0.5 flex relative">
                <div className="flex-col items-start gap-1 self-stretch w-full flex-[0_0_auto] flex relative">
                  <div className="h-[50px] items-center gap-2 px-3 py-1.5 self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8] flex relative">
                    <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
                      <span className="relative w-fit mt-[-1.00px] font-body-s-italic font-[number:var(--body-s-italic-font-weight)] [font-style:var(--body-s-italic-font-style)] text-base-40 text-[length:var(--body-s-italic-font-size)] tracking-[var(--body-s-italic-letter-spacing)] leading-[var(--body-s-italic-line-height)]">
                        {searchFormData.origin}
                      </span>
                    </div>
                    <ChevronDown className="relative w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Destination Field */}
              <div className="w-[300px] items-center gap-3 p-0.5 flex relative">
                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <div className="h-[50px] items-center gap-2 px-3 py-1.5 self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8] flex relative">
                    <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
                      <span className="relative w-fit mt-[-1.00px] font-body-s-italic font-[number:var(--body-s-italic-font-weight)] [font-style:var(--body-s-italic-font-style)] text-base-40 text-[length:var(--body-s-italic-font-size)] tracking-[var(--body-s-italic-letter-spacing)] leading-[var(--body-s-italic-line-height)]">
                        {searchFormData.destination}
                      </span>
                    </div>
                    <ChevronDown className="relative w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
              {/* Departure Date Field */}
              <div className="w-[200px] items-center gap-3 p-0.5 flex relative">
                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <div className="h-[50px] items-center gap-2 px-3 py-1.5 self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8] flex relative">
                    <Calendar className="relative w-4 h-4 text-base-40" />
                    <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
                      <span className="relative w-fit mt-[-1.00px] font-body-s-italic font-[number:var(--body-s-italic-font-weight)] [font-style:var(--body-s-italic-font-style)] text-base-40 text-[length:var(--body-s-italic-font-size)] tracking-[var(--body-s-italic-letter-spacing)] leading-[var(--body-s-italic-line-height)]">
                        {searchFormData.departDate}
                      </span>
                    </div>
                    <ChevronDown className="relative w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Return Date Field */}
              <div className="w-[200px] items-center gap-3 p-0.5 flex relative">
                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <div className="h-[50px] items-center gap-2 px-3 py-1.5 self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8] flex relative">
                    <Calendar className="relative w-4 h-4 text-base-40" />
                    <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
                      <span className="relative w-fit mt-[-1.00px] font-body-s-italic font-[number:var(--body-s-italic-font-weight)] [font-style:var(--body-s-italic-font-style)] text-base-40 text-[length:var(--body-s-italic-font-size)] tracking-[var(--body-s-italic-letter-spacing)] leading-[var(--body-s-italic-line-height)]">
                        {searchFormData.returnDate}
                      </span>
                    </div>
                    <ChevronDown className="relative w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <Button className="h-[52px] px-6 py-2 relative flex-1 grow bg-[#6d81d8] rounded text-base-0 font-body-m-regular">
            Найти
          </Button>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col w-[1178px] items-start gap-6 relative flex-[0_0_auto]">
          {/* First Row of Cards */}
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <Card className="w-[572px] h-[332px] bg-base-0">
              <CardContent className="p-0 h-full"></CardContent>
            </Card>
            <Card className="w-[572px] h-[332px] bg-base-0">
              <CardContent className="p-0 h-full"></CardContent>
            </Card>
          </div>

          {/* Second Row of Cards */}
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <Card className="w-[572px] h-[332px] bg-base-0">
              <CardContent className="p-0 h-full"></CardContent>
            </Card>
            <Card className="w-[572px] h-[332px] bg-base-0">
              <CardContent className="p-0 h-full"></CardContent>
            </Card>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute w-[1440px] h-[104px] top-[640px] left-0 [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.35)_100%)]" />
      </main>

      {/* Bottom Navigation */}
      <nav className="flex w-full max-w-[1440px] h-[140px] items-center justify-center relative bg-base-0">
        {/* Calendar Button (Active) */}
        <div className="flex w-60 items-center justify-center p-5 relative self-stretch bg-base-0">
          <div className="flex items-center justify-center p-6 relative flex-1 grow bg-[#6d81d8] rounded-[20px] overflow-hidden">
            {navigationItems[0].icon}
          </div>
        </div>

        {/* Middle Navigation Items */}
        <div className="flex items-center justify-center gap-6 px-[180px] py-0 relative flex-1 self-stretch grow bg-base-0">
          {navigationItems.slice(1, 4).map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-base-20"
            >
              {item.icon}
            </div>
          ))}
        </div>

        {/* Cart Button */}
        <div className="flex w-60 items-center justify-center p-5 relative self-stretch bg-base-0">
          <div className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-base-20">
            {navigationItems[4].icon}
          </div>
        </div>
      </nav>
    </div>
  );
}

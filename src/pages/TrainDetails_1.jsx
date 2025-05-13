
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button2";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Bed,
  ChevronLeft,
  Monitor,
  Search as SearchIcon,
  ShoppingCart,
  Train as TrainIcon,
  Utensils,
  Wheelchair as WheelchairIcon,
} from "lucide-react";
import React from "react";

const TrainDetailsPage = () => {
  // Seat data for mapping
  const seatData = [
    {
      id: 1,
      number: "26",
      carriage: "2Ф",
      price: "3636 ₽",
      type: "Верхнее",
      checked: false,
    },
    {
      id: 2,
      number: "81",
      carriage: "2Ф",
      price: "3636 ₽",
      type: "Нижнее",
      checked: true,
    },
    {
      id: 3,
      number: "00",
      carriage: "00А",
      price: "Цена",
      type: "Вид места",
      checked: false,
    },
    {
      id: 4,
      number: "00",
      carriage: "00А",
      price: "Цена",
      type: "Вид места",
      checked: false,
    },
    {
      id: 5,
      number: "00",
      carriage: "00А",
      price: "Цена",
      type: "Вид места",
      checked: false,
    },
    {
      id: 6,
      number: "00",
      carriage: "00А",
      price: "Цена",
      type: "Вид места",
      checked: false,
    },
    {
      id: 7,
      number: "00",
      carriage: "00А",
      price: "Цена",
      type: "Вид места",
      checked: false,
    },
    {
      id: 8,
      number: "00",
      carriage: "00А",
      price: "Цена",
      type: "Вид места",
      checked: false,
    },
    {
      id: 9,
      number: "00",
      carriage: "00А",
      price: "Цена",
      type: "Вид места",
      checked: false,
    },
    {
      id: 10,
      number: "00",
      carriage: "00А",
      price: "Цена",
      type: "Вид места",
      checked: false,
    },
  ];

  // Carriage options
  const carriageOptions = [
    { id: 1, number: "03", active: true },
    { id: 2, number: "06", active: false },
  ];

  // Navigation items
  const navItems = [
    {
      id: 1,
      icon: <CalendarIcon className="w-[52px] h-[52px]" />,
      active: false,
    },
    {
      id: 2,
      icon: <TrainIcon className="w-[52px] h-[52px]" color="white" />,
      active: true,
    },
    {
      id: 3,
      icon: <Bed className="w-[52px] h-[52px]" color="#6D81D8" />,
      active: false,
    },
    {
      id: 4,
      icon: <TrainIcon className="w-[52px] h-[52px]" color="#6D81D8" />,
      active: false,
    },
    {
      id: 5,
      icon: <ShoppingCart className="w-[52px] h-[52px]" />,
      active: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative bg-red-5-duplicate">
      {/* Header */}
      <header className="flex w-full max-w-[1440px] h-[140px] items-center justify-center gap-5 p-5 relative bg-base-0">
        <Button variant="ghost" className="w-[52px] h-[52px] p-0 rounded-md">
          <ChevronLeft className="w-8 h-8" />
        </Button>

        <div className="flex flex-col items-start gap-1 relative flex-1 grow">
          <div className="h-16 items-center gap-2 px-3 py-1.5 self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8] flex relative">
            <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
              <Input
                className="border-0 shadow-none p-0 h-auto font-body-m-italic text-base-40"
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

      {/* Main content */}
      <main className="flex flex-col items-center gap-6 px-[102px] py-[90px] relative flex-1 self-stretch w-full grow bg-base-5">
        <div className="flex flex-col w-full max-w-[1178px] items-start gap-6 relative">
          <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto] mb-[-80px]">
            <Card className="flex flex-col w-full max-w-[1180px] h-[605px] items-center justify-center gap-2 p-6 relative mr-[-2px] bg-base-0">
              {/* Gradient overlay */}
              <div className="absolute w-full h-[60px] top-[75px] left-0 z-[3] [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.35)_100%)]" />

              {/* Continue button */}
              <div className="flex items-center justify-end gap-2 px-3 py-2 relative self-stretch w-full flex-[0_0_auto] mt-[-13px] z-[2]">
                <Button className="w-40 h-10 bg-[#369672] text-base-0 rounded">
                  Продолжить
                </Button>
              </div>

              {/* Seat selection list */}
              <ScrollArea className="w-[1132px] h-[300px] px-2 py-1 z-[1] bg-white">
                {seatData.map((seat) => (
                  <div
                    key={seat.id}
                    className="flex items-center justify-center gap-3 px-4 py-1 relative self-stretch w-full"
                  >
                    <div className="relative w-fit font-body-s-medium text-base-90">
                      Место {seat.number} {`{${seat.carriage}]`}
                    </div>
                    <div className="relative w-fit font-body-s-regular text-base-70">
                      {seat.price}
                    </div>
                    <div className="relative flex-1 font-body-s-medium text-[#006c4c] text-right">
                      {seat.type}
                    </div>
                    <div className="inline-flex flex-wrap items-center gap-[4px_4px] relative flex-[0_0_auto]">
                      <Checkbox checked={seat.checked} />
                    </div>
                  </div>
                ))}
              </ScrollArea>

              {/* Train info */}
              <CardContent className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] mb-[-13px] z-0">
                <div className="flex items-center gap-2 px-2 py-0 relative self-stretch w-full">
                  <TrainIcon className="w-6 h-6" color="#369672" />
                  <div className="flex items-center gap-2.5 px-3 py-2 relative flex-1 grow rounded overflow-hidden">
                    <div className="relative w-fit mt-[-1px] font-body-m-regular text-center whitespace-nowrap">
                      <span className="text-[#393939]">063В</span>
                      <span className="text-[#4b4b4b]">&nbsp;</span>
                      <span className="text-[#369672]">•</span>
                      <span className="text-[#4b4b4b]">
                        {" "}
                        Москва ВК Восточный{" "}
                      </span>
                      <span className="text-[#369672]">→</span>
                      <span className="text-[#4b4b4b]">
                        {" "}
                        Нижний Новгород (Стригино): отпр. 01:26, 1 апр.,
                        вт&nbsp;&nbsp;{" "}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Carriage info */}
                <div className="flex items-center gap-2 relative self-stretch w-full bg-white">
                  <div className="flex items-center gap-2.5 px-3 py-2 relative flex-1 grow rounded overflow-hidden">
                    <div className="relative w-fit mt-[-1px] font-h4 text-center">
                      <span className="text-[#393939]">Вагон 03</span>
                      <span className="text-[#4b4b4b]">&nbsp;</span>
                      <span className="text-[#369672]">•</span>
                      <span className="text-[#4b4b4b]"> Купе 2Ф </span>
                      <span className="text-[#369672]">• </span>
                      <span className="text-[#4b4b4b]">ФПК&nbsp;&nbsp; </span>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="px-3 py-2 self-stretch w-full flex items-center gap-2 relative">
                  <Utensils className="w-6 h-6" />
                  <Bed className="w-6 h-6" color="#5E5E5E" />
                  <WheelchairIcon className="w-6 h-6" />
                  <Monitor className="w-6 h-6" />
                </div>

                {/* Carriage selection */}
                <div className="px-3 py-2 self-stretch w-full flex items-center gap-2 relative">
                  {carriageOptions.map((carriage) => (
                    <Badge
                      key={carriage.id}
                      variant="outline"
                      className={`inline-flex items-center justify-center gap-2.5 px-3 py-2 bg-base-5 rounded`}
                    >
                      <span className="font-body-m-regular text-base-80 text-center whitespace-nowrap">
                        Вагон {carriage.number}
                      </span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute w-full max-w-[1440px] h-[104px] top-[640px] left-0 [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.35)_100%)]" />
      </main>

      {/* Bottom navigation */}
      <nav className="flex w-full max-w-[1440px] h-[140px] items-center justify-center relative bg-base-0">
        <div className="flex w-60 items-center justify-center p-5 relative self-stretch bg-base-0">
          <div className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]">
            <CalendarIcon className="w-[52px] h-[52px]" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 px-[180px] py-0 relative flex-1 self-stretch grow bg-base-0">
          <div className="flex items-center justify-center p-6 relative flex-1 grow bg-[#6d81d8] rounded-[20px] overflow-hidden">
            <TrainIcon className="w-[52px] h-[52px]" color="white" />
          </div>
          <div className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]">
            <Bed className="w-[52px] h-[52px]" color="#6D81D8" />
          </div>
          <div className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]">
            <TrainIcon className="w-[52px] h-[52px]" color="#6D81D8" />
          </div>
        </div>

        <div className="flex w-60 items-center justify-center p-5 relative self-stretch bg-base-0">
          <div className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]">
            <ShoppingCart className="w-[52px] h-[52px]" />
          </div>
        </div>
      </nav>
    </div>
  );
};

// Calendar icon component since it's not available in lucide-react
const CalendarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default TrainDetailsPage;
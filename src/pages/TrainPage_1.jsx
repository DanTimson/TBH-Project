import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Bed,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Search as SearchIcon,
  Share2,
  ShoppingCart,
  Train as TrainIcon,
  Utensils,
  Wheelchair,
} from "lucide-react";
import React from "react";

const TrainPageExample = () => {
  // Train data for the first card
  const firstTrainData = {
    number: "063В",
    carrier: "ФПК",
    route: {
      origin: "Санкт-Петербург-Главный",
      via: "Москва ВК Восточный",
      destination: "Нижний Новгород",
      final: "Самара",
    },
    departure: {
      time: "01:26",
      station: "ТПУ Черкизово",
      city: "Москва ВК Восточный",
    },
    arrival: {
      time: "05:34",
      station: "Стригино",
      city: "Нижний Новгород",
    },
    duration: "4 ч 8 мин",
    types: ["Фирменный", "Скоростной", "Двухэтажный"],
    classes: [
      { name: "Купе", seats: "38", price: "от 3 053 ₽" },
      { name: "СВ", seats: "24", price: "от 8 733 ₽" },
      { name: "Класс вагона", seats: "Количество мест", price: "Цена" },
      { name: "Класс вагона", seats: "Количество мест", price: "Цена" },
      { name: "Класс вагона", seats: "Количество мест", price: "Цена" },
    ],
  };

  // Template data for empty train cards
  const emptyTrainData = {
    departure: {
      time: "00:00",
      station: "Вокзал отправления",
      city: "Город и станция отправления",
    },
    arrival: {
      time: "00:00",
      station: "Вокзал прибытия",
      city: "Город и станция прибытия",
    },
    duration: "00 д 00 ч 00 мин",
    types: ["Фирменный", "Скоростной", "Двухэтажный"],
    classes: Array(5).fill({
      name: "Класс вагона",
      seats: "Количество мест",
      price: "Цена",
    }),
  };

  // Navigation items
  const navItems = [
    {
      icon: <Calendar className="w-[52px] h-[52px] text-[#6D81D8]" />,
      active: false,
    },
    {
      icon: <TrainIcon className="w-[52px] h-[52px] text-white" />,
      active: true,
    },
    {
      icon: <Bed className="w-[52px] h-[52px] text-[#6D81D8]" />,
      active: false,
    },
    {
      icon: <Monitor className="w-[52px] h-[52px] text-[#6D81D8]" />,
      active: false,
    },
    {
      icon: <ShoppingCart className="w-[52px] h-[52px] text-[#6D81D8]" />,
      active: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative bg-red-5-duplicate">
      {/* Header */}
      <header className="flex w-full h-[140px] items-center justify-center gap-5 p-5 bg-base-0">
        <Button variant="ghost" className="w-[52px] h-[52px] p-0">
          <ChevronLeft className="w-8 h-8" />
        </Button>

        <div className="flex flex-col items-start gap-1 relative flex-1 grow">
          <div className="flex h-16 items-center gap-2 px-3 py-1.5 relative self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8]">
            <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
              <span className="font-body-m-italic font-[number:var(--body-m-italic-font-weight)] [font-style:var(--body-m-italic-font-style)] text-base-40 text-[length:var(--body-m-italic-font-size)] tracking-[var(--body-m-italic-letter-spacing)] leading-[var(--body-m-italic-line-height)]">
                Поиск
              </span>
            </div>
            <SearchIcon className="w-6 h-6" />
          </div>
        </div>

        <Avatar className="w-[72px] h-[72px] bg-base-5 rounded-[100px]">
          <div className="flex flex-col items-center gap-[3px] relative top-[18px] left-3">
            <div className="w-6 h-6 rounded-xl bg-base-30" />
            <div className="w-12 h-12 rounded-3xl bg-base-30" />
          </div>
        </Avatar>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-6 px-[102px] py-[90px] relative flex-1 self-stretch w-full grow bg-base-5 overflow-hidden overflow-y-scroll">
        {/* Search Form */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center">
            <div className="w-[300px] p-0.5">
              <Select>
                <SelectTrigger className="h-[50px] border border-solid border-[#8796e8]">
                  <span className="font-body-s-italic font-[number:var(--body-s-italic-font-weight)] [font-style:var(--body-s-italic-font-style)] text-base-40 text-[length:var(--body-s-italic-font-size)] tracking-[var(--body-s-italic-letter-spacing)] leading-[var(--body-s-italic-line-height)]">
                    Lable
                  </span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option">Option</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-[300px] p-0.5">
              <Select>
                <SelectTrigger className="h-[50px] border border-solid border-[#8796e8]">
                  <span className="font-body-s-italic font-[number:var(--body-s-italic-font-weight)] [font-style:var(--body-s-italic-font-style)] text-base-40 text-[length:var(--body-s-italic-font-size)] tracking-[var(--body-s-italic-letter-spacing)] leading-[var(--body-s-italic-line-height)]">
                    Lable
                  </span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option">Option</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="w-[200px] p-0.5">
            <Select>
              <SelectTrigger className="h-[50px] border border-solid border-[#8796e8]">
                <Calendar className="w-4 h-4 text-base-40" />
                <span className="font-body-s-italic font-[number:var(--body-s-italic-font-weight)] [font-style:var(--body-s-italic-font-style)] text-base-40 text-[length:var(--body-s-italic-font-size)] tracking-[var(--body-s-italic-letter-spacing)] leading-[var(--body-s-italic-line-height)]">
                  Lable
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option">Option</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="h-[52px] bg-[#6d81d8] text-base-0">Найти</Button>

          <Button className="h-[52px] bg-[#369672] text-base-0">
            Пропустить
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Train Cards */}
        <div className="flex-col items-start gap-6 flex w-[1178px]">
          {/* First Train Card */}
          <TrainCard train={firstTrainData} />

          {/* Empty Train Cards */}
          <TrainCard train={emptyTrainData} />
          <TrainCard train={emptyTrainData} />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute w-full h-[104px] bottom-0 left-0 [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.35)_100%)]" />
      </main>

      {/* Bottom Navigation */}
      <footer className="flex w-full h-[140px] items-center justify-center bg-base-0">
        <div className="flex w-60 items-center justify-center p-5 self-stretch">
          <NavButton icon={navItems[0].icon} active={navItems[0].active} />
        </div>

        <div className="flex items-center justify-center gap-6 px-[180px] py-0 flex-1 self-stretch">
          {navItems.slice(1, 4).map((item, index) => (
            <NavButton key={index} icon={item.icon} active={item.active} />
          ))}
        </div>

        <div className="flex w-60 items-center justify-center p-5 self-stretch">
          <NavButton icon={navItems[4].icon} active={navItems[4].active} />
        </div>
      </footer>
    </div>
  );
};

// Train Card Component
const TrainCard = ({ train }) => {
  return (
    <Card className="w-full p-6 bg-base-0">
      <CardContent className="p-0">
        {/* Train Info Section */}
        <div className="flex items-center w-full">
          {/* Left Side - Time and Route */}
          <div className="flex-col h-[148px] items-start justify-end p-2 flex-1 bg-white border-r-2 border-base-50">
            <div className="items-start justify-center gap-2 p-2 flex-1 self-stretch w-full grow flex">
              <div className="font-h2 font-[number:var(--h2-font-weight)] text-base-90 text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                {train.departure.time}
              </div>

              <div className="flex flex-col items-center justify-center gap-2 px-4 py-2 flex-1 grow">
                <div className="relative self-stretch w-full h-px bg-base-30" />
                <div className="font-caption-medium font-[number:var(--caption-medium-font-weight)] text-base-70 text-[length:var(--caption-medium-font-size)] text-center tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] [font-style:var(--caption-medium-font-style)]">
                  {train.duration}
                </div>
              </div>

              <div className="font-h2 font-[number:var(--h2-font-weight)] text-base-90 text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                {train.arrival.time}
              </div>
            </div>

            <div className="flex items-center justify-center gap-1 px-2.5 py-1 self-stretch w-full">
              <div className="font-caption-regular-none font-[number:var(--caption-regular-none-font-weight)] text-base-70 text-[length:var(--caption-regular-none-font-size)] text-center tracking-[var(--caption-regular-none-letter-spacing)] leading-[var(--caption-regular-none-line-height)] [font-style:var(--caption-regular-none-font-style)]">
                {train.departure.station}
              </div>
              <div className="flex-1" />
              <div className="font-caption-regular-none font-[number:var(--caption-regular-none-font-weight)] text-base-70 text-[length:var(--caption-regular-none-font-size)] text-center tracking-[var(--caption-regular-none-letter-spacing)] leading-[var(--caption-regular-none-line-height)] [font-style:var(--caption-regular-none-font-style)]">
                {train.arrival.station}
              </div>
            </div>

            <div className="flex items-center justify-center gap-1 px-2.5 py-0 self-stretch w-full">
              <div className="font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-base-80 text-[length:var(--body-s-regular-font-size)] text-center tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]">
                {train.departure.city}
              </div>
              <div className="flex-1" />
              <div className="font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-base-80 text-[length:var(--body-s-regular-font-size)] text-center tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]">
                {train.arrival.city}
              </div>
            </div>

            <div className="gap-2 p-2 flex items-center self-stretch w-full">
              <Utensils className="w-6 h-6" />
              <Bed className="w-6 h-6 text-base-70" />
              <Wheelchair className="w-6 h-6" />
              <Monitor className="w-6 h-6" />
            </div>
          </div>

          {/* Right Side - Classes and Prices */}
          <div className="flex-col h-[148px] items-center gap-2 px-2 py-1 flex-1 bg-white">
            {train.classes.map((classItem, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-4 py-0.5 self-stretch w-full"
              >
                <div className="flex-1 font-body-s-medium font-[number:var(--body-s-medium-font-weight)] text-base-90 text-[length:var(--body-s-medium-font-size)] tracking-[var(--body-s-medium-letter-spacing)] leading-[var(--body-s-medium-line-height)] [font-style:var(--body-s-medium-font-style)]">
                  {classItem.name}
                </div>
                <div className="flex-1 font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-base-70 text-[length:var(--body-s-regular-font-size)] text-right tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]">
                  {classItem.seats}
                </div>
                <div className="flex-1 font-body-s-medium font-[number:var(--body-s-medium-font-weight)] text-[#006c4c] text-[length:var(--body-s-medium-font-size)] text-right tracking-[var(--body-s-medium-letter-spacing)] leading-[var(--body-s-medium-line-height)] [font-style:var(--body-s-medium-font-style)]">
                  {classItem.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Train Type and Route Info */}
        <div className="flex flex-col items-start gap-2 p-2 w-full bg-white">
          <div className="flex items-center gap-2 self-stretch w-full">
            {train.types &&
              train.types.map((type, index) => (
                <Badge
                  key={index}
                  className="h-[35px] bg-[#369672] text-base-0 font-body-m-regular"
                >
                  {type}
                </Badge>
              ))}
          </div>

          <div className="flex items-center gap-2 px-2 py-0 self-stretch w-full">
            <TrainIcon className="w-6 h-6" />
            <div className="flex items-center gap-2.5 px-3 py-2 flex-1 rounded overflow-hidden">
              {train === firstTrainData ? (
                <div className="font-normal text-base-80 text-base text-center tracking-[0] leading-normal whitespace-nowrap">
                  <span className="text-[#393939] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                    063В
                  </span>
                  <span className="text-[#4b4b4b] font-body-m-regular"> </span>
                  <span className="text-[#369672] font-body-m-regular">•</span>
                  <span className="text-[#4b4b4b] font-body-m-regular">
                    {" "}
                    ФПК{" "}
                  </span>
                  <span className="text-[#369672] font-body-m-regular">• </span>
                  <span className="text-[#9b9b9b] font-body-m-regular">
                    Санкт-Петербург-Главный
                  </span>
                  <span className="text-[#4b4b4b] font-body-m-regular"> </span>
                  <span className="text-[#369672] font-body-m-regular">→</span>
                  <span className="text-[#4b4b4b] font-body-m-regular">
                    {" "}
                    Москва ВК Восточный{" "}
                  </span>
                  <span className="text-[#369672] font-body-m-regular">→</span>
                  <span className="text-[#4b4b4b] font-body-m-regular">
                    {" "}
                    Нижний Новгород{" "}
                  </span>
                  <span className="text-[#369672] font-body-m-regular">→</span>
                  <span className="text-[#4b4b4b] font-body-m-regular"> </span>
                  <span className="text-[#9b9b9b] font-body-m-regular">
                    Самара
                  </span>
                  <span className="text-[#4b4b4b] font-body-m-regular"> </span>
                  <span className="font-body-m-medium text-[#369672]">
                    Маршрут
                  </span>
                  <span className="text-[#4b4b4b] font-body-m-regular"> </span>
                </div>
              ) : (
                <div className="font-normal text-base-80 text-base text-center tracking-[0] leading-normal whitespace-nowrap">
                  <span className="text-[#393939] font-body-m-regular">
                    Номер и наименование поезда
                  </span>
                  <span className="text-[#4b4b4b] font-body-m-regular"> </span>
                  <span className="text-[#369672] font-body-m-regular">•</span>
                  <span className="text-[#4b4b4b] font-body-m-regular">
                    {" "}
                    Перевозчик{" "}
                  </span>
                  <span className="text-[#369672] font-body-m-regular">• </span>
                  <span className="text-[#4b4b4b] font-body-m-regular">
                    Точка отправления{" "}
                  </span>
                  <span className="text-[#369672] font-body-m-regular">→</span>
                  <span className="text-[#4b4b4b] font-body-m-regular">
                    {" "}
                    Точка прибытия{" "}
                  </span>
                  <span className="font-body-m-medium text-[#369672]">
                    Маршрут
                  </span>
                  <span className="text-[#4b4b4b] font-body-m-regular"> </span>
                </div>
              )}
            </div>
            <Share2 className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Navigation Button Component
const NavButton = ({ icon, active }) => {
  return (
    <div
      className={`flex items-center justify-center p-6 flex-1 grow rounded-[20px] overflow-hidden ${active ? "bg-[#6d81d8]" : "bg-base-0 border-4 border-solid border-[#6d81d8]"}`}
    >
      {icon}
    </div>
  );
};

export default TrainPageExample;

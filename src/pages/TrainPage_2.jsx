
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button2";
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
  Wheelchair as WheelchairIcon,
} from "lucide-react";
import React from "react";

const TrainPageExample = () => {
  // Train data for mapping
  const trainCards = [
    {
      id: 1,
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
      classes: [
        { type: "Купе", seats: "38", price: "от 3 053 ₽" },
        { type: "СВ", seats: "24", price: "от 8 733 ₽" },
      ],
      badges: ["Фирменный", "Скоростной", "Двухэтажный"],
      hasData: true,
    },
    {
      id: 2,
      badges: ["Фирменный", "Скоростной", "Двухэтажный"],
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
      classes: [
        { type: "Класс вагона", seats: "Количество мест", price: "Цена" },
        { type: "Класс вагона", seats: "Количество мест", price: "Цена" },
        { type: "Класс вагона", seats: "Количество мест", price: "Цена" },
        { type: "Класс вагона", seats: "Количество мест", price: "Цена" },
        { type: "Класс вагона", seats: "Количество мест", price: "Цена" },
      ],
      hasData: false,
    },
    {
      id: 3,
      badges: ["Фирменный", "Скоростной", "Двухэтажный"],
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
      classes: [
        { type: "Класс вагона", seats: "Количество мест", price: "Цена" },
        { type: "Класс вагона", seats: "Количество мест", price: "Цена" },
        { type: "Класс вагона", seats: "Количество мест", price: "Цена" },
        { type: "Класс вагона", seats: "Количество мест", price: "Цена" },
        { type: "Класс вагона", seats: "Количество мест", price: "Цена" },
      ],
      hasData: false,
    },
  ];

  // Bottom navigation items
  const navItems = [
    {
      icon: <Calendar className="w-[52px] h-[52px] text-[#6D81D8]" />,
      active: false,
    },
    {
      icon: <TrainIcon className="w-[52px] h-[52px] text-[#6D81D8]" />,
      active: false,
    },
    {
      icon: <Bed className="w-[52px] h-[52px] text-[#6D81D8]" />,
      active: false,
    },
    {
      icon: <TrainIcon className="w-[52px] h-[52px] text-white" />,
      active: true,
    },
    {
      icon: <ShoppingCart className="w-[52px] h-[52px] text-[#6D81D8]" />,
      active: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative bg-red-5-duplicate">
      {/* Header */}
      <header className="flex w-full max-w-[1440px] h-[140px] items-center justify-center gap-5 p-5 bg-base-0">
        <Button variant="ghost" className="w-[52px] h-[52px] p-0 rounded">
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

        <div className="relative w-[72px] h-[72px] bg-base-5 rounded-[100px] overflow-hidden">
          <div className="inline-flex flex-col items-center gap-[3px] relative top-[18px] left-3">
            <div className="w-6 h-6 rounded-xl relative bg-base-30" />
            <div className="w-12 h-12 rounded-3xl relative bg-base-30" />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center gap-3 px-[102px] py-[90px] relative flex-1 self-stretch w-full grow bg-base-5 overflow-hidden overflow-y-scroll">
        {/* Search form */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <div className="w-[300px] flex flex-col items-center justify-center gap-1 p-0.5">
                <div className="flex flex-col items-start gap-1 self-stretch w-full">
                  <Select>
                    <SelectTrigger className="h-[50px] px-3 py-1.5 border border-solid border-[#8796e8]">
                      <span className="font-body-s-italic font-[number:var(--body-s-italic-font-weight)] [font-style:var(--body-s-italic-font-style)] text-base-40 text-[length:var(--body-s-italic-font-size)] tracking-[var(--body-s-italic-letter-spacing)] leading-[var(--body-s-italic-line-height)]">
                        Lable
                      </span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="w-[300px] flex items-center gap-3 p-0.5">
                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <Select>
                    <SelectTrigger className="h-[50px] px-3 py-1.5 border border-solid border-[#8796e8]">
                      <span className="font-body-s-italic font-[number:var(--body-s-italic-font-weight)] [font-style:var(--body-s-italic-font-style)] text-base-40 text-[length:var(--body-s-italic-font-size)] tracking-[var(--body-s-italic-letter-spacing)] leading-[var(--body-s-italic-line-height)]">
                        Lable
                      </span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-[200px] flex items-center gap-3 p-0.5">
                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <Select>
                    <SelectTrigger className="h-[50px] px-3 py-1.5 border border-solid border-[#8796e8]">
                      <Calendar className="w-4 h-4 text-base-40 mr-2" />
                      <span className="font-body-s-italic font-[number:var(--body-s-italic-font-weight)] [font-style:var(--body-s-italic-font-style)] text-base-40 text-[length:var(--body-s-italic-font-size)] tracking-[var(--body-s-italic-letter-spacing)] leading-[var(--body-s-italic-line-height)]">
                        Lable
                      </span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <Button className="h-[52px] bg-[#6d81d8] text-base-0 font-body-m-regular font-[number:var(--body-m-regular-font-weight)] [font-style:var(--body-m-regular-font-style)] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)]">
            Найти
          </Button>

          <Button className="h-[52px] bg-[#369672] text-base-0 font-body-m-regular font-[number:var(--body-m-regular-font-weight)] [font-style:var(--body-m-regular-font-style)] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)]">
            Пропустить
            <ChevronRight className="w-6 h-6 ml-1" />
          </Button>
        </div>

        {/* Train cards */}
        <div className="flex flex-col items-start gap-6 w-[1178px]">
          <div className="flex flex-col items-start gap-6 w-[1178px]">
            {trainCards.map((train) => (
              <Card key={train.id} className="w-full bg-base-0 p-0">
                <CardContent className="p-6">
                  {/* Train info section */}
                  <div className="flex items-center w-full">
                    {/* Left side - times and route */}
                    <div className="flex-1 h-[148px] flex flex-col items-start justify-end p-2 bg-white border-r-2 border-base-50">
                      <div className="flex items-start justify-center gap-2 p-2 flex-1 self-stretch w-full">
                        <div className="font-h2 font-[number:var(--h2-font-weight)] text-base-90 text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                          {train.departure.time}
                        </div>

                        <div className="flex flex-col items-center justify-center gap-2 px-4 py-2 flex-1">
                          <div className="relative self-stretch w-full h-px bg-base-30">
                            {/* Arrow line */}
                          </div>
                          <div className="font-caption-medium font-[number:var(--caption-medium-font-weight)] text-base-70 text-[length:var(--caption-medium-font-size)] text-center tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] [font-style:var(--caption-medium-font-style)]">
                            {train.duration}
                          </div>
                        </div>

                        <div className="font-h2 font-[number:var(--h2-font-weight)] text-base-90 text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
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

                      <div className="flex items-center gap-2 p-2 self-stretch w-full">
                        <Utensils className="w-6 h-6 text-base-70" />
                        <Bed className="w-6 h-6 text-base-70" />
                        <WheelchairIcon className="w-6 h-6 text-base-70" />
                        <Monitor className="w-6 h-6 text-base-70" />
                      </div>
                    </div>

                    {/* Right side - classes and prices */}
                    <div className="flex-1 h-[148px] flex flex-col items-center gap-2 px-2 py-1 bg-white">
                      {train.classes.map((classItem, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center px-4 py-0.5 self-stretch w-full"
                        >
                          <div className="flex-1 font-body-s-medium font-[number:var(--body-s-medium-font-weight)] text-base-90 text-[length:var(--body-s-medium-font-size)] tracking-[var(--body-s-medium-letter-spacing)] leading-[var(--body-s-medium-line-height)] [font-style:var(--body-s-medium-font-style)]">
                            {classItem.type}
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

                  {/* Train badges and details */}
                  <div className="flex flex-col items-start gap-2 p-2 w-full z-0">
                    <div className="flex items-center gap-2 w-full bg-white">
                      {train.badges.map((badge, index) => (
                        <Badge
                          key={index}
                          className="h-[35px] bg-[#369672] text-base-0 font-body-m-regular font-[number:var(--body-m-regular-font-weight)] [font-style:var(--body-m-regular-font-style)] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)]"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 px-2 py-0 w-full">
                      <TrainIcon className="w-6 h-6 text-base-70" />
                      <div className="flex items-center gap-2.5 px-3 py-2 flex-1 rounded overflow-hidden">
                        {train.hasData ? (
                          <div className="font-normal text-base-80 text-base text-center tracking-[0] leading-normal whitespace-nowrap">
                            <span className="text-[#393939] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              {train.number}
                            </span>
                            <span className="text-[#4b4b4b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              &nbsp;
                            </span>
                            <span className="text-[#369672] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              •
                            </span>
                            <span className="text-[#4b4b4b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              {" "}
                              ФПК{" "}
                            </span>
                            <span className="text-[#369672] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              •{" "}
                            </span>
                            <span className="text-[#9b9b9b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              {train.route.origin}
                            </span>
                            <span className="text-[#4b4b4b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              &nbsp;
                            </span>
                            <span className="text-[#369672] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              →
                            </span>
                            <span className="text-[#4b4b4b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              {" "}
                              {train.route.via}{" "}
                            </span>
                            <span className="text-[#369672] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              →
                            </span>
                            <span className="text-[#4b4b4b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              {" "}
                              {train.route.destination}{" "}
                            </span>
                            <span className="text-[#369672] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              →
                            </span>
                            <span className="text-[#4b4b4b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              &nbsp;
                            </span>
                            <span className="text-[#9b9b9b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              {train.route.final}
                            </span>
                            <span className="text-[#4b4b4b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              &nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span className="font-body-m-medium font-[number:var(--body-m-medium-font-weight)] text-[#369672] [font-style:var(--body-m-medium-font-style)] tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)] text-[length:var(--body-m-medium-font-size)]">
                              Маршрут
                            </span>
                            <span className="text-[#4b4b4b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              &nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                          </div>
                        ) : (
                          <div className="font-normal text-base-80 text-base text-center tracking-[0] leading-normal whitespace-nowrap">
                            <span className="text-[#393939] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              Номер и наименование поезда
                            </span>
                            <span className="text-[#4b4b4b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              &nbsp;
                            </span>
                            <span className="text-[#369672] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              •
                            </span>
                            <span className="text-[#4b4b4b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              {" "}
                              Перевозчик{" "}
                            </span>
                            <span className="text-[#369672] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              •{" "}
                            </span>
                            <span className="text-[#4b4b4b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              Точка отправления{" "}
                            </span>
                            <span className="text-[#369672] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              →
                            </span>
                            <span className="text-[#4b4b4b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              {" "}
                              Точка прибытия&nbsp;&nbsp;{" "}
                            </span>
                            <span className="font-body-m-medium font-[number:var(--body-m-medium-font-weight)] text-[#369672] [font-style:var(--body-m-medium-font-style)] tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)] text-[length:var(--body-m-medium-font-size)]">
                              Маршрут
                            </span>
                            <span className="text-[#4b4b4b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                              &nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                          </div>
                        )}
                      </div>
                      <Share2 className="w-6 h-6 text-base-70" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute w-[1440px] h-[104px] top-[640px] left-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.35)]" />
      </main>

      {/* Bottom navigation */}
      <footer className="flex w-full max-w-[1440px] h-[140px] items-center justify-center bg-base-0">
        <div className="flex w-60 items-center justify-center p-5 self-stretch bg-base-0">
          <div className="flex items-center justify-center p-6 flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]">
            {navItems[0].icon}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 px-[180px] py-0 flex-1 self-stretch grow bg-base-0">
          {navItems.slice(1, 4).map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-6 flex-1 grow rounded-[20px] overflow-hidden ${
                item.active
                  ? "bg-[#6d81d8]"
                  : "bg-base-0 border-4 border-solid border-[#6d81d8]"
              }`}
            >
              {item.icon}
            </div>
          ))}
        </div>

        <div className="flex w-60 items-center justify-center p-5 self-stretch bg-base-0">
          <div className="flex items-center justify-center p-6 flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]">
            {navItems[4].icon}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrainPageExample;
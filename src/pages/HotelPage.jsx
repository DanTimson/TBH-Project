
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button2";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Bed,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Image,
  Search as SearchIcon,
  ShoppingCart,
  Train as TrainIcon,
} from "lucide-react";
import React from "react";

export default function HotelPageExample() {
  // Hotel data for mapping
  const hotels = [
    {
      name: "Название отеля",
      address: "Адрес отеля",
      distance: "Дистанция до центра",
      roomType: "Тип номера",
      breakfast: "Завтрак",
      price: "Цена",
      nights: "Число ночей, число гостей",
    },
    {
      name: "Название отеля",
      address: "Адрес отеля",
      distance: "Дистанция до центра",
      roomType: "Тип номера",
      breakfast: "Завтрак",
      price: "Цена",
      nights: "Число ночей, число гостей",
    },
  ];

  // Navigation items
  const navItems = [
    {
      icon: <Calendar className="w-[52px] h-[52px] text-[#6D81D8]" />,
      active: false,
    },
    { icon: <TrainIcon className="w-[52px] h-[52px]" />, active: false },
    { icon: <Bed className="w-[52px] h-[52px]" />, active: true },
    { icon: <TrainIcon className="w-[52px] h-[52px]" />, active: false },
    { icon: <ShoppingCart className="w-[52px] h-[52px]" />, active: false },
  ];

  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center relative bg-red-5-duplicate"
      data-model-id="228:3288"
    >
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
      <main className="justify-center gap-[24px_12px] px-[102px] py-[90px] flex-1 self-stretch w-full grow bg-base-5 overflow-hidden overflow-y-scroll flex items-start relative">
        {/* Search Filters */}
        <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
              <div className="flex-col w-[300px] items-center justify-center gap-1 p-0.5 flex relative">
                <div className="flex-col items-start gap-1 self-stretch w-full flex-[0_0_auto] flex relative">
                  <Select>
                    <SelectTrigger className="h-[50px] items-center gap-2 px-3 py-1.5 self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8]">
                      <SelectValue
                        placeholder="Lable"
                        className="font-body-s-italic font-[number:var(--body-s-italic-font-weight)] [font-style:var(--body-s-italic-font-style)] text-base-40 text-[length:var(--body-s-italic-font-size)] tracking-[var(--body-s-italic-letter-spacing)] leading-[var(--body-s-italic-line-height)]"
                      />
                    </SelectTrigger>
                  </Select>
                </div>
              </div>

              <div className="w-[300px] items-center gap-3 p-0.5 flex relative">
                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <Select>
                    <SelectTrigger className="h-[50px] items-center gap-2 px-3 py-1.5 self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8]">
                      <SelectValue
                        placeholder="Lable"
                        className="font-body-s-italic font-[number:var(--body-s-italic-font-weight)] [font-style:var(--body-s-italic-font-style)] text-base-40 text-[length:var(--body-s-italic-font-size)] tracking-[var(--body-s-italic-letter-spacing)] leading-[var(--body-s-italic-line-height)]"
                      />
                    </SelectTrigger>
                  </Select>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
              <div className="w-[200px] items-center gap-3 p-0.5 flex relative">
                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <Select>
                    <SelectTrigger className="h-[50px] items-center gap-2 px-3 py-1.5 self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8]">
                      <Calendar className="w-4 h-4 text-base-40" />
                      <SelectValue
                        placeholder="Lable"
                        className="font-body-s-italic font-[number:var(--body-s-italic-font-weight)] [font-style:var(--body-s-italic-font-style)] text-base-40 text-[length:var(--body-s-italic-font-size)] tracking-[var(--body-s-italic-letter-spacing)] leading-[var(--body-s-italic-line-height)]"
                      />
                    </SelectTrigger>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <Button className="h-[52px] px-6 py-2 bg-[#6d81d8] rounded text-base-0 font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] [font-style:var(--body-m-regular-font-style)]">
            Найти
          </Button>

          <Button className="h-[52px] px-6 py-2 bg-[#369672] rounded text-base-0 font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] [font-style:var(--body-m-regular-font-style)]">
            Пропустить
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Hotel Listings */}
        <div className="flex-col w-full max-w-[1178px] gap-6 flex items-start relative">
          {hotels.map((hotel, index) => (
            <Card
              key={index}
              className="w-full h-[347px] flex items-center gap-2 bg-base-0"
            >
              <CardContent className="flex w-full items-center gap-2 px-6 py-0 bg-base-0 overflow-hidden">
                <div className="inline-flex items-center justify-center gap-2.5 px-[117px] py-[153px] relative flex-[0_0_auto]">
                  <Image className="w-10 h-10" />
                </div>

                <div className="flex flex-col w-[562px] h-[347px] items-start gap-2 p-6 relative">
                  <h4 className="relative w-[472px] h-[38px] mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-base-90 text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                    {hotel.name}
                  </h4>

                  <p className="w-[472px] h-[38px] font-body-m-medium font-[number:var(--body-m-medium-font-weight)] text-base-90 text-[length:var(--body-m-medium-font-size)] relative tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)] [font-style:var(--body-m-medium-font-style)]">
                    {hotel.address}
                  </p>

                  <p className="w-[472px] h-[38px] font-body-m-medium font-[number:var(--body-m-medium-font-weight)] text-base-90 text-[length:var(--body-m-medium-font-size)] relative tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)] [font-style:var(--body-m-medium-font-style)]">
                    {hotel.distance}
                  </p>

                  <p className="w-[472px] h-[38px] font-body-m-medium font-[number:var(--body-m-medium-font-weight)] text-base-90 text-[length:var(--body-m-medium-font-size)] relative tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)] [font-style:var(--body-m-medium-font-style)]">
                    {hotel.roomType}
                  </p>

                  <p className="w-[472px] h-[38px] font-body-m-medium font-[number:var(--body-m-medium-font-weight)] text-base-90 text-[length:var(--body-m-medium-font-size)] relative tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)] [font-style:var(--body-m-medium-font-style)]">
                    {hotel.breakfast}
                  </p>

                  <CardFooter className="flex h-[69px] items-center gap-2 relative self-stretch w-full bg-white border-t [border-top-style:solid] border-base-10 p-0">
                    <Badge className="h-[35px] px-3 py-2 bg-[#369672] text-base-0 rounded font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[length:var(--body-m-regular-font-size)] text-center whitespace-nowrap tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] [font-style:var(--body-m-regular-font-style)]">
                      Бесплатная отмена
                    </Badge>

                    <Badge className="h-[35px] px-3 py-2 bg-[#369672] text-base-0 rounded font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[length:var(--body-m-regular-font-size)] text-center whitespace-nowrap tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] [font-style:var(--body-m-regular-font-style)]">
                      Оплата на месте
                    </Badge>
                  </CardFooter>
                </div>

                <div className="flex flex-col w-[279px] h-[349px] items-end justify-center gap-2 p-6 relative mt-[-1.00px] mb-[-1.00px] border-l [border-left-style:solid] border-base-10">
                  <h3 className="w-[253px] h-[38px] ml-[-24.00px] font-h3 font-[number:var(--h3-font-weight)] text-base-90 text-[length:var(--h3-font-size)] text-right whitespace-nowrap relative tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    {hotel.price}
                  </h3>

                  <p className="w-[253px] h-[38px] ml-[-24.00px] font-body-m-medium font-[number:var(--body-m-medium-font-weight)] text-base-90 text-[length:var(--body-m-medium-font-size)] text-right relative tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)] [font-style:var(--body-m-medium-font-style)]">
                    {hotel.nights}
                  </p>

                  <Button className="w-40 h-10 px-4 py-2 bg-[#369672] rounded text-base-0 font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]">
                    Выбрать номер
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute w-[1440px] h-[104px] top-[640px] left-0 [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.35)_100%)]" />
      </main>

      {/* Bottom Navigation */}
      <footer className="flex w-full max-w-[1440px] h-[140px] items-center justify-center relative bg-base-0">
        <div className="flex w-60 items-center justify-center p-5 relative self-stretch bg-base-0">
          <div className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]">
            <Calendar className="w-[52px] h-[52px] text-[#6D81D8]" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 px-[180px] py-0 relative flex-1 self-stretch grow bg-base-0">
          {navItems.slice(1, 4).map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-6 relative flex-1 grow ${
                item.active
                  ? "bg-[#6d81d8]"
                  : "bg-base-0 border-4 border-solid border-[#6d81d8]"
              } rounded-[20px] overflow-hidden`}
            >
              {item.icon}
            </div>
          ))}
        </div>

        <div className="flex w-60 items-center justify-center p-5 relative self-stretch bg-base-0">
          <div className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]">
            <ShoppingCart className="w-[52px] h-[52px]" />
          </div>
        </div>
      </footer>
    </div>
  );
}
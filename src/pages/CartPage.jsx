
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Bed,
  Calendar,
  Monitor,
  Search as SearchIcon,
  ShoppingCart,
  Train as TrainIcon,
  Utensils,
  Wheelchair as WheelchairIcon,
} from "lucide-react";
import { CheckSquare } from "lucide-react";
import React from "react";

export default function CartPage() {
  // Data for wagon tabs
  const wagonTabs = [
    { id: "01", label: "Вагон 01" },
    { id: "02", label: "Вагон 02" },
    { id: "03", label: "Вагон 03" },
    { id: "04", label: "Вагон 04" },
    { id: "05", label: "Вагон 05" },
    { id: "06", label: "Вагон 06" },
  ];

  // Data for bookings
  const bookings = [
    {
      id: 1,
      trainInfo: "Номер и наименование поезда",
      departure: "Точка отправления",
      arrival: "Точка прибытия",
      departureTime: "00:00, 00 месяц, день недели",
      wagonNumber: "00",
      wagonClass: "00А",
      carrier: "Перевозчик",
      seatNumber: "00 {00А]",
      price: "Цена",
      seatType: "Вид места",
    },
    {
      id: 2,
      trainInfo: "Номер и наименование поезда",
      departure: "Точка отправления",
      arrival: "Точка прибытия",
      departureTime: "00:00, 00 месяц, день недели",
      wagonNumber: "00",
      wagonClass: "00А",
      carrier: "Перевозчик",
      seatNumber: "00 {00А]",
      price: "Цена",
      seatType: "Вид места",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative bg-red-5-duplicate">
      {/* Header */}
      <header className="flex w-full h-[140px] items-center justify-center gap-5 p-5 relative bg-base-0">
        <Button variant="ghost" className="w-[52px] h-[52px] p-0 rounded-full">
          <ArrowLeft className="w-8 h-8" />
        </Button>

        <div className="flex flex-col items-start gap-1 relative flex-1 grow">
          <div className="h-16 items-center gap-2 px-3 py-1.5 self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8] flex relative">
            <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
              <Input
                placeholder="Поиск"
                className="border-none shadow-none font-body-m-italic text-base-40 focus-visible:ring-0"
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
      <main className="flex items-start justify-center gap-[24px_12px] px-[102px] py-[90px] relative flex-1 self-stretch w-full grow bg-base-5 overflow-hidden overflow-y-scroll">
        <div className="flex flex-col w-full max-w-[1240px] items-center gap-6 relative">
          {/* Pay Button */}
          <Button className="h-[52px] px-6 py-2 bg-[#6d81d8] text-base-0 font-body-m-regular">
            Оплатить
          </Button>

          {/* Bookings */}
          {bookings.map((booking, index) => (
            <div
              key={booking.id}
              className="flex items-center justify-center gap-3 px-3 py-0 relative self-stretch w-full"
            >
              <CheckSquare className="w-12 h-12 text-[#369672]" />

              <Card className="flex flex-col w-full items-center justify-center gap-2 p-6 bg-base-0">
                {/* Return Button */}
                <div className="justify-end px-3 py-2 self-stretch w-full flex-[0_0_auto] z-[2] flex items-center gap-2 relative">
                  <Button className="w-40 h-10 bg-[#369672] text-base-0 font-body-s-regular">
                    Оформить возврат
                  </Button>
                </div>

                {/* Seat Info */}
                <CardContent className="flex-col w-full h-[63px] px-2 py-1 z-[1] bg-white flex items-center gap-2 relative">
                  <div className="flex items-center justify-between px-4 py-1 relative self-stretch w-full">
                    <div className="font-body-s-medium text-base-90">
                      {booking.seatNumber}
                    </div>
                    <div className="font-body-s-regular text-base-70">
                      {booking.price}
                    </div>
                    <div className="font-body-s-medium text-[#006c4c] text-right">
                      {booking.seatType}
                    </div>
                  </div>
                </CardContent>

                {/* Train Details */}
                <CardContent className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full z-0">
                  {/* Train Info */}
                  <div className="flex items-center gap-2 px-2 py-0 relative self-stretch w-full">
                    <TrainIcon className="w-6 h-6" />
                    <div className="flex items-center gap-2.5 px-3 py-2 relative flex-1 grow rounded overflow-hidden">
                      <div className="font-body-m-regular text-center whitespace-nowrap">
                        <span className="text-[#393939]">
                          {booking.trainInfo}
                        </span>
                        <span className="text-[#4b4b4b]">&nbsp;</span>
                        <span className="text-[#369672]">•</span>
                        <span className="text-[#4b4b4b]">
                          {" "}
                          {booking.departure}{" "}
                        </span>
                        <span className="text-[#369672]">→</span>
                        <span className="text-[#4b4b4b]">
                          {" "}
                          {booking.arrival}: отпр. {booking.departureTime}{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Wagon Info */}
                  <div className="flex items-center gap-2 relative self-stretch w-full bg-white">
                    <div className="flex items-center gap-2.5 px-3 py-2 relative flex-1 grow rounded overflow-hidden">
                      <div className="font-h4 text-center">
                        <span className="text-[#393939]">
                          Вагон {booking.wagonNumber}
                        </span>
                        <span className="text-[#4b4b4b]">&nbsp;</span>
                        <span className="text-[#369672]">•</span>
                        <span className="text-[#4b4b4b]">
                          {" "}
                          Класс вагона {booking.wagonClass}{" "}
                        </span>
                        <span className="text-[#369672]">• </span>
                        <span className="text-[#4b4b4b]">
                          {booking.carrier}{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex items-center gap-2 px-3 py-2 relative self-stretch w-full">
                    <Utensils className="w-6 h-6" />
                    <Bed className="w-6 h-6 text-[#5E5E5E]" />
                    <WheelchairIcon className="w-6 h-6" />
                    <Monitor className="w-6 h-6" />
                  </div>

                  {/* Wagon Selection */}
                  <Tabs defaultValue="01" className="w-full">
                    <TabsList className="flex items-center gap-2 px-3 py-2 relative self-stretch w-full bg-transparent">
                      {wagonTabs.map((wagon) => (
                        <TabsTrigger
                          key={wagon.id}
                          value={wagon.id}
                          className={`px-3 py-2 rounded ${
                            wagon.id === "01"
                              ? "bg-[#369672] text-base-0"
                              : "bg-base-5 text-base-80"
                          } font-body-m-regular`}
                        >
                          {wagon.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          ))}

          {/* Hotel Booking */}
          <div className="flex items-center justify-center gap-3 px-3 py-0 relative self-stretch w-full">
            <CheckSquare className="w-12 h-12 text-[#369672]" />

            <Card className="flex-col w-full items-start gap-2 p-6 bg-base-0">
              <div className="flex w-full items-center gap-2.5 relative">
                <div className="inline-flex flex-col h-32 items-start justify-center gap-2.5 px-0 py-[42px] relative">
                  <div className="relative w-[253px] h-[38px] font-body-m-medium text-base-90">
                    Питание
                  </div>
                </div>

                <div className="inline-flex flex-col h-32 items-start justify-center gap-2.5 px-0 py-[42px] relative">
                  <div className="relative w-[253px] h-[38px] mt-[-22.00px] font-body-m-medium text-base-90">
                    Возможность отмены
                  </div>
                  <div className="relative w-[253px] h-[38px] mb-[-20.00px] font-body-m-medium text-base-90">
                    Типы оплаты
                  </div>
                </div>

                <div className="flex flex-col w-72 h-32 items-start justify-center gap-2.5 px-0 py-[42px] relative">
                  <div className="relative w-[253px] h-[38px] mt-[-22.00px] font-h3 text-base-90 text-right whitespace-nowrap">
                    Цена
                  </div>
                  <div className="relative w-[253px] h-[38px] mb-[-20.00px] font-body-m-medium text-base-90 text-right">
                    Число ночей, число гостей
                  </div>
                </div>

                <div className="flex flex-col w-[291px] h-32 items-end justify-center gap-2.5 px-0 py-[42px] relative">
                  <Button className="h-10 bg-[#369672] text-base-0 font-body-s-regular">
                    Отменить бронирование
                  </Button>
                </div>
              </div>

              <div className="flex w-full items-start gap-2.5 relative overflow-hidden">
                <div className="w-[245px] h-[211px] items-center justify-center gap-2.5 px-[41px] py-[18px] flex relative">
                  <div className="w-10 h-10 relative" />
                </div>

                <div className="flex-col w-[928px] h-[211px] items-start gap-2 p-2 flex relative">
                  <div className="flex w-full items-center gap-2.5 px-3 py-2 relative rounded overflow-hidden">
                    <div className="font-h4 text-base-90 text-center">
                      Тип номера
                    </div>
                  </div>

                  <div className="flex w-full items-center gap-2.5 px-3 py-2 relative rounded overflow-hidden">
                    <div className="font-body-m-medium text-base-70 text-center whitespace-nowrap">
                      Площадь, спальные места
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-2 relative self-stretch w-full">
                    <Utensils className="w-6 h-6" />
                    <Bed className="w-6 h-6 text-[#5E5E5E]" />
                    <WheelchairIcon className="w-6 h-6" />
                    <Monitor className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Gradient Overlay */}
      <div className="absolute w-full h-[104px] bottom-[140px] left-0 bg-gradient-to-b from-transparent to-black/35" />

      {/* Bottom Navigation */}
      <footer className="flex w-full h-[140px] items-center justify-center relative bg-base-0">
        <div className="flex w-60 items-center justify-center p-5 relative self-stretch bg-base-0">
          <div className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]">
            <Calendar className="w-[52px] h-[52px]" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 px-[180px] py-0 relative flex-1 self-stretch grow bg-base-0">
          <div className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]">
            <TrainIcon className="w-[52px] h-[52px]" />
          </div>

          <div className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]">
            <Bed className="w-[52px] h-[52px] text-[#6D81D8]" />
          </div>

          <div className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]">
            <TrainIcon className="w-[52px] h-[52px]" />
          </div>
        </div>

        <div className="flex w-60 items-center justify-center p-5 relative self-stretch bg-base-0">
          <div className="flex items-center justify-center p-6 relative flex-1 grow bg-[#6d81d8] rounded-[20px] overflow-hidden">
            <ShoppingCart className="w-[52px] h-[52px]" />
          </div>
        </div>
      </footer>
    </div>
  );
}
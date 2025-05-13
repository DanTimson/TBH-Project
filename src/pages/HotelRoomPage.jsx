
import { Button } from "@/components/ui/Button2";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Bed,
  Calendar,
  Monitor,
  Search as SearchIcon,
  ShoppingCart,
  Train,
  Utensils,
  Wheelchair,
} from "lucide-react";
import React from "react";

// Room data for mapping
const roomData = [
  {
    id: 1,
    type: "Тип номера",
    area: "Площадь, спальные места",
    amenities: ["dining", "bed", "accessibility", "monitor"],
    dining: "Питание",
    cancellation: "Возможность отмены",
    paymentTypes: "Типы оплаты",
    price: "Цена",
    stayInfo: "Число ночей, число гостей",
  },
  {
    id: 2,
    type: "Тип номера",
    area: "Площадь, спальные места",
    amenities: ["dining", "bed", "accessibility", "monitor"],
    dining: "Питание",
    cancellation: "Возможность отмены",
    paymentTypes: "Типы оплаты",
    price: "Цена",
    stayInfo: "Число ночей, число гостей",
  },
];

// Navigation items
const navItems = [
  { icon: Calendar, active: false },
  { icon: Train, active: false },
  { icon: Bed, active: true },
  { icon: Train, active: false },
  { icon: ShoppingCart, active: false },
];

export default function RoomDetailsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-red-5-duplicate">
      {/* Header */}
      <header className="flex w-full h-[140px] items-center justify-center gap-5 p-5 bg-base-0">
        <div className="flex items-center justify-center gap-2 px-3 py-2 rounded w-[52px] h-[52px]">
          <ArrowLeft className="w-8 h-8" />
        </div>

        <div className="flex flex-col items-start gap-1 flex-1 grow">
          <div className="h-16 items-center gap-2 px-3 py-1.5 w-full bg-base-0 rounded border border-solid border-[#8796e8] flex">
            <div className="flex-col items-start gap-0.5 flex-1 grow flex">
              <span className="font-body-m-italic text-base-40 text-[length:var(--body-m-italic-font-size)] tracking-[var(--body-m-italic-letter-spacing)] leading-[var(--body-m-italic-line-height)]">
                Поиск
              </span>
            </div>
            <SearchIcon className="w-6 h-6" />
          </div>
        </div>

        <div className="w-[72px] h-[72px] bg-base-5 rounded-[100px] overflow-hidden">
          <div className="inline-flex flex-col items-center gap-[3px] relative top-[18px] left-3">
            <div className="w-6 h-6 rounded-xl bg-base-30" />
            <div className="w-12 h-12 rounded-3xl bg-base-30" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-start justify-center gap-[24px_12px] px-[102px] py-[90px] flex-1 w-full bg-base-5 overflow-y-auto">
        <div className="flex flex-col w-full max-w-[1178px] items-start gap-6">
          {/* Room Cards */}
          {roomData.map((room) => (
            <Card key={room.id} className="w-full h-[376px] bg-base-0 p-6">
              <div className="flex w-full items-center gap-2.5">
                {/* Left Column - Dining */}
                <div className="inline-flex flex-col h-32 items-start justify-center gap-2.5 py-[42px]">
                  <div className="w-[253px] h-[38px] font-body-m-medium text-base-90 text-[length:var(--body-m-medium-font-size)] tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)]">
                    {room.dining}
                  </div>
                </div>

                {/* Middle Column - Cancellation & Payment */}
                <div className="inline-flex flex-col h-32 items-start justify-center gap-2.5 py-[42px]">
                  <div className="w-[253px] h-[38px] mt-[-22.00px] font-body-m-medium text-base-90 text-[length:var(--body-m-medium-font-size)] tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)]">
                    {room.cancellation}
                  </div>
                  <div className="w-[253px] h-[38px] mb-[-20.00px] font-body-m-medium text-base-90 text-[length:var(--body-m-medium-font-size)] tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)]">
                    {room.paymentTypes}
                  </div>
                </div>

                {/* Right Column - Price */}
                <div className="flex flex-col w-72 h-32 items-start justify-center gap-2.5 py-[42px]">
                  <div className="w-[253px] h-[38px] mt-[-22.00px] font-h3 text-base-90 text-[length:var(--h3-font-size)] text-right tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap">
                    {room.price}
                  </div>
                  <div className="w-[253px] h-[38px] mb-[-20.00px] font-body-m-medium text-base-90 text-[length:var(--body-m-medium-font-size)] text-right tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)]">
                    {room.stayInfo}
                  </div>
                </div>

                {/* Book Button */}
                <div className="flex flex-col w-[291px] h-32 items-end justify-center gap-2.5 py-[42px]">
                  <Button className="w-40 h-10 bg-[#369672] text-base-0 font-body-s-regular">
                    Забронировать
                  </Button>
                </div>
              </div>

              <div className="flex w-full items-start gap-2.5 mb-[-19.00px] overflow-hidden">
                {/* Room Image */}
                <div className="flex w-[245px] h-[211px] items-center justify-center gap-2.5 px-[41px] py-[18px]">
                  <img src="" alt="Room" className="w-10 h-10" />
                </div>

                {/* Room Details */}
                <CardContent className="flex flex-col w-[928px] h-[211px] items-start gap-2 p-2">
                  <div className="flex w-full items-center gap-2.5 px-3 py-2 rounded">
                    <h4 className="font-h4 text-base-90 text-[length:var(--h4-font-size)] text-center tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)]">
                      {room.type}
                    </h4>
                  </div>

                  <div className="flex w-full items-center gap-2.5 px-3 py-2 rounded">
                    <span className="font-body-m-medium text-base-70 text-[length:var(--body-m-medium-font-size)] text-center tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)] whitespace-nowrap">
                      {room.area}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-2 w-full">
                    <Utensils className="w-6 h-6" />
                    <Bed className="w-6 h-6 text-base-70" />
                    <Wheelchair className="w-6 h-6" />
                    <Monitor className="w-6 h-6" />
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute w-full h-[104px] bottom-[140px] left-0 bg-gradient-to-b from-transparent to-black/35" />
      </main>

      {/* Bottom Navigation */}
      <footer className="flex w-full h-[140px] items-center justify-center bg-base-0">
        <div className="flex w-60 items-center justify-center p-5 bg-base-0">
          <div className="flex items-center justify-center p-6 flex-1 bg-base-0 rounded-[20px] border-4 border-solid border-[#6d81d8]">
            <Calendar className="w-[52px] h-[52px]" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 px-[180px] py-0 flex-1 bg-base-0">
          <div className="flex items-center justify-center p-6 flex-1 bg-base-0 rounded-[20px] border-4 border-solid border-[#6d81d8]">
            <Train className="w-[52px] h-[52px]" />
          </div>

          <div className="flex items-center justify-center p-6 flex-1 bg-[#6d81d8] rounded-[20px]">
            <Bed className="w-[52px] h-[52px] text-white" />
          </div>

          <div className="flex items-center justify-center p-6 flex-1 bg-base-0 rounded-[20px] border-4 border-solid border-[#6d81d8]">
            <Train className="w-[52px] h-[52px]" />
          </div>
        </div>

        <div className="flex w-60 items-center justify-center p-5 bg-base-0">
          <div className="flex items-center justify-center p-6 flex-1 bg-base-0 rounded-[20px] border-4 border-solid border-[#6d81d8]">
            <ShoppingCart className="w-[52px] h-[52px]" />
          </div>
        </div>
      </footer>
    </div>
  );
}
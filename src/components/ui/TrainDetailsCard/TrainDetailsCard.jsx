import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Bed as BedIcon,
  CheckSquare as CheckSquareIcon,
  Monitor as MonitorIcon,
  Train as TrainIcon,
  Utensils as UtensilsIcon,
  Wheelchair as WheelchairIcon,
} from "lucide-react";
import React from "react";

const BookingCancellationByAnima = () => {
  // Data for seat listings
  const seatListings = [
    {
      id: 1,
      seatNumber: "00 {00А]",
      price: "Цена",
      type: "Вид места",
      selected: false,
    },
    {
      id: 2,
      seatNumber: "00 {00А]",
      price: "Цена",
      type: "Вид места",
      selected: false,
    },
    {
      id: 3,
      seatNumber: "00 {00А]",
      price: "Цена",
      type: "Вид места",
      selected: false,
    },
    {
      id: 4,
      seatNumber: "00 {00А]",
      price: "Цена",
      type: "Вид места",
      selected: false,
    },
    {
      id: 5,
      seatNumber: "00 {00А]",
      price: "Цена",
      type: "Вид места",
      selected: false,
    },
    {
      id: 6,
      seatNumber: "00 {00А]",
      price: "Цена",
      type: "Вид места",
      selected: false,
    },
    {
      id: 7,
      seatNumber: "00 {00А]",
      price: "Цена",
      type: "Вид места",
      selected: false,
    },
    {
      id: 8,
      seatNumber: "00 {00А]",
      price: "Цена",
      type: "Вид места",
      selected: true,
    },
    {
      id: 9,
      seatNumber: "00 {00А]",
      price: "Цена",
      type: "Вид места",
      selected: false,
    },
    {
      id: 10,
      seatNumber: "00 {00А]",
      price: "Цена",
      type: "Вид места",
      selected: false,
    },
  ];

  // Data for wagon buttons
  const wagonButtons = [
    { id: 1, label: "Вагон 01", active: true },
    { id: 2, label: "Вагон 02", active: false },
    { id: 3, label: "Вагон 03", active: false },
    { id: 4, label: "Вагон 04", active: false },
    { id: 5, label: "Вагон 05", active: false },
    { id: 6, label: "Вагон 06", active: false },
  ];

  return (
    <Card className="w-full max-w-[1180px] mx-auto my-5 shadow-none">
      <div className="relative">
        <div className="absolute w-full h-[60px] top-[75px] left-0 z-[3] bg-gradient-to-b from-transparent to-black/35" />

        <div className="flex items-center justify-end gap-2 px-3 py-2 w-full z-[2]">
          <Button className="w-40 h-10 bg-[#369672] hover:bg-[#2d7d5f] text-base-0">
            Продолжить
          </Button>
        </div>

        <ScrollArea className="w-full h-[300px] px-2 py-1 z-[1] bg-white">
          {seatListings.map((seat) => (
            <div
              key={seat.id}
              className="flex items-center justify-center gap-3 px-4 py-1 w-full"
            >
              <div className="font-body-s-medium text-base-90">
                {seat.seatNumber}
              </div>
              <div className="font-body-s-regular text-base-70">
                {seat.price}
              </div>
              <div className="flex-1 font-body-s-medium text-[#006c4c] text-right">
                {seat.type}
              </div>
              <div className="inline-flex flex-wrap items-center gap-[4px_4px]">
                {seat.selected ? (
                  <CheckSquareIcon className="w-6 h-6" />
                ) : (
                  <Checkbox className="w-6 h-6" />
                )}
              </div>
            </div>
          ))}
        </ScrollArea>

        <div className="flex flex-col items-start gap-2 p-2 w-full z-0">
          <div className="flex items-center gap-2 px-2 py-0 w-full">
            <TrainIcon className="w-6 h-6" />
            <div className="flex items-center gap-2.5 px-3 py-2 flex-1 rounded overflow-hidden">
              <div className="w-fit mt-[-1.00px] font-body-m-regular text-center whitespace-nowrap">
                <span className="text-[#393939]">
                  Номер и наименование поезда
                </span>
                <span className="text-[#4b4b4b]">&nbsp;</span>
                <span className="text-[#369672]">•</span>
                <span className="text-[#4b4b4b]"> Точка отправления </span>
                <span className="text-[#369672]">→</span>
                <span className="text-[#4b4b4b]">
                  {" "}
                  Точка прибытия: отпр. 00:00, 00 месяц, день недели&nbsp;&nbsp;{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full bg-white">
            <div className="flex items-center gap-2.5 px-3 py-2 flex-1 rounded overflow-hidden">
              <div className="w-fit mt-[-1.00px] font-h4 text-center">
                <span className="text-[#393939]">Вагон 00</span>
                <span className="text-[#4b4b4b]">&nbsp;</span>
                <span className="text-[#369672]">•</span>
                <span className="text-[#4b4b4b]"> Класс вагона 00А </span>
                <span className="text-[#369672]">• </span>
                <span className="text-[#4b4b4b]">Перевозчик&nbsp;&nbsp; </span>
              </div>
            </div>
          </div>

          <div className="px-3 py-2 w-full flex items-center gap-2">
            <UtensilsIcon className="w-6 h-6" />
            <BedIcon className="w-6 h-6" />
            <WheelchairIcon className="w-6 h-6" />
            <MonitorIcon className="w-6 h-6" />
          </div>

          <div className="px-3 py-2 w-full flex items-center gap-2 flex-wrap">
            {wagonButtons.map((wagon) => (
              <Button
                key={wagon.id}
                variant={wagon.active ? "default" : "outline"}
                className={`px-3 py-2 ${wagon.active ? "bg-[#369672] hover:bg-[#2d7d5f] text-base-0" : "bg-base-5 text-base-80 hover:bg-base-10"}`}
              >
                {wagon.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BookingCancellationByAnima;

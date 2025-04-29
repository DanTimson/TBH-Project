
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bed, Monitor, Utensils, Wheelchair } from "lucide-react";
import React from "react";

export default function TrainCardDetailsSection() {
  // Train types data
  const trainTypes = [
    { name: "Фирменный", color: "bg-emerald-600 text-white" },
    { name: "Скоростной", color: "bg-emerald-600 text-white" },
    { name: "Двухэтажный", color: "bg-emerald-600 text-white" },
  ];

  // Cabin class data
  const cabinClasses = [
    { type: "Класс вагона", seats: "Количество мест", price: "Цена" },
    { type: "Класс вагона", seats: "Количество мест", price: "Цена" },
    { type: "Класс вагона", seats: "Количество мест", price: "Цена" },
    { type: "Класс вагона", seats: "Количество мест", price: "Цена" },
    { type: "Класс вагона", seats: "Количество мест", price: "Цена" },
  ];

  // Service icons
  const serviceIcons = [
    { icon: <Utensils className="h-6 w-6" />, label: "Food service" },
    { icon: <Bed className="h-6 w-6" />, label: "Sleeping accommodations" },
    {
      icon: <Wheelchair className="h-6 w-6" />,
      label: "Wheelchair accessible",
    },
    { icon: <Monitor className="h-6 w-6" />, label: "Entertainment system" },
  ];

  return (
    <Card className="w-full border-0 shadow-none">
      <CardContent className="p-0">
        <div className="flex items-center w-full">
          {/* Train journey details section */}
          <div className="flex-1 flex flex-col h-[148px] p-2 bg-white border-r-2 border-base-50">
            {/* Time and duration section */}
            <div className="flex items-start justify-center gap-2 p-2 flex-1">
              <div className="font-h2 text-base-90 text-center whitespace-nowrap">
                00:00
              </div>

              <div className="flex flex-col items-center justify-center gap-2 px-4 py-2 flex-1">
                <div className="relative w-full flex items-center justify-center">
                  <ArrowRight className="h-4 w-full text-base-70" />
                </div>
                <div className="font-caption-medium text-base-70 text-center whitespace-nowrap">
                  00 д 00 ч 00 мин
                </div>
              </div>

              <div className="font-h2 text-base-90 text-center whitespace-nowrap">
                00:00
              </div>
            </div>

            {/* Station information */}
            <div className="flex items-center justify-between px-2.5 py-1 w-full">
              <div className="font-caption-regular-none text-base-70 text-center whitespace-nowrap">
                Вокзал отправления
              </div>
              <div className="flex-1" />
              <div className="font-caption-regular-none text-base-70 text-center whitespace-nowrap">
                Вокзал прибытия
              </div>
            </div>

            <div className="flex items-center justify-between px-2.5 w-full">
              <div className="font-body-s-regular text-base-80 text-center">
                Город и станция отправления
              </div>
              <div className="flex-1" />
              <div className="font-body-s-regular text-base-80 text-center">
                Город и станция прибытия
              </div>
            </div>

            {/* Service icons */}
            <div className="flex items-center gap-2 p-2 w-full">
              {serviceIcons.map((service, index) => (
                <div key={index} aria-label={service.label}>
                  {service.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Cabin classes and pricing section */}
          <div className="flex-1 flex flex-col h-[148px] gap-2 px-2 py-1 bg-white">
            {cabinClasses.map((cabin, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-4 py-0.5 w-full"
              >
                <div className="flex-1 font-body-s-medium text-base-90">
                  {cabin.type}
                </div>
                <div className="flex-1 font-body-s-regular text-base-70 text-right">
                  {cabin.seats}
                </div>
                <div className="flex-1 font-body-s-medium text-[#006c4c] text-right">
                  {cabin.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
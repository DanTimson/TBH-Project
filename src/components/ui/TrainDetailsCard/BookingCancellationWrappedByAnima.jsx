
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Train, Tv, Utensils, Wheelchair } from "lucide-react";
import React from "react";

const BookingCancellationWrapperByAnima = () => {
  // Data for carriage selection
  const carriages = [
    { id: "01", label: "Вагон 01", active: true },
    { id: "02", label: "Вагон 02", active: false },
    { id: "03", label: "Вагон 03", active: false },
    { id: "04", label: "Вагон 04", active: false },
    { id: "05", label: "Вагон 05", active: false },
    { id: "06", label: "Вагон 06", active: false },
  ];

  return (
    <Card className="flex flex-col w-full items-center justify-center gap-2 p-6 bg-base-0">
      <div className="flex items-center justify-end gap-2 px-3 py-2 relative self-stretch w-full">
        <Button className="w-40 h-10 bg-[#369672] text-base-0">
          Оформить возврат
        </Button>
      </div>

      <Card className="flex flex-col w-full items-center gap-2 px-2 py-1 bg-white">
        <CardContent className="flex items-center justify-center gap-3 px-4 py-1 w-full">
          <div className="relative w-fit mt-[-1.00px] font-body-s-medium font-[number:var(--body-s-medium-font-weight)] text-base-90 text-[length:var(--body-s-medium-font-size)] tracking-[var(--body-s-medium-letter-spacing)] leading-[var(--body-s-medium-line-height)] [font-style:var(--body-s-medium-font-style)]">
            Место 00 {"{"}00А]
          </div>
          <div className="relative w-fit mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-base-70 text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]">
            Цена
          </div>
          <div className="relative flex-1 mt-[-1.00px] font-body-s-medium font-[number:var(--body-s-medium-font-weight)] text-[#006c4c] text-[length:var(--body-s-medium-font-size)] text-right tracking-[var(--body-s-medium-letter-spacing)] leading-[var(--body-s-medium-line-height)] [font-style:var(--body-s-medium-font-style)]">
            Вид места
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full">
        <div className="flex items-center gap-2 px-2 py-0 relative self-stretch w-full">
          <Train className="w-6 h-6" />
          <div className="flex items-center gap-2.5 px-3 py-2 relative flex-1 grow rounded overflow-hidden">
            <div className="relative w-fit mt-[-1.00px] font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-base-80 text-[length:var(--body-m-regular-font-size)] text-center tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] whitespace-nowrap [font-style:var(--body-m-regular-font-style)]">
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
                Точка отправления{" "}
              </span>
              <span className="text-[#369672] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                →
              </span>
              <span className="text-[#4b4b4b] font-body-m-regular [font-style:var(--body-m-regular-font-style)] font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
                {" "}
                Точка прибытия: отпр. 00:00, 00 месяц, день недели&nbsp;&nbsp;{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 relative self-stretch w-full bg-white">
          <div className="flex items-center gap-2.5 px-3 py-2 relative flex-1 grow rounded overflow-hidden">
            <div className="relative w-fit mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-base-80 text-[length:var(--h4-font-size)] text-center tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
              <span className="text-[#393939] font-h4 [font-style:var(--h4-font-style)] font-[number:var(--h4-font-weight)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] text-[length:var(--h4-font-size)]">
                Вагон 00
              </span>
              <span className="text-[#4b4b4b] font-h4 [font-style:var(--h4-font-style)] font-[number:var(--h4-font-weight)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] text-[length:var(--h4-font-size)]">
                &nbsp;
              </span>
              <span className="text-[#369672] font-h4 [font-style:var(--h4-font-style)] font-[number:var(--h4-font-weight)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] text-[length:var(--h4-font-size)]">
                •
              </span>
              <span className="text-[#4b4b4b] font-h4 [font-style:var(--h4-font-style)] font-[number:var(--h4-font-weight)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] text-[length:var(--h4-font-size)]">
                {" "}
                Класс вагона 00А{" "}
              </span>
              <span className="text-[#369672] font-h4 [font-style:var(--h4-font-style)] font-[number:var(--h4-font-weight)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] text-[length:var(--h4-font-size)]">
                •{" "}
              </span>
              <span className="text-[#4b4b4b] font-h4 [font-style:var(--h4-font-style)] font-[number:var(--h4-font-weight)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] text-[length:var(--h4-font-size)]">
                Перевозчик&nbsp;&nbsp;{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="px-3 py-2 self-stretch w-full flex items-center gap-2 relative">
          <Utensils className="w-6 h-6" />
          <Bed className="w-6 h-6" />
          <Wheelchair className="w-6 h-6" />
          <Tv className="w-6 h-6" />
        </div>

        <div className="px-3 py-2 self-stretch w-full flex items-center gap-2 relative">
          {carriages.map((carriage) => (
            <Button
              key={carriage.id}
              variant={carriage.active ? "default" : "outline"}
              className={`px-3 py-2 ${
                carriage.active
                  ? "bg-[#369672] text-base-0"
                  : "bg-base-5 text-base-80"
              }`}
            >
              {carriage.label}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};

import { Badge } from "@/components/ui/badge";
import { Share2Icon, TrainIcon } from "lucide-react";
import React from "react";

export default function TrainCardHeaderSection() {
  // Train type badges data
  const trainTypes = [
    { id: 1, label: "Фирменный" },
    { id: 2, label: "Скоростной" },
    { id: 3, label: "Двухэтажный" },
  ];

  // Train information data
  const trainInfo = {
    trainNumber: "Номер и наименование поезда",
    carrier: "Перевозчик",
    departurePoint: "Точка отправления",
    arrivalPoint: "Точка прибытия",
    route: "Маршрут",
  };

  return (
    <div className="flex flex-col items-start gap-2 p-2 relative w-full">
      <div className="flex items-center gap-2 relative self-stretch w-full bg-white">
        {trainTypes.map((type) => (
          <Badge
            key={type.id}
            className="h-[35px] px-3 py-2 bg-[#369672] text-base-0 rounded font-body-m-regular text-white"
          >
            {type.label}
          </Badge>
        ))}
      </div>

      <div className="flex items-center gap-2 px-2 py-0 relative self-stretch w-full">
        <TrainIcon className="w-6 h-6" />
        <div className="flex items-center gap-2.5 px-3 py-2 relative flex-1 grow rounded overflow-hidden">
          <div className="relative w-fit mt-[-1.00px] font-body-m-regular text-base text-center tracking-[0] leading-normal whitespace-nowrap">
            <span className="text-[#393939] font-body-m-regular font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
              {trainInfo.trainNumber}
            </span>

            <span className="text-[#4b4b4b] font-body-m-regular font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
              &nbsp;
            </span>

            <span className="text-[#369672] font-body-m-regular font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
              •
            </span>

            <span className="text-[#4b4b4b] font-body-m-regular font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
              {" "}
              {trainInfo.carrier}{" "}
            </span>

            <span className="text-[#369672] font-body-m-regular font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
              •{" "}
            </span>

            <span className="text-[#4b4b4b] font-body-m-regular font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
              {trainInfo.departurePoint}{" "}
            </span>

            <span className="text-[#369672] font-body-m-regular font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
              →
            </span>

            <span className="text-[#4b4b4b] font-body-m-regular font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
              {" "}
              {trainInfo.arrivalPoint}&nbsp;&nbsp;{" "}
            </span>

            <span className="font-body-m-medium font-[number:var(--body-m-medium-font-weight)] text-[#369672] tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)] text-[length:var(--body-m-medium-font-size)]">
              {trainInfo.route}
            </span>

            <span className="text-[#4b4b4b] font-body-m-regular font-[number:var(--body-m-regular-font-weight)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] text-[length:var(--body-m-regular-font-size)]">
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </div>

        <Share2Icon className="w-6 h-6" />
      </div>
    </div>
  );
}
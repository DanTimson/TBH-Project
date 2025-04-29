import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Monitor, Utensils, Wheelchair } from "lucide-react";
import React from "react";

// Room data for mapping
const roomData = [
  {
    id: 1,
    mealInfo: "Питание",
    cancellationInfo: "Возможность отмены",
    paymentTypes: "Типы оплаты",
    price: "Цена",
    stayInfo: "Число ночей, число гостей",
    buttonText: "Забронировать",
    roomType: "Тип номера",
    roomDetails: "Площадь, спальные места",
    amenities: ["dining", "bed", "accessibility", "entertainment"],
  },
  {
    id: 2,
    mealInfo: "Питание",
    cancellationInfo: "Возможность отмены",
    paymentTypes: "Типы оплаты",
    price: "Цена",
    stayInfo: "Число ночей, число гостей",
    buttonText: "Отменить бронирование",
    roomType: "Тип номера",
    roomDetails: "Площадь, спальные места",
    amenities: ["dining", "bed", "accessibility", "entertainment"],
  },
];

export default function Box() {
  return (
    <div className="w-full max-w-[1220px] h-auto rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
      {roomData.map((room) => (
        <Card key={room.id} className="m-5 bg-base-0 border-none">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <div className="flex-1 min-w-[250px]">
                <div className="font-body-m-medium text-base-90">
                  {room.mealInfo}
                </div>
              </div>

              <div className="flex-1 min-w-[250px] flex flex-col gap-2">
                <div className="font-body-m-medium text-base-90">
                  {room.cancellationInfo}
                </div>
                <div className="font-body-m-medium text-base-90">
                  {room.paymentTypes}
                </div>
              </div>

              <div className="flex-1 min-w-[250px] flex flex-col gap-2 text-right">
                <div className="font-h3 text-base-90">{room.price}</div>
                <div className="font-body-m-medium text-base-90">
                  {room.stayInfo}
                </div>
              </div>

              <div className="flex-1 min-w-[200px] flex justify-end">
                <Button className="bg-[#369672] hover:bg-[#2d7d5f] text-base-0 font-body-s-regular">
                  {room.buttonText}
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full sm:w-[245px] flex items-center justify-center py-[18px] px-[41px]">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              </div>

              <div className="flex-1 p-2 flex flex-col gap-2">
                <div className="px-3 py-2 rounded">
                  <h4 className="font-h4 text-base-90">{room.roomType}</h4>
                </div>

                <div className="px-3 py-2 rounded">
                  <p className="font-body-m-medium text-base-70 whitespace-nowrap">
                    {room.roomDetails}
                  </p>
                </div>

                <div className="flex items-center gap-2 px-3 py-2">
                  <Utensils className="w-6 h-6" />
                  <Bed className="w-6 h-6" />
                  <Wheelchair className="w-6 h-6" />
                  <Monitor className="w-6 h-6" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

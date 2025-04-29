import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";
import React from "react";

// Hotel data for mapping
const hotelData = {
  name: "Название отеля",
  address: "Адрес отеля",
  distanceToCenter: "Дистанция до центра",
  roomType: "Тип номера",
  breakfast: "Завтрак",
  price: "Цена",
  stayInfo: "Число ночей, число гостей",
  badges: [
    { id: 1, text: "Бесплатная отмена" },
    { id: 2, text: "Оплата на месте" },
  ],
};

const HotelCard = () => {
  return (
    <Card className="flex w-full max-w-[1180px] h-[347px] bg-base-0 border-base-10">
      <CardContent className="flex items-center gap-2 p-0 w-full">
        {/* Hotel Image */}
        <div className="flex items-center justify-center p-[117px] py-[153px]">
          <ImageIcon className="w-10 h-10 text-base-60" />
        </div>

        {/* Hotel Information */}
        <div className="flex flex-col w-[562px] h-[347px] items-start gap-2 p-6">
          <h4 className="w-full font-h4 text-base-90 text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)]">
            {hotelData.name}
          </h4>

          {hotelData.address && (
            <p className="w-full font-body-m-medium text-base-90 text-[length:var(--body-m-medium-font-size)] tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)]">
              {hotelData.address}
            </p>
          )}

          {hotelData.distanceToCenter && (
            <p className="w-full font-body-m-medium text-base-90 text-[length:var(--body-m-medium-font-size)] tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)]">
              {hotelData.distanceToCenter}
            </p>
          )}

          {hotelData.roomType && (
            <p className="w-full font-body-m-medium text-base-90 text-[length:var(--body-m-medium-font-size)] tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)]">
              {hotelData.roomType}
            </p>
          )}

          {hotelData.breakfast && (
            <p className="w-full font-body-m-medium text-base-90 text-[length:var(--body-m-medium-font-size)] tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)]">
              {hotelData.breakfast}
            </p>
          )}

          {/* Badges Section */}
          <div className="flex h-[69px] items-center gap-2 self-stretch w-full bg-white border-t border-base-10 mt-auto">
            {hotelData.badges.map((badge) => (
              <Badge
                key={badge.id}
                className="h-[35px] px-3 py-2 bg-[#369672] text-base-0 rounded font-body-m-regular"
              >
                {badge.text}
              </Badge>
            ))}
          </div>
        </div>

        {/* Price Information */}
        <div className="flex flex-col w-[279px] h-full items-end justify-center gap-2 p-6 border-l border-base-10">
          <h3 className="w-full text-right font-h3 text-base-90 text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)]">
            {hotelData.price}
          </h3>

          <p className="w-full text-right font-body-m-medium text-base-90 text-[length:var(--body-m-medium-font-size)] tracking-[var(--body-m-medium-letter-spacing)] leading-[var(--body-m-medium-line-height)]">
            {hotelData.stayInfo}
          </p>

          <Button className="w-40 h-10 mt-auto bg-[#369672] text-base-0 font-body-s-regular">
            Выбрать номер
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelCard;

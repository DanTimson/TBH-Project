import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Separator } from "../components/ui/Separator";

export default function HotelPage() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Страница отелей</h1>
      <div
      className="flex flex-col min-h-screen items-center justify-center relative bg-red-5-duplicate"
      data-model-id="479:7198"
      >
        <div className="flex items-start justify-center gap-[24px_12px] px-[102px] py-[90px] relative flex-1 self-stretch w-full grow bg-base-5 overflow-y-scroll">
          <div className="w-full max-w-[1178px] gap-6 flex flex-col items-start relative">
            <Card className="w-full h-[376px] flex flex-row items-center p-0 overflow-hidden">
              <div className="flex items-center justify-center p-10 h-full">
                <img
                  className="w-10 h-10"
                  alt="Hotel image"
                  src="https://c.animaapp.com/rQWH6U9r/img/image.svg"
                />
              </div>

              <CardContent className="flex flex-col h-full flex-1 p-6 gap-2">
                <h4 className="font-h4 text-base-90">Название отеля</h4>

                <p className="font-body-m-medium text-base-90">Адрес отеля</p>

                <p className="font-body-m-medium text-base-90">
                  Дистанция до центра
                </p>

                <p className="font-body-m-medium text-base-90">Тип номера</p>

                <p className="font-body-m-medium text-base-90">Завтрак</p>

                <div className="flex mt-auto pt-4 gap-2 border-t border-base-10">
                  <Badge className="bg-[#369672] hover:bg-[#369672] text-base-0 font-body-m-regular px-3 py-2 h-[35px]">
                    Бесплатная отмена
                  </Badge>

                  <Badge className="bg-[#369672] hover:bg-[#369672] text-base-0 font-body-m-regular px-3 py-2 h-[35px]">
                    Оплата на месте
                  </Badge>
                </div>
              </CardContent>

              <Separator orientation="vertical" className="h-full" />

              <div className="flex flex-col h-full p-6 w-[279px] items-end justify-center gap-2">
                <h3 className="font-h3 text-base-90 text-right">Цена</h3>

                <p className="font-body-m-medium text-base-90 text-right">
                  Число ночей, число гостей
                </p>

                <Button className="bg-[#369672] hover:bg-[#369672]/90 text-base-0 mt-auto">
                  Выбрать номер
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Link 
        to="/" 
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        ← На главную
      </Link>
    </div>
  );
}
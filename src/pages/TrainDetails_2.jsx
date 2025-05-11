import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Bed,
  Monitor,
  Search as SearchIcon,
  ShoppingCart,
  Train as TrainIcon,
  Utensils,
  Wheelchair as WheelchairIcon,
} from "lucide-react";
import React from "react";

export default function TrainDetailsPage() {
  // Seat data for mapping
  const seatData = [
    {
      id: 1,
      number: "26",
      carriage: "2Ф",
      price: "3636 ₽",
      position: "Верхнее",
      checked: false,
    },
    {
      id: 2,
      number: "81",
      carriage: "2Ф",
      price: "3636 ₽",
      position: "Нижнее",
      checked: true,
    },
    {
      id: 3,
      number: "00",
      carriage: "00А",
      price: "Цена",
      position: "Вид места",
      checked: false,
    },
    {
      id: 4,
      number: "00",
      carriage: "00А",
      price: "Цена",
      position: "Вид места",
      checked: false,
    },
    {
      id: 5,
      number: "00",
      carriage: "00А",
      price: "Цена",
      position: "Вид места",
      checked: false,
    },
    {
      id: 6,
      number: "00",
      carriage: "00А",
      price: "Цена",
      position: "Вид места",
      checked: false,
    },
    {
      id: 7,
      number: "00",
      carriage: "00А",
      price: "Цена",
      position: "Вид места",
      checked: false,
    },
    {
      id: 8,
      number: "00",
      carriage: "00А",
      price: "Цена",
      position: "Вид места",
      checked: false,
    },
    {
      id: 9,
      number: "00",
      carriage: "00А",
      price: "Цена",
      position: "Вид места",
      checked: false,
    },
    {
      id: 10,
      number: "00",
      carriage: "00А",
      price: "Цена",
      position: "Вид места",
      checked: false,
    },
  ];

  // Carriage options
  const carriageOptions = [
    { id: 1, number: "03" },
    { id: 2, number: "06" },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-red-5-duplicate">
      {/* Header */}
      <header className="flex w-full h-[140px] items-center justify-center gap-5 p-5 bg-base-0">
        <Button variant="ghost" className="w-[52px] h-[52px] p-0 rounded-md">
          <ArrowLeft className="w-8 h-8" />
        </Button>

        <div className="flex flex-col items-start gap-1 relative flex-1 grow">
          <div className="h-16 items-center gap-2 px-3 py-1.5 self-stretch w-full bg-base-0 rounded overflow-hidden border border-solid border-[#8796e8] flex relative">
            <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
              <span className="font-body-m-italic font-[number:var(--body-m-italic-font-weight)] [font-style:var(--body-m-italic-font-style)] text-base-40 text-[length:var(--body-m-italic-font-size)] tracking-[var(--body-m-italic-letter-spacing)] leading-[var(--body-m-italic-line-height)] whitespace-nowrap">
                Поиск
              </span>
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
      <main className="flex flex-col items-center gap-6 px-[102px] py-[90px] relative flex-1 self-stretch w-full grow bg-base-5">
        <div className="flex flex-col w-full max-w-[1178px] items-start gap-6 relative">
          <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto] mb-[-80px]">
            <Card className="flex flex-col w-full max-w-[1180px] h-[605px] items-center justify-center gap-2 p-6 relative bg-base-0">
              {/* Gradient overlay */}
              <div className="absolute w-full h-[60px] top-[75px] left-0 z-[3] [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.35)_100%)]" />

              {/* Continue button */}
              <div className="flex items-center justify-end gap-2 px-3 py-2 relative self-stretch w-full flex-[0_0_auto] mt-[-13px] z-[2]">
                <Button className="w-40 h-10 bg-[#369672] text-base-0 rounded">
                  Продолжить
                </Button>
              </div>

              {/* Seat selection list */}
              <ScrollArea className="w-[1132px] h-[300px] px-2 py-1 z-[1] bg-white">
                {seatData.map((seat) => (
                  <div
                    key={seat.id}
                    className="flex items-center justify-center gap-3 px-4 py-1 relative self-stretch w-full"
                  >
                    <div className="font-body-s-medium font-[number:var(--body-s-medium-font-weight)] text-base-90 text-[length:var(--body-s-medium-font-size)] tracking-[var(--body-s-medium-letter-spacing)] leading-[var(--body-s-medium-line-height)] [font-style:var(--body-s-medium-font-style)]">
                      Место {seat.number} {"{{"}
                      {seat.carriage}]
                    </div>
                    <div className="font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-base-70 text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]">
                      {seat.price}
                    </div>
                    <div className="flex-1 font-body-s-medium font-[number:var(--body-s-medium-font-weight)] text-[#006c4c] text-[length:var(--body-s-medium-font-size)] text-right tracking-[var(--body-s-medium-letter-spacing)] leading-[var(--body-s-medium-line-height)] [font-style:var(--body-s-medium-font-style)]">
                      {seat.position}
                    </div>
                    <Checkbox checked={seat.checked} />
                  </div>
                ))}
              </ScrollArea>

              {/* Train info */}
              <CardContent className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] mb-[-13px] z-0">
                <div className="flex items-center gap-2 px-2 py-0 relative self-stretch w-full">
                  <TrainIcon className="w-6 h-6" color="#369672" />
                  <div className="flex items-center gap-2.5 px-3 py-2 relative flex-1 grow rounded overflow-hidden">
                    <div className="font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-center tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] whitespace-nowrap [font-style:var(--body-m-regular-font-style)]">
                      <span className="text-[#393939]">063В</span>
                      <span className="text-[#4b4b4b]">&nbsp;</span>
                      <span className="text-[#369672]">•</span>
                      <span className="text-[#4b4b4b]">
                        {" "}
                        Москва ВК Восточный{" "}
                      </span>
                      <span className="text-[#369672]">→</span>
                      <span className="text-[#4b4b4b]">
                        {" "}
                        Нижний Новгород (Стригино): отпр. 01:26, 1 апр.,
                        вт&nbsp;&nbsp;{" "}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Carriage info */}
                <div className="flex items-center gap-2 relative self-stretch w-full bg-white">
                  <div className="flex items-center gap-2.5 px-3 py-2 relative flex-1 grow rounded overflow-hidden">
                    <div className="font-h4 font-[number:var(--h4-font-weight)] text-center tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                      <span className="text-[#393939]">Вагон 03</span>
                      <span className="text-[#4b4b4b]">&nbsp;</span>
                      <span className="text-[#369672]">•</span>
                      <span className="text-[#4b4b4b]"> Купе 2Ф </span>
                      <span className="text-[#369672]">• </span>
                      <span className="text-[#4b4b4b]">ФПК&nbsp;&nbsp; </span>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="px-3 py-2 self-stretch w-full flex items-center gap-2 relative">
                  <Utensils className="w-6 h-6" />
                  <Bed className="w-6 h-6" color="#5E5E5E" />
                  <WheelchairIcon className="w-6 h-6" />
                  <Monitor className="w-6 h-6" />
                </div>

                {/* Carriage selection */}
                <div className="px-3 py-2 self-stretch w-full flex items-center gap-2 relative">
                  {carriageOptions.map((carriage) => (
                    <Badge
                      key={carriage.id}
                      variant="outline"
                      className="inline-flex items-center justify-center gap-2.5 px-3 py-2 bg-base-5 rounded"
                    >
                      <span className="font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-base-80 text-[length:var(--body-m-regular-font-size)] text-center tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] whitespace-nowrap [font-style:var(--body-m-regular-font-style)]">
                        Вагон {carriage.number}
                      </span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute w-full h-[104px] bottom-0 left-0 [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.35)_100%)]" />
      </main>

      {/* Bottom navigation */}
      <footer className="flex w-full h-[140px] items-center justify-center bg-base-0">
        <Tabs
          defaultValue="train"
          className="w-full flex items-center justify-between"
        >
          <div className="flex w-60 items-center justify-center p-5 relative">
            <TabsTrigger
              value="calendar"
              className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]"
            >
              <ArrowLeft className="w-[52px] h-[52px]" />
            </TabsTrigger>
          </div>

          <TabsList className="flex items-center justify-center gap-6 px-[180px] py-0 relative flex-1 self-stretch grow bg-base-0">
            <TabsTrigger
              value="train"
              className="flex items-center justify-center p-6 relative flex-1 grow bg-[#6d81d8] rounded-[20px] overflow-hidden"
            >
              <TrainIcon className="w-[52px] h-[52px]" color="white" />
            </TabsTrigger>

            <TabsTrigger
              value="bed"
              className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]"
            >
              <Bed className="w-[52px] h-[52px]" color="#6D81D8" />
            </TabsTrigger>

            <TabsTrigger
              value="train2"
              className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]"
            >
              <TrainIcon className="w-[52px] h-[52px]" color="#6D81D8" />
            </TabsTrigger>
          </TabsList>

          <div className="flex w-60 items-center justify-center p-5 relative">
            <TabsTrigger
              value="cart"
              className="flex items-center justify-center p-6 relative flex-1 grow bg-base-0 rounded-[20px] overflow-hidden border-4 border-solid border-[#6d81d8]"
            >
              <ShoppingCart className="w-[52px] h-[52px]" />
            </TabsTrigger>
          </div>
        </Tabs>
      </footer>
    </div>
  );
}

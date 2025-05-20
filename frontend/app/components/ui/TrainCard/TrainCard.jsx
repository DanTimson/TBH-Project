import { Card, CardContent } from "../Card";
import React from "react";
import TrainDetails from "./TrainDetails";
import TrainHeader from "./TrainHeader";

export default function TrainCard({
  trainTags = ["Фирменный", "Скоростной", "Двухэтажный"],
  trainNumber = "Номер и наименование поезда",
  carrier = "Перевозчик",
  departurePoint = "Точка отправления",
  arrivalPoint = "Точка прибытия",
  route = "Маршрут",
  departureTime = "00:00",
  arrivalTime = "00:00",
  duration = "00 д 00 ч 00 мин",
  departureStation = "Вокзал отправления",
  arrivalStation = "Вокзал прибытия",
  departureCity = "Город и станция отправления",
  arrivalCity = "Город и станция прибытия",
  cabinClasses = [
    { type: "Luxury", seats: "4", price: "₽15,000" },
    { type: "First Class", seats: "8", price: "₽10,000" },
    { type: "Standard", seats: "12", price: "₽7,500" }
  ]
}) {
  return (
    <Card className="train-card">
      <CardContent className="train-card-content">
        <TrainHeader 
          trainTags={trainTags}
          trainNumber={trainNumber}
          carrier={carrier}
          departurePoint={departurePoint}
          arrivalPoint={arrivalPoint}
          route={route}
        />
        <TrainDetails 
          departureTime={departureTime}
          arrivalTime={arrivalTime}
          duration={duration}
          departureStation={departureStation}
          arrivalStation={arrivalStation}
          departureCity={departureCity}
          arrivalCity={arrivalCity}
          cabinClasses={cabinClasses}
        />
      </CardContent>
    </Card>
  );
}
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { Calendar, User, ChevronDown, X } from "lucide-react";
import avatar from '../assets/14.jpg'

export default function UserProfile() {
  const navigate = useNavigate();

  // Пример текущих бронирований с детальной информацией
  const currentBookings = [
    {
      id: 1,
      title: "Билет на поезд №010А",
      date: "2025-04-10",
      type: "train",
      trainNumber: "010А",
      cityFrom: "Москва",
      cityTo: "Санкт-Петербург",
      carriage: 5,
      seat: 36,
      price: "2 800 ₽",
      departureTime: "17:30", // Время отправления
    },
    {
      id: 2,
      title: "Отель «Уютный»",
      date: "2025-04-12",
      type: "hotel",
      hotelName: "Уютный",
      roomType: "Стандартный двухместный",
      checkInDate: "2025-04-12",
      checkOutDate: "2025-04-15",
      checkInTime: "14:00", // Время заезда
      checkOutTime: "12:00", // Время выезда
      price: "5 600 ₽ / ночь",
    },
    {
      id: 3,
      title: "Билет на поезд №730",
      date: "2025-04-15",
      type: "train",
      trainNumber: "730",
      cityFrom: "Новосибирск",
      cityTo: "Иркутск",
      carriage: 3,
      seat: 12,
      price: "5 800 ₽",
      departureTime: "09:15", // Время отправления
    },
  ];

  const [selectedBooking, setSelectedBooking] = React.useState(null);

  return (
    <div className="flex flex-col min-h-screen p-6 bg-base-5">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <Button variant="primary" onClick={() => navigate(-1)} text="Назад" />
        <h1 className="text-xl font-semibold">Личный кабинет</h1>
      </header>

      {/* User Info */}
      <section className="mb-8">
        <div className="mb-4 w-[64px] h-[64px]">
            <img
            src={avatar}
            alt="Аватар пользователя"
            className="w-full h-full rounded-full object-cover border-2 border-base-5"
            />
        </div>
        <p className="text-sm text-base-70">Протопоп Протопопович</p>
        <p className="text-xs text-base-50">protopp@yandex.ru</p>
      </section>

      {/* Current Bookings */}
      <section>
        <h2 className="text-lg font-medium mb-4">Текущие покупки и бронирования</h2>
        {currentBookings.length > 0 ? (
          <ul className="space-y-3">
            {currentBookings.map((booking) => (
              <li
                key={booking.id}
                className="bg-base-0 p-3 rounded-md shadow-sm flex items-center gap-3 cursor-pointer hover:bg-base-10 transition"
                onClick={() =>
                  selectedBooking?.id === booking.id
                    ? setSelectedBooking(null)
                    : setSelectedBooking(booking)
                }
              >
                <Calendar size={18} className="text-primary" />
                <div className="flex-1">
                  <p className="text-sm">{booking.title}</p>
                  <p className="text-xs text-base-50">{booking.date}</p>
                </div>
                {selectedBooking?.id === booking.id ? (
                  <X size={18} className="text-base-50" />
                ) : (
                  <ChevronDown size={18} className="text-base-50" />
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-base-50">Нет активных бронирований</p>
        )}

        {/* Детали выбранного бронирования */}
        {selectedBooking && (
          <div className="mt-4 p-4 bg-base-0 rounded-md shadow-sm animate-fade-in">
            {selectedBooking.type === "train" ? (
              <div className="space-y-2">
                <p><strong>Поезд:</strong> {selectedBooking.trainNumber}</p>
                <p><strong>Маршрут:</strong> {selectedBooking.cityFrom} → {selectedBooking.cityTo}</p>
                <p><strong>Дата отправления:</strong> {selectedBooking.date}</p>
                <p><strong>Время отправления:</strong> {selectedBooking.departureTime}</p>
                <p><strong>Вагон:</strong> {selectedBooking.carriage}, <strong>Место:</strong> {selectedBooking.seat}</p>
                <p><strong>Стоимость:</strong> {selectedBooking.price}</p>
              </div>
            ) : (
              <div className="space-y-2">
                <p><strong>Отель:</strong> {selectedBooking.hotelName}</p>
                <p><strong>Тип номера:</strong> {selectedBooking.roomType}</p>
                <p><strong>Дата заезда:</strong> {selectedBooking.checkInDate}</p>
                <p><strong>Время заезда:</strong> {selectedBooking.checkInTime}</p>
                <p><strong>Дата выезда:</strong> {selectedBooking.checkOutDate}</p>
                <p><strong>Время выезда:</strong> {selectedBooking.checkOutTime}</p>
                <p><strong>Стоимость:</strong> {selectedBooking.price}</p>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
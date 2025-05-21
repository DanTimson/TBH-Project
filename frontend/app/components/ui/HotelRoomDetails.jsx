import React from 'react';
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Utensils, Wheelchair, Wifi, Tv } from "lucide-react";

const amenityIcons = {
  wifi: <Wifi className="w-5 h-5" />,
  tv: <Tv className="w-5 h-5" />,
  wheelchair: <Wheelchair className="w-5 h-5" />,
  dining: <Utensils className="w-5 h-5" />,
  bed: <Bed className="w-5 h-5" />
};

const HotelRoomDetails = ({ rooms, onBook, hotelId }) => {
  const formatPrice = (price) => 
    new Intl.NumberFormat('ru-RU', { 
      style: 'currency', 
      currency: 'RUB',
      maximumFractionDigits: 0 
    }).format(price);

  return (
    <div className="w-full max-w-[1220px] mx-auto">
      {rooms.map((room) => (
        <Card key={room.room_type_id} className="mb-6 bg-base-0 border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex-1 min-w-[250px]">
                <h3 className="text-xl font-semibold">{room.name}</h3>
                <p className="text-gray-600 mt-1">{room.max_occupancy} гостя</p>
              </div>

              <div className="flex-1 min-w-[250px]">
                <div className="flex gap-2 flex-wrap">
                  {room.amenities?.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded">
                      {amenityIcons[amenity.icon]}
                      <span className="text-sm">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 min-w-[200px] text-right">
                <div className="text-2xl font-bold text-[#369672]">
                  {formatPrice(room.price_per_night)}
                  <span className="text-sm font-normal ml-1">/ночь</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">
                    {room.free_cancellation ? 'Бесплатная отмена' : 'Отмена невозможна'}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {room.payment_options?.join(' • ')}
                  </p>
                </div>
                <Button 
                  className="bg-[#369672] hover:bg-[#2d7d5f] text-white"
                  onClick={() => onBook(room.room_type_id)}
                >
                  Забронировать
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HotelRoomDetails;

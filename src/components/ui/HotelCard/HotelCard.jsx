import { Badge } from "../Badge";
import Button from "../Button";
import { Card, CardContent } from "../Card";
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
    <Card className="hotel-card">
      <CardContent className="hotel-card-content">
        {/* Hotel Image */}
        <div className="hotel-image-container">
          <ImageIcon className="hotel-image-icon" />
        </div>

        {/* Hotel Information */}
        <div className="hotel-info-section">
          <h4 className="hotel-title">{hotelData.name}</h4>

          {hotelData.address && <p className="hotel-info-text">{hotelData.address}</p>}
          {hotelData.distanceToCenter && <p className="hotel-info-text">{hotelData.distanceToCenter}</p>}
          {hotelData.roomType && <p className="hotel-info-text">{hotelData.roomType}</p>}
          {hotelData.breakfast && <p className="hotel-info-text">{hotelData.breakfast}</p>}

          {/* Badges Section */}
          <div className="hotel-badges-container">
            {hotelData.badges.map((badge) => (
              <Badge key={badge.id} className="hotel-badge">
                {badge.text}
              </Badge>
            ))}
          </div>
        </div>

        {/* Price Information */}
        <div className="hotel-price-section">
          <h3 className="hotel-price">{hotelData.price}</h3>
          <p className="hotel-stay-info">{hotelData.stayInfo}</p>
          <Button className="hotel-choose-button">Выбрать номер</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelCard;

import { Badge } from "../Badge";
import Button from "../Button";
import { Card, CardContent } from "../Card";
import { ImageIcon } from "lucide-react";
import React from "react";

// Hotel data for mapping

const HotelCard = ({
  name,
  address,
  distanceToCenter,
  roomType,
  breakfast,
  price,
  stayInfo,
  badges = [],
}) => {
  
  return (
    <Card className="hotel-card">
      <CardContent className="hotel-card-content">
        {/* Hotel Image */}
        <div className="hotel-image-container">
          <ImageIcon className="hotel-image-icon" />
        </div>

        {/* Hotel Information */}
        <div className="hotel-info-section">
          <h4 className="hotel-title">{name}</h4>

          <div className="hotel-data-rows">
            {address && <p className="hotel-info-text">Адрес: {address}</p>}
            {distanceToCenter && (
              <p className="hotel-info-text">Дистанция до центра: {distanceToCenter}</p>
            )}
            {roomType && <p className="hotel-info-text">Тип номера: {roomType}</p>}
            {breakfast && <p className="hotel-info-text">Завтрак: {breakfast}</p>}
          </div>

          <div className="hotel-badges-container">
            {badges.map((badge) => (
              <Badge key={badge.id} className="hotel-badge">
                {badge.text}
              </Badge>
            ))}
          </div>
        </div>

        {/* Price Information */}
        <div className="hotel-price-section">
          <h3 className="hotel-price">Цена: {price}</h3>
          <p className="hotel-stay-info">{stayInfo}</p>
          <Button className="hotel-choose-button">Выбрать номер</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelCard;

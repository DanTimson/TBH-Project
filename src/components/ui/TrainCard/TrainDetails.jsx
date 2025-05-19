import { Card, CardContent } from "../Card";
import { ArrowRight, Bed, Monitor, Utensils } from "lucide-react";
import React from "react";

const TrainDetails = ({ cabinClasses = [] }) => {
  const serviceIcons = [
    { icon: <Utensils className="service-icon" />, label: "Food service" },
    { icon: <Bed className="service-icon" />, label: "Sleeping accommodations" },
    { icon: <Monitor className="service-icon" />, label: "Entertainment system" },
  ];

  return (
    <Card className="train-details-card">
      <CardContent className="train-details-content">
        <div className="train-details-container">
          <div className="train-journey-section">
            <div className="train-time-section">
              <div className="train-time">00:00</div>
              <div className="train-duration-container">
                <div className="train-duration-line">
                  <ArrowRight className="duration-arrow" />
                </div>
                <div className="train-duration-text">00 д 00 ч 00 мин</div>
              </div>
              <div className="train-time">00:00</div>
            </div>

            <div className="train-station-info">
              <div className="train-station-text">Вокзал отправления</div>
              <div className="train-station-text">Вокзал прибытия</div>
            </div>

            <div className="train-city-info">
              <div className="train-city-text">Город и станция отправления</div>
              <div className="train-city-text">Город и станция прибытия</div>
            </div>

            <div className="train-service-icons">
              {serviceIcons.map((service, index) => (
                <div key={index} aria-label={service.label}>
                  {service.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="train-cabin-section">
            {cabinClasses.map((cabin, index) => (
              <div key={index} className="train-cabin-row">
                <div className="train-cabin-type">{cabin.type}</div>
                <div className="train-cabin-seats">{cabin.seats}</div>
                <div className="train-cabin-price">{cabin.price}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainDetails;
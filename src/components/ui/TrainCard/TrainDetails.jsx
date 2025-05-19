import CustomArrow from "../CustomArrow";
import { Bed, Monitor, Utensils } from "lucide-react";
import React from "react";

const TrainDetails = ({
  departureTime = "00:00",
  arrivalTime = "00:00",
  duration = "00 д 00 ч 00 мин",
  departureStation = "Вокзал отправления",
  arrivalStation = "Вокзал прибытия",
  departureCity = "Город и станция отправления",
  arrivalCity = "Город и станция прибытия",
  cabinClasses = [],
}) => {
  const serviceIcons = [
    { icon: <Utensils className="service-icon" />, label: "Food service" },
    { icon: <Bed className="service-icon" />, label: "Sleeping accommodations" },
    { icon: <Monitor className="service-icon" />, label: "Entertainment system" },
  ];

  return (
    <div className="train-details-container">
      <div className="train-journey-section">
        <div className="train-time-section">
          <div className="train-time">{departureTime}</div>
          <div className="train-duration-container">
              <CustomArrow 
                width={300} 
                color="#369672" 
                strokeWidth={2}
                className="custom-arrow-line" 
              />
            <div className="train-duration-text">{duration}</div>
          </div>
          <div className="train-time">{arrivalTime}</div>
        </div>

        <div className="train-station-info">
          <div className="train-station-text">{departureStation}</div>
          <div className="train-station-text">{arrivalStation}</div>
        </div>

        <div className="train-city-info">
          <div className="train-city-text">{departureCity}</div>
          <div className="train-city-text">{arrivalCity}</div>
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
  );
};

export default TrainDetails;
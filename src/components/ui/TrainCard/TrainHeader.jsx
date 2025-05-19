import { Badge } from "../Badge";
import { Share2Icon, TrainIcon } from "lucide-react";
import React from "react";

const TrainHeader = ({
  trainTags = [],
  trainNumber = "Номер и наименование поезда",
  carrier = "Перевозчик",
  departurePoint = "Точка отправления",
  arrivalPoint = "Точка прибытия",
  route = "Маршрут"
}) => {
  return (
    <div className="train-header-container">
      <div className="train-tags-container">
        {trainTags.map((tag, index) => (
          <Badge key={index} className="train-tag-badge">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="train-header-content">
        <TrainIcon className="train-icon" />
        <div className="train-header-text">
          <span className="train-header-main">{trainNumber}</span>
          <span className="train-header-divider">•</span>
          <span className="train-header-secondary">{carrier}</span>
          <span className="train-header-divider">•</span>
          <span className="train-header-secondary">{departurePoint}</span>
          <span className="train-header-arrow">→</span>
          <span className="train-header-secondary">{arrivalPoint}</span>
        </div>
        <Share2Icon className="train-icon" />
      </div>
    </div>
  );
};

export default TrainHeader;
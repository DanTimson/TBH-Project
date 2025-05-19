import { Badge } from "../Badge";
import { Share2Icon, TrainIcon } from "lucide-react";
import React from "react";

const TrainHeader = () => {
  const trainTags = ["Фирменный", "Скоростной", "Двухэтажный"];

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
          <span className="train-header-main">Номер и наименование поезда</span>
          <span className="train-header-divider">•</span>
          <span className="train-header-secondary">Перевозчик</span>
          <span className="train-header-divider">•</span>
          <span className="train-header-secondary">Точка отправления</span>
          <span className="train-header-arrow">→</span>
          <span className="train-header-secondary">Точка прибытия</span>
          <span className="train-header-route">Маршрут</span>
        </div>
        <Share2Icon className="train-icon" />
      </div>
    </div>
  );
};

export default TrainHeader;
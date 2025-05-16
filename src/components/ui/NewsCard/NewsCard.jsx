import React from "react";
import IconButton from "../IconButton";
import NewsCardContent from "./NewsCardContent";
import { ChevronRight } from "lucide-react";

export default function NewsCard({ headerText = "Заголовок", itemsCount = 6, newsItems }) {
  const itemsToRender =
    Array.isArray(newsItems) && newsItems.length > 0
      ? newsItems.slice(0, itemsCount)
      : Array.from({ length: itemsCount }, (_, index) => `Часть новости ${index + 1}`);

  return (
    <div className="news-card">
      <div className="news-card-header">
        <div className="news-card-title-wrapper">
          <h4 className="news-card-title">
            {headerText}
          </h4>
        </div>

        <IconButton
          type="secondary"
          color="blue"
          size="m"
          icon={<ChevronRight className="icon-chevron" />}
        >
        </IconButton>
      </div>

      <div className="news-card-content-wrapper">
        {itemsToRender.map((item, index) => (
          <NewsCardContent key={index} text={item} />
        ))}
      </div>
    </div>
  );
}


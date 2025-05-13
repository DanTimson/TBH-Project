import React from "react";
import { ChevronRight } from "lucide-react";
import { IconButton } from "../IconButton";
import NewsCardContent from "./NewsCardContent"; 

export default function NewsCard({ headerText = "Заголовок", itemsCount = 6, newsItems }) {
  const itemsToRender =
    Array.isArray(newsItems) && newsItems.length > 0
      ? newsItems.slice(0, itemsCount)
      : Array.from({ length: itemsCount }, (_, index) => `Часть новости ${index + 1}`);

  return (
    <div className="w-[572px] h-[332px] bg-[url(/frame-3.png)] bg-cover bg-[50%_50%] flex flex-col gap-3">
      <div className="flex flex-row items-center justify-between p-0">
        <div className="flex items-center gap-2.5 px-3 py-2 flex-1">
          <h4 className="font-h4 font-[number:var(--h4-font-weight)] text-base-90 text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
            {headerText}
          </h4>
        </div>

        <IconButton
          size="medium"
          variant="ghost"
          colorSet={0}       
          styleIndex={0}
        >
          <ChevronRight className="w-8 h-8" />
        </IconButton>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 px-2 py-1 flex-1">
        {itemsToRender.map((item, index) => (
          <NewsCardContent key={index} text={item} />
        ))}
      </div>
    </div>
  );
}


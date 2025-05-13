import React from "react";

export default function NewsCardContent({ text }) {
  return (
    <div className="flex w-full items-center justify-center px-4 py-0.5">
      <p className="flex-1 mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-base-70 text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]">
        {text}
      </p>
    </div>
  );
}




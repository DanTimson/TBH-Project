import React from "react";

const NavbarCell = () => {
  const boxData = [
    {
      bgColor: "bg-base-0",
      borderColor: "border-[#6d81d8]",
      circleBgColor: "bg-[#6d81d8]",
    },
    {
      bgColor: "bg-[#6d81d8]",
      borderColor: "",
      circleBgColor: "bg-base-0",
    },
    {
      bgColor: "bg-base-0",
      borderColor: "border-base-20",
      circleBgColor: "bg-base-20",
    },
  ];

  return (
    <div className="w-[380px] h-[140px]" data-model-id="60:364-frame">
      <div className="flex items-start justify-center gap-5 p-5 rounded-[5px] border border-dashed border-[#9747ff] overflow-hidden">
        {boxData.map((box, index) => (
          <div
            key={index}
            className={`${box.bgColor} ${
              box.borderColor ? `border-4 border-solid ${box.borderColor}` : ""
            } flex items-center justify-center p-6 flex-1 grow rounded-[20px] overflow-hidden`}
          >
            <div className="p-0">
              <div className="relative w-[52px] h-[52px]">
                <div
                  className={`${box.circleBgColor} relative w-[26px] h-[26px] top-[13px] left-[13px] rounded-full`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarCell;

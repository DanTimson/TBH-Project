import {
  Bed,
  Calendar,
  Plane,
  ShoppingCart,
  Train,
} from "lucide-react";
import React from "react";
import NavbarCell from "./NavbarCell"; // Adjust path if needed

const navigationOptions = [
  { id: "calendar", icon: Calendar },
  { id: "train1", icon: Train },
  { id: "bed", icon: Bed },
  { id: "train2", icon: Train },
  { id: "cart", icon: ShoppingCart },
];

const rowStates = [
  { activeItem: "calendar", row: 0 },
  { activeItem: "train1", row: 1 },
  { activeItem: "bed", row: 2 },
  { activeItem: "train2", row: 3 },
  { activeItem: "cart", row: 4 },
];

export default function NavbarDesktop() {
  return (
    <div className="w-full max-w-[1480px] h-full max-h-[820px]">
      <div className="flex flex-col w-full items-center gap-5 p-5 rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
        {rowStates.map((rowState, rowIndex) => (
          <nav
            key={rowIndex}
            className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto] bg-base-0"
          >
            {/* Left Side */}
            <div className="flex w-60 items-center justify-center p-5 bg-base-0">
              <NavbarCell
                Icon={Calendar}
                isActive={rowState.activeItem === "calendar" && rowIndex === rowState.row}
                inactiveColor="#6D81D8"
              />
            </div>

            {/* Middle */}
            <div className="flex items-center justify-center gap-6 px-[180px] flex-1 bg-base-0">
              <NavbarCell
                Icon={Train}
                isActive={rowState.activeItem === "train1" && rowIndex === rowState.row}
                inactiveColor={rowIndex === 0 ? "#C6C6C6" : "#6D81D8"}
              />
              <NavbarCell
                Icon={Bed}
                isActive={rowState.activeItem === "bed" && rowIndex === rowState.row}
                inactiveColor={rowIndex === 0 ? "#C6C6C6" : "#6D81D8"}
              />
              <NavbarCell
                Icon={Plane}
                isActive={rowState.activeItem === "train2" && rowIndex === rowState.row}
                inactiveColor={rowIndex === 0 ? "#C6C6C6" : "#6D81D8"}
              />
            </div>

            {/* Right Side */}
            <div className="flex w-60 items-center justify-center p-5 bg-base-0">
              <NavbarCell
                Icon={ShoppingCart}
                isActive={rowState.activeItem === "cart" && rowIndex === rowState.row}
                inactiveColor={rowIndex === 0 ? "#C6C6C6" : "#6D81D8"}
              />
            </div>
          </nav>
        ))}
      </div>
    </div>
  );
}

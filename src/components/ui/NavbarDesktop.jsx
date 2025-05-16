import {
  Bed,
  Calendar,
  Plane,
  ShoppingCart,
  Train,
} from "lucide-react";
import React from "react";
import NavbarCell from "./NavbarCell";

const navigationOptions = [
  { id: "calendar", Icon: Calendar, label: "Calendar" },
  { id: "train1", Icon: Train, label: "Outbound Train" },
  { id: "bed", Icon: Bed, label: "Hotel" },
  { id: "train2", Icon: Plane, label: "Return Flight" }, // Changed from Train to Plane for variety
  { id: "cart", Icon: ShoppingCart, label: "Cart" },
];

export default function NavbarDesktop({ activeItem = "calendar" }) {
  return (
    <div className="w-full max-w-[1480px] p-5 rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
      <nav className="flex items-center justify-center w-full bg-base-0">
        {/* Left Side - Calendar */}
        <div className="flex w-60 items-center justify-center p-5">
          <NavbarCell
            Icon={Calendar}
            isActive={activeItem === "calendar"}
            label="Date Selection"
            inactiveColor="#6D81D8"
          />
        </div>

        {/* Middle - Transportation Options */}
        <div className="flex items-center justify-center gap-6 px-[180px] flex-1">
          <NavbarCell
            Icon={Train}
            isActive={activeItem === "train1"}
            label="Outbound Train"
            inactiveColor={activeItem === "calendar" ? "#C6C6C6" : "#6D81D8"}
          />
          <NavbarCell
            Icon={Bed}
            isActive={activeItem === "bed"}
            label="Hotel Stay"
            inactiveColor={activeItem === "calendar" ? "#C6C6C6" : "#6D81D8"}
          />
          <NavbarCell
            Icon={Plane}
            isActive={activeItem === "train2"}
            label="Return Flight"
            inactiveColor={activeItem === "calendar" ? "#C6C6C6" : "#6D81D8"}
          />
        </div>

        {/* Right Side - Cart */}
        <div className="flex w-60 items-center justify-center p-5">
          <NavbarCell
            Icon={ShoppingCart}
            isActive={activeItem === "cart"}
            label="Booking Summary"
            inactiveColor={activeItem === "calendar" ? "#C6C6C6" : "#6D81D8"}
          />
        </div>
      </nav>
    </div>
  );
}
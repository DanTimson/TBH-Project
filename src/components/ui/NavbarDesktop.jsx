import {
  Bed,
  Calendar,
  ShoppingCart,
  Train,
} from "lucide-react";
import React from "react";
import NavbarCell from "./NavbarCell";
import { useNavigate } from 'react-router-dom';

export default function NavbarDesktop({ activeItem = "calendar" }) {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    console.log('Attempting to navigate to:', path);
    navigate(path);
  };

  return (
    <div className="w-full max-w-[1480px] p-5 rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
      <nav className="flex items-center justify-center w-full bg-base-0">
        {/* Left Side - Calendar */}
        <div className="flex w-60 items-center justify-center p-5">
          <button onClick={() => handleNavigation("/ ")}
            className="relative z-10"
            >
            <NavbarCell
            Icon={Calendar}
            isActive={activeItem === "calendar"}
            label="Date Selection"
            inactiveColor="#6D81D8"
          />
          </button>
        </div>

        {/* Middle - Transportation Options */}
        <div className="flex items-center justify-center gap-6 px-[180px] flex-1">
          <button onClick={() => handleNavigation("/train1")}
            className="relative z-10"
            >
            <NavbarCell
              Icon={Train}
              isActive={activeItem === "train1"}
              label="Outbound Train"
              inactiveColor={activeItem === "calendar" ? "#C6C6C6" : "#6D81D8"}
            />
          </button>
          <button onClick={() => handleNavigation("/hotel")}
            className="relative z-10"
            >
            <NavbarCell
              Icon={Bed}
              isActive={activeItem === "bed"}
              label="Hotel Stay"
              inactiveColor={activeItem === "calendar" ? "#C6C6C6" : "#6D81D8"}
            />
          </button>
          <button onClick={() => handleNavigation("/train2")}
            className="relative z-10">
            <NavbarCell
              Icon={Train}
              isActive={activeItem === "train2"}
              label="Outbound Train"
              inactiveColor={activeItem === "calendar" ? "#C6C6C6" : "#6D81D8"}
            />
          </button>
        </div>

        {/* Right Side - Cart */}
        <div className="flex w-60 items-center justify-center p-5">
          <button onClick={() => handleNavigation("/cart")}
            className="relative z-10">
              <NavbarCell
              Icon={ShoppingCart}
              isActive={activeItem === "cart"}
              label="Booking Summary"
              inactiveColor={activeItem === "calendar" ? "#C6C6C6" : "#6D81D8"}
              />
          </button>
        </div>
      </nav>
    </div>
  );
}
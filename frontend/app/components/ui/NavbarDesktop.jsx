import {
  Bed,
  Calendar,
  ShoppingCart,
  Train,
} from "lucide-react";
import React from "react";
import NavbarCell from "./NavbarCell";
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavbarDesktop() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleNavigation = (path) => {
    console.log('Attempting to navigate to:', path);
    navigate(path);
  };

  const getActiveItem = () => {
    if (currentPath === "/") return "calendar";
    if (currentPath === "/train1") return "train1";
    if (currentPath === "/hotel") return "hotel";
    if (currentPath === "/train2") return "train2";
    if (currentPath === "/cart") return "cart";
    return "calendar";
  };

  return (
    <div className="w-full bg-base-0 shadow-lg">
      <nav className="flex items-center justify-center w-full bg-base-0">
        {/* Left Side - Calendar */}
        <div className="flex w-60 items-center justify-center p-4">
          <button onClick={() => handleNavigation("/ ")}
            className="relative z-10"
            >
            <NavbarCell
            Icon={Calendar}
            isActive={getActiveItem() === "calendar"}
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
              isActive={getActiveItem() === "train1"}
              label="Outbound Train"
              inactiveColor="#6D81D8"
            />
          </button>
          <button onClick={() => handleNavigation("/hotel")}
            className="relative z-10"
            >
            <NavbarCell
              Icon={Bed}
              isActive={getActiveItem() == "hotel"}
              label="Hotel Stay"
              inactiveColor="#6D81D8"
            />
          </button>
          <button onClick={() => handleNavigation("/train2")}
            className="relative z-10">
            <NavbarCell
              Icon={Train}
              isActive={getActiveItem() === "train2"}
              label="Outbound Train"
              inactiveColor="#6D81D8"
            />
          </button>
        </div>

        {/* Right Side - Cart */}
        <div className="flex w-60 items-center justify-center p-4">
          <button onClick={() => handleNavigation("/cart")}
            className="relative z-10">
              <NavbarCell
              Icon={ShoppingCart}
              isActive={getActiveItem() === "cart"}
              label="Booking Summary"
              inactiveColor="#6D81D8"
              />
          </button>
        </div>
      </nav>
    </div> 
  );
}
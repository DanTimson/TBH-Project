import { Card, CardContent } from "@/components/ui/card";
import { Bed, Calendar, Plane, ShoppingCart, Train } from "lucide-react";
import React from "react";

// Define the navigation options data structure
const navigationOptions = [
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
  },
  {
    id: "train",
    icon: Train,
    label: "Train",
  },
  {
    id: "bed",
    icon: Bed,
    label: "Bed",
  },
  {
    id: "plane",
    icon: Plane,
    label: "Plane",
  },
  {
    id: "cart",
    icon: ShoppingCart,
    label: "Cart",
  },
];

// Define the active states for each row
const rowStates = [
  { activeItem: "calendar", row: 0 },
  { activeItem: "train", row: 1 },
  { activeItem: "bed", row: 2 },
  { activeItem: "plane", row: 3 },
  { activeItem: "cart", row: 4 },
];

export default function Box() {
  return (
    <div
      className="w-full max-w-[1480px] h-full max-h-[820px]"
      data-model-id="60:368-frame"
    >
      <div className="flex flex-col w-full items-center gap-5 p-5 rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
        {rowStates.map((rowState, rowIndex) => (
          <nav
            key={rowIndex}
            className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto] bg-base-0"
          >
            <div className="flex w-60 items-center justify-center p-5 relative self-stretch bg-base-0">
              <Card
                className={`flex items-center justify-center p-6 relative flex-1 grow rounded-[20px] overflow-hidden ${
                  rowState.activeItem === "calendar" &&
                  rowIndex === rowState.row
                    ? "bg-[#6d81d8] border-0"
                    : "bg-base-0 border-4 border-solid border-[#6d81d8]"
                }`}
              >
                <CardContent className="p-0 flex items-center justify-center">
                  <Calendar
                    className="w-[52px] h-[52px]"
                    color={
                      rowState.activeItem === "calendar" &&
                      rowIndex === rowState.row
                        ? "white"
                        : "#6D81D8"
                    }
                  />
                </CardContent>
              </Card>
            </div>

            <div className="flex items-center justify-center gap-6 px-[180px] py-0 relative flex-1 self-stretch grow bg-base-0">
              <Card
                className={`flex items-center justify-center p-6 relative flex-1 grow rounded-[20px] overflow-hidden ${
                  rowState.activeItem === "train" && rowIndex === rowState.row
                    ? "bg-[#6d81d8] border-0"
                    : "bg-base-0 border-4 border-solid " +
                      (rowIndex === 0 ? "border-base-20" : "border-[#6d81d8]")
                }`}
              >
                <CardContent className="p-0 flex items-center justify-center">
                  <Train
                    className="w-[52px] h-[52px]"
                    color={
                      rowState.activeItem === "train" &&
                      rowIndex === rowState.row
                        ? "white"
                        : rowIndex === 0
                          ? "#C6C6C6"
                          : "#6D81D8"
                    }
                  />
                </CardContent>
              </Card>

              <Card
                className={`flex items-center justify-center p-6 relative flex-1 grow rounded-[20px] overflow-hidden ${
                  rowState.activeItem === "bed" && rowIndex === rowState.row
                    ? "bg-[#6d81d8] border-0"
                    : "bg-base-0 border-4 border-solid " +
                      (rowIndex === 0 ? "border-base-20" : "border-[#6d81d8]")
                }`}
              >
                <CardContent className="p-0 flex items-center justify-center">
                  <Bed
                    className="w-[52px] h-[52px]"
                    color={
                      rowState.activeItem === "bed" && rowIndex === rowState.row
                        ? "white"
                        : rowIndex === 0
                          ? "#C6C6C6"
                          : "#6D81D8"
                    }
                  />
                </CardContent>
              </Card>

              <Card
                className={`flex items-center justify-center p-6 relative flex-1 grow rounded-[20px] overflow-hidden ${
                  rowState.activeItem === "plane" && rowIndex === rowState.row
                    ? "bg-[#6d81d8] border-0"
                    : "bg-base-0 border-4 border-solid " +
                      (rowIndex === 0 ? "border-base-20" : "border-[#6d81d8]")
                }`}
              >
                <CardContent className="p-0 flex items-center justify-center">
                  <Plane
                    className="w-[52px] h-[52px]"
                    color={
                      rowState.activeItem === "plane" &&
                      rowIndex === rowState.row
                        ? "white"
                        : rowIndex === 0
                          ? "#C6C6C6"
                          : "#6D81D8"
                    }
                  />
                </CardContent>
              </Card>
            </div>

            <div className="flex w-60 items-center justify-center p-5 relative self-stretch bg-base-0">
              <Card
                className={`flex items-center justify-center p-6 relative flex-1 grow rounded-[20px] overflow-hidden ${
                  rowState.activeItem === "cart" && rowIndex === rowState.row
                    ? "bg-[#6d81d8] border-0"
                    : "bg-base-0 border-4 border-solid " +
                      (rowIndex === 0 ? "border-base-20" : "border-[#6d81d8]")
                }`}
              >
                <CardContent className="p-0 flex items-center justify-center">
                  <ShoppingCart
                    className="w-[52px] h-[52px]"
                    color={
                      rowState.activeItem === "cart" &&
                      rowIndex === rowState.row
                        ? "white"
                        : rowIndex === 0
                          ? "#C6C6C6"
                          : "#6D81D8"
                    }
                  />
                </CardContent>
              </Card>
            </div>
          </nav>
        ))}
      </div>
    </div>
  );
}
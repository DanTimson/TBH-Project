import React from "react";
import { ArrowDownDropOutline } from "./ArrowDownDropOutline";
import { ArrowLeftDropOutline } from "./ArrowLeftDropOutline";
import { ArrowRightDropOutline } from "./ArrowRightDropOutline";
import { BedOutline } from "./BedOutline";
import { CalendarBlankOutline } from "./CalendarBlankOutline";
import { CartOutline } from "./CartOutline";
import { Gradient } from "./Gradient";
import { HotelCard } from "./HotelCard";
import { NavbarDesktop } from "./NavbarDesktop";
import { PropertySkipWrapper } from "./PropertySkipWrapper";
import { Search } from "./Search";
import { Topbar } from "./Topbar";
import { Train } from "./Train";
import "./tailwind.css";

export const HotelPageExample = () => {
  return (
    <div className="hotel-page-example">
      <Topbar
        iconButton={
          <ArrowLeftDropOutline
            className="arrow-left-drop-outline"
            color="#6D81D8"
          />
        }
        input={<Search className="icon-instance-node-3" color="#9B9B9B" />}
      />
      <div className="content-2">
        <PropertySkipWrapper
          button={
            <ArrowRightDropOutline
              className="icon-instance-node-3"
              color="white"
            />
          }
          className="search-instance"
          input={
            <ArrowDownDropOutline
              className="icon-instance-node-4"
              color="#9B9B9B"
            />
          }
          input1={
            <CalendarBlankOutline
              className="icon-instance-node-4"
              color="#9B9B9B"
            />
          }
          input2={
            <ArrowDownDropOutline
              className="icon-instance-node-4"
              color="#9B9B9B"
            />
          }
          override={
            <ArrowDownDropOutline
              className="icon-instance-node-4"
              color="#9B9B9B"
            />
          }
          property1="skip"
        />
        <div className="content-blocks">
          <div className="row">
            <HotelCard className="hotel-card-instance" />
          </div>
        </div>

        <Gradient className="gradient-instance" />
      </div>

      <NavbarDesktop
        activePage="hotel"
        className="navbar-desktop-acting"
        navbarCell={
          <CalendarBlankOutline
            className="icon-instance-node-5"
            color="#6D81D8"
          />
        }
        navbarCell1={
          <BedOutline className="icon-instance-node-5" color="white" />
        }
        navbarCell2={<Train className="icon-instance-node-5" color="#6D81D8" />}
        navbarCell3={
          <CartOutline className="icon-instance-node-5" color="#6D81D8" />
        }
        override={<Train className="icon-instance-node-5" color="#6D81D8" />}
      />
    </div>
  );
};
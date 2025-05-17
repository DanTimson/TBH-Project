import React from "react";
import { ArrowDownDropOutline } from "./ArrowDownDropOutline";
import { ArrowLeftDropOutline } from "./ArrowLeftDropOutline";
import { ArrowRightDropOutline } from "./ArrowRightDropOutline";
import { BedOutline } from "./BedOutline";
import { CalendarBlankOutline } from "./CalendarBlankOutline";
import { CartOutline } from "./CartOutline";
import { Gradient } from "./Gradient";
import { NavbarDesktop } from "./NavbarDesktop";
import { PropertySkipWrapper } from "./PropertySkipWrapper";
import { Search } from "./Search";
import { Topbar } from "./Topbar";
import { Train } from "./Train";
import { TrainCard } from "./TrainCard";
import "./tailwind.css";

export const TrainPage2 = () => {
  return (
    <div className="train-page-example">
      <Topbar
        iconButton={
          <ArrowLeftDropOutline
            className="arrow-left-drop-outline"
            color="#6D81D8"
          />
        }
        input={<Search className="icon-instance-node-4" color="#9B9B9B" />}
      />
      <div className="content">
        <PropertySkipWrapper
          button={
            <ArrowRightDropOutline
              className="icon-instance-node-4"
              color="white"
            />
          }
          className="search-instance"
          input={
            <ArrowDownDropOutline
              className="icon-instance-node-5"
              color="#9B9B9B"
            />
          }
          input1={
            <ArrowDownDropOutline
              className="icon-instance-node-5"
              color="#9B9B9B"
            />
          }
          input2={
            <CalendarBlankOutline
              className="icon-instance-node-5"
              color="#9B9B9B"
            />
          }
          override={
            <ArrowDownDropOutline
              className="icon-instance-node-5"
              color="#9B9B9B"
            />
          }
          property1="skip"
        />
        <div className="row">
          <TrainCard
            arrow="image.svg"
            arrowClassName="train-card-2"
            className="train-card-instance"
            visible={false}
            visible1={false}
            visible2={false}
            visible3={false}
          />
        </div>

        <Gradient className="gradient-instance" />
      </div>

      <NavbarDesktop
        activePage="train-2"
        className="navbar-desktop-acting"
        navbarCell={
          <CalendarBlankOutline
            className="icon-instance-node-6"
            color="#6D81D8"
          />
        }
        navbarCell1={
          <BedOutline className="icon-instance-node-6" color="#6D81D8" />
        }
        navbarCell2={<Train className="icon-instance-node-6" color="white" />}
        navbarCell3={
          <CartOutline className="icon-instance-node-6" color="#6D81D8" />
        }
        override={<Train className="icon-instance-node-6" color="#6D81D8" />}
      />
    </div>
  );
};

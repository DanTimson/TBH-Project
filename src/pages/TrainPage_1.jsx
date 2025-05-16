import React from "react";
import { ArrowDownDropOutline } from "./ArrowDownDropOutline";
import { ArrowLeftDropOutline } from "./ArrowLeftDropOutline";
import { ArrowRightDropOutline } from "./ArrowRightDropOutline";
import { BedOutline } from "./BedOutline";
import { BedOutline1 } from "./BedOutline1";
import { CalendarBlankOutline } from "./CalendarBlankOutline";
import { CartOutline } from "./CartOutline";
import { Gradient } from "./Gradient";
import { IconComponentNode } from "./IconComponentNode";
import { MonitorDashboard } from "./MonitorDashboard";
import { NavbarDesktop } from "./NavbarDesktop";
import { PropertySkipWrapper } from "./PropertySkipWrapper";
import { Search } from "./Search";
import { ShareVariantOutline } from "./ShareVariantOutline";
import { SilverwareForkKnife } from "./SilverwareForkKnife";
import { Topbar } from "./Topbar";
import { Train } from "./Train";
import { Train1 } from "./Train1";
import { TrainCard } from "./TrainCard";
import { Wheelchair } from "./Wheelchair";
import "./trainPage.css";

export const TrainPage = () => {
  return (
    <div className="train-page">
      <Topbar
        className="topbar-instance"
        iconButton={
          <ArrowLeftDropOutline className="arrow-left-drop-outline" />
        }
        input={<Search className="icon-instance-node-4" />}
      />
      <div className="content">
        <PropertySkipWrapper
          button={<ArrowRightDropOutline className="icon-instance-node-4" />}
          className="search-instance"
          input={<ArrowDownDropOutline className="icon-arrow-down-drop" />}
          input1={<ArrowDownDropOutline className="icon-arrow-down-drop" />}
          input2={<CalendarBlankOutline className="icon-calendar-blank" />}
          override={<ArrowDownDropOutline className="icon-arrow-down-drop" />}
          property1="skip"
        />
        <div className="content-blocks">
          <div className="row">
            <TrainCard
              arrow="image.svg"
              arrowClassName="train-card-2"
              className="train-card-instance"
              icon={<SilverwareForkKnife className="icon-silverware-fork" />}
              icon1={<Wheelchair className="icon-instance-node-5" />}
              icon2={<MonitorDashboard className="icon-instance-node-5" />}
              icon3={<Train className="icon-train" />}
              icon4={<ShareVariantOutline className="icon-instance-node-4" />}
              override={<BedOutline className="icon-instance-node-5" />}
              visible={false}
              visible1={false}
              visible2={false}
              visible3={false}
            />
          </div>
        </div>

        <Gradient className="gradient-instance" />
      </div>

      <NavbarDesktop
        activePage="train-1"
        className="navbar-desktop-acting"
        navbarCell={<IconComponentNode className="icon-instance-node-6" />}
        navbarCell1={<BedOutline1 className="icon-instance-node-6" />}
        navbarCell2={
          <Train1 className="icon-instance-node-6" color="#6D81D8" />
        }
        navbarCell3={<CartOutline className="icon-instance-node-6" />}
        override={<Train1 className="icon-instance-node-6" color="white" />}
      />
    </div>
  );
};

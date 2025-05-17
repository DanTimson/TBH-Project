import React from "react";
import { ArrowLeftDropOutline } from "./ArrowLeftDropOutline";
import { BedOutline } from "./BedOutline";
import { BookingCancellationWrapper } from "./BookingCancellationWrapper";
import { CalendarBlankOutline } from "./CalendarBlankOutline";
import { CartOutline } from "./CartOutline";
import { Gradient } from "./Gradient";
import { NavbarDesktop } from "./NavbarDesktop";
import { Search } from "./Search";
import { Topbar } from "./Topbar";
import { Train } from "./Train";
import "./tailwind.css";

export const TrainDetailsPage = () => {
  return (
    <div className="train-details-page">
      <Topbar
        iconButton={
          <ArrowLeftDropOutline
            className="arrow-left-drop-outline"
            color="#6D81D8"
          />
        }
        input={<Search className="search-instance" color="#9B9B9B" />}
      />
      <div className="content">
        <div className="content-blocks">
          <div className="row">
            <BookingCancellationWrapper
              bookingCancellation="default"
              className="train-details-card-instance"
              showLabelV20={false}
              showLabelV203={false}
              showLabelV204={false}
              showLabelV205={false}
              text="063В"
              text1=" Москва ВК Восточный "
              text2=" Нижний Новгород (Стригино): отпр. 01:26, 1 апр., вт&nbsp;&nbsp; "
              text3="Вагон 03"
              text4=" Купе 2Ф "
              text5="ФПК&nbsp;&nbsp; "
              visible={false}
              visible1={false}
              visible2={false}
              visible3={false}
              visible4={false}
              visible5={false}
              visible6={false}
              visible7={false}
              visible8={false}
              visible9={false}
            />
          </div>
        </div>

        <Gradient className="gradient-2" />
      </div>

      <NavbarDesktop
        activePage="train-1"
        className="navbar-desktop-acting"
        navbarCell={
          <CalendarBlankOutline
            className="icon-instance-node-3"
            color="#6D81D8"
          />
        }
        navbarCell1={
          <BedOutline className="icon-instance-node-3" color="#6D81D8" />
        }
        navbarCell2={<Train className="icon-instance-node-3" color="#6D81D8" />}
        navbarCell3={
          <CartOutline className="icon-instance-node-3" color="#6D81D8" />
        }
        override={<Train className="icon-instance-node-3" color="white" />}
      />
    </div>
  );
};

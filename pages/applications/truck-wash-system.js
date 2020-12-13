import React, { useState } from "react";

//css
import styles from "@/public/css/modules/applications/applications.module.css";

// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import { Photos, Videos } from "@/components/layout/applications";

// truck-wash-system 에서만 필요한 layouts
import {
  HeadInfo,
  Body,
  TailInfo,
} from "@/components/layout/applications/truck";

export default function TruckWashSystems() {
  const photosData = [
    ["/image/applications/truck/grid1.png", "grid1"],
    ["/image/applications/truck/grid2.png", "grid2"],
    ["/image/applications/truck/grid3.png", "grid3"],
    ["/image/applications/truck/grid4.png", "grid4"],
    ["/image/applications/truck/grid5.png", "grid5"],
    ["/image/applications/truck/grid6.png", "grid6"],
  ];

  const videoData = [
    [
      "kmlVLqWYCZQ",
      "/image/applications/truck/video1.png",
      "HD SALT TRUCK WASH SYSTEM",
    ],
    [
      "hxD1ZRmBUMc",
      "/image/applications/truck/video2.png",
      "DRIVE THROUGH WASH SYSTEM",
    ],
    [
      null, // 동영상 없음
      "/image/applications/truck/video3.png",
      "DRIVE THROUGH WASH SYSTEM WITH MILITARY VEHICLES",
    ],
    [
      "B2VTsoxgGjo",
      "/image/applications/truck/video4.png",
      "INTERCLEAN ULTIMATE CHASSIS WASH SYSTEM",
    ],
    [
      "cbKFG-CZVDA",
      "/image/applications/truck/video5.png",
      "INTERCLEAN XR80 TIRE WASH SYSTEM",
    ],
    [
      "vtQ7mBr3vy0",
      "/image/applications/truck/video6.png",
      "MULTIPLE VEHICLE WHEEL AND TIRE WASH SYSTEM",
    ],
    [
      "f88NESfx_TY",
      "/image/applications/truck/video7.png",
      "ROLLOVER TRUCK WASH",
    ],
    [
      "YaNaQEPGdf8",
      "/image/applications/truck/video8.png",
      "ROLLOVER TRUCK WASH – SPINNER AND BRUSH COMBO",
    ],
  ];

  const [menu, setMenu] = useState(undefined);
  const openMenu = (menuName) => {
    setMenu(menu !== menuName ? menuName : undefined);
  };

  return (
    <div>
      <Header />
      <PageHeader
        title="COMMERCIAL TRUCK WASH SYSTEMS"
        subtitle="Fast, innovative, and automatic truck wash systems enable you to maintain the highest standard of cleanliness for your entire fleet."
      />
      <div className={styles.container}>
        <HeadInfo />
        <Body />
        <TailInfo />
        <Photos
          photosData={photosData}
          menuOpened={menu === "PHOTOS"}
          openMenu={openMenu}
        />
        <Videos
          videoData={videoData}
          needTitle={true}
          menuOpened={menu === "VIDEOS"}
          openMenu={openMenu}
        />
      </div>
      <Footer />
    </div>
  );
}

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
    ["/image/applications/truck/photo1.jpg", ""],
    ["/image/applications/truck/photo2.jpg", ""],
    ["/image/applications/truck/photo3.jpg", ""],
    ["/image/applications/truck/photo4.jpg", ""],
    ["/image/applications/truck/photo5.jpg", ""],
    ["/image/applications/truck/photo6.jpg", ""],
    ["/image/applications/truck/photo7.jpg", ""],
    ["/image/applications/truck/photo8.jpg", ""],
    ["/image/applications/truck/photo9.jpg", ""],
    ["/image/applications/truck/photo10.jpg", ""],
    ["/image/applications/truck/photo11.jpg", ""],
    ["/image/applications/truck/photo12.jpg", ""],
    ["/image/applications/truck/photo13.jpg", ""],
    ["/image/applications/truck/photo14.jpg", ""],
    ["/image/applications/truck/photo15.jpg", ""],
    ["/image/applications/truck/photo16.jpg", ""],
    ["/image/applications/truck/photo17.jpg", ""],
    ["/image/applications/truck/photo18.jpg", ""],
    ["/image/applications/truck/photo19.jpg", ""],
    ["/image/applications/truck/photo20.jpg", ""],
    ["/image/applications/truck/photo21.jpg", ""],
    ["/image/applications/truck/photo22.jpg", ""],
    ["/image/applications/truck/photo23.jpg", ""],
    ["/image/applications/truck/photo24.jpg", ""],
    ["/image/applications/truck/photo25.jpg", ""],
    ["/image/applications/truck/photo26.jpg", ""],
    ["/image/applications/truck/photo27.jpg", ""],
    ["/image/applications/truck/photo28.jpg", ""],
    ["/image/applications/truck/photo29.jpg", ""],
    ["/image/applications/truck/photo30.jpg", ""],
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

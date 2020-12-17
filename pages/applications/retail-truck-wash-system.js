import { useState } from "react";

// Layouts
import { Header, Footer } from "@/components/layout";

import { Photos, Videos } from "@/components/layout/applications";
import { HeadInfo, Body } from "@/components/layout/applications/retailTruck";
import Title from "@/components/layout/wash-systems/title";

import styles from "@/public/css/modules/applications/applications.module.css";

export default function RetailTruckWashSystems() {
  const photosData = [
    ["/image/applications/retailTruck/photo1.jpg", ""],
    ["/image/applications/retailTruck/photo2.jpg", ""],
    ["/image/applications/retailTruck/photo3.png", ""],
    ["/image/applications/retailTruck/photo4.jpg", ""],
    ["/image/applications/retailTruck/photo5.jpg", ""],
    ["/image/applications/retailTruck/photo6.jpg", ""],
    ["/image/applications/retailTruck/photo7.jpg", ""],
    ["/image/applications/retailTruck/photo8.jpg", ""],
    ["/image/applications/retailTruck/photo9.jpg", ""],
    ["/image/applications/retailTruck/photo10.jpg", ""],
    ["/image/applications/retailTruck/photo11.jpg", ""],
    ["/image/applications/retailTruck/photo12.jpg", ""],
    ["/image/applications/retailTruck/photo13.jpg", ""],
    ["/image/applications/retailTruck/photo14.jpg", ""],
    ["/image/applications/retailTruck/photo15.jpg", ""],
  ];

  const videoData = [
    [
      null,
      "/image/applications/retailTruck/video1.png",
      "HD SALT TRUCK WASH SYSTEM",
    ],
    [
      "hxD1ZRmBUMc",
      "/image/applications/retailTruck/video2.png",
      "DRIVE THROUGH WASH SYSTEM",
    ],
    [
      "f88NESfx_TY", // 동영상 없음
      "/image/applications/retailTruck/video3.png",
      "DRIVE THROUGH WASH SYSTEM WITH MILITARY VEHICLES",
    ],
    [
      "YaNaQEPGdf8", // 동영상 없음
      "/image/applications/retailTruck/video4.png",
      "DRIVE THROUGH WASH SYSTEM WITH MILITARY VEHICLES",
    ],
  ];

  const [menu, setMenu] = useState(undefined);
  const openMenu = (menuName) => {
    setMenu(menu !== menuName ? menuName : undefined);
  };

  return (
    <div>
      <Header />
      <Title titleString="RETAIL TRUCK WASH SYSTEM" />
      <HeadInfo />
      <Body />
      <div className={styles.container}>
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

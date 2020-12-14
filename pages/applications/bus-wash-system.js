import { useState } from "react";

// Layouts
import { Header, Footer } from "@/components/layout";

import { Photos, Videos } from "@/components/layout/applications";
import { HeadInfo, Body, TailInfo } from "@/components/layout/applications/bus";
import Title from "@/components/layout/wash-systems/title";

import styles from "@/public/css/modules/applications/applications.module.css";

export default function BusWashSystem() {
  const photosData = [
    ["/image/applications/bus/photo1.jpg", ""],
    ["/image/applications/bus/photo2.jpg", ""],
    ["/image/applications/bus/photo3.jpg", ""],
    ["/image/applications/bus/photo4.jpg", ""],
    ["/image/applications/bus/photo5.jpg", ""],
    ["/image/applications/bus/photo6.jpg", ""],
    ["/image/applications/bus/photo7.jpg", ""],
    ["/image/applications/bus/photo8.jpg", ""],
    ["/image/applications/bus/photo9.jpg", ""],
    ["/image/applications/bus/photo10.jpg", ""],
    ["/image/applications/bus/photo11.jpg", ""],
    ["/image/applications/bus/photo12.jpg", ""],
    ["/image/applications/bus/photo13.jpg", ""],
    ["/image/applications/bus/photo14.jpg", ""],
    ["/image/applications/bus/photo15.jpg", ""],
  ];

  const videoData = [
    [
      "w1xeFUOIoB4",
      "/image/applications/bus/video1.png",
      "HD SALT TRUCK WASH SYSTEM",
    ],
    [
      "zm1x0DFWQX4",
      "/image/applications/bus/video2.png",
      "DRIVE THROUGH WASH SYSTEM",
    ],
    [
      "0mamDH80cuU",
      "/image/applications/bus/video3.png",
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
      <Title titleString="버스 세척" />
      <HeadInfo />
      <Body />
      <TailInfo />
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

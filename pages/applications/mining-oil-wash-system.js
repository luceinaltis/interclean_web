import { useState } from "react";

// Layouts
import { Header, Footer } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import { Photos, Videos } from "@/components/layout/applications";

// mining-oil-wash-system 에서만 필요한 layouts
import { HeadInfo, Body } from "@/components/layout/applications/mining";
import Title from "@/components/layout/wash-systems/title";

import styles from "@/public/css/modules/applications/applications.module.css";

export default function MiningOilWashSystem() {
  const photosData = [
    ["/image/applications/mining/photo1.jpg", ""],
    ["/image/applications/mining/photo2.jpg", ""],
    ["/image/applications/mining/photo3.jpg", ""],
    ["/image/applications/mining/photo4.jpg", ""],
    ["/image/applications/mining/photo5.jpg", ""],
    ["/image/applications/mining/photo6.jpg", ""],
    ["/image/applications/mining/photo7.jpg", ""],
    ["/image/applications/mining/photo8.jpg", ""],
    ["/image/applications/mining/photo9.jpg", ""],
    ["/image/applications/mining/photo10.jpg", ""],
    ["/image/applications/mining/photo11.jpg", ""],
    ["/image/applications/mining/photo12.jpg", ""],
    ["/image/applications/mining/photo13.jpg", ""],
    ["/image/applications/mining/photo14.jpg", ""],
    ["/image/applications/mining/photo15.jpg", ""],
    ["/image/applications/mining/photo16.jpg", ""],
    ["/image/applications/mining/photo17.jpg", ""],
    ["/image/applications/mining/photo18.jpg", ""],
    ["/image/applications/mining/photo19.jpg", ""],
    ["/image/applications/mining/photo20.jpg", ""],
    ["/image/applications/mining/photo21.jpg", ""],
    ["/image/applications/mining/photo22.jpg", ""],
    ["/image/applications/mining/photo23.jpg", ""],
    ["/image/applications/mining/photo24.jpg", ""],
    ["/image/applications/mining/photo25.jpg", ""],
    ["/image/applications/mining/photo26.jpg", ""],
    ["/image/applications/mining/photo27.jpg", ""],
    ["/image/applications/mining/photo28.jpg", ""],
    ["/image/applications/mining/photo29.jpg", ""],
    ["/image/applications/mining/photo30.jpg", ""],
  ];

  const videoData = [
    [
      "B2VTsoxgGjo",
      "/image/applications/mining/video1.png",
      "HD SALT TRUCK WASH SYSTEM",
    ],
    [
      "vtQ7mBr3vy0",
      "/image/applications/mining/video2.png",
      "DRIVE THROUGH WASH SYSTEM",
    ],
  ];

  const [menu, setMenu] = useState(undefined);
  const openMenu = (menuName) => {
    setMenu(menu !== menuName ? menuName : undefined);
  };
  return (
    <div>
      <Header />
      <Title titleString="가스 & 오일차량 세척" />
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

import { useState } from "react";

// Layouts
import { Header, Footer } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import { Photos, Videos } from "@/components/layout/applications";

// military-wash-system 에서만 필요한 layouts
import { Body } from "@/components/layout/applications/military";
import Title from "@/components/layout/wash-systems/title";

import styles from "@/public/css/modules/applications/applications.module.css";

export default function MilitaryWashSystem() {
  const photosData = [
    ["/image/applications/military/photo1.jpg", ""],
    ["/image/applications/military/photo2.jpg", ""],
    ["/image/applications/military/photo3.jpg", ""],
    ["/image/applications/military/photo4.jpg", ""],
    ["/image/applications/military/photo5.png", ""],
    ["/image/applications/military/photo6.jpg", ""],
    ["/image/applications/military/photo7.jpg", ""],
    ["/image/applications/military/photo8.jpg", ""],
    ["/image/applications/military/photo9.jpg", ""],
    ["/image/applications/military/photo10.jpg", ""],
    ["/image/applications/military/photo11.jpg", ""],
    ["/image/applications/military/photo12.jpg", ""],
    ["/image/applications/military/photo13.jpg", ""],
    ["/image/applications/military/photo14.jpg", ""],
    ["/image/applications/military/photo15.jpg", ""],
  ];

  const videoData = [
    [
      "BKBH1SDKt18",
      "/image/applications/military/video1.png",
      "HD SALT TRUCK WASH SYSTEM",
    ],
  ];

  const [menu, setMenu] = useState(undefined);
  const openMenu = (menuName) => {
    setMenu(menu !== menuName ? menuName : undefined);
  };

  return (
    <div>
      <Header />
      <Title titleString="군용차량 세척" />
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

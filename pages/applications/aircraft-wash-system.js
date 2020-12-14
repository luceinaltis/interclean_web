import { useState } from "react";

// Layouts
import { Header, Footer } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import { Photos } from "@/components/layout/applications";

// aircraft-wash-system 에서만 필요한 layouts
import { HeadInfo, Body } from "@/components/layout/applications/aircraft";
import Title from "@/components/layout/wash-systems/title";

import styles from "@/public/css/modules/applications/applications.module.css";

export default function AircraftWashSystem() {
  const photosData = [
    ["/image/applications/aircraft/photo1.jpg", ""],
    ["/image/applications/aircraft/photo2.jpg", ""],
    ["/image/applications/aircraft/photo3.jpg", ""],
    ["/image/applications/aircraft/photo4.jpg", ""],
    ["/image/applications/aircraft/photo5.jpg", ""],
    ["/image/applications/aircraft/photo6.jpg", ""],
    ["/image/applications/aircraft/photo7.jpg", ""],
    ["/image/applications/aircraft/photo8.jpg", ""],
    ["/image/applications/aircraft/photo9.jpg", ""],
    ["/image/applications/aircraft/photo10.jpg", ""],
    ["/image/applications/aircraft/photo11.jpg", ""],
    ["/image/applications/aircraft/photo12.jpg", ""],
    ["/image/applications/aircraft/photo13.jpg", ""],
    ["/image/applications/aircraft/photo14.jpg", ""],
    ["/image/applications/aircraft/photo15.jpg", ""],
    ["/image/applications/aircraft/photo16.jpg", ""],
    ["/image/applications/aircraft/photo17.jpg", ""],
    ["/image/applications/aircraft/photo18.jpg", ""],
    ["/image/applications/aircraft/photo19.jpg", ""],
    ["/image/applications/aircraft/photo20.jpg", ""],
  ];

  const [menu, setMenu] = useState(undefined);
  const openMenu = (menuName) => {
    setMenu(menu !== menuName ? menuName : undefined);
  };

  return (
    <div>
      <Header />
      <Title titleString="항공기 세척" />
      <HeadInfo />
      <Body />
      <div className={styles.container}>
        <Photos
          photosData={photosData}
          menuOpened={menu === "PHOTOS"}
          openMenu={openMenu}
        />
      </div>
      <Footer />
    </div>
  );
}

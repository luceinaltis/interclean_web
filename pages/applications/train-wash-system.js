import { useState } from "react";

// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import { Photos, Videos } from "@/components/layout/applications";
import Title from "@/components/layout/wash-systems/title";

// train-wash-system 에서만 필요한 layouts
import { HeadInfo, Body } from "@/components/layout/applications/train";

import styles from "@/public/css/modules/applications/applications.module.css";

export default function TrainWashSystem() {
  const photosData = [
    ["/image/applications/train/photo1.jpg", ""],
    ["/image/applications/train/photo2.jpg", ""],
    ["/image/applications/train/photo3.jpg", ""],
    ["/image/applications/train/photo4.jpg", ""],
    ["/image/applications/train/photo5.jpg", ""],
    ["/image/applications/train/photo6.jpg", ""],
    ["/image/applications/train/photo7.jpg", ""],
    ["/image/applications/train/photo8.jpg", ""],
    ["/image/applications/train/photo9.jpg", ""],
    ["/image/applications/train/photo10.jpg", ""],
    ["/image/applications/train/photo11.jpg", ""],
    ["/image/applications/train/photo12.jpg", ""],
    ["/image/applications/train/photo13.jpg", ""],
    ["/image/applications/train/photo14.jpg", ""],
    ["/image/applications/train/photo15.jpg", ""],
  ];

  const [menu, setMenu] = useState(undefined);
  const openMenu = (menuName) => {
    setMenu(menu !== menuName ? menuName : undefined);
  };

  return (
    <div>
      <Header />
      <PageHeader title="열차 세척" subtitle="" />
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

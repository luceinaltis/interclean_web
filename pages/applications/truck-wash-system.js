import React, { useState } from "react";

//css
import styles from "@/public/css/modules/applications.module.css";

// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import {
  Photos,
  Videos,
  // SideImage,
  // Title,
  // ZoomImage,
} from "@/components/layout/applications";

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
        {/* <Title title="트럭 세척 시스템" />
        <ZoomImage imagePath="/image/applications/truck/washing.png" />
        <SideImage
          leftImage="/image/applications/truck/left.png"
          rightImage="/image/applications/truck/right.png"
          leftText="세차 전"
          rightText="세차 후"
        />
        <div className="container">
          <div className="inner__container">
            <div className={styles.bodyText}>
              특수 목적 차량과 마찬가지로 매우 간편하고 효과적인 세척시스템을
              갖추고 있습니다. 자동화 시스템은 관리인의 필요를 없애주고, 낮은
              유지보수(사후관리), 많은 세부사항을 필요로 하지 않습니다. 우리의
              대형차량 세차는 한 달에 7,000개가 넘는 트럭을 취급할 수 있고,
              당신의 대형차량은 도로 위에서 당신 회사의 깨끗한 인상을 줄 수
              있습니다. <br />
              <br /> 소매를 지원할 때 오너의 생산성과 손익라인을 높혀주는 원칙이
              있다., 스페인의 에스파라과에 있는 My Truck Wash Europa 회사는 직원
              한명으로 하루에 281대의 트럭을 세차 할 수 있다. My Truck Wash
              Europa 7곳 모두 InterClean설비를 사용하고 있으며, 그곳의 시스템은
              낮은 유지보수(잔고장) 수준과 작동이 용이하며, 세척력의 높은
              만족도로 유명합니다.{" "}
            </div>
          </div>
        </div> */}
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

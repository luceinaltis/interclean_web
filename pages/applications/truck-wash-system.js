import React, { useState } from "react";
import Link from "next/link";
import { withTranslation } from "../../i18n";

import Title from "@/components/layout/wash-systems/title";

// Layouts
import { Header, Footer } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import {
  Photos,
  Videos,
  Drawings,
  Downloads,
} from "@/components/layout/applications";

import styles__app from "@/public/css/modules/applications/applications.module.css";
import styles from "@/public/css/modules/applications/truckWash.module.css";

function TruckWashSystems({ t }) {
  const iconPath = [
    "/image/applications/truck/tailIcon1.png",
    "/image/applications/truck/tailIcon2.png",
    "/image/applications/truck/tailIcon3.png",
    "/image/applications/truck/tailIcon4.png",
  ];

  const imagePath = [
    "/image/applications/truck/body1.jpg",
    "/image/applications/truck/body2.jpg",
    "/image/applications/truck/body3.jpg",
  ];

  const iconData = [
    ["/image/applications/truck/headIcon1.png", t("p1")],
    ["/image/applications/truck/headIcon2.png", t("p2")],
    ["/image/applications/truck/headIcon3.png", t("p3")],
    ["/image/applications/truck/headIcon4.png", t("p4")],
  ];

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

  const drawingsData = [
    [
      "/image/applications/truck/drawing/drawing1.jpg",
      "Truck Wash with Recycled Water and Brushes",
      "",
    ],
    [
      "/image/applications/truck/drawing/drawing2.jpg",
      "Truck Wash with Recycled Water",
      "",
    ],
    [
      "/image/applications/truck/drawing/drawing3.jpg",
      "Truck Wash with Fresh Water",
      "",
    ],
    ["/image/applications/truck/drawing/drawing4.jpg", "Salt Truck Wash", ""],
    [
      "/image/applications/truck/drawing/drawing5.jpg",
      "Fleet Truck Wash with Recycled Water",
      "",
    ],
    [
      "/image/applications/truck/drawing/drawing6.jpg",
      "Commercial Truck Wash Plus Car Wash System",
      "",
    ],
    [
      "/image/applications/truck/drawing/drawing7.jpg",
      "Commercial Truck Wash",
      "",
    ],
    ["/image/applications/truck/drawing/drawing8.pdf", "Chassis Wash", ""],
    ["/image/applications/truck/drawing/drawing9.pdf", "XR 80 Wheel Wash", ""],
    [
      "/image/applications/truck/drawing/drawing10.pdf",
      "XR 120 Wheel Wash",
      "",
    ],
    [
      "/image/applications/truck/drawing/drawing11.pdf",
      "Stryker Wheel Wash",
      "",
    ],
  ];

  const downloadsData = [
    [
      "/downloads/applications/truck/InterClean_Brochure.pdf",
      "InterClean Brochure",
      "(PDF, 3 MB)",
    ],
    [
      "/downloads/applications/truck/Wash_Detergents.pdf",
      "Wash Detergents",
      "(PDF, 3 MB)",
    ],
    [
      "/downloads/applications/truck/Hydrofluoric_Acid_Report.pdf",
      "Hydrofluoric Acid Report",
      "(PDF, 172 kB)",
    ],
  ];

  const [menu, setMenu] = useState(undefined);
  const openMenu = (menuName) => {
    setMenu(menu !== menuName ? menuName : undefined);
  };

  return (
    <div>
      <Header />
      <Title titleString={t("title")} titleSubString={t("sub-title")} />
      <div className="container">
        <div className="inner__container">
          <div className={styles.headInfo}>
            <div className={styles.headIcon__grid}>
              {iconData &&
                iconData.map((val, idx) => {
                  return (
                    <div key={idx} className={styles.headIcon__wrapper}>
                      <img src={val[0]} className={styles.headIcon__image} />
                      <br />
                      <div className={styles.headIcon__text}>{val[1]}</div>
                    </div>
                  );
                })}
            </div>
            <div className={styles.headText}>
              <div className={styles.headText__subtitle}>{t("p5")}</div>
              <div className={styles.headText__title}>{t("p6")}</div>
              <div className={styles.headText__body}>{t("p7")}</div>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.body__grid}>
              {/* 첫 번째 */}
              <img
                src={imagePath[0]}
                className={`${styles.body__image} ${styles.body__grid__cell}`}
              />
              <div
                className={`${styles.body__text} ${styles.body__grid__cell}`}
              >
                <div className={styles.body__title}>{t("p8")}</div>
                <div className={styles.body__body}>
                  {t("p9")}
                  <br />
                  {t("p10")}
                  <li>{t("p11")}</li>
                  <li>{t("p12")}</li>
                  {t("p13")}
                </div>
                <Link href="/wash-systems/drive-thru-touchless">
                  <div className={styles.body__button}>{t("learnMore")}</div>
                </Link>
              </div>
              {/* 두 번째 */}
              <div
                className={`${styles.body__text} ${styles.body__grid__cell}`}
              >
                <div className={styles.body__title}>{t("p14")}</div>
                <div className={styles.body__body}>
                  {t("p15")}
                  <br />
                </div>
                <Link href="/wash-systems/ultra-gantry">
                  <div className={styles.body__button}>{t("learnMore")}</div>
                </Link>
              </div>
              <img
                src={imagePath[1]}
                className={`${styles.body__image} ${styles.body__grid__cell}`}
              />
              {/* 세 번째 */}
              <img
                src={imagePath[2]}
                className={`${styles.body__image} ${styles.body__grid__cell}`}
              />
              <div
                className={`${styles.body__text} ${styles.body__grid__cell}`}
              >
                <div className={styles.body__title}>{t("p22")}</div>
                <div className={styles.body__body}>
                  {t("p23")}
                  <li>{t("p24")}</li>
                  <li>{t("p25")}</li>
                  <li>{t("p26")}</li>
                  <li>{t("p27")}</li>
                  {t("p28")}
                </div>
                <Link href="/wash-systems/wheel-wash-system">
                  <div className={styles.body__button}>{t("learnMore")}</div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.tailInfo}>
            <div className={styles.tailInfo__title}>{t("p29")}</div>
            <div className={styles.tailInfo__subtitle}>{t("p30")}</div>
            <div className={styles.tailInfo__grid}>
              <div>
                <img src={iconPath[0]} className={styles.tailIcon__image} />
                <div className={styles.tailInfo__iconName}>{t("p31")}</div>
                <div className={styles.tailIcon__info}>{t("p32")}</div>
              </div>
              <div>
                <img src={iconPath[1]} className={styles.tailIcon__image} />
                <div className={styles.tailInfo__iconName}>{t("p33")}</div>
                <div className={styles.tailIcon__info}>{t("p34")}</div>
              </div>
              <div>
                <img src={iconPath[2]} className={styles.tailIcon__image} />
                <div className={styles.tailInfo__iconName}>{t("p35")}</div>
                <div className={styles.tailIcon__info}>{t("p36")}</div>
              </div>
              <div>
                <img src={iconPath[3]} className={styles.tailIcon__image} />
                <div className={styles.tailInfo__iconName}>{t("p37")}</div>
                <div className={styles.tailIcon__info}>{t("p38")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles__app.container}>
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
        <Drawings
          drawingsData={drawingsData}
          menuOpened={menu === "Drawings"}
          openMenu={openMenu}
        />
        <Downloads
          downloadsData={downloadsData}
          menuOpened={menu === "Downloads"}
          openMenu={openMenu}
        />
      </div>
      <Footer />
    </div>
  );
}

TruckWashSystems.getInitialProps = async () => ({
  namespacesRequired: ["applications__truck-wash-system", "footer", "header"],
});

export default withTranslation("applications__truck-wash-system")(
  TruckWashSystems
);

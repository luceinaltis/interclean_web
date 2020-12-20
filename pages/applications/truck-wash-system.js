import React, { useState } from "react";
import Link from "next/link";

import Title from "@/components/layout/wash-systems/title";

// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import {
  Photos,
  Videos,
  Drawings,
  Downloads,
} from "@/components/layout/applications";

import styles__app from "@/public/css/modules/applications/applications.module.css";
import styles from "@/public/css/modules/applications/truckWash.module.css";

export default function TruckWashSystems() {
  const iconPath = [
    "/image/applications/truck/tailIcon1.png",
    "/image/applications/truck/tailIcon2.png",
    "/image/applications/truck/tailIcon3.png",
    "/image/applications/truck/tailIcon4.png",
  ];

  const iconInfo = [
    "We don’t believe in one-size-fits-all washing solutions. When you choose InterClean to design a custom truck washing system, you get the benefit of state-of-the-art technology coupled with a team of experienced engineers. The result is an efficient wash system design whether you’re looking for an automatic truck wash, a touchless truck wash, or any other unique vehicle washing specifications.",
    "Since 1984, InterClean has been committed to sustainable design concepts. All of our truck wash systems feature high-volume water recycling to support environmental sustainability. In addition, all InterClean truck wash systems include stainless steel chemical and rinse arches with specialized check valves, and high-efficiency motors. This reduces the risk of heavy metal discharge, minimizes water and chemical use, and further reduces the environmental impact of the truck wash system.",
    "There’s no such thing as “downtime” with an Interclean truck wash system. Our high-tech, heavy-duty wash systems are designed for continuous use and have very little upkeep required. Our low-maintenance truck wash solutions ensure that your truck fleet of clean vehicles can get back on the road as efficiently as possible.",
    "There is no attendant required for InterClean heavy-duty vehicle wash systems. Our truck cleaning systems are fully automated and easy to operate, so you can start using your new fleet washing system as soon as possible once it is installed.",
  ];

  const imagePath = [
    "/image/applications/truck/body1.jpg",
    "/image/applications/truck/body2.jpg",
    "/image/applications/truck/body3.jpg",
  ];

  const iconData = [
    ["/image/applications/truck/headIcon1.png", "COMMERCIAL TRUCKS"],
    ["/image/applications/truck/headIcon2.png", "GARBAGE TRUCKS"],
    ["/image/applications/truck/headIcon3.png", "HEAVY TRUCKS"],
    ["/image/applications/truck/headIcon4.png", "TANKER TRUCKS"],
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

  const getIconName = (idx) => {
    switch (idx) {
      case 0:
        return (
          <div className={styles.tailInfo__iconName}>
            CUSTOMIZED
            <br />
            SOLUTIONS
          </div>
        );
      case 1:
        return (
          <div className={styles.tailInfo__iconName}>
            ENVIRONMENTALLY - <br />
            FRIENDLY SOLUTIONS
          </div>
        );
      case 2:
        return <div className={styles.tailInfo__iconName}>MINIMAL UPKEEP</div>;
      case 3:
        return (
          <div className={styles.tailInfo__iconName}>SIMPLE OPERATION</div>
        );
    }
  };

  return (
    <div>
      <Header />
      <Title
        titleString="COMMERCIAL TRUCK WASH SYSTEMS"
        titleSubString="Fast, innovative, and automatic truck wash systems enable you to maintain the highest standard of cleanliness for your entire fleet."
      />
      <div className="container">
        <div className="inner__container">
          <div className={styles.headInfo}>
            <p>&nbsp;</p>
            <div className={styles.headIcon__grid}>
              {iconData &&
                iconData.map((val, idx) => {
                  return (
                    <div key={idx} className={styles.headIcon__wrapper}>
                      <img src={val[0]} className={styles.headIcon__image} />
                      <div className={styles.headIcon__text}>{val[1]}</div>
                    </div>
                  );
                })}
            </div>
            <div className={styles.headText}>
              <div className={styles.headText__subtitle}>About Our</div>
              <div className={styles.headText__title}>TRUCK WASH SYSTEMS</div>
              <div className={styles.headText__body}>
                InterClean truck wash systems are fully-automated, custom
                cleaning solutions for municipal or commercial vehicles. Our
                in-house design team works with you to create the{" "}
                <span className={styles.headText__body__bold}>
                  best truck wash system to maximize
                </span>
                efficiency while meeting the needs of{" "}
                <span className={styles.headText__body__bold}>
                  your budget, space, and the shapes and sizes of your vehicles.
                </span>{" "}
                Our truck wash systems include a
                <span className={styles.headText__body__bold}>
                  drive-through automatic wash system, a roll-over wash system,
                  a wheel, tire, and chassis wash system, or a combination of
                  multiple systems.
                </span>
              </div>
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
                <div className={styles.body__title}>
                  DRIVE-THROUGH TRUCK WASH SYSTEM
                </div>
                <div className={styles.body__body}>
                  Efficient, heavy-duty cleaning power perfect for large fleets
                  with demanding wash cycles. InterClean drive-through washing
                  systems use a combination of wash detergents, high-volume,
                  low-pressure washing jets, and high-pressure washing jets to
                  efficiently clean trucks of all shapes and sizes.
                  <br />
                  Choose between:
                  <li>A completely brushless/ touchless system</li>
                  <li>
                    A drive-through system coupled with a rollover wash system
                    for an extra powerful clean.
                  </li>
                  It’s a safe and easy way to wash a variety of vehicles with
                  the least amount of water and chemicals.
                </div>
                <Link href="/wash-systems/drive-thru-touchless">
                  <div className={styles.body__button}>LEARN MORE</div>
                </Link>
              </div>
              {/* 두 번째 */}
              <div
                className={`${styles.body__text} ${styles.body__grid__cell}`}
              >
                <div className={styles.body__title}>
                  ROLLOVER/ GANTRY TRUCK WASH SYSTEM
                </div>
                <div className={styles.body__body}>
                  Highly customizable, effective fleet washing system perfect
                  for both standard vehicle configurations and challenging
                  vehicle shapes (e.g. garbage trucks). The InterClean Ultra
                  Gantry System roll-over machine can be made with friction,
                  touch-less, or a combination of both. Customize your rollover
                  vehicle wash system with a variety of options including:
                  <br />
                  Choose between:
                  <li>Spot-free rinse</li>
                  <li>Blowers</li>
                  <li>Water recycling</li>
                  <li>Undercarriage wash</li>
                  Simply park your vehicle in the wash bay and let the rollover
                  wash system do the work!
                </div>
                <Link href="/wash-systems/ultra-gantry">
                  <div className={styles.body__button}>LEARN MORE</div>
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
                <div className={styles.body__title}>
                  WHEEL, TIRE, & CHASSIS WASH SYSTEM
                </div>
                <div className={styles.body__body}>
                  A high-pressure, environmentally friendly truck wash solution
                  perfect for removing dirt and grime from trucks working at job
                  sites with pollutants. InterClean is a leader for designing
                  and engineering effective solutions to wash and decontaminate
                  the tires and chassis of trucks and other heavy-duty equipment
                  leaving job sites such as:
                  <li>Landfills</li>
                  <li>Quarries</li>
                  <li>Steel mills</li>
                  <li>Chemical plants</li>
                  From dust control to heavy mud removal, we have the solution
                  for your tire and under chassis washing problem.
                </div>
                <Link href="/wash-systems/wheel-wash-system">
                  <div className={styles.body__button}>LEARN MORE</div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.tailInfo}>
            <div className={styles.tailInfo__title}>
              THE INTERCLEAN ADVANTAGE
            </div>
            <div className={styles.tailInfo__subtitle}>
              All InterClean Equipment Inc. truck wash systems are built with
              our customers’ needs in mind.
            </div>
            <div className={styles.tailInfo__grid}>
              {[0, 1, 2, 3].map((idx) => {
                return (
                  <div key={idx}>
                    <img
                      src={iconPath[idx]}
                      className={styles.tailIcon__image}
                    />
                    {getIconName(idx)}
                    <div className={styles.tailIcon__info}>{iconInfo[idx]}</div>
                  </div>
                );
              })}
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

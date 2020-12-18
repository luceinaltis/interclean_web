import Link from "next/link";
import { useState } from "react";

// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import { Photos, Drawings, Downloads } from "@/components/layout/applications";
import Title from "@/components/layout/wash-systems/title";

import styles__app from "@/public/css/modules/applications/applications.module.css";
import styles from "@/public/css/modules/applications/trainWash.module.css";

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

  const drawingsData = [
    [
      "/image/applications/train/drawing/drawing1.pdf",
      "Light Rail Yong In",
      "(PDF, 287.55 kB)",
    ],
    [
      "/image/applications/train/drawing/drawing2.pdf",
      "Light Rail Toronto",
      "(PDF, 255.77 kB)",
    ],
    [
      "/image/applications/train/drawing/drawing3.pdf",
      "Locomotive Wash",
      "(PDF, 241.75 kB)",
    ],
    [
      "/image/applications/train/drawing/drawing4.pdf",
      "Water Test",
      "(PDF, 416.25 kB)",
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
  ];

  const [menu, setMenu] = useState(undefined);
  const openMenu = (menuName) => {
    setMenu(menu !== menuName ? menuName : undefined);
  };

  return (
    <div>
      <Header />
      <PageHeader title="열차 세척" subtitle="" />
      <div className="container">
        <div className="inner__container">
          <div className={styles.headInfo}>
            <div className={styles.headInfo__title}>
              SITE-SPECIFIC TRAIN WASH SYSTEMS
            </div>
            <div className={styles.headInfo__subtitle}>BY INTERCLEAN</div>
            <div className={styles.zoom__imageWrapper}>
              <img
                src="/image/applications/train/headImage.jpg"
                className={styles.zoom__image}
              />
            </div>
          </div>
          <div className={styles.body}>
            {/* 첫 번째 */}
            <div className={styles.body__title}>
              INTERCLEAN DESIGNS HIGH PRESSURE, CUSTOM WASH SYSTEMS FOR:
            </div>
            <div className={styles.body__body}>
              <li>Light Rail</li>
              <li>Locomotive</li>
              <li>Tram</li>
              <li>Water Test</li>
            </div>
            {/* 두 번째 */}
            <div className={styles.body__title}>
              SITE SPECIFIC TRANSIT RAIL WASH SYSTEMS
            </div>
            <div className={styles.body__body}>
              InterClean’s approach to transit rail wash systems is as
              innovative as the company itself. Every transit rail wash system
              we design is site specific with special chemical formulations
              designed to achieve a successful clean, wash after wash. Whether
              catenary, third rail, diesel, or hybrid electric, we have the
              experience and knowledge to create the appropriate train wash
              systems that require little maintenance. Whether the train is
              located in the frigid winters of Canada, the warm humidity of the
              Southeastern United States, or anywhere in between, we can design
              a heavy duty transit rail wash system that is safe, efficient, and
              effective.
            </div>
            {/* 세 번째 */}
            <div className={styles.body__title}>
              CUSTOM DIESEL LOCOMOTIVE WASH SYSTEMS
            </div>
            <div className={styles.body__body}>
              InterClean locomotive wash systems have been successfully used in
              a variety of different applications and climates from the iron
              mines of Australia to the Canadian Arctic. To date, our
              Centri*Spinner is the most effective piece of equipment ever
              designed for diesel locomotive washing. Using a combination of
              strategically placed flat and spinning nozzles and brushes, our
              custom drive through wash systems for locomotives reach all the
              hard places, removing dirt and fuel residue with clean water and
              custom detergents, wash after wash.
            </div>
            {/* 네 번째 */}
            <div className={styles.body__title}>
              US-MADE TRAIN & RAIL WASH SYSTEMS
            </div>
            <div className={styles.body__body}>
              InterClean train wash systems are designed and manufactured by
              experienced engineers, right here in the U.S.A. When you order a
              custom train wash system, we design and manufacture the system, at
              our headquarters, and use local distributors to build and maintain
              them. For you, that means a trusted, local InterClean specialist
              you can rely on for parts, service, and repair. And when you need
              that special blend of detergents, simply{" "}
              <span
                className={`${styles.body__body__bold} ${styles.body__body__link}`}
              >
                <Link href="/contact">contact us</Link>
              </span>{" "}
              direct. We will ship you the replacement chemicals you need, so
              you can keep your locomotive shiny and clean day after day.{" "}
              <span className={styles.body__body__bold}>
                For a custom-designed train wash system you can count on,{" "}
                <span className={styles.body__body__link}>
                  <Link href="/contact">contact InterClean.</Link>
                </span>
              </span>
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

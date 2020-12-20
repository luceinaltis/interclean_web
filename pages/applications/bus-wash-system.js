import { useState } from "react";
import Link from "next/link";

// Layouts
import { Header, Footer } from "@/components/layout";

import {
  Photos,
  Videos,
  Drawings,
  Downloads,
} from "@/components/layout/applications";
import Title from "@/components/layout/wash-systems/title";

import styles__app from "@/public/css/modules/applications/applications.module.css";
import styles from "@/public/css/modules/applications/busWash.module.css";

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

  const drawingsData = [
    [
      "/image/applications/bus/drawing/drawing1.pdf",
      "Hybrid Bus Wash",
      "(PDF, 315 kB)",
    ],
    [
      "/image/applications/bus/drawing/drawing2.pdf",
      "XJ 404 Fresh Water",
      "(PDF, 329 kB)",
    ],
    [
      "/image/applications/bus/drawing/drawing3.pdf",
      "XJ 404 Recycled Water",
      "(PDF, 345 kB)",
    ],
    [
      "/image/applications/bus/drawing/drawing4.pdf",
      "Fresh Water School Bus",
      "(PDF, 309 kB)",
    ],
    [
      "/image/applications/bus/drawing/drawing5.pdf",
      "Recycled Water School Bus",
      "(PDF, 333.76 kB)",
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
      <Title titleString="버스 세척" />
      <div className="container">
        <div className="inner__container">
          <div className={styles.headInfo}>
            <div className={styles.zoom__imageWrapper}>
              <img
                src="/image/applications/bus/headImage.jpg"
                className={styles.zoom__image}
              />
            </div>
            <div className={styles.headInfo__title__blue}>
              BUS WASH SYSTEMS FOR TRANSIT AND SCHOOLS
            </div>
            <p>&nbsp;</p>
            <div className={styles.headInfo__body}>
              InterClean has different approaches for washing transit, school,
              paratransit, and tour bus fleets. We offer drive through systems
              and gantry or rollover systems that provide design flexibility and
              proven cleaning technology. Both types of bus wash systems can be
              designed with touchless, advanced friction/brushes, or a
              combination of both. All systems are made in the U.S.A. and
              designed to clean effectively and efficiently.
            </div>
            <div className={styles.headInfo__title__orange}>
              SUSTAINABLE DESIGN FEATURES ARE AN INTEGRAL PART OF INTERCLEAN BUS
              WASH SYSTEMS
            </div>
            <div className={styles.headInfo__body}>
              All of the wash systems InterClean designs are available with the
              EQ100 water recycling module that effectively captures the wash
              water and recycles it through a series of settling pits,
              self-cleaning filter, separators, aeration, and circulation. The
              EQ100 water recycling system has been installed in multiple
              locations throughout the USA, Canada, Europe, Asia, Africa, South
              America, Australia, New Zealand and the Middle East and its
              effectiveness in recycling large volumes of water has been
              recognized globally for improving sustainability in Heavy Duty
              Vehicle Washing Systems.
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.zoom__imageWrapper}>
              <img
                src="/image/applications/bus/bodyImage.jpg"
                className={styles.zoom__image}
              />
            </div>
            <div className={styles.body__title}>
              DRIVE-THROUGH BUS WASH SYSTEMS
            </div>
            <div className={styles.body__body}>
              <span className={styles.body__body__bold}>
                InterClean’s Centri*Spinner
              </span>{" "}
              wash system is a leader in the School and Paratransit bus wash
              market and the wash system will not damage crossover mirrors,
              safety side signs, exterior cameras, bike racks or rear light
              covers and will effectively clean the contoured exterior of
              Paratransit buses. <br />
              <span className={styles.body__body__bold}>
                The XJ Bus Wash System
              </span>{" "}
              combines friction and touchless cleaning for Transit, Paratransit,
              and School Buses. This system can be customized for different bus
              wash applications. The most popular configuration is an
              overlapping 4-brush system to wrap the bus combined with
              InterClean touchless cleaning to clean the wheels, chassis, around
              and behind bike racks and mirrors. There is no stopping required
              for this drive-through system! Contact us for a customized quote
              for your bus wash project.
              <br />
              <span className={styles.body__body__bold}>
                The Hybrid Wash System
              </span>{" "}
              is a drive-through wash system designed to use a combination of
              touchless cleaning for the front, top, rear, wheel and chassis and
              foam brushes for the sides. The brushes are in a fixed position
              and use a foam brush material to help prevent scratching and
              damage to the bus.
            </div>
          </div>
          <div className={styles.tailInfo}>
            <div className={styles.tailInfo__title}>
              INTERCLEAN ULTRA GANTRY SYSTEM FOR BUSES
            </div>
            <div className={styles.tailInfo__body}>
              InterClean Ultra Gantry System is the latest version of our Truck
              and Bus Wash System – now designed and built in the USA. This
              roll-over machine can be made with friction cleaning, touch-less
              or a combination of both. Ideal for commercial and retail
              applications, fleets, transit and can be customized for special
              applications such as RV’s and commercial delivery vehicles.
              Options include Spot Free Rinse, Blowers, Water Recycling and
              Chassis Wash.
            </div>
            <div className={styles.tailInfo__videoWrapper}>
              <iframe
                className={styles.tailInfo__video}
                src="https://www.youtube.com/embed/0mamDH80cuU"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
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

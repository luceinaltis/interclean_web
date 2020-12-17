import Link from "next/link";
import { useState } from "react";

// Layouts
import { Header, Footer } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import { Photos } from "@/components/layout/applications";

// aircraft-wash-system 에서만 필요한 layouts
import Title from "@/components/layout/wash-systems/title";

import styles__app from "@/public/css/modules/applications/applications.module.css";
import styles__aircraft from "@/public/css/modules/applications/aircraft.module.css";

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
            <div className="container">
                <div className="inner__container">
                    <div className={styles__aircraft.headInfo}>
                        <div
                            className={`${styles__aircraft.content__title__blue} ${styles__aircraft.headInfo__title}`}
                        >
                            AIRPLANE WASH SYSTEMS
                        </div>
                        <div className={styles__aircraft.content__title__orange}>
                            FOR PUBLIC, PRIVATE, AND MILITARY APPLICATIONS
                        </div>
                        <div className={styles__aircraft.zoom__imageWrapper}>
                            <img
                                src="/image/applications/aircraft/headImage.jpg"
                                className={styles__aircraft.zoom__image}
                            />
                        </div>
                        <div className={styles__aircraft.content__text}>
                            InterClean uses the latest technology to design systems that automate
                            the wash and water recycling processes for aircraft wash systems. Our
                            custom airplane washes use high-pressure nozzles to ensure a thorough
                            clean, and a safe, efficient, operation wash after wash. Our touchless
                            manual and automatic airplane wash systems are made in the USA and are
                            installed and maintained by our local InterClean distributors. Contact
                            us today for specs and pricing on a custom aircraft wash system.
                        </div>
                        <Link href="/contact">
                            <div className={styles__aircraft.button__blue}>CONTACT US</div>
                        </Link>
                    </div>
                    <div className={styles__aircraft.body}>
                        {/* 첫 번째 */}
                        <div className={styles__aircraft.body__content__wrapper}>
                            <div className={styles__aircraft.content__title__orange}>
                                THE INTERCLEAN CLEAR WASH RINSE SYSTEM MEETS US MILITARY
                                SPECIFICATIONS FOR FUNCTIONALITY
                            </div>
                            <div className={styles__aircraft.content__text}>
                                Our Clear Water Rinse System (CWRS) is a high volume, low pressure
                                washing system in which approximately 80% of the water used during
                                the rinse process is collected and recycled. To assure efficient
                                rinsing, the water being recycled is continually monitored for
                                salinity and other contaminants (Total Dissolved Solids). Once the
                                TDS reaches a specified level the water is discharged to the
                                sanitary sewer or water storage tank for disposal and fresh water is
                                used to recharge the system. This system was designed specifically
                                to meet the aircraft wash needs of the US Navy.
                                <br />
                                <br />
                                Because of the corrosive nature of sea water, the US Navy has
                                established a requirement to wash all aircraft within a 300 mile
                                radius of sea water or for aircraft flying below 3000’ over sea
                                water. If you are looking for a custom designed, US made airplane
                                wash system that meets military specs, call +1 (734) 961-3300 for a
                                quote.
                            </div>
                            <Link href="/contact">
                                <div className={styles__aircraft.button__orange}>
                                    REQUEST A QUOTE
                                </div>
                            </Link>
                        </div>
                        {/* 두 번째 */}
                        <div className={styles__aircraft.body__content__wrapper}>
                            <div className={styles__aircraft.content__title__blue}>
                                REPAIR AND MAINTENANCE FOR INTERCLEAN AIRCRAFT WASH SYSTEMS
                            </div>
                            <div className={styles__aircraft.content__text}>
                                The InterClean airplane wash systems are designed by an experienced
                                team of engineers and guaranteed to meet your needs and
                                specifications. However, both manual and automatic airplane wash
                                systems need regular service and maintenance to continue to operate
                                at peak performance. To request service, maintenance, or replacement
                                parts for an InterClean aircraft wash system, contact us today.
                            </div>
                            <Link href="/contact">
                                <div className={styles__aircraft.button__blue}>REQUEST SERVICE</div>
                            </Link>
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
            </div>
            <Footer />
        </div>
    );
}

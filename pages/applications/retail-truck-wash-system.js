import { useState } from "react";

// Layouts
import { Header, Footer } from "@/components/layout";

import { Photos, Videos } from "@/components/layout/applications";
import { ZoomImage, ButtonBlue } from "@/components/elements";
import Title from "@/components/layout/wash-systems/title";

import styles__app from "@/public/css/modules/applications/applications.module.css";
import styles from "@/public/css/modules/applications/retailTruck.module.css";

export default function RetailTruckWashSystems() {
    const photosData = [
        ["/image/applications/retailTruck/photo1.jpg", ""],
        ["/image/applications/retailTruck/photo2.jpg", ""],
        ["/image/applications/retailTruck/photo3.png", ""],
        ["/image/applications/retailTruck/photo4.jpg", ""],
        ["/image/applications/retailTruck/photo5.jpg", ""],
        ["/image/applications/retailTruck/photo6.jpg", ""],
        ["/image/applications/retailTruck/photo7.jpg", ""],
        ["/image/applications/retailTruck/photo8.jpg", ""],
        ["/image/applications/retailTruck/photo9.jpg", ""],
        ["/image/applications/retailTruck/photo10.jpg", ""],
        ["/image/applications/retailTruck/photo11.jpg", ""],
        ["/image/applications/retailTruck/photo12.jpg", ""],
        ["/image/applications/retailTruck/photo13.jpg", ""],
        ["/image/applications/retailTruck/photo14.jpg", ""],
        ["/image/applications/retailTruck/photo15.jpg", ""],
    ];

    const videoData = [
        [null, "/image/applications/retailTruck/video1.png", "HD SALT TRUCK WASH SYSTEM"],
        ["hxD1ZRmBUMc", "/image/applications/retailTruck/video2.png", "DRIVE THROUGH WASH SYSTEM"],
        [
            "f88NESfx_TY", // 동영상 없음
            "/image/applications/retailTruck/video3.png",
            "DRIVE THROUGH WASH SYSTEM WITH MILITARY VEHICLES",
        ],
        [
            "YaNaQEPGdf8", // 동영상 없음
            "/image/applications/retailTruck/video4.png",
            "DRIVE THROUGH WASH SYSTEM WITH MILITARY VEHICLES",
        ],
    ];

    const [menu, setMenu] = useState(undefined);
    const openMenu = (menuName) => {
        setMenu(menu !== menuName ? menuName : undefined);
    };
    return (
        <div>
            <Header />
            <Title titleString="RETAIL TRUCK WASH SYSTEM" />
            <div className="container">
                <div className="inner__container">
                    <div className={styles.headInfo}>
                        {/* 첫 번째 */}
                        <div className={styles.contentWrapper}>
                            <ZoomImage imagePath="/image/applications/retailTruck/headImage.jpg" />
                            <div className={styles.title__blue}>DRIVE THROUGH SYSTEM</div>
                            <div className={styles.content__text}>
                                The InterClean commercial truck wash systems are the most advanced
                                wash systems in the world. Fully automated commercial truck wash
                                systems designed by InterClean can produce 15 to 30 clean trucks per
                                hour with only one employee. <br />
                                <br />
                                This commercial truck wash design allows the system to operate
                                continuously using recycled water — even while the settling pits are
                                being emptied and cleaned. The pits are emptied of liquids
                                automatically while the dried sludge is removed by the use of a
                                Bobcat and roll-off containers. <br />
                                <br />
                                InterClean does not design and build wash systems that use deadly
                                hydrofluoric acid in any part of cleaning. InterClean opposes the
                                use of hydrofluoric acid in any form in vehicle washing.{" "}
                                <span className={styles.content__link}>HF Acid Report</span> (PDF,
                                174.20 kB)
                            </div>
                        </div>
                        {/* 두 번째 */}
                        <div className={styles.contentWrapper}>
                            <div className={styles.title__blue}>
                                GANTRY / ROLLOVER DESIGN – ULTIMA
                            </div>
                            <ZoomImage imagePath="/image/applications/retailTruck/bodyImage.jpg" />
                            <div className={styles.content__text}>
                                The Ultima, our specially designed Gantry/Rollover Design require a
                                smaller footprint and are available with multiple options such as
                                touchless, friction or a combination of both.
                            </div>
                        </div>
                    </div>
                    <div className={styles.body}>
                        {/* 첫 번째 */}
                        <div className={styles.contentWrapper}>
                            <div className={styles.title__orange}>
                                ULTIMATE CLEANING POWER FOR A VARIETY OF TRUCKS
                            </div>
                            <div className={styles.content__text}>
                                The newly designed Ultima Fleet Washer presents state-of-the-art
                                technology for the large vehicle cleaning industry and fulfils
                                extensive needs in a variety of applications. The top models combine
                                advanced brushless and brush wash methods and clean all kinds of
                                vehicles from small trucks to complex shaped tractors and trailers.
                            </div>
                        </div>
                        {/* 두 번째 */}
                        <div className={styles.contentWrapper}>
                            <div className={styles.title__orange}>
                                TOP CLASS CLEANING POWER FOR HARD-TO-CLEAN VEHICLES
                            </div>
                            <div className={styles.content__text}>
                                The Rainbow Ultima is equipped with a prewash and high-pressure
                                systems consisting of oscillating and profiling solid stream nozzle
                                assemblies that have the best available cleaning power for tanker
                                trucks, garbage trucks and other hard-to-clean odd shaped vehicles.
                                For standard applications the Ultima can be equipped with
                                conventional high-pressure nozzles.
                            </div>
                        </div>
                        {/* 세 번째 */}
                        <div className={styles.contentWrapper}>
                            <div className={styles.title__orange}>
                                THE KEY CLEANING ADVANTAGE – HIGH PRESSURE WASHING
                            </div>
                            <div className={styles.content__text}>
                                Transportation vehicles have a large number of areas beyond the
                                reach of brushes. Therefore it is important to note that the
                                high-pressure washing features in this system play a major role in
                                the cleaning processes. Additionally, the high-pressure water jets
                                remove sand and other coarse particles, which could potentially
                                scratch finishes of vehicles during the brush stage of the wash. The
                                Ultima high pressure arch’s use both the conventional flat spray and
                                advanced solid stream pattern for the maximum cleaning impact and
                                efficient washing.
                            </div>
                        </div>
                        {/* 네 번째 */}
                        <div className={styles.contentWrapper}>
                            <div className={styles.title__orange}>
                                TRIPLE COVERAGE SWEEPING TECHNIQUE FOR ENHANCED CLEANING
                            </div>
                            <div className={styles.content__text}>
                                Vertically sweeping side jets clean the sides from sills to roof.
                                For enhanced cleaning, they oscillate up and down so that they
                                overlap each other. Similarly, the high-pressure water jets on the
                                rotary head oscillate sideways. High-pressure water jets, from
                                nozzles situated in the rotary head, clean the vertical and
                                horizontal surfaces from bumper to bumper. Rotational motions of the
                                head, together with the lateral oscillating pattern, direct the
                                far-reaching water jets into vehicle recesses that are beyond the
                                reach of brushes.
                            </div>
                        </div>
                        {/* 다섯 번째 */}
                        <div className={styles.contentWrapper}>
                            <div className={styles.title__orange}>
                                THESE SYSTEMS ARE AVAILABLE USING FRESH OR RECYCLED WATER AND THE
                                FOLLOWING OPTIONS:
                            </div>
                            <div className={styles.content__text}>
                                <li>Blowers</li>
                                <li>RO Final Rinse</li>
                                <li>2-Step Cleaning Chemistry</li>
                                <li>Wax/Rinse Aid</li>
                                <li>Wash Authorization</li>
                            </div>
                        </div>
                        {/* 버튼 */}
                        <ButtonBlue content="CONTACT A PRODUCT EXPERT!" />
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
            </div>
            <Footer />
        </div>
    );
}

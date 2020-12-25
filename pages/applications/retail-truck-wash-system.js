import { useState } from "react";
import { withTranslation } from "../../i18n";

// Layouts
import { Header, Footer } from "@/components/layout";

import { Photos, Videos } from "@/components/layout/applications";
import { ZoomImage, ButtonBlue } from "@/components/elements";
import Title from "@/components/layout/wash-systems/title";

import styles__app from "@/public/css/modules/applications/applications.module.css";
import styles from "@/public/css/modules/applications/retailTruck.module.css";

function RetailTruckWashSystems({ t }) {
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
            <Title titleString={t("title")} />
            <div className="container">
                <div className="inner__container">
                    <div className={styles.headInfo}>
                        {/* 첫 번째 */}
                        <div className={styles.contentWrapper}>
                            <ZoomImage imagePath="/image/applications/retailTruck/headImage.jpg" />
                            <div className={styles.title__blue}>{t("p1")}</div>
                            <div className={styles.content__text}>
                                {t("p2")}
                                <br />
                                <br />
                                {t("p3")}
                                <br />
                                <br />
                                {t("p4")}{" "}
                                <span className={styles.content__link}>HF Acid Report</span> (PDF,
                                174.20 kB)
                            </div>
                        </div>
                        {/* 두 번째 */}
                        <div className={styles.contentWrapper}>
                            <div className={styles.title__blue}>{t("p5")}</div>
                            <ZoomImage imagePath="/image/applications/retailTruck/bodyImage.jpg" />
                            <div className={styles.content__text}>{t("p6")}</div>
                        </div>
                    </div>
                    <div className={styles.body}>
                        {/* 첫 번째 */}
                        <div className={styles.contentWrapper}>
                            <div className={styles.title__orange}>{t("p7")}</div>
                            <div className={styles.content__text}>{t("p8")}</div>
                        </div>
                        {/* 두 번째 */}
                        <div className={styles.contentWrapper}>
                            <div className={styles.title__orange}>{t("p9")}</div>
                            <div className={styles.content__text}>{t("p10")}</div>
                        </div>
                        {/* 세 번째 */}
                        <div className={styles.contentWrapper}>
                            <div className={styles.title__orange}>{t("p11")}</div>
                            <div className={styles.content__text}>{t("p12")}</div>
                        </div>
                        {/* 네 번째 */}
                        <div className={styles.contentWrapper}>
                            <div className={styles.title__orange}>{t("p13")}</div>
                            <div className={styles.content__text}>{t("p14")}</div>
                        </div>
                        {/* 다섯 번째 */}
                        <div className={styles.contentWrapper}>
                            <div className={styles.title__orange}>{t("p15")}</div>
                            <div className={styles.content__text}>
                                <li>{t("p16")}</li>
                                <li>{t("p17")}</li>
                                <li>{t("p18")}</li>
                                <li>{t("p19")}</li>
                                <li>{t("p20")}</li>
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
            </div>
            <Footer />
        </div>
    );
}

RetailTruckWashSystems.getInitialProps = async () => ({
    namespacesRequired: ["applications__retail-truck-wash-system", "footer", "header"],
});

export default withTranslation("applications__retail-truck-wash-system")(RetailTruckWashSystems);

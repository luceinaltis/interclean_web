import { useState } from "react";
import Link from "next/link";
import { withTranslation } from "../../i18n";

// Layouts
import { Header, Footer } from "@/components/layout";

import { Photos, Videos, Drawings, Downloads } from "@/components/layout/applications";
import Title from "@/components/layout/wash-systems/title";

import styles__app from "@/public/css/modules/applications/applications.module.css";
import styles from "@/public/css/modules/applications/busWash.module.css";

function BusWashSystem({ t }) {
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
        ["w1xeFUOIoB4", "/image/applications/bus/video1.png", "HD SALT TRUCK WASH SYSTEM"],
        ["zm1x0DFWQX4", "/image/applications/bus/video2.png", "DRIVE THROUGH WASH SYSTEM"],
        [
            "0mamDH80cuU",
            "/image/applications/bus/video3.png",
            "DRIVE THROUGH WASH SYSTEM WITH MILITARY VEHICLES",
        ],
    ];

    const drawingsData = [
        ["/image/applications/bus/drawing/drawing1.pdf", "Hybrid Bus Wash", "(PDF, 315 kB)"],
        ["/image/applications/bus/drawing/drawing2.pdf", "XJ 404 Fresh Water", "(PDF, 329 kB)"],
        ["/image/applications/bus/drawing/drawing3.pdf", "XJ 404 Recycled Water", "(PDF, 345 kB)"],
        ["/image/applications/bus/drawing/drawing4.pdf", "Fresh Water School Bus", "(PDF, 309 kB)"],
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
        ["/downloads/applications/truck/Wash_Detergents.pdf", "Wash Detergents", "(PDF, 3 MB)"],
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
                        <div className={styles.zoom__imageWrapper}>
                            <img
                                src="/image/applications/bus/headImage.jpg"
                                className={styles.zoom__image}
                            />
                        </div>
                        <div className={styles.headInfo__title__blue}>{t("p1")}</div>
                        <p>&nbsp;</p>
                        <div className={styles.headInfo__body}>{t("p2")}</div>
                        <div className={styles.headInfo__title__orange}>{t("p3")}</div>
                        <div className={styles.headInfo__body}>{t("p4")}</div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.zoom__imageWrapper}>
                            <img
                                src="/image/applications/bus/bodyImage.jpg"
                                className={styles.zoom__image}
                            />
                        </div>
                        <div className={styles.body__title}>{t("p5")}</div>
                        <div className={styles.body__body}>
                            {t("p6")}
                            <br />
                            {t("p7")}
                            <br />
                            {t("p8")}
                        </div>
                    </div>
                    <div className={styles.tailInfo}>
                        <div className={styles.tailInfo__title}>{t("p9")}</div>
                        <div className={styles.tailInfo__body}>{t("p10")}</div>
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

BusWashSystem.getInitialProps = async () => ({
    namespacesRequired: ["applications__bus-wash-system", "footer", "header"],
});

export default withTranslation("applications__bus-wash-system")(BusWashSystem);

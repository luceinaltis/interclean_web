import { useState } from "react";
import Link from "next/link";
import { withTranslation } from "../../i18n";

// Layouts
import { Header, Footer } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import { Photos, Videos, Drawings, Downloads } from "@/components/layout/applications";

// mining-oil-wash-system 에서만 필요한 layouts
import Title from "@/components/layout/wash-systems/title";

import styles__app from "@/public/css/modules/applications/applications.module.css";
import styles from "@/public/css/modules/applications/mining.module.css";

function MiningOilWashSystem({ t }) {
    const photosData = [
        ["/image/applications/mining/photo1.jpg", ""],
        ["/image/applications/mining/photo2.jpg", ""],
        ["/image/applications/mining/photo3.jpg", ""],
        ["/image/applications/mining/photo4.jpg", ""],
        ["/image/applications/mining/photo5.jpg", ""],
        ["/image/applications/mining/photo6.jpg", ""],
        ["/image/applications/mining/photo7.jpg", ""],
        ["/image/applications/mining/photo8.jpg", ""],
        ["/image/applications/mining/photo9.jpg", ""],
        ["/image/applications/mining/photo10.jpg", ""],
        ["/image/applications/mining/photo11.jpg", ""],
        ["/image/applications/mining/photo12.jpg", ""],
        ["/image/applications/mining/photo13.jpg", ""],
        ["/image/applications/mining/photo14.jpg", ""],
        ["/image/applications/mining/photo15.jpg", ""],
        ["/image/applications/mining/photo16.jpg", ""],
        ["/image/applications/mining/photo17.jpg", ""],
        ["/image/applications/mining/photo18.jpg", ""],
        ["/image/applications/mining/photo19.jpg", ""],
        ["/image/applications/mining/photo20.jpg", ""],
        ["/image/applications/mining/photo21.jpg", ""],
        ["/image/applications/mining/photo22.jpg", ""],
        ["/image/applications/mining/photo23.jpg", ""],
        ["/image/applications/mining/photo24.jpg", ""],
        ["/image/applications/mining/photo25.jpg", ""],
        ["/image/applications/mining/photo26.jpg", ""],
        ["/image/applications/mining/photo27.jpg", ""],
        ["/image/applications/mining/photo28.jpg", ""],
        ["/image/applications/mining/photo29.jpg", ""],
        ["/image/applications/mining/photo30.jpg", ""],
    ];

    const videoData = [
        ["B2VTsoxgGjo", "/image/applications/mining/video1.png", "HD SALT TRUCK WASH SYSTEM"],
        ["vtQ7mBr3vy0", "/image/applications/mining/video2.png", "DRIVE THROUGH WASH SYSTEM"],
    ];

    const drawingsData = [
        ["/image/applications/mining/drawing/drawing1.pdf", "Chassis Wash", ""],
        ["/image/applications/mining/drawing/drawing2.pdf", "XR 80 Wheel Wash", ""],
        ["/image/applications/mining/drawing/drawing3.pdf", "XR 120 Wheel Wash", ""],
        ["/image/applications/mining/drawing/drawing4.pdf", "Stryker Wheel Wash", ""],
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
                        <div
                            className={`${styles.content__title__blue} ${styles.headInfo__title} ${styles.content__title__center}`}
                        >
                            {t("p1")}
                        </div>
                        <p>&nbsp;</p>
                        <div
                            className={`${styles.content__title__orange} ${styles.content__title__center}`}
                        >
                            {t("p2")}
                        </div>
                        <div className={styles.zoom__imageWrapper}>
                            <img
                                src="/image/applications/mining/headImage.jpg"
                                className={styles.zoom__image}
                            />
                        </div>
                        <div className={styles.content__text}>
                            {t("p3")}
                            <br />
                            {t("p4")}
                        </div>
                    </div>
                    <div className={styles.body}>
                        {/* 첫 번째 */}
                        <div className={styles.body__content__wrapper}>
                            <div
                                className={`${styles.content__title__blue} ${styles.content__title__center}`}
                            >
                                {t("p5")}
                            </div>
                            <div className={styles.zoom__imageWrapper}>
                                <img
                                    src="/image/applications/mining/bodyImage1.jpg"
                                    className={styles.zoom__image}
                                />
                            </div>
                            <div className={styles.zoom__content__title__orange}>{t("p6")}</div>
                            <div className={styles.content__text}>
                                <li>{t("p7")}</li>
                                <li>{t("p8")}</li>
                                <li>{t("p9")}</li>
                                <li>{t("p10")}</li>
                                <li>{t("p11")}</li>
                            </div>
                        </div>
                        {/* 두 번째 */}
                        <div className={styles.body__content__wrapper}>
                            <div
                                className={`${styles.content__title__blue} ${styles.content__title__center}`}
                            >
                                {t("p12")}
                            </div>
                            <div className={styles.zoom__imageWrapper}>
                                <img
                                    src="/image/applications/mining/bodyImage2.jpg"
                                    className={styles.zoom__image}
                                />
                            </div>
                            <div className={styles.content__text}>{t("p13")}</div>
                            <div className={styles.content__title__orange}>{t("p14")}</div>
                            <div className={styles.content__text}>
                                <li>{t("p15")}</li>
                                <li>{t("p16")}</li>
                                <li>{t("p17")}</li>
                                <li>{t("p18")}</li>
                                <li>{t("p19")}</li>
                                <div className={styles.content__text__bold}>{t("p20")}</div>
                            </div>
                        </div>
                        {/* 세 번째 */}
                        <div className={styles.body__content__wrapper}>
                            <div
                                className={`${styles.content__title__blue} ${styles.content__title__center}`}
                            >
                                {t("p21")}
                            </div>
                            <div className={styles.zoom__imageWrapper}>
                                <img
                                    src="/image/applications/mining/bodyImage3.jpg"
                                    className={styles.zoom__image}
                                />
                            </div>
                            <div className={styles.content__text}>{t("p22")}</div>
                            <div className={styles.content__title__orange}>{t("p23")}</div>
                            <div className={styles.content__text}>
                                <li>{t("p24")}</li>
                                <li>{t("p25")}</li>
                                <li>{t("p26")}</li>
                                <li className={styles.content__text__bold}>{t("p27")}</li>
                            </div>
                        </div>
                        {/* 네 번째 */}
                        <div className={styles.body__content__wrapper}>
                            <div
                                className={`${styles.content__title__blue} ${styles.content__title__center}`}
                            >
                                {t("p28")}
                            </div>
                            <div className={styles.zoom__imageWrapper}>
                                <img
                                    src="/image/applications/mining/bodyImage4.jpg"
                                    className={styles.zoom__image}
                                />
                            </div>
                            <div className={styles.content__text}>{t("p29")}</div>
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

MiningOilWashSystem.getInitialProps = async () => ({
    namespacesRequired: ["applications__mining-oil-wash-system", "footer", "header"],
});

export default withTranslation("applications__mining-oil-wash-system")(MiningOilWashSystem);

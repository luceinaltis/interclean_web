import { useState } from "react";
import Link from "next/link";
import { withTranslation } from "../../i18n";

// Layouts
import { Header, Footer } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import { Photos, Videos, Downloads } from "@/components/layout/applications";

// military-wash-system 에서만 필요한 layouts
import Title from "@/components/layout/wash-systems/title";

import styles__app from "@/public/css/modules/applications/applications.module.css";
import styles from "@/public/css/modules/applications/militaryWash.module.css";

function MilitaryWashSystem({ t }) {
    const photosData = [
        ["/image/applications/military/photo1.jpg", ""],
        ["/image/applications/military/photo2.jpg", ""],
        ["/image/applications/military/photo3.jpg", ""],
        ["/image/applications/military/photo4.jpg", ""],
        ["/image/applications/military/photo5.png", ""],
        ["/image/applications/military/photo6.jpg", ""],
        ["/image/applications/military/photo7.jpg", ""],
        ["/image/applications/military/photo8.jpg", ""],
        ["/image/applications/military/photo9.jpg", ""],
        ["/image/applications/military/photo10.jpg", ""],
        ["/image/applications/military/photo11.jpg", ""],
        ["/image/applications/military/photo12.jpg", ""],
        ["/image/applications/military/photo13.jpg", ""],
        ["/image/applications/military/photo14.jpg", ""],
        ["/image/applications/military/photo15.jpg", ""],
    ];

    const videoData = [
        ["BKBH1SDKt18", "/image/applications/military/video1.png", "HD SALT TRUCK WASH SYSTEM"],
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
                    <div className={styles.body}>
                        <div className={styles.zoom__imageWrapper}>
                            <img
                                src="/image/applications/military/headImage.jpg"
                                className={styles.zoom__image}
                            />
                        </div>
                        {/* 첫 번째 */}
                        <div className={styles.content__wrapper}>
                            <div className={styles.content__title__blue}>{t("p1")}</div>
                            <div className={styles.content__text}>{t("p2")}</div>
                        </div>
                        {/* 두 번째 */}
                        <div className={styles.content__wrapper}>
                            <div className={styles.content__title__orange}>{t("p3")}</div>
                            <div className={styles.content__text}>{t("p4")}</div>
                        </div>
                        {/* 세 번째 */}
                        <div className={styles.content__wrapper}>
                            <div className={styles.content__title__blue}>{t("p5")}</div>
                            <div className={styles.content__text}>
                                {t("p6")}
                                <br />
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

MilitaryWashSystem.getInitialProps = async () => ({
    namespacesRequired: ["applications__military-wash-system", "footer", "header"],
});

export default withTranslation("applications__military-wash-system")(MilitaryWashSystem);

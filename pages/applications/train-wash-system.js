import Link from "next/link";
import { useState } from "react";
import { withTranslation } from "../../i18n";

// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import { Photos, Drawings, Downloads } from "@/components/layout/applications";
import Title from "@/components/layout/wash-systems/title";

import styles__app from "@/public/css/modules/applications/applications.module.css";
import styles from "@/public/css/modules/applications/trainWash.module.css";

function TrainWashSystem({ t }) {
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
        ["/image/applications/train/drawing/drawing3.pdf", "Locomotive Wash", "(PDF, 241.75 kB)"],
        ["/image/applications/train/drawing/drawing4.pdf", "Water Test", "(PDF, 416.25 kB)"],
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
            <Title titleString={t("title")} subtitle="" />
            <div className="container">
                <div className="inner__container">
                    <div className={styles.headInfo}>
                        <div className={styles.headInfo__title}>{t("p1")}</div>
                        <div className={styles.headInfo__subtitle}>{t("p2")}</div>
                        <div className={styles.zoom__imageWrapper}>
                            <img
                                src="/image/applications/train/headImage.jpg"
                                className={styles.zoom__image}
                            />
                        </div>
                    </div>
                    <div className={styles.body}>
                        {/* 첫 번째 */}
                        <div className={styles.body__title}>{t("p3")}</div>
                        <div className={styles.body__body}>
                            <li>{t("p4")}</li>
                            <li>{t("p5")}</li>
                            <li>{t("p6")}</li>
                            <li>{t("p7")}</li>
                        </div>
                        {/* 두 번째 */}
                        <div className={styles.body__title}>{t("p8")}</div>
                        <div className={styles.body__body}>{t("p9")}</div>
                        {/* 세 번째 */}
                        <div className={styles.body__title}>{t("p10")}</div>
                        <div className={styles.body__body}>{t("p11")}</div>
                        {/* 네 번째 */}
                        <div className={styles.body__title}>{t("p12")}</div>
                        <div className={styles.body__body}>{t("p13")}</div>
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

TrainWashSystem.getInitialProps = async () => ({
    namespacesRequired: ["applications__train-wash-system", "footer", "header"],
});

export default withTranslation("applications__train-wash-system")(TrainWashSystem);

import Link from "next/link";
import { useState } from "react";
import { withTranslation } from "../../i18n";

// Layouts
import { Header, Footer } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import { Photos, Downloads } from "@/components/layout/applications";

// aircraft-wash-system 에서만 필요한 layouts
import Title from "@/components/layout/wash-systems/title";

import styles__app from "@/public/css/modules/applications/applications.module.css";
import styles__aircraft from "@/public/css/modules/applications/aircraft.module.css";

function AircraftWashSystem({ t }) {
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
                    <div className={styles__aircraft.headInfo}>
                        <div
                            className={`${styles__aircraft.content__title__blue} ${styles__aircraft.headInfo__title}`}
                        >
                            {t("p1")}
                        </div>
                        <p>&nbsp;</p>
                        <div className={styles__aircraft.content__title__orange}>{t("p2")}</div>
                        <div className={styles__aircraft.zoom__imageWrapper}>
                            <img
                                src="/image/applications/aircraft/headImage.jpg"
                                className={styles__aircraft.zoom__image}
                            />
                        </div>
                        <div className={styles__aircraft.content__text}>{t("p3")}</div>
                    </div>
                    <div className={styles__aircraft.body}>
                        {/* 첫 번째 */}
                        <div className={styles__aircraft.body__content__wrapper}>
                            <div className={styles__aircraft.content__title__orange}>{t("p4")}</div>
                            <div className={styles__aircraft.content__text}>
                                {t("p5")}
                                <br />
                                <br />
                                {t("p6")}
                            </div>
                        </div>
                        {/* 두 번째 */}
                        <div className={styles__aircraft.body__content__wrapper}>
                            <div className={styles__aircraft.content__title__blue}>{t("p7")}</div>
                            <div className={styles__aircraft.content__text}>{t("p8")}</div>
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

AircraftWashSystem.getInitialProps = async () => ({
    namespacesRequired: ["applications__aircraft-wash-system", "footer", "header"],
});

export default withTranslation("applications__aircraft-wash-system")(AircraftWashSystem);

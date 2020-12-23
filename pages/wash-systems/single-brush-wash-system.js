import Image from "next/image";
import { withTranslation } from "../../i18n";

// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import Title from "../../components/layout/wash-systems/title";
import styles from "../../public/css/modules/wash-systems/single-brush-wash-system.module.css";
import ImageGrid from "../../components/layout/home/imageGrid";

// 그리드에 들어갈 이미지 데이터
// [이미지경로, 이동경로, 타이틀]
const gridCellData = [
    ["/image/grid/Rollover.jpg", "/wash-systems/ultra-gantry", "GANTRY / ROLLOVER"],
    ["/image/grid/Touchless.jpg", "/wash-systems/drive-thru-touchless", "TOUCHLESS"],
    ["/image/grid/Manual.jpg", "/wash-systems/manual", "MANUAL"],
    ["/image/grid/Mobile.jpg", "/wash-systems/mobile", "MOBILE"],
    ["/image/grid/Wheel.jpg", "/wash-systems/wheel-wash-system", "WHEEL / TIRE & CHASSIS"],
    ["/image/grid/WaterRecycling.jpg", "/wash-systems/water-recycling", "WATER RECYCLING"],
];

function SingleBrushWashSystem({ t }) {
    return (
        <div>
            <Header />
            <Title titleString={t("title")} titleSubString={t("sub-title")} />
            <div className="container">
                <div className="inner__container">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h1>{t("p1")}</h1>
                    <p>&nbsp;</p>
                    <p>{t("p2")}</p>
                    <p>&nbsp;</p>
                    <p>{t("p3")}</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>{t("p4")}</h2>
                    <p>{t("p5")}</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className={styles.grid}>
                        <div className={styles.grid__item}>
                            <i className="fas fa-hand-holding-usd" />
                            <h3>{t("p6")}</h3>
                            <p>{t("p7")}</p>
                        </div>
                        <div className={styles.grid__item}>
                            <i className="far fa-thumbs-up" />
                            <h3>{t("p8")}</h3>
                            <p>{t("p9")}</p>
                        </div>
                        <div className={styles.grid__item}>
                            <i className="far fa-thumbs-up" />
                            <h3>{t("p10")}</h3>
                            <p>{t("p11")}</p>
                        </div>
                        <div className={styles.grid__item}>
                            <i className="fas fa-user-clock" />
                            <h3>{t("p12")}</h3>
                            <p>{t("p13")}</p>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className={styles.grid__second}>
                        <div className="image__wrapper">
                            <Image
                                src="/image/wash-systems/single-brush-wash-system/truck1.jpg"
                                alt="설명"
                                layout="intrinsic"
                                width={535}
                                height={374}
                            />
                        </div>
                        <div>
                            <h2>{t("p14")}</h2>
                            <p>{t("p15")}</p>
                            <ul>
                                <li>{t("p16")}</li>
                                <li>{t("p17")}</li>
                                <li>{t("p18")}</li>
                                <li>{t("p19")}</li>
                                <li>{t("p20")}</li>
                                <li>{t("p21")}</li>
                                <li>{t("p22")}</li>
                                <li>{t("p23")}</li>
                            </ul>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>{t("p24")}</h2>
                    <p>{t("p25")}</p>
                    <p>&nbsp;</p>
                    <div className={styles.grid__third}>
                        <div>
                            <h3>{t("p26")}</h3>
                            <p>{t("p27")}</p>
                        </div>
                        <div>
                            <h3>{t("p28")}</h3>
                            <p>{t("p29")}</p>
                        </div>
                        <div>
                            <h3>{t("p30")}</h3>
                            <p>{t("p31")}</p>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>{t("p32")}</h2>
                    <p>{t("p33")}</p>
                    <p>&nbsp;</p>
                    <ImageGrid cellData={gridCellData} />
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

SingleBrushWashSystem.getInitialProps = async () => ({
    namespacesRequired: ["wash-systems__single-brush-wash-system", "footer", "header"],
});

export default withTranslation("wash-systems__single-brush-wash-system")(SingleBrushWashSystem);

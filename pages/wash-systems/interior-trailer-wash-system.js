import { withTranslation } from "../../i18n";

// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import ImageGrid from "../../components/layout/home/imageGrid";
import Title from "../../components/layout/wash-systems/title";
import styles from "../../public/css/modules/wash-systems/interior-trailer-wash-system.module.css";

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

function InteriorTrailerWashSystem({ t }) {
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
                    <p>{t("p3")}</p>
                    <p>&nbsp;</p>
                    <h2>{t("p4")}</h2>
                    <p>&nbsp;</p>
                    <div className={styles.grid}>
                        <div className={styles.grid_item}>
                            <i class="fas fa-user-shield" />
                            <h3>{t("p5")}</h3>
                            <p>{t("p6")}</p>
                        </div>
                        <div className={styles.grid_item}>
                            <i class="fas fa-dollar-sign" />
                            <h3>{t("p7")}</h3>
                            <p>{t("p8")}</p>
                        </div>
                        <div className={styles.grid_item}>
                            <i class="far fa-thumbs-up" />
                            <h3>{t("p9")}</h3>
                            <p>{t("p10")}</p>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
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

InteriorTrailerWashSystem.getInitialProps = async () => ({
    namespacesRequired: ["wash-systems__interior-trailer-wash-system", "footer", "header"],
});

export default withTranslation("wash-systems__interior-trailer-wash-system")(
    InteriorTrailerWashSystem
);

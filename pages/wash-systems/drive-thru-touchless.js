import { withTranslation } from "../../i18n";

// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import ImageGrid from "../../components/layout/home/imageGrid";
import Title from "../../components/layout/wash-systems/title";

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

function DriveThruTouchless({ t }) {
    return (
        <div>
            <Header />
            <Title titleString={t("title")} />
            <div className="container">
                <div className="inner__container">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h1>{t("p1")}</h1>
                    <p>&nbsp;</p>
                    <p>{t("p2")}</p>
                    <p>
                        <strong>{t("p3")}</strong>
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>{t("p4")}</h2>
                    <p>{t("p5")}</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>{t("p6")}</strong>
                    </p>
                    <ul>
                        <li>{t("p7")}</li>
                        <li>{t("p8")}</li>
                        <li>{t("p9")}</li>
                        <li>{t("p10")}</li>
                        <li>{t("p11")}</li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>{t("p12")}</h3>
                    <p>{t("p13")}</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>{t("p14")}</strong>
                    </p>
                    <ul>
                        <li>{t("p15")}</li>
                        <li>{t("p16")}</li>
                        <li>{t("p17")}</li>
                    </ul>
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

DriveThruTouchless.getInitialProps = async () => ({
    namespacesRequired: ["wash-systems__drive-thru-touchless", "footer", "header"],
});

export default withTranslation("wash-systems__drive-thru-touchless")(DriveThruTouchless);

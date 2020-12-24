import { withTranslation } from "../../i18n";

// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import ImageGrid from "../../components/layout/home/imageGrid";
import Title from "../../components/layout/wash-systems/title";

function Mobile({ t }) {
    // 그리드에 들어갈 이미지 데이터
    // [이미지경로, 이동경로, 타이틀]
    const gridCellData = [
        ["/image/grid/Rollover.jpg", "/wash-systems/ultra-gantry", t("gantry")],
        ["/image/grid/Touchless.jpg", "/wash-systems/drive-thru-touchless", t("touchless")],
        ["/image/grid/Manual.jpg", "/wash-systems/manual", t("manual")],
        ["/image/grid/Mobile.jpg", "/wash-systems/mobile", t("mobile")],
        ["/image/grid/Wheel.jpg", "/wash-systems/wheel-wash-system", t("wheel")],
        ["/image/grid/WaterRecycling.jpg", "/wash-systems/water-recycling", t("water")],
    ];
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
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>{t("p3")}</h2>
                    <p>&nbsp;</p>
                    <p>{t("p4")}</p>
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

Mobile.getInitialProps = async () => ({
    namespacesRequired: ["wash-systems__mobile", "footer", "header"],
});

export default withTranslation("wash-systems__mobile")(Mobile);

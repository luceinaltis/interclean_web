import { withTranslation } from "../../i18n";

// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import ImageGrid from "../../components/layout/home/imageGrid";
import Title from "../../components/layout/wash-systems/title";

function Index({ t }) {
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
            <div>
                <div className="container">
                    <div className="inner__container">
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <h1>{t("p1")}</h1>
                        <h3>{t("p2")}</h3>
                        <p>&nbsp;</p>
                        <p>{t("p3")}</p>
                        <p>{t("p4")}</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>

                        <h2>{t("p5")}</h2>
                        <p>&nbsp;</p>
                        <ul>
                            <li>{t("p6")}</li>
                            <li>{t("p7")}</li>
                            <li>{t("p8")}</li>
                            <li>{t("p9")}</li>
                            <li>{t("p10")}</li>
                            <li>{t("p11")}</li>
                        </ul>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <ImageGrid cellData={gridCellData} />
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

Index.getInitialProps = async () => ({
    namespacesRequired: ["wash-systems", "footer", "header"],
});

export default withTranslation("wash-systems")(Index);

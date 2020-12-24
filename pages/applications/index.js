// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";
import { ImageGrid } from "@/components/layout/home";
import Title from "@/components/layout/wash-systems/title";

import styles from "@/public/css/modules/applications/applications.module.css";

import { withTranslation } from "../../i18n";

function Index({ t }) {
    // 그리드에 들어갈 이미지 데이터
    // [이미지경로, 이동경로, 타이틀]
    const gridCellData = [
        ["/image/grid/Bus.jpg", "/applications/bus-wash-system", t("bus")],
        ["/image/grid/Truck.jpg", "/applications/truck-wash-system", t("truck")],
        ["/image/grid/RetailTruck.jpg", "/applications/retail-truck-wash-system", t("retail")],
        ["/image/grid/Aircraft.jpg", "/applications/aircraft-wash-system", t("aircraft")],
        ["/image/grid/Military.jpg", "/applications/military-wash-system", t("military")],
        ["/image/grid/Train.jpg", "/applications/train-wash-system", t("train")],
        ["/image/grid/Mining.jpg", "/applications/mining-oil-wash-system", t("mining")],
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

Index.getInitialProps = async () => ({
    namespacesRequired: ["applications", "footer", "header", "grid"],
});

export default withTranslation("applications")(Index);

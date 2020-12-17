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
        ["/image/grid/Bus.jpg", "/applications/bus-wash-system", "버스 세척"],
        ["/image/grid/Truck.jpg", "/applications/truck-wash-system", "트럭 세척"],
        [
            "/image/grid/RetailTruck.jpg",
            "/applications/retail-truck-wash-system",
            "특수목적 차량 세척",
        ],
        ["/image/grid/Aircraft.jpg", "/applications/aircraft-wash-system", "항공기 세척"],
        ["/image/grid/Military.jpg", "/applications/military-wash-system", "군용차량 세척"],
        ["/image/grid/Train.jpg", "/applications/train-wash-system", "열차 세척"],
        ["/image/grid/Mining.jpg", "/applications/mining-oil-wash-system", "가스 & 오일 차량 세척"],
        ["/image/grid/Wheel.jpg", "/wash-systems/wheel-wash-system", "휠 & 하부 세척"],
        ["/image/grid/WaterRecycling.jpg", "/wash-systems/water-recycling", "물 재활용 시스템"],
    ];

    return (
        <div>
            <Header />
            <Title titleString={t("title")} />
            <div className="container">
                <div className="inner__container">
                    <h1>{t("p1")}</h1>
                    <p>{t("p2")}</p>
                </div>
            </div>
            <div className={styles.container}>
                <ImageGrid cellData={gridCellData} />
            </div>
            <Footer />
        </div>
    );
}

Index.getInitialProps = async () => ({
    namespacesRequired: ["applications", "footer", "header"],
});

export default withTranslation("applications")(Index);

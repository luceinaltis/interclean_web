import Head from "next/head";

// Layouts
import { Header, Footer } from "../components/layout";

// Elements
import { ImageGrid, Welcome, SlideImage, WhatsNew, Services } from "../components/layout/home";

import { withTranslation } from "../i18n";

import styles from "@/public/css/modules/home.module.css";

function Home({ t }) {
    const gridCellData = [
        ["/image/grid/Bus.jpg", "/applications/bus-wash-system", t("bus")],
        ["/image/grid/Truck.jpg", "/applications/truck-wash-system", t("truck")],
        ["/image/grid/Train.jpg", "/applications/train-wash-system", t("train")],
        ["/image/grid/Aircraft.jpg", "/applications/aircraft-wash-system", t("aircraft")],
        ["/image/grid/Military.jpg", "/applications/military-wash-system", t("military")],
        ["/image/grid/Mining.jpg", "/applications/mining-oil-wash-system", t("mining")],
    ];

    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="empty" />
            <SlideImage />
            <Welcome />
            <div className="container">
                <div className="inner__container">
                    <p>&nbsp;</p>
                    <ImageGrid cellData={gridCellData}>
                        <p className={styles.vehicle__title__color_orange}>{t("p5")}</p>
                        <p>&nbsp;</p>
                    </ImageGrid>
                </div>
            </div>
            <WhatsNew />
            <Services />
            <Footer />
        </div>
    );
}

Home.getInitialProps = async () => ({
    namespacesRequired: ["home", "footer", "header"],
});

export default withTranslation("home")(Home);

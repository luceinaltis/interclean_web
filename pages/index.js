import Head from "next/head";

// Layouts
import { Header, Footer } from "../components/layout";

// Elements
import {
  ImageGrid,
  Welcome,
  SlideImage,
  WhatsNew,
  Services,
} from "../components/layout/home";

import { withTranslation } from "../i18n";

import styles from "@/public/css/modules/home.module.css";

function Home({ t }) {
  const gridCellData = [
    ["/image/grid/Bus.jpg", "/applications/bus-wash-system", "버스"],
    ["/image/grid/Truck.jpg", "/applications/truck-wash-system", "트럭"],
    ["/image/grid/Train.jpg", "/applications/train-wash-system", "열차"],
    [
      "/image/grid/Aircraft.jpg",
      "/applications/aircraft-wash-system",
      "항공기",
    ],
    [
      "/image/grid/Military.jpg",
      "/applications/military-wash-system",
      "군용차량",
    ],
    [
      "/image/grid/Mining.jpg",
      "/applications/mining-oil-wash-system",
      "가스 & 오일 차량",
    ],
  ];

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="empty" />
      <SlideImage />
      <Welcome />
      <div className="container">
        <div className="inner__container">
          <ImageGrid cellData={gridCellData}>
            <p className={styles.vehicle__title__color_orange}>
              {"VEHICLE WASH "}
              <font className={styles.vehicle__title__color_blue}>SYSTEMS</font>
            </p>
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

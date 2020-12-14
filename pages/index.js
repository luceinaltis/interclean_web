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

const gridCellData = [
  ["/image/grid/Bus.jpg", "/applications/bus-wash-system", "버스"],
  ["/image/grid/Truck.jpg", "/applications/truck-wash-system", "트럭"],
  ["/image/grid/Train.jpg", "/applications/train-wash-system", "열차"],
  ["/image/grid/Aircraft.jpg", "/applications/aircraft-wash-system", "항공기"],
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

import styles from "@/public/css/modules/home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SlideImage />
      <Welcome />
      <ImageGrid cellData={gridCellData}>
        {/* <div className={styles.vehicle__title}> */}
        <p className={styles.vehicle__title__color_orange}>
          {"VEHICLE WASH "}
          <font className={styles.vehicle__title__color_blue}>SYSTEMS</font>
        </p>
        {/* </div> */}
      </ImageGrid>
      <WhatsNew />
      <Services />
      <Footer />
    </div>
  );
}

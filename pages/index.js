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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <SlideImage />
        <Welcome />
        <ImageGrid cellData={gridCellData} />
        <WhatsNew />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";
import { ImageGrid } from "@/components/layout/home";
import { Title } from "@/components/layout/applications";

import styles from "@/public/css/modules/applications.module.css";

// 그리드에 들어갈 이미지 데이터
// [이미지경로, 이동경로, 타이틀]
const gridCellData = [
  ["/image/grid/Bus.jpg", "/applications/bus-wash-system", "버스 세척"],
  ["/image/grid/Truck.jpg", "/applications/truck-wash-system", "트럭 세척"],
  [
    "/image/grid/RetailTruck.jpg",
    "/applications/truck-wash-system",
    "특수목적 차량 세척",
  ],
  [
    "/image/grid/Aircraft.jpg",
    "/applications/aircraft-wash-system",
    "항공기 세척",
  ],
  [
    "/image/grid/Military.jpg",
    "/applications/military-wash-system",
    "군용차량 세척",
  ],
  ["/image/grid/Train.jpg", "/applications/train-wash-system", "열차 세척"],
  [
    "/image/grid/Mining.jpg",
    "/applications/mining-oil-wash-system",
    "가스 & 오일 차량 세척",
  ],
  [
    "/image/grid/Wheel.jpg",
    "/applications/mining-oil-wash-system",
    "휠 & 하부 세척",
  ],
  [
    "/image/grid/WaterRecycling.jpg",
    "/applications/mining-oil-wash-system",
    "물 재활용 시스템",
  ],
];

export default function Index() {
  return (
    <div>
      <Header />
      <PageHeader title="주요 서비스" subtitle="" />
      <div className={styles.container}>
        <Title title="인터클린이 제공하는 세척 시스템" subtitle="" />
        {/* <div className={styles.body__title}>
          인터클린이 제공하는 세척 시스템
        </div> */}
        <ImageGrid cellData={gridCellData} />
      </div>
      <Footer />
    </div>
  );
}

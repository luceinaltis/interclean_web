// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";
import { ImageGrid } from "@/components/layout/home";
import { BodyText, Title } from "@/components/layout/applications";

import styles from "@/public/css/modules/applications/applications.module.css";

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
  const bodyText = [
    "Finally, a Wash That Works! If you’re looking for a U.S. made heavy duty wash system that is fully customizable to meet your vehicle’s wash needs, contact InterClean. We’ve been designing and manufacturing commercial wash systems with fresh and recycled water modules, tire and chassis wash components, and a variety of manual, automatic, and robotic systems that make your wash system work the way you need it to.To learn more about our vehicle specific systems, click on the picture that best represents your needs.",
  ];
  return (
    <div>
      <Header />
      <PageHeader title="주요 서비스" subtitle="" />
      <div className={styles.container}>
        <Title title="INTERCLEAN COMMERCIAL WASH SYSTEMS" subtitle="" />
        <BodyText children={bodyText} />
        <ImageGrid cellData={gridCellData} />
      </div>
      <Footer />
    </div>
  );
}

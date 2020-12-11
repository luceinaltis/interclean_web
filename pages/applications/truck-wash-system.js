// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";
import { SideImage, Title, ZoomImage } from "@/components/layout/applications";

//css
import styles from "@/public/css/modules/applications.module.css";

export default function TruckWashSystems() {
  return (
    <div>
      <Header />
      <PageHeader title="트럭 세척" subtitle="" />
      <div className={styles.container}>
        <Title title="트럭 세척 시스템" />
        <ZoomImage imagePath="/image/applications/truck/washing.png" />
        <SideImage
          leftImage="/image/applications/truck/left.png"
          rightImage="/image/applications/truck/right.png"
          leftText="세차 전"
          rightText="세차 후"
        />
        <div className="container">
          <div className="inner__container">
            <div className={styles.bodyText}>
              특수 목적 차량과 마찬가지로 매우 간편하고 효과적인 세척시스템을
              갖추고 있습니다. 자동화 시스템은 관리인의 필요를 없애주고, 낮은
              유지보수(사후관리), 많은 세부사항을 필요로 하지 않습니다. 우리의
              대형차량 세차는 한 달에 7,000개가 넘는 트럭을 취급할 수 있고,
              당신의 대형차량은 도로 위에서 당신 회사의 깨끗한 인상을 줄 수
              있습니다. <br />
              <br /> 소매를 지원할 때 오너의 생산성과 손익라인을 높혀주는 원칙이
              있다., 스페인의 에스파라과에 있는 My Truck Wash Europa 회사는 직원
              한명으로 하루에 281대의 트럭을 세차 할 수 있다. My Truck Wash
              Europa 7곳 모두 InterClean설비를 사용하고 있으며, 그곳의 시스템은
              낮은 유지보수(잔고장) 수준과 작동이 용이하며, 세척력의 높은
              만족도로 유명합니다.{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";
import { SideImage, Title, ZoomImage } from "@/components/layout/applications";

// applications 에서 공통적으로 필요한 layouts
import {
  Photos,
  Videos,
  // SideImage,
  // Title,
  // ZoomImage,
} from "@/components/layout/applications";

//css
import styles from "@/public/css/modules/applications.module.css";

// bus-wash-system 에서만 필요한 layouts
import { HeadInfo, Body, TailInfo } from "@/components/layout/applications/bus";

export default function BusWashSystem() {
  return (
    <div>
      <Header />
      <PageHeader title="버스 세척" subtitle="" />
      <HeadInfo />
      <Body />
      <TailInfo />
      {/* <div className={styles.container}>
        <Title title="버스 세척 시스템" />
        <ZoomImage imagePath="/image/applications/bus/mainImage.png" />
        <SideImage
          leftImage="/image/applications/bus/left.png"
          rightImage="/image/applications/bus/right.png"
          leftText="하부세차 시스템"
        />
        <div className="container">
          <div className="inner__container">
            <div className={styles.bodyText}>
              스쿨버스세척시스템은 일반적인 브러시세차시스템에서도 매우 특별한
              도전이었습니다. 이것이 바로 InterClean설비의 미접촉(터치리스) 세차
              세스템이 전 세계의 스쿨버스 세척분야를 장악하고 있는 이유입니다.
              우리 InterClean의 스핀너(돌아가는)시스템은 양쪽의 거울과 안전
              표지판과 뒷부분의 라이트커버에 미세한 손상도 허용하지 않는 고도의
              기술력을 선보였습니다.
              <br />
              <br /> 우리의 시스템은 버스의 밑부분의 세척 양쪽 금속판의 부식을
              줄여주고, 상태 유지에 더 용이합니다. 뿐만 아니라 한시간에 40대
              정도를 세척할 수 있을 정도의 높은 생산력을 자랑합니다
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

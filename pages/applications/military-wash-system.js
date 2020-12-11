// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";
import { SideImage, Title, ZoomImage } from "@/components/layout/applications";

// css
import styles from "@/public/css/modules/applications.module.css";

export default function MilitaryWashSystem() {
  return (
    <div>
      <Header />
      <PageHeader title="군용차량 세척" subtitle="" />
      <div className={styles.container}>
        <Title title="군용차량 세척 시스템" />
        <ZoomImage imagePath="/image/applications/military/mainImage.png" />
        <SideImage
          leftImage="/image/applications/military/left.png"
          rightImage="/image/applications/military/right.png"
        />
        <div className="container">
          <div className="inner__container">
            <div className={styles.bodyText}>
              미국의 군대에서는 가장 크고 정교한 세척 시스템이 설치되어있습니다.
              그리고 InterClean은 이러한 미국의 군대에 이러한 세척시스템을
              제공하고 있는 유일한 회사입니다. 자동 기계 장치로 된 갠트리
              기중기의 역학적인 반응을 예측하고 모든 중대한(비판적인) 한도를
              분석하기 위해 최첨단 원형 소프트웨어를 활용함으로서, 우리는
              자동화하여 군사용 탱크를 세척할 수 있는 자동화 설비를 도입하고
              있습니다.
              <br />
              <br />
              우리의 시스템은 레이저 윤곽인식과 제어(통제) 시스템을 활용하고,
              탱크의 모든 부분을 완전히 세척합니다. InterClean은 현재. Goergia와
              Alaska의 군대기지의 구체적인 필요를 총족 시키는 계약 중에 있고,
              군대 시장에서 리더로서 우리의 위치를 굳히고 있습니다.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

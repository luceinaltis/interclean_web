// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";

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

// mining-oil-wash-system 에서만 필요한 layouts
import { HeadInfo, Body } from "@/components/layout/applications/mining";

export default function MiningOilWashSystem() {
  return (
    <div>
      <Header />
      <PageHeader title="가스 & 오일차량 세척" subtitle="" />
      <HeadInfo />
      <Body />
      {/* <div className={styles.container}>
        <Title title="가스 & 오일차량 세척 시스템" />
        <ZoomImage imagePath="/image/applications/mining/mainImage.png" />
        <SideImage
          leftImage="/image/applications/mining/left.png"
          rightImage="/image/applications/mining/right.png"
        />
        <div className="container">
          <div className="inner__container">
            <div className={styles.bodyText}>
              가스 & 오일 분야 지원차량은 극한의 조건과 원거리 의무를 수행해야
              합니다. 대부분 장소와 장소를 연결해주는 열악한 비포장 도로를
              의미합니다. 종종 이 지원차량들은 대량의 흙으로 뒤덮힌 건축현장
              비포장도로를 달립니다. 극한의 조건에서 혹사당한 차량 외관의 흙
              무게는 200~2000파운드 정도로 차량의 크기에 따라 다릅니다. 만약 이
              문제가 고려되지 않으면, 그것은 이것은 차량의 동력전달장치와
              제동장치에 효율성의 감소 뿐만 아니라 심한 가중으로 추가적인 무게를
              운반해야 한다. 이전의 구태의연한 방식으로는 이러한 흙을 세척하는데
              세척력도 떨어지고 시간낭비도 심했습니다. InterClean은 심각한
              진흙의 문제를 해결하기 위해 재활용수를 활용하여 사용하는 효율적인
              시스템이 고안되었습니다. 상대적으로 많은 양의 물을 저압분사
              방식으로 짧은시간에 (몇 분내에) 많은 흙을 제거할 수 있습니다
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

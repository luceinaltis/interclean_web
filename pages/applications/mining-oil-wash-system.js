// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import { Photos, Videos } from "@/components/layout/applications";

// mining-oil-wash-system 에서만 필요한 layouts
import { HeadInfo, Body } from "@/components/layout/applications/mining";

export default function MiningOilWashSystem() {
  return (
    <div>
      <Header />
      <PageHeader title="가스 & 오일차량 세척" subtitle="" />
      <HeadInfo />
      <Body />
      <Footer />
    </div>
  );
}

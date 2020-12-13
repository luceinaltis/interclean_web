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

// train-wash-system 에서만 필요한 layouts
import {
  HeadInfo,
  Body,
  // TailInfo
} from "@/components/layout/applications/train";

export default function TrainWashSystem() {
  return (
    <div>
      <Header />
      <PageHeader title="열차 세척" subtitle="" />
      <HeadInfo />
      <Body />
      <Footer />
    </div>
  );
}

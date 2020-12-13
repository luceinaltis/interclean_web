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

// aircraft-wash-system 에서만 필요한 layouts
import { HeadInfo, Body } from "@/components/layout/applications/aircraft";

export default function AircraftWashSystem() {
  return (
    <div>
      <Header />
      <PageHeader title="항공기 세척" subtitle="" />
      <HeadInfo />
      <Body />
      <Footer />
    </div>
  );
}

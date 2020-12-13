// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import { Photos, Videos } from "@/components/layout/applications";

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
      <Footer />
    </div>
  );
}

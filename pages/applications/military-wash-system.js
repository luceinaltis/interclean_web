// Layouts
import { Header, Footer, PageHeader } from "../../components/layout";

// applications 에서 공통적으로 필요한 layouts
import { Photos, Videos } from "@/components/layout/applications";

// military-wash-system 에서만 필요한 layouts
import { Body } from "@/components/layout/applications/military";

export default function MilitaryWashSystem() {
  return (
    <div>
      <Header />
      <PageHeader title="군용차량 세척" subtitle="" />
      <Body />
      <Footer />
    </div>
  );
}

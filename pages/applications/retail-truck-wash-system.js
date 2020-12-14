// Layouts
import { Header, Footer } from "@/components/layout";

import { HeadInfo, Body } from "@/components/layout/applications/retailTruck";
import Title from "@/components/layout/wash-systems/title";

export default function RetailTruckWashSystems() {
  return (
    <div>
      <Header />
      <Title titleString="RETAIL TRUCK WASH SYSTEM" />
      <HeadInfo />
      <Body />
      <Footer />
    </div>
  );
}

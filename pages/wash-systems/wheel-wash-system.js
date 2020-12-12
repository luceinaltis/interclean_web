import Image from "next/image";

// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import Title from "../../components/layout/wash-systems/title";
import ImageGrid from "../../components/layout/home/imageGrid";

// 그리드에 들어갈 이미지 데이터
// [이미지경로, 이동경로, 타이틀]
const gridCellData = [
    ["/image/grid/Rollover.jpg", "/wash-systems/ultra-gantry", "GANTRY / ROLLOVER"],
    ["/image/grid/Touchless.jpg", "/wash-systems/drive-thru-touchless", "TOUCHLESS"],
    ["/image/grid/Manual.jpg", "/wash-systems/manual", "MANUAL"],
    ["/image/grid/Mobile.jpg", "/wash-systems/mobile", "MOBILE"],
    ["/image/grid/Wheel.jpg", "/wash-systems/wheel-wash-system", "WHEEL / TIRE & CHASSIS"],
    ["/image/grid/WaterRecycling.jpg", "/wash-systems/water-recycling", "WATER RECYCLING"],
];

export default function WheelWashSystem() {
    return (
        <div>
            <Header />
            <Title titleString={"WHEEL, TIRE, & CHASSIS WASH SYSTEM"} />
            <div className="container">
                <div className="inner__container">
                    <h1>CLEAN WATER WHEEL WASH SYSTEMS</h1>
                    <h3>FOR DIRTY JOBSITES</h3>
                    <p>&nbsp;</p>
                    <Image
                        src="/image/wash-systems/wheel-wash-system/image1.jpg"
                        layout="responsive"
                        width={806}
                        height={347}
                    />
                    <p>
                        InterClean Wheel Wash Systems keep your wheels, tires, and underbody free
                        from debris and your sediment contained to the jobsite. Whether
                        environmental regulations require you to keep mud and other debris at the
                        jobsite or you are just being a good neighbor, our wheel wash systems offer
                        a portable solution to remove dirt and grime before you hit the street. The
                        InterClean automatic wheel wash systems is fast, efficient, and is the best
                        solution for preventing trackout.
                    </p>
                    <p>&nbsp;</p>
                    <h2>WE KEEP YOUR WHEEL WASH WATER CLEAN AND CONTAINED</h2>
                    <p>
                        Our wheel wash systems can be designed with our EQ100 high-pressure,
                        anti-turbulent water recycling module. If your job site contains pollutants
                        such as heavy metals, oils, or grease, it’s important that your wastewater
                        doesn’t reach storm drains without being filtered. InterClean can design a
                        wheel wash and under chassis system to keep you compliant with local codes
                        and environmental regulations.{" "}
                        <strong>
                            Call us today at +1 (734) 822-6988 for a quote on portable and
                            semi-permanent wheel wash systems.
                        </strong>
                    </p>
                    <p>&nbsp;</p>
                    <h2>SEE OTHER COMMERCIAL VEHICLE WASH SYSTEMS MADE BY INTERCLEAN:</h2>
                    <p>&nbsp;</p>
                    <ImageGrid cellData={gridCellData} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

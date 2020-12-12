// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import ImageGrid from "../../components/layout/home/imageGrid";
import Title from "../../components/layout/wash-systems/title";

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

export default function Mobile() {
    return (
        <div>
            <Header />
            <Title titleString={"MANUAL WASH SYSTEMS"} />
            <div className="container">
                <div className="inner__container">
                    <h1>
                        ARE ENVIRONMENTAL REGULATIONS FORCING YOU TO UPDATE YOUR MOBILE WASH
                        SYSTEMS?
                    </h1>
                    <p>&nbsp;</p>
                    <p>
                        InterClean has several rollover and touchless commercial vehicle wash
                        systems to choose from. Our U.S. made commercial vehicle wash systems are
                        custom made to accommodate vehicles of all shapes and sizes. We can include
                        a variety of operational options, as well as tire and chassis wash systems,
                        and high pressure water recycling modules. Call +1 (734) 822-6988 and speak
                        to a commercial vehicle wash system expert about replacing your mobile wash
                        system with a new, energy efficient truck washing system from InterClean.
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>MOBILE WASH SYSTEMS ARE BECOMING OBSOLETE</h2>
                    <p>&nbsp;</p>
                    <p>
                        If your vehicles are waiting to be washed, you are losing money. Mobile wash
                        systems are inefficient, pose safety issues to your employees, and put
                        dangerous chemicals into our clean water drain systems. InterClean can
                        design a safe, drive through, manual, or robotic system that uses fresh or
                        recycled water, and saves you money wash after wash. Imagine the increased
                        productivity when you can completely clean your vehicles with our high
                        pressure wash systems in 60-90 seconds. You can set a new standard of clean
                        for your brand and a safer work environment for your crew. Contact
                        Interclean today for specs and pricing on a new commercial vehicle wash
                        system.
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <ImageGrid cellData={gridCellData} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

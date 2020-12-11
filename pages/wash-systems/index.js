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

export default function Index() {
    return (
        <div>
            <Header />
            <Title titleString={"WASH SYSTEMS"} />
            <div>
                <div className="container">
                    <div className="inner__container">
                        <h1>INTERCLEAN HEAVY DUTY, COMMERCIAL</h1>
                        <h3>VEHICLE WASH SYSTEMS</h3>
                        <p>
                            InterClean designs, installs, and maintains heavy-duty commercial
                            vehicle wash systems for light, medium, and heavy-duty vehicles. Our
                            fully automatic wash systems are completely customizable and ideal for
                            commercial trucks, retail trucks, buses, trains, aircraft, military
                            vehicles, commercial fleets, as well as mining and oil vehicles. The
                            InterClean touchless and rollover commercial truck washing systems are
                            ideal for oddly shaped vehicles, extreme dirt, mud and salt conditions,
                            and locations where water recycling is enforced. Every vehicle wash
                            system is custom designed to meet the environmental conditions, vehicle
                            needs, water restrictions, space allotment and budgetary concerns. All
                            systems are guaranteed and maintained locally. Call +1 (734) 822-5910 to
                            Speak to an InterClean Commercial Wash System Specialist. InterClean
                            does not design or build wash systems that use deadly hydrofluoric acid
                            in any part of the cleaning process. Read About the Danger of HF Acid in
                            Wash Systems.
                        </p>
                        <h2>
                            INTERCLEAN OPTIONS FOR LIGHT, MEDIUM, AND HEAVY VEHICLE WASHING SYSTEMS
                            INCLUDE:
                        </h2>
                        <ul>
                            <li>
                                Automatic drive through packages for wash times less than 5 minutes
                            </li>
                            <li>
                                Manual monitor and fire hose packages for standard applications and
                                detail work
                            </li>
                            <li>
                                Semi-automatic joystick controlled monitors to improve safety and
                                productivity
                            </li>
                            <li>
                                Fully-automatic robotic monitor packages that maximize safety,
                                efficiency, and productivity
                            </li>
                            <li>Chassis Wash</li>
                            <li>Tire Wash</li>
                        </ul>
                        <ImageGrid cellData={gridCellData} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

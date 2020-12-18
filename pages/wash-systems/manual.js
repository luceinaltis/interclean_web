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

export default function Manual() {
    return (
        <div>
            <Header />
            <Title titleString={"MANUAL WASH SYSTEMS"} />
            <div className="container">
                <div className="inner__container">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>

                    <h1>MANUAL AND ROBOTIC WASH SYSTEMS FOR INDUSTRIAL APPLICATIONS</h1>
                    <p>&nbsp;</p>
                    <p>
                        In addition to automatic wash systems for mining and oil vehicles,
                        InterClean offers Manual and Robotic Wash Systems that allow users absolute
                        directional control over these high-pressure water system. The manual and
                        robotic wash systems accommodate the larger industrial size dump trucks,
                        earth movers, extra large tires and chassis used in the mining industries.
                        <strong>
                            Call us direct at +1 (734) 822-6988 to determine what wash system is
                            best for your mining or oil vehicles.
                        </strong>
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>MANUAL VEHICLE WASH SYSTEMS FROM INTERCLEAN</h2>
                    <p>&nbsp;</p>
                    <p>
                        The manual wash systems we provide rely on efficient and effective water
                        recycling and include the proven EQ100 water recycling system. The high
                        water volume used in the manual systems provide a stream of focused and
                        intense water to maximize the cleaning impact and simplify cleaning the
                        dirties vehicles.
                    </p>
                    <p>&nbsp;</p>
                    <strong>
                        Key features of the Interclean manual vehicle wash system include:
                    </strong>
                    <ul>
                        <li>Skid mounted EQ100 water recycling system</li>
                        <li>
                            High volume adjustable monitors with options for joystick control
                            packages
                        </li>
                        <li>
                            Rigid rubber fire hose and reels with adjustable nozzles and spring
                            rewind
                        </li>
                    </ul>
                    <p>&nbsp;</p>
                    <strong>
                        THE COMBINED EQ100 WATER RECYCLING SYSTEM AND HIGH PRESSURE PUMP CAN FEED UP
                        TO FOUR HOSES SIMULTANEOUSLY.
                    </strong>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>ROBOTIC VEHICLE WASH SYSTEMS FROM INTERCLEAN</h3>
                    <p>&nbsp;</p>
                    <p>
                        In response to increased safety concerns, many clients have asked for a wash
                        system that can clean the large, heavy duty mining vehicles with no
                        personnel in the wash bay. The solution is a completely automatic, robotic
                        system designed to clean these vehicles with multiple monitors performing
                        simultaneously. This not only improves safety but also reduces the wash time
                        and improves wash quality.
                    </p>
                    <strong>
                        Key Features of the InterClean Robotic Vehicle Wash System Include:
                    </strong>
                    <ul>
                        <li>Can be programmed for multiple vehicle types and sizes</li>
                        <li>
                            The system can be installed in hazardous locations such as underground
                            mines and underneath the vehicle
                        </li>
                        <li>
                            The wash system software is designed to recognize the vehicle and wash
                            specifically designated areas
                        </li>
                    </ul>
                    <p>
                        while avoiding sections of the vehicle that cannot withstand a direct blast
                        from the water cannons. InterClean wants to ensure the best automatic,
                        manual, or robotic vehicle wash system for your heavy-duty industrial oil
                        and mining vehicles. Contact us today for specs and pricing.
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <ImageGrid cellData={gridCellData} />
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

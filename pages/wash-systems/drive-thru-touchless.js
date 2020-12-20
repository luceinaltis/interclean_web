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

export default function DriveThruTouchless() {
    return (
        <div>
            <Header />
            <Title titleString={"DRIVE-THRU TOUCHLESS WASH SYSTEMS"} />
            <div className="container">
                <div className="inner__container">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h1>CUSTOM BUILT, TOUCHLESS DRIVE THRU VEHICLE WASH SYSTEMS</h1>
                    <p>&nbsp;</p>
                    <p>
                        InterClean’s advanced brushless wash systems provide the ultimate,
                        scratch-free cleaning experience for all kinds of vehicles, especially those
                        with hard-to-reach places. From pre-wash to rinse, our high-powered,
                        high-pressure truck washing systems offer the best possible solution for
                        tankers, garbage trucks, salt trucks, aircraft, oil mining and military
                        vehicles and other odd-shaped trucks and equipment. The heavy-duty cleaning
                        power of our conventional flat spray, spinning, and solid stream nozzles are
                        configured to power of dirt, mud, salt, and other corrosives quickly and
                        efficiently. Call 1+ (734) 822-6988 to get a quote for a touchless drive
                        through truck washing system.
                    </p>
                    <p>
                        <strong>
                            OUR TOUCHLESS DRIVE THROUGH TRUCK WASHING SYSTEMS ARE MADE IN THE U.S.A.
                            AND ARE FULLY GUARANTEED BY INTERCLEAN AND THE LOCAL CREW THAT INSTALLS
                            AND MAINTAINS IT.
                        </strong>
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>INTERCLEAN BRUSHLESS TRUCK WASH SYSTEMS GET YOU BACK ON THE ROAD FASTER</h2>
                    <p>
                        Whether you are maintaining a fleet of busses, trucks, or heavy equipment,
                        at the end of the shift, your vehicles need to be washed and ready to go for
                        the next crew. InterClean automatic truck washing systems provide a safe,
                        easy way to clean a variety of vehicle shapes and sizes with the least
                        amount of water and chemicals, protecting you, your vehicle, and the
                        environment. When you choose InterClean to design a custom truck washing
                        system, you get the benefit of state-of-the-art technology and a team of
                        engineers who can design efficient wash systems in just about any
                        environmental challenge. Contact us to talk about the best truck wash system
                        for your application.
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>
                            Key Benefits of Our Touchless, Automatic Drive Through System Include:
                        </strong>
                    </p>
                    <ul>
                        <li>
                            Multi-vehicle design which can accommodate multiple fleet vehicle types
                        </li>
                        <li>Automatic drive through packages for wash times less than 5 minutes</li>
                        <li>Simple operation for wash users</li>
                        <li>Up to 100% recycled water usage</li>
                        <li>
                            Pre-wired and Pre-plumbed containerized wash equipment rooms available
                        </li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>
                        INTERCLEAN OFFERS YOU THE OPTIONS YOU NEED FOR LIGHT, MEDIUM AND HEAVY
                        VEHICLE WASHING
                    </h3>
                    <p>
                        InterClean’s commercial vehicle washing systems are not one-size-fits-all.
                        When you work with InterClean to determine the best truck washing system for
                        your vehicle, we take the time to understand the types of vehicles you
                        maintain, the types of corrosives your vehicles are exposed to, the water
                        restrictions we’ll be working with and of course, your budget. Each of our
                        brushless, touch-free commercial wash systems can be designed for use with
                        fresh water or recycled water, and are available with a variety of options
                        to provide you with most thorough clean possible. For a Complete Truck
                        Washing System Proposal, call +1 (734) 822-6988.
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>Some of the available options include:</strong>
                    </p>
                    <ul>
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
                            efficiency and productivity
                        </li>
                    </ul>
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

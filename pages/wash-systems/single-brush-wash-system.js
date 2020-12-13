import Image from "next/image";

// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import Title from "../../components/layout/wash-systems/title";
import styles from "../../public/css/modules/wash-systems/single-brush-wash-system.module.css";
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

export default function SingleBrushWashSystem() {
    return (
        <div>
            <Header />
            <Title
                titleString={"SINGLE BRUSH WASH SYSTEM"}
                titleSubString={"An effective, low-cost upgrade from manual washing."}
            />
            <div className="container">
                <div className="inner__container">
                    <h1>THE ALPHA 500 SINGLE BRUSH WASH MACHINE</h1>
                    <p>&nbsp;</p>
                    <p>
                        The Alpha 500 machine is a great mobile fleet wash system that offers a
                        powerful clean for a wide range of commercial vehicles, including both
                        trucks and buses. This system includes a large single brush mounted on a
                        diesel or battery-powered machine that can be driven around each of your
                        vehicles to speed up your cleaning routines and reduce labor costs.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        Contact us to get set up with your own Alpha 500 machine. Our expert
                        technicians will deliver and assemble your equipment, so you can start using
                        your single brush wash machine ASAP.
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>WHY USE AN INTERCLEAN SINGLE BRUSH WASH MACHINE?</h2>
                    <p>
                        The InterClean single brush wash machine is a state-of-the-art bus and truck
                        wash system with numerous product benefits:
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className={styles.grid}>
                        <div className={styles.grid__item}>
                            <i className="fas fa-hand-holding-usd" />
                            <h3>LOW-COST UPGRADE</h3>
                            <p>
                                The Alpha 500 single wash brush system is a great option for those
                                looking to upgrade from manual washing without investing in larger
                                and more costly vehicle wash installations. It’s an affordable bus
                                and truck wash system that doesn’t compromise on cleaning power.
                            </p>
                        </div>
                        <div className={styles.grid__item}>
                            <i className="far fa-thumbs-up" />
                            <h3>USER-FRIENDLY OPTION</h3>
                            <p>
                                It takes less than an hour for operators to learn how to use the
                                single brush truck wash equipment. The machine is equipped with a
                                user-friendly steering bar and hydraulic drive wheel so any user can
                                easily maneuver this wash system. This bus and truck wash equipment
                                also comes in three different driving positions to suit your driving
                                preferences, including stand, seat, or cab.
                            </p>
                        </div>
                        <div className={styles.grid__item}>
                            <i className="far fa-thumbs-up" />
                            <h3>EFFICIENT BUS AND TRUCK WASH SOLUTION</h3>
                            <p>
                                Compared to manual washing, the single brush wash system will
                                greatly reduce the amount of time spent on washing your vehicle
                                fleet. With the help of the Alpha 500 single wash brush system,
                                <strong> the entire wash takes less than 10 minutes.</strong>
                            </p>
                        </div>
                        <div className={styles.grid__item}>
                            <i className="fas fa-user-clock" />
                            <h3>POWERFUL YET GENTLE DAILY WASH</h3>
                            <p>
                                This mobile truck wash equipment is available with soft foam
                                brushes. This will allow you to safely clean vehicles with
                                high-quality paint finishes, decals, or wraps without fear of
                                damaging the surfaces.
                            </p>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <div className={styles.grid__second}>
                        <div className="image__wrapper">
                            <Image
                                src="/image/wash-systems/single-brush-wash-system/truck1.jpg"
                                alt="설명"
                                layout="intrinsic"
                                width={535}
                                height={374}
                            />
                        </div>
                        <div>
                            <h2>FEATURES OF THE SINGLE BRUSH WASH MACHINE</h2>
                            <p>There are many great features packed in the Alpha 500 machine:</p>
                            <ul>
                                <li>Diesel Motor unit (for outdoor use)</li>
                                <li>24V batteries (for indoor use) </li>
                                <li>Silencer unit for diesel engine</li>
                                <li>Steering controls </li>
                                <li>Hydraulic traction for variable speed</li>
                                <li>Twin wheels for greater stability </li>
                                <li>Automatic detergent dispensing device</li>
                                <li>Water tank </li>
                            </ul>
                        </div>
                    </div>
                    <h2>WHY PURCHASE A BUS AND TRUCK WASH SYSTEM FROM INTERCLEAN?</h2>
                    <p>
                        At InterClean, we are passionate about providing lasting solutions for our
                        customers’ heavy-duty washing needs.
                    </p>
                    <p>&nbsp;</p>
                    <div className={styles.grid__third}>
                        <div>
                            <h3>DEDICATION TO CUSTOMER SERVICE</h3>
                            <p>
                                Our staff are committed to providing industry-leading responsiveness
                                and ongoing support, service, and maintenance to our customers. We
                                care about customer satisfaction and want to ensure that each
                                customer has a great experience with our InterClean equipment.
                            </p>
                        </div>
                        <div>
                            <h3>TECHNICAL EXPERTISE</h3>
                            <p>
                                Our technicians are skilled in efficiently and effectively
                                assembling our equipment, providing thorough training, and
                                completing necessary maintenance and repairs.
                            </p>
                        </div>
                        <div>
                            <h3>PRODUCT INNOVATION</h3>
                            <p>
                                We invest significant time in research and development to ensure
                                that all of our wash systems remain best-in-class. When purchasing
                                an InterClean wash system, you can rest assured that your machine is
                                one of the most innovative wash systems on the market.
                            </p>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <h2>GET STARTED WITH YOUR OWN ALPHA 500 BRUSH WASH SYSTEM</h2>
                    <p>
                        Contact us today to purchase an Alpha 500 Brush Wash System for your
                        business and reduce the time spent cleaning your vehicle fleet!
                    </p>
                    <p>&nbsp;</p>
                    <ImageGrid cellData={gridCellData} />
                    <p>&nbsp;</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

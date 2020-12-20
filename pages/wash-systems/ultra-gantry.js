import Image from "next/image";
import { useState } from "react";

// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import Title from "../../components/layout/wash-systems/title";
import styles from "../../public/css/modules/wash-systems/ultra-gantry.module.css";

// applications 에서 공통적으로 필요한 layouts
import { Photos, Videos, Drawings, Downloads } from "@/components/layout/applications";

export default function UltraGantry() {
    const photosData = [
        ["/image/wash-systems/ultra-gantry/photos/grid1.jpg", "Clean company logos"],
        [
            "/image/wash-systems/ultra-gantry/photos/grid2.jpg",
            "3 Brush Gantry Truck and Bus Wash System",
        ],
        ["/image/wash-systems/ultra-gantry/photos/grid3.jpg", "Motorcoach-gantry-wash"],
        ["/image/wash-systems/ultra-gantry/photos/grid4.jpg", "automated school bus wash"],
        ["/image/wash-systems/ultra-gantry/photos/grid5.jpg", "school bus wash with brushes"],
        ["/image/wash-systems/ultra-gantry/photos/grid6.jpg", "bus wash equipment"],
        ["/image/wash-systems/ultra-gantry/photos/grid7.jpg", "bus wash system"],
        ["/image/wash-systems/ultra-gantry/photos/grid8.jpg", "bus wash system"],
        ["/image/wash-systems/ultra-gantry/photos/grid9.jpg", "bus wash equipment"],
        ["/image/wash-systems/ultra-gantry/photos/grid10.jpg", "bus wash system with brushes"],
        ["/image/wash-systems/ultra-gantry/photos/grid11.jpg", "spinning brushes bus wash"],
        ["/image/wash-systems/ultra-gantry/photos/grid12.jpg", "bus wash system with brushes"],
    ];

    const videoData = [
        [
            "UpBDyeTqRrQ",
            "/image/wash-systems/ultra-gantry/videos/video1.jpg",
            "INTERCLEAN ULTRA GANTRY SYSTEM FOR TRUCKS, BUSES AND MOTORCOACHES",
        ],
        [
            "0mamDH80cuU",
            "/image/wash-systems/ultra-gantry/videos/video2.png",
            "INTERCLEAN ULTRA GANTRY SYSTEM FOR TRANSIT, MUNICIPALITIES, AND COMMERCIAL FLEETS",
        ],
    ];

    const drawingsData = [
        [
            "/image/wash-systems/ultra-gantry/drawings/layout1.jpg",
            "Ultra Gantry Three Brush",
            "(PDF, 0.2 MB)",
        ],
    ];

    const downloadsData = [
        [
            "/downloads/wash-systems/ultra-gantry/Interclean-Wash-Systems-Overview.pdf",
            "InterClean Brochure",
            "(PDF, 3.0 MB)",
        ],
        [
            "/downloads/wash-systems/ultra-gantry/IP-Detergents-Overview-Features.pdf",
            "Wash Detergents",
            "(PDF, 0.2 MB)",
        ],
    ];

    const [menu, setMenu] = useState(undefined);
    const openMenu = (menuName) => {
        setMenu(menu !== menuName ? menuName : undefined);
    };

    return (
        <div>
            <Header />
            <Title titleString={"GANTRY & ROLLOVER WASH SYSTEMS"} />
            <div className="container">
                <div className="inner__container">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <Image
                        src="/image/wash-systems/ultra-gantry/image1.jpg"
                        alt="Picture of the author"
                        layout="responsive"
                        width={806}
                        height={537}
                    />
                    <p>&nbsp;</p>
                    <h1>ULTRA GANTRY WASH SYSTEM</h1>
                    <p>&nbsp;</p>
                    <p>
                        InterClean’s Ultra Gantry, or rollover, style commercial vehicle wash system
                        is highly customizable to effectively clean a wide range of vehicles
                        including transit buses, trains, school buses, commercial truck fleets, and
                        garbage trucks. The Ultra’s brush module is extremely effective at cleaning
                        buses and commercial fleets, while its high-pressure touchless cleaning
                        options allow for effective cleaning of variably shaped vehicles such as
                        garbage trucks or public works fleets.
                    </p>
                    <h3>CUSTOMIZABLE</h3>
                    <p>
                        The Ultra Gantry can be configured for a variety of wash applications and
                        needs. The machine is built with a modular design allowing for a wide
                        variety of touchless, friction, or combination models. Like the machine
                        itself, the control software is modularized to allow for custom development
                        of wash recipes. This customization allows our customers to effectively
                        clean their fleets exactly the way they need to.
                    </p>
                    <h3>RELIABLE AND SUSTAINABLE</h3>
                    <p>
                        The use of quality components combined with our large in-house engineering
                        team ensure the Ultra Gantry’s high machine reliability. The Ultra has also
                        been designed with a focus on sustainability, allowing for minimal power and
                        water usage and decreased operating costs.
                    </p>
                    <h3>DATA-DRIVEN</h3>
                    <p>
                        Each system includes an analytics feature that tracks valuable wash
                        information such as number of washes, average time of wash, water usage, and
                        device run time. The analytics, along with remote access to the data, help
                        customers save costs and improve effectiveness.
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <Image
                        src="/image/wash-systems/ultra-gantry/image2.jpg"
                        alt="Picture of the author"
                        layout="responsive"
                        width={806}
                        height={537}
                    />
                    <p>&nbsp;</p>
                    <h2>RECOMMENDED MACHINE CONFIGURATIONS FOR THE ULTRA GANTRY</h2>
                    <p>&nbsp;</p>
                    <div className={styles.grid}>
                        <div>
                            <h4>PWX TOUCHLESS SPINNER</h4>
                            <Image
                                src="/image/wash-systems/ultra-gantry/image3.png"
                                alt="Picture of the author"
                                layout="intrinsic"
                                width={236}
                                height={236}
                            />
                            <p>
                                High-pressure water (touchless) wash method for heavy dirt and mud
                                removal. Great for surface cleaning of any shaped vehicle or
                                equipment. Ideal for municipal public works garages and other mixed
                                fleets.
                            </p>
                        </div>
                        <div>
                            <h4>FLEET & BUS 3-BRUSH HYBRID</h4>
                            <Image
                                src="/image/wash-systems/ultra-gantry/image4.png"
                                alt="Picture of the author"
                                layout="intrinsic"
                                width={236}
                                height={236}
                            />
                            <p>
                                High-pressure water and brush (hybrid) wash method for complete
                                cleaning of standard trucks and buses. Ideal for fleets with
                                standard vehicle shapes, such as transit buses or tractor-trailers.
                            </p>
                        </div>
                        <div>
                            <h4>RETAIL & FLEX HYBRID</h4>
                            <Image
                                src="/image/wash-systems/ultra-gantry/image5.png"
                                alt="Picture of the author"
                                layout="intrinsic"
                                width={236}
                                height={236}
                            />
                            <p>
                                High-pressure water and brush combination (hybrid) with choice of
                                brush, touchless, or hybrid wash options. Ideal for “for-profit”
                                truck washes and other mixed fleets with demanding cleaning
                                standards.
                            </p>
                        </div>
                    </div>
                    <p>&nbsp;</p>

                    <div className="image__wrapper">
                        <Image
                            src="/image/wash-systems/ultra-gantry/image6.png"
                            alt="Picture of the author"
                            layout="intrinsic"
                            width={750}
                            height={420}
                        />
                    </div>
                    <h4>TOTAL BRUSH CONTOL (TBC):</h4>
                    <p>
                        All two or three brush configurations utilize Total Brush Control (TBC)
                        technology to scrub every surface of the vehicle while protecting sensitive
                        areas, such as mirrors and bike racks, from damage.
                    </p>
                    <ul>
                        <li>
                            Location, travel speed, and RPM of each brush is independently
                            controlled and monitored.
                        </li>
                        <li>
                            Brush movements are controlled by electric motors equipped with variable
                            frequency drives (VFDs).
                        </li>
                        <li>
                            The brush pressure (crush) is maintained via a torque feedback mechanism
                            monitored by the VFDs. Alternatively, pre-programmed paths can be
                            configured by trained operators.
                        </li>
                        <li>
                            Brushes have complete flexibility. Ability to use touchless only for the
                            tractor and touchless or brushes for the trailer.
                        </li>
                        <li>
                            Both the 2-brush and 3-brush models feature complete brush overlap using
                            the vertical brushes. The 3-brush model allows for an additional
                            overlap, using the horizontal brush.
                        </li>
                    </ul>
                    <p>&nbsp;</p>
                    <div className="image__wrapper">
                        <Image
                            src="/image/wash-systems/ultra-gantry/image7.png"
                            alt="Picture of the author"
                            layout="intrinsic"
                            width={626}
                            height={202}
                        />
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>OPTIONAL EXTRAS FOR THE ULTRA GANTRY</h2>
                    <p>&nbsp;</p>
                    <strong>Water Recycling and Treatment</strong>
                    <p>
                        The InterClean water recycling system results in the reuse of more than 90%
                        of all water consumed by the Ultra. If desired or required by code, pH
                        neutralization and disinfectant can be added.
                    </p>
                    <strong>Chassis Wash</strong>
                    <p>
                        Chassis Wash Systems keep the chassis of vehicles free from debris, salt,
                        and other corrosive agents that can be picked up from road surfaces and job
                        sites.
                    </p>
                    <strong>Spot Free Rinse</strong>
                    <p>
                        InterClean reverse osmosis (RO) technology is used to remove all solids from
                        water. Using RO water as the final rinse will prevent spotting on vehicle
                        surfaces and windows.
                    </p>
                    <strong>Blowers</strong>
                    <p>
                        Blowers can be used at the end of the wash to dry vehicles and reduce any
                        residue or streaking on surfaces. They also help maximize recycled water
                        usage and prevent water runout into other areas of the facility.
                    </p>
                </div>
            </div>
            <p>&nbsp;</p>
            <Photos photosData={photosData} menuOpened={menu === "PHOTOS"} openMenu={openMenu} />
            <Videos
                videoData={videoData}
                needTitle={true}
                menuOpened={menu === "VIDEOS"}
                openMenu={openMenu}
            />
            <Drawings
                drawingsData={drawingsData}
                menuOpened={menu === "Drawings"}
                openMenu={openMenu}
            />
            <Downloads
                downloadsData={downloadsData}
                menuOpened={menu === "Downloads"}
                openMenu={openMenu}
            />
            <p>&nbsp;</p>
            <Footer />
        </div>
    );
}

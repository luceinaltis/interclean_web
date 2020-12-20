import Image from "next/image";
import { useState } from "react";

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

// applications 에서 공통적으로 필요한 layouts
import { Photos, Downloads } from "@/components/layout/applications";

export default function WaterRecycling() {
    const photosData = [
        [
            "/image/wash-systems/water-recycling/photos/grid1.jpg",
            "wash system water recycling equipment",
        ],
        ["/image/wash-systems/water-recycling/photos/grid2.jpg", "OLYMPUS DIGITAL CAMERA"],
        ["/image/wash-systems/water-recycling/photos/grid3.jpg", "Water Recycling Banner Image"],
        ["/image/wash-systems/water-recycling/photos/grid4.jpg", "water recycling equipment"],
        ["/image/wash-systems/water-recycling/photos/grid5.jpg", "water recycling for wash system"],
        ["/image/wash-systems/water-recycling/photos/grid6.jpg", "water recycling system 2"],
        ["/image/wash-systems/water-recycling/photos/grid7.jpg", "water recycling system"],
        ["/image/wash-systems/water-recycling/photos/grid8.jpg", "water recycling wash equipment"],
        ["/image/wash-systems/water-recycling/photos/grid9.jpg", "water recycling wash system"],
        ["/image/wash-systems/water-recycling/photos/grid10.jpg", "KONICA MINOLTA DIGITAL CAMERA"],
        ["/image/wash-systems/water-recycling/photos/grid11.jpg", "water recycling units"],
        ["/image/wash-systems/water-recycling/photos/grid12.jpg", "green technology"],
        ["/image/wash-systems/water-recycling/photos/grid13.jpg", "Services Image 1"],
        ["/image/wash-systems/water-recycling/photos/grid14.jpg", "OLYMPUS DIGITAL CAMERA"],
    ];

    const downloadsData = [
        [
            "/downloads/wash-systems/water-recycling/InterClean_Brochure.pdf",
            "InterClean Brochure",
            "(PDF, 3.5 MB)",
        ],
    ];

    const [menu, setMenu] = useState(undefined);
    const openMenu = (menuName) => {
        setMenu(menu !== menuName ? menuName : undefined);
    };
    return (
        <div>
            <Header />
            <Title titleString={"WASH SYSTEM WATER RECYCLING"} />
            <div className="container">
                <div className="inner__container">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h1>INTRODUCING INTERCLEAN’S EQ100</h1>
                    <h3>A PATENTED HIGH-PRESSURE, ANTI TURBULENT RECYCLING MODULE</h3>
                    <p>&nbsp;</p>
                    <div className="image__wrapper">
                        <Image
                            src="/image/wash-systems/water-recycling/recycling1.jpg"
                            layout="intrinsic"
                            width={768}
                            height={345}
                        />
                    </div>
                    <p>&nbsp;</p>
                    <p>
                        This module is the heart of the InterClean system and has been used for
                        almost all InterClean applications where water recycling is needed. These
                        include wash systems for, trucks, trains, buses, aircraft, military and
                        mining vehicles. Each EQ100 is capable of producing up to 300 GPM of
                        recycled water continuously. The module has its own electrical control panel
                        that monitors and enables the systems internal functions, such as liquid
                        level monitoring, motor control, overloads, and adjustments. The main
                        control panel also allows a modem hook-up for remote control and
                        troubleshooting.
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>
                        GET HIGH VOLUMES OF RECYCLED WATER FOR YOUR INTERCLEAN TRUCK WASHING SYSTEM
                    </h2>
                    <p>
                        The EQ100 is designed to recycle and aerate the wash water automatically,
                        without changing filters or manual supervision. This method of water
                        recycling provides inexpensive, simple and reliable use of high volumes of
                        recycled wash water. The EQ100 can operate under the most demanding vehicle
                        wash conditions such as recycling the water used to wash garbage trucks,
                        mining and military vehicles and requires no chemical additives to minimize
                        any environmental impact. Contact Interclean for a quote on the EQ100.
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>
                        OUR WATER RECYCLING SYSTEM CAN PROVIDE WATER VOLUMES IN EXCESS OF 300 GPM
                    </h3>
                    <p>
                        By using this effective yet inexpensive recycling system, InterClean
                        Equipment is able to employ the full force of huge volumes of pressurized
                        wash water, which create a cleaning impact that is simply not available with
                        other automatic vehicle washing systems. To achieve recycled water volumes
                        in excess of 300 gpm (1,250 l/m), multiple modules can be utilized in
                        parallel. Each module is pre-wired, pre-plumbed and mounted on a skid. The
                        overall dimensions of the unit are such that it can be shipped in standard
                        road trailers, or in high cube 40 feet ocean freight containers. Call +1
                        (734) 822-6988 to talk about our water recycling options for truck washes.
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>OTHER INTERCLEAN WASH SYSTEMS:</h2>
                    <p>&nbsp;</p>
                    <ImageGrid cellData={gridCellData} />
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
            </div>
            <Photos photosData={photosData} menuOpened={menu === "PHOTOS"} openMenu={openMenu} />
            <Downloads
                downloadsData={downloadsData}
                menuOpened={menu === "Downloads"}
                openMenu={openMenu}
            />
            <Footer />
        </div>
    );
}

import { useState } from "react";
import Image from "next/image";
import { withTranslation } from "../../i18n";

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
import { Photos, Videos, Drawings, Downloads } from "@/components/layout/applications";

function WheelWashSystem({ t }) {
    const photosData = [
        ["/image/wash-systems/wheel-wash-system/photos/grid1.jpg", "Truck chassis wash system"],
        ["/image/wash-systems/wheel-wash-system/photos/grid2.jpg", "wheel and tire wash sprayers"],
        ["/image/wash-systems/wheel-wash-system/photos/grid3.jpg", "wheel and tire wash"],
        ["/image/wash-systems/wheel-wash-system/photos/grid4.jpg", "automated wheel wash"],
        [
            "/image/wash-systems/wheel-wash-system/photos/grid5.jpg",
            "touchless wheel and chassis wash system",
        ],
        ["/image/wash-systems/wheel-wash-system/photos/grid6.jpg", "truck under chassis wash"],
        [
            "/image/wash-systems/wheel-wash-system/photos/grid7.jpg",
            "automated wheel, tire and chassis wash",
        ],
        [
            "/image/wash-systems/wheel-wash-system/photos/grid8.jpg",
            "wheel, tire and chassis wash equipment",
        ],
        ["/image/wash-systems/wheel-wash-system/photos/grid9.jpg", "Tire wash equipment"],
        [
            "/image/wash-systems/wheel-wash-system/photos/grid10.jpg",
            "spray wash for wheels and tires",
        ],
        ["/image/wash-systems/wheel-wash-system/photos/grid11.jpg", "wheel and tire wash system"],
        [
            "/image/wash-systems/wheel-wash-system/photos/grid12.jpg",
            "wheel and tire wash equipment",
        ],
        [
            "/image/wash-systems/wheel-wash-system/photos/grid13.jpg",
            "truck wheel and tire wash equipment",
        ],
        ["/image/wash-systems/wheel-wash-system/photos/grid14.jpg", "tire wash equipment"],
        ["/image/wash-systems/wheel-wash-system/photos/grid15.jpg", "under chassis wash system"],
        [
            "/image/wash-systems/wheel-wash-system/photos/grid16.jpg",
            "spray wheel wash system for trucks",
        ],
        [
            "/image/wash-systems/wheel-wash-system/photos/grid17.jpg",
            "wheel and chassis wash equipment",
        ],
        ["/image/wash-systems/wheel-wash-system/photos/grid18.jpg", "spray wheel wash system"],
        ["/image/wash-systems/wheel-wash-system/photos/grid19.jpg", "underchassis wash equipment"],
        [
            "/image/wash-systems/wheel-wash-system/photos/grid20.jpg",
            "Wheel_Tire & Chassis Wash Banner2",
        ],
        [
            "/image/wash-systems/wheel-wash-system/photos/grid21.jpg",
            "wheel and chassis touchlesswash system",
        ],
        ["/image/wash-systems/wheel-wash-system/photos/grid22.jpg", "wheel and tire wash system"],
        ["/image/wash-systems/wheel-wash-system/photos/grid23.jpg", "chassis wash system"],
        [
            "/image/wash-systems/wheel-wash-system/photos/grid24.jpg",
            "wheel and chassis wash system",
        ],
        [
            "/image/wash-systems/wheel-wash-system/photos/grid25.jpg",
            "touchless wheel wash equipment",
        ],
        ["/image/wash-systems/wheel-wash-system/photos/grid26.jpg", "wheel and tire wash"],
        ["/image/wash-systems/wheel-wash-system/photos/grid27.jpg", "under chassis wash system"],
        [
            "/image/wash-systems/wheel-wash-system/photos/grid28.jpg",
            "wheel and chassis wash system",
        ],
    ];

    const videoData = [
        [
            "B2VTsoxgGjo",
            "/image/wash-systems/wheel-wash-system/videos/video1.png",
            "INTERCLEAN ULTIMATE CHASSIS WASH SYSTEM",
        ],
        [
            "pNmtvfzwl9c",
            "/image/wash-systems/wheel-wash-system/videos/video2.png",
            "INTERCLEAN XR80 TIRE WASH SYSTEM",
        ],
        [
            "vtQ7mBr3vy0",
            "/image/wash-systems/wheel-wash-system/videos/video3.png",
            "MULTIPLE VEHICLE WHEEL AND TIRE WASH SYSTEM",
        ],
    ];

    const drawingsData = [
        [
            "/image/wash-systems/wheel-wash-system/videos/ICE_Wheel_Wash_Chassis_Spinners_IN_DOT.pdf",
            "Chassis Wash",
            "(PDF, 0.3 MB)",
        ],
        [
            "/image/wash-systems/wheel-wash-system/videos/ICE_Wheel_Wash_XR-80_Ottawa.pdf",
            "XR 80 Wheel Wash",
            "(PDF, 0.3 MB)",
        ],
        [
            "/image/wash-systems/wheel-wash-system/videos/ICE_Wheel_Wash_XR-120_Elkford.pdf",
            "XR 120 Wheel Wash",
            "(PDF, 0.3 MB)",
        ],
        [
            "/image/wash-systems/wheel-wash-system/videos/ICE_Wheel_Wash_Stryker.pdf",
            "Stryker Wheel Wash",
            "(PDF, 0.3 MB)",
        ],
    ];

    const downloadsData = [
        [
            "/downloads/wash-systems/wheel-wash-system/InterClean_Brochure.pdf",
            "InterClean Brochure",
            "(PDF, 3.5 MB)",
        ],
        [
            "/downloads/wash-systems/ultra-gantry/Wash-Chemicals.pdf",
            "Wash Chemicals",
            "(PDF, 3.4 MB)",
        ],
        [
            "/downloads/wash-systems/ultra-gantry/Hydorfluoric-Acid-Report.pdf",
            "Hydrofluoric Acid Report",
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
            <Title titleString={t("title")} />
            <div className="container">
                <div className="inner__container">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h1>{t("p1")}</h1>
                    <h3>{t("p2")}</h3>
                    <p>&nbsp;</p>
                    <Image
                        src="/image/wash-systems/wheel-wash-system/image1.jpg"
                        layout="responsive"
                        width={806}
                        height={347}
                    />
                    <p>&nbsp;</p>
                    <p>{t("p3")}</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>{t("p4")}</h2>
                    <p>{t("p5")}</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>{t("p6")}</h2>
                    <p>&nbsp;</p>
                    <ImageGrid cellData={gridCellData} />
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
            </div>
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
            <Footer />
        </div>
    );
}

WheelWashSystem.getInitialProps = async () => ({
    namespacesRequired: ["wash-systems__wheel-wash-system", "footer", "header"],
});

export default withTranslation("wash-systems__wheel-wash-system")(WheelWashSystem);

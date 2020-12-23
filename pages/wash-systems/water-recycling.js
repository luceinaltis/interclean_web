import Image from "next/image";
import { useState } from "react";
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
import { Photos, Downloads } from "@/components/layout/applications";

function WaterRecycling({ t }) {
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
            <Title titleString={t("title")} />
            <div className="container">
                <div className="inner__container">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h1>{t("p1")}</h1>
                    <h3>{t("p2")}</h3>
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
                    <p>{t("p3")}</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>{t("p4")}</h2>
                    <p>{t("p5")}</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>{t("p6")}</h3>
                    <p>{t("p7")}</p>
                    <p>{t("p8")}</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>{t("p9")}</h2>
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

WaterRecycling.getInitialProps = async () => ({
    namespacesRequired: ["wash-systems__water-recycling", "footer", "header"],
});

export default withTranslation("wash-systems__water-recycling")(WaterRecycling);

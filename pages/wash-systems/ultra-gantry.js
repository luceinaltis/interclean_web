import Image from "next/image";
import { useState } from "react";
import { withTranslation } from "../../i18n";

// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import Title from "../../components/layout/wash-systems/title";
import styles from "../../public/css/modules/wash-systems/ultra-gantry.module.css";

// applications 에서 공통적으로 필요한 layouts
import { Photos, Videos, Drawings, Downloads } from "@/components/layout/applications";

function UltraGantry({ t }) {
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
            <Title titleString={t("title")} />
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
                    <h1>{t("p1")}</h1>
                    <p>&nbsp;</p>
                    <p>{t("p2")}</p>
                    <h3>{t("p3")}</h3>
                    <p>{t("p4")}</p>
                    <h3>{t("p5")}</h3>
                    <p>{t("p6")}</p>
                    <h3>{t("p7")}</h3>
                    <p>{t("p8")}</p>
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
                    <h2>{t("p9")}</h2>
                    <p>&nbsp;</p>
                    <div className={styles.grid}>
                        <div>
                            <h4>{t("p10")}</h4>
                            <Image
                                src="/image/wash-systems/ultra-gantry/image3.png"
                                alt="Picture of the author"
                                layout="intrinsic"
                                width={236}
                                height={236}
                            />
                            <p>{t("p11")}</p>
                        </div>
                        <div>
                            <h4>{t("p12")}</h4>
                            <Image
                                src="/image/wash-systems/ultra-gantry/image4.png"
                                alt="Picture of the author"
                                layout="intrinsic"
                                width={236}
                                height={236}
                            />
                            <p>{t("p13")}</p>
                        </div>
                        <div>
                            <h4>{t("p14")}</h4>
                            <Image
                                src="/image/wash-systems/ultra-gantry/image5.png"
                                alt="Picture of the author"
                                layout="intrinsic"
                                width={236}
                                height={236}
                            />
                            <p>{t("p15")}</p>
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
                    <h4>{t("p16")}</h4>
                    <p>{t("p17")}</p>
                    <ul>
                        <li>{t("p18")}</li>
                        <li>{t("p19")}</li>
                        <li>{t("p20")}</li>
                        <li>{t("p21")}</li>
                        <li>{t("p22")}</li>
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
                    <h2>{t("p23")}</h2>
                    <p>&nbsp;</p>
                    <strong>{t("p24")}</strong>
                    <p>{t("p25")}</p>
                    <strong>{t("p26")}</strong>
                    <p>{t("p27")}</p>
                    <strong>{t("p28")}</strong>
                    <p>{t("p29")}</p>
                    <strong>{t("p30")}</strong>
                    <p>{t("p31")}</p>
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

UltraGantry.getInitialProps = async () => ({
    namespacesRequired: ["wash-systems__ultra-gantry", "footer", "header"],
});

export default withTranslation("wash-systems__ultra-gantry")(UltraGantry);

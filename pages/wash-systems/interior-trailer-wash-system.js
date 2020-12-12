// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import ImageGrid from "../../components/layout/home/imageGrid";
import Title from "../../components/layout/wash-systems/title";
import styles from "../../public/css/modules/wash-systems/interior-trailer-wash-system.module.css";

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

export default function InteriorTrailerWashSystem() {
    return (
        <div>
            <Header />
            <Title
                titleString={"TRAILER SANITIZING & WASH SYSTEMS"}
                titleSubString={
                    "Fast, automated interior truck cleaning and sanitizing solutions, customized for your site."
                }
            />
            <div className="container">
                <div className="inner__container">
                    <h1>ABOUT OUR TRAILER SANITIZING & WASH SYSTEMS</h1>
                    <p>
                        In less than 4 minutes, the inside of your truck trailer or container is
                        completely cleaned, sanitized, and ready for the next load. The automatic
                        sanitizer and wash system can be installed on a dock or as a self-contained
                        unit on a movable stand. Moving inside the trailer or container, the system
                        completes an effective series of wash, rinse, and sanitizing cycles. Boost
                        your trailer wash program with consistently clean and safe results every
                        time.
                    </p>
                    <p>&nbsp;</p>
                    <h2>WHY USE INTERCLEAN TRAILER SANITIZING & WASH SYSTEMS</h2>
                    <p>&nbsp;</p>
                    <div className={styles.grid}>
                        <div className={styles.grid_item}>
                            <i class="fas fa-user-shield" />
                            <h3>IMPROVE SAFETY</h3>
                            <p>
                                Protect the safety of your employees and customers with effective
                                interior trailer sanitation and cleaning. Not only does the
                                automatic wash system remove any health hazards and debris, but it
                                also prevents exposure of employees to safety hazards.
                            </p>
                        </div>
                        <div className={styles.grid_item}>
                            <i class="fas fa-dollar-sign" />
                            <h3>LOWER CLEANING COSTS</h3>
                            <p>
                                Manual cleaning programs are time-consuming and they tie up your
                                team and trailers. Our automated user-friendly wash and sanitizing
                                systems completely sanitize and clean all types of trailers and
                                containers in a matter of minutes.
                            </p>
                        </div>
                        <div className={styles.grid_item}>
                            <i class="far fa-thumbs-up" />
                            <h3>CONSISTENT PERFORMANCE</h3>
                            <p>
                                Get the same, outstanding results with our automatic trailer
                                sanitizing and cleaning systems after every wash. Have peace of mind
                                knowing that your trailers are free of health hazards and are ready
                                to be used immediately after wash.
                            </p>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <ImageGrid cellData={gridCellData} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

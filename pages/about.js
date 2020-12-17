import Link from "next/link";

// Layouts
import { Header, Footer, PageHeader } from "../components/layout";
import Title from "@/components/layout/wash-systems/title";
import { ZoomImage } from "@/components/elements";

import styles from "@/public/css/modules/about.module.css";

import { withTranslation } from "../i18n";

function About({ t }) {
    return (
        <div>
            <Header />
            <Title titleString="ABOUT US" />
            <div className="container">
                <div className="inner__container">
                    <div className={styles.about}>
                        <div className={`${styles.title} ${styles.title__color_blue}`}>
                            {t("p1")}
                        </div>
                        <ZoomImage imagePath="/image/about/headImage.jpg" />
                        <div className={`${styles.title} ${styles.title__color_orange}`}>
                            LATEST NEWS
                        </div>
                        <div className={styles.seperator} />
                        {/* 첫 번째 */}
                        <div className={styles.content__wrapper}>
                            <div className={`${styles.title} ${styles.title__color_emerald}`}>
                                InterClean Equipment Acquires Modern Wash Systems and Solutions
                            </div>
                            <p>
                                Feb. 24, 2020 – InterClean Equipment, one of the leading and most
                                innovative wash systems and water recycling pioneers in the world,
                                today announced the acquisition of Modern Wash Systems and
                                Solutions, Polson, Montana, a leading specialty manufacturer of
                                automatic wash machines for the interior of transportation trailers
                                and containers.{" "}
                                <span className={styles.content__text__link}>
                                    <Link href="/pdf/interclean_equipment_acquires_modern_wash_systems_and_solutions.pdf">
                                        Read the press release here
                                    </Link>
                                </span>
                            </p>
                        </div>
                        {/* 두 번째 */}
                        <div className={styles.content__wrapper}>
                            <div className={`${styles.title} ${styles.title__color_emerald}`}>
                                Trends in bus wash systems
                            </div>
                            <p>
                                BUSRide Maintenance explores the latest trends in bus wash systems
                                with industry experts, including spec’ing systems, environmental
                                factors, innovation and hidden costs.
                                <span className={styles.content__text__link}>
                                    <Link href="https://busride.com/official-busride-maintenance-roundtable-discussion-5/">
                                        https://busride.com/official-busride-maintenance-roundtable-discussion-5/
                                    </Link>
                                </span>
                            </p>
                        </div>
                        {/* 세 번째 */}
                        <div className={styles.content__wrapper}>
                            <div className={`${styles.title} ${styles.title__color_emerald}`}>
                                102nd Annual New Jersey State League of Municipalities Conference
                            </div>
                            <p>
                                We invite you to join us and 16,000 of your peers in municipal
                                government for an invaluable learning experience which yields
                                benefits throughout the year. With 100+ educational sessions and
                                over 700 exhibitors, November 14-16, 2017 will be three eventful
                                days to share ideas, products, and solutions! Come visit us at Booth
                                #1039 in the Atlantic City Convention Center. National Cooperative
                                Purchasing Alliance (NCPA) has awarded Contract 05-20 for Vehicle
                                Wash Equipment to InterClean Equipment, LLC.
                            </p>
                        </div>
                        <div className={styles.seperator} />
                        {/* 네 번째 */}
                        <div className={styles.content__wrapper}>
                            <p>{t("p2")}</p>
                            <p>{t("p3")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

About.getInitialProps = async () => ({
    namespacesRequired: ["about", "footer", "header"],
});

export default withTranslation("about")(About);

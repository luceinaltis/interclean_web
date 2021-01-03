import { useEffect } from "react";
import Image from "next/image";

// Layouts
import { Header, Footer } from "../components/layout";
import Title from "@/components/layout/wash-systems/title";
import Translation from "../components/hooks/translate";

import styles from "@/public/css/modules/about.module.css";

import { withTranslation } from "../i18n";
import { ZoomImage } from "@/components/elements";

function About({ t }) {
    return (
        <div>
            <Header />
            <Title titleString={t("title")} />
            <div className="container">
                <div className="inner__container">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <ZoomImage imagePath="/image/about/headImage.jpg" />
                    <div className={styles.background_text__wrapper}>
                        <div className={styles.background_text}>
                            <div className={`${styles.background_text__title}`}>{t("p1")}</div>
                            <div>{t("desc")}</div>
                        </div>
                    </div>
                    <div className={styles.about}>
                        <div className={styles.title__color_blue}>{t("why")}</div>
                        {/* 첫 번째 */}
                        <div className={styles.content__wrapper}>
                            <Translation className={styles.content__image}>
                                <Image
                                    src="/image/about/system.jpg"
                                    alt="전문 설계"
                                    layout="responsive"
                                    width={802}
                                    height={451}
                                />
                            </Translation>
                            <Translation className={styles.content__text__wrapper} direction="down">
                                <div className={styles.content__text}>
                                    <div className={styles.content__text__title}>{t("p2")}</div>
                                    <div className={styles.content__text__desc}>{t("p3")}</div>
                                </div>
                            </Translation>
                        </div>
                        {/* 두 번째 */}
                        <div
                            className={`${styles.content__wrapper}  ${styles.content__text__wrapper__left}`}
                        >
                            <Translation
                                className={`${styles.content__image} ${styles.content__image__right}`}
                            >
                                <Image
                                    src="/image/about/cost.jpg"
                                    alt="합리적인 비용"
                                    layout="responsive"
                                    width={802}
                                    height={451}
                                />
                            </Translation>
                            <Translation direction="down" className={styles.content__text__wrapper}>
                                <div
                                    className={`${styles.content__text} ${styles.content__text__left}`}
                                >
                                    <div className={styles.content__text__title}>{t("p4")}</div>
                                    <div className={styles.content__text__desc}>{t("p5")}</div>
                                </div>
                            </Translation>
                        </div>
                        {/* 세 번째 */}
                        <div className={styles.content__wrapper}>
                            <Translation className={styles.content__image}>
                                <Image
                                    src="/image/about/autocad.jpg"
                                    alt="설계자"
                                    layout="responsive"
                                    width={802}
                                    height={451}
                                />
                            </Translation>{" "}
                            <Translation direction="down" className={styles.content__text__wrapper}>
                                <div className={styles.content__text}>
                                    <div className={styles.content__text__title}>{t("p6")}</div>
                                    <div className={styles.content__text__desc}>{t("p7")}</div>
                                </div>
                            </Translation>
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

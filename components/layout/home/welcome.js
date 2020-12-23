import React, { useState } from "react";
import styles from "@/public/css/modules/home.module.css";

import { VideoImage, ModalVideo, ButtonGreen } from "@/components/elements";

import { withTranslation } from "../../../i18n";
import Link from "next/link";

function Welcome({ t }) {
    const videoData = ["6TbYUHBB8wA", "/image/home/videoImage.png"];
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <>
            <div className={styles.services__background}>
                <div className="container">
                    <div className="inner__container">
                        <div className={styles.welcome}>
                            <div className={styles.welcome__header}>
                                <p className={styles.welcome__header__left}>{t("p1")}</p>
                            </div>
                        </div>
                        <div className={styles.welcome__grid}>
                            <div>
                                <p className={styles.welcome__text}>
                                    {t("p3")}
                                    <br />
                                    <br />
                                    {t("p4")}
                                </p>
                                <div className={styles.welcome__buttonGrid}>
                                    <Link href="/about">
                                        <div>
                                            <ButtonGreen content="READ MORE" />
                                        </div>
                                    </Link>
                                    <img src="/image/home/USA.png" />
                                </div>
                            </div>
                            <VideoImage
                                videoData={videoData}
                                need={false}
                                openModal={() => setModalOpened(true)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo
                videoHash={videoData[0]}
                isOpened={modalOpened}
                closeModal={() => setModalOpened(false)}
            />
        </>
    );
}

Welcome.getInitialProps = async () => ({
    namespacesRequired: ["home"],
});

export default withTranslation("home")(Welcome);

import Head from "next/head";
import Image from "next/image";

import styles from "../../public/css/modules/header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Head>
                {/* fontawesome.com 아이콘 불러오기 */}
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
                    integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
                    crossorigin="anonymous"
                />
            </Head>
            <div className={styles.header__top}>
                <div className="container">
                    <div className="inner__container">
                        <div className={styles.header__top__container}>
                            <div>Follow us on:</div>
                            <div className={styles.header__top__container__right}>
                                {" "}
                                +1 734-822-7999
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.header__bottom}>
                <div className="container">
                    <div className="inner__container">
                        <div className={styles.menu}>
                            <div className={styles.menu__top}>
                                <i className="fas fa-bars" />
                                <div className="image__wrapper">
                                    <Image
                                        src="/image/logo/Interclean_logo.jpg"
                                        alt="interclean logo"
                                        layout="fill"
                                    />
                                </div>
                            </div>
                            <div className={styles.menu__bottom}>
                                <div className={styles.menu__bottom__container}>
                                    <div className={styles.menu__bottom__title}>
                                        <div>ABOUT</div>
                                    </div>
                                </div>
                                <div className={styles.menu__bottom__container}>
                                    <div className={styles.menu__bottom__title}>
                                        <div>APPLICATIONS</div>
                                        <i class="fas fa-chevron-right" />
                                    </div>
                                    <div className={styles.menu__bottom__subtitle__container}>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Truck Washes
                                        </div>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Bus Washes
                                        </div>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Train Washes
                                        </div>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Military Washes
                                        </div>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Aircraft Washes
                                        </div>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Mining & Oil Washes
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.menu__bottom__container}>
                                    <div className={styles.menu__bottom__title}>
                                        <div>WASH SYSTEMS</div>
                                        <i class="fas fa-chevron-right" />
                                    </div>
                                    <div className={styles.menu__bottom__subtitle__container}>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Drive-Thru Touchless
                                        </div>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Gantry & Rollover
                                        </div>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Interior Trailer Wash System
                                        </div>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Manual Wash Systems
                                        </div>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Mobile Wash Systems
                                        </div>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Single Brush Wash System
                                        </div>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Wheel, Tire, & Chassis
                                        </div>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Water Recycling Systems
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.menu__bottom__container}>
                                    <div className={styles.menu__bottom__title}>
                                        <div>SERVICES</div>
                                        <i class="fas fa-chevron-right" />
                                    </div>
                                    <div className={styles.menu__bottom__subtitle__container}>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Wash Detergents
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.menu__bottom__container}>
                                    <div className={styles.menu__bottom__title}>
                                        <div>CONTACT</div>
                                        <i class="fas fa-chevron-right" />
                                    </div>
                                    <div className={styles.menu__bottom__subtitle__container}>
                                        <div className={styles.menu__bottom__subtitle}>
                                            Locate A Distributor
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../../public/css/modules/header.module.css";

export default function Header() {
    const [openMenu, setOpenMenu] = useState("");

    function onClickMenu(event) {
        const menuName = event.target.id;

        if (menuName == openMenu) {
            setOpenMenu("");
        } else {
            setOpenMenu(menuName);
        }
    }

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
                                <Link href="/">
                                    <div className="image__wrapper">
                                        <Image
                                            src="/image/logo/Interclean_logo.jpg"
                                            alt="interclean logo"
                                            layout="fill"
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.menu__bottom}>
                                <div className={styles.menu__bottom__container}>
                                    <div className={styles.menu__bottom__title}>
                                        <Link href="/about">
                                            <div className="click">ABOUT</div>
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.menu__bottom__container}>
                                    <div className={styles.menu__bottom__title}>
                                        <Link href="/applications">
                                            <div className="click">APPLICATIONS</div>
                                        </Link>
                                        <i
                                            id="applications"
                                            onClick={onClickMenu}
                                            class="fas fa-chevron-right"
                                        />
                                    </div>
                                    {openMenu === "applications" ? (
                                        <div className={styles.menu__bottom__subtitle__container}>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/applications/truck-wash-system">
                                                    <div className="click">Truck Washes</div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/applications/bus-wash-system">
                                                    <div className="click">Bus Washes</div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/applications/train-wash-system">
                                                    <div className="click">Train Washes</div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/applications/military-wash-system">
                                                    <div className="click">Military Washes</div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/applications/aircraft-wash-system">
                                                    <div className="click">Aircraft Washes</div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/applications/mining-oil-wash-system">
                                                    <div className="click">Mining & Oil Washes</div>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                                <div className={styles.menu__bottom__container}>
                                    <div className={styles.menu__bottom__title}>
                                        <Link href="/wash-systems">
                                            <div className="click">WASH SYSTEMS</div>
                                        </Link>
                                        <i
                                            id="wash-systems"
                                            onClick={onClickMenu}
                                            class="fas fa-chevron-right"
                                        />
                                    </div>
                                    {openMenu === "wash-systems" ? (
                                        <div className={styles.menu__bottom__subtitle__container}>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/drive-thru-touchless">
                                                    <div className="click">
                                                        Drive-Thru Touchless
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/ultra-gantry">
                                                    <div className="click">Gantry & Rollover</div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/interior-trailer-wash-system">
                                                    <div className="click">
                                                        Interior Trailer Wash System
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/manual">
                                                    <div className="click">Manual Wash Systems</div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/mobile">
                                                    <div className="click">Mobile Wash Systems</div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/single-brush-wash-system">
                                                    <div className="click">
                                                        Single Brush Wash System
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/wheel-wash-system">
                                                    <div className="click">
                                                        Wheel, Tire, & Chassis
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/water-recycling">
                                                    <div className="click">
                                                        Water Recycling Systems
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                                <div className={styles.menu__bottom__container}>
                                    <div className={styles.menu__bottom__title}>
                                        <Link href="/services">
                                            <div className="click">SERVICES</div>
                                        </Link>
                                        <i
                                            id="services"
                                            onClick={onClickMenu}
                                            class="fas fa-chevron-right"
                                        />
                                    </div>
                                    {openMenu === "services" ? (
                                        <div className={styles.menu__bottom__subtitle__container}>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/services/interpower-detergents">
                                                    <div className="click">Wash Detergents</div>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                                <div className={styles.menu__bottom__container}>
                                    <div className={styles.menu__bottom__title}>
                                        <Link href="/contact">
                                            <div className="click">CONTACT</div>
                                        </Link>
                                        <i
                                            id="contact"
                                            onClick={onClickMenu}
                                            class="fas fa-chevron-right"
                                        />
                                    </div>
                                    {openMenu === "contact" ? (
                                        <div className={styles.menu__bottom__subtitle__container}>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/contact/locate-a-distributor">
                                                    <div className="click">
                                                        Locate A Distributor
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

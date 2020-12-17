import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../../public/css/modules/header.module.css";
import useWidth from "../hooks/useWidth";

import { i18n, withTranslation } from "../../i18n";

function Header({ t }) {
    const [openHamburger, setOpenHamburger] = useState(false);
    const [openMenu, setOpenMenu] = useState("");
    const width = useWidth();

    useEffect(() => {
        setOpenMenu("");
    }, [width]);

    function onClickMenu(event) {
        const menuName = event.target.id;

        if (menuName == openMenu) {
            setOpenMenu("");
        } else {
            setOpenMenu(menuName);
        }
    }

    function onClickHamburger() {
        setOpenHamburger(!openHamburger);
    }

    function onHoverMouse(menuName) {
        if (width >= 1100) {
            setOpenMenu(menuName);
        }
    }

    function onOutMouse() {
        if (width >= 1100) {
            setOpenMenu("");
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
                    crossOrigin="anonymous"
                />
            </Head>
            <div className={styles.header__top}>
                <div className="container">
                    <div className="inner__container">
                        <div className={styles.header__top__container}>
                            <div>
                                Follow us on:{" "}
                                <span>
                                    <i class="fab fa-facebook-square" />
                                </span>
                            </div>
                            <div className={styles.header__top__container__right}>
                                <i class="fas fa-mobile-alt" />
                                +82 010-123-4567
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
                                <i className="fas fa-bars click" onClick={onClickHamburger} />
                                <Link href="/">
                                    <div className="image__wrapper">
                                        <Image
                                            className="click"
                                            src="/image/logo/Interclean_logo.jpg"
                                            alt="interclean logo"
                                            layout="intrinsic"
                                            width={483}
                                            height={120}
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div
                                className={`${styles.menu__bottom} ${
                                    openHamburger === true ? null : styles.hidden
                                }`}
                            >
                                <div
                                    className={styles.menu__bottom__container}
                                    onMouseOverCapture={() => {
                                        onHoverMouse("about");
                                    }}
                                    onMouseLeave={onOutMouse}
                                >
                                    <div className={styles.menu__bottom__title}>
                                        <Link href="/about">
                                            <div className={`click ${styles.menu__button}`}>
                                                {t("ABOUT")}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div
                                    className={styles.menu__bottom__container}
                                    onMouseOverCapture={() => {
                                        onHoverMouse("applications");
                                    }}
                                    onMouseLeave={onOutMouse}
                                >
                                    <div className={styles.menu__bottom__title}>
                                        <Link href="/applications">
                                            <div className={`click ${styles.menu__button}`}>
                                                {t("APPLICATIONS")}
                                            </div>
                                        </Link>
                                        <i
                                            id="applications"
                                            onClick={onClickMenu}
                                            className="fas fa-chevron-down"
                                        />
                                    </div>
                                    {openMenu === "applications" ? (
                                        <div className={styles.menu__bottom__subtitle__container}>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/applications/truck-wash-system">
                                                    <div className="click">{t("Truck Washes")}</div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/applications/bus-wash-system">
                                                    <div className="click">{t("Bus Washes")}</div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/applications/train-wash-system">
                                                    <div className="click">{t("Train Washes")}</div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/applications/military-wash-system">
                                                    <div className="click">
                                                        {t("Military Washes")}
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/applications/aircraft-wash-system">
                                                    <div className="click">
                                                        {t("Aircraft Washes")}
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/applications/mining-oil-wash-system">
                                                    <div className="click">
                                                        {t("Mining & Oil Washes")}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                                <div
                                    className={styles.menu__bottom__container}
                                    onMouseOverCapture={() => {
                                        onHoverMouse("wash-systems");
                                    }}
                                    onMouseLeave={onOutMouse}
                                >
                                    <div className={styles.menu__bottom__title}>
                                        <Link href="/wash-systems">
                                            <div className={`click ${styles.menu__button}`}>
                                                {t("WASH SYSTEMS")}
                                            </div>
                                        </Link>
                                        <i
                                            id="wash-systems"
                                            onClick={onClickMenu}
                                            className="fas fa-chevron-down"
                                        />
                                    </div>
                                    {openMenu === "wash-systems" ? (
                                        <div className={styles.menu__bottom__subtitle__container}>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/drive-thru-touchless">
                                                    <div className="click">
                                                        {t("Drive-Thru Touchless")}
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/ultra-gantry">
                                                    <div className="click">
                                                        {t("Gantry & Rollover")}
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/interior-trailer-wash-system">
                                                    <div className="click">
                                                        {t("Interior Trailer Wash System")}
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/manual">
                                                    <div className="click">
                                                        {t("Manual Wash Systems")}
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/mobile">
                                                    <div className="click">
                                                        {t("Mobile Wash Systems")}
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/single-brush-wash-system">
                                                    <div className="click">
                                                        {t("Single Brush Wash System")}
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/wheel-wash-system">
                                                    <div className="click">
                                                        {t("Wheel, Tire, & Chassis")}
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/wash-systems/water-recycling">
                                                    <div className="click">
                                                        {t("Water Recycling Systems")}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                                <div
                                    className={styles.menu__bottom__container}
                                    onMouseOverCapture={() => {
                                        onHoverMouse("services");
                                    }}
                                    onMouseLeave={onOutMouse}
                                >
                                    <div className={styles.menu__bottom__title}>
                                        <Link href="/services">
                                            <div className={`click ${styles.menu__button}`}>
                                                {t("SERVICES")}
                                            </div>
                                        </Link>
                                        <i
                                            id="services"
                                            onClick={onClickMenu}
                                            className="fas fa-chevron-down"
                                        />
                                    </div>
                                    {openMenu === "services" ? (
                                        <div className={styles.menu__bottom__subtitle__container}>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/services/interpower-detergents">
                                                    <div className="click">
                                                        {t("Wash Detergents")}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                                {/* <div
                                    className={styles.menu__bottom__container}
                                    onMouseOverCapture={() => {
                                        onHoverMouse("contact");
                                    }}
                                    onMouseLeave={onOutMouse}
                                >
                                    <div className={styles.menu__bottom__title}>
                                        <Link href="/contact">
                                            <div className={`click ${styles.menu__button}`}>
                                                {t("CONTACT")}
                                            </div>
                                        </Link>
                                        <i
                                            id="contact"
                                            onClick={onClickMenu}
                                            className="fas fa-chevron-down"
                                        />
                                    </div>
                                    {openMenu === "contact" ? (
                                        <div className={styles.menu__bottom__subtitle__container}>
                                            <div className={styles.menu__bottom__subtitle}>
                                                <Link href="/contact/locate-a-distributor">
                                                    <div className="click">
                                                        {t("Locate A Distributor")}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : null}
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

Header.getInitialProps = async () => ({
    namespacesRequired: ["header"],
});

export default withTranslation("header")(Header);

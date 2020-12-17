import Link from "next/link";

import styles from "../../public/css/modules/footer.module.css";

import { i18n, withTranslation } from "../../i18n";

function Footer({ t }) {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_top}>
                <div className="container">
                    <div className="inner__container">
                        <div className={styles.footer_top__grid}>
                            <div>
                                <h5>{t("quick links")}</h5>
                                <ul>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/about">{t("about-us")}</Link>
                                    </li>
                                    {/* <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/contact">{t("contact-us")}</Link>
                                    </li> */}
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications">{t("applications")}</Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/wash-systems">{t("wash-systems")}</Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/services">{t("services")}</Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/contact/locate-a-distributor">
                                            {t("distributors")}
                                        </Link>
                                    </li>
                                    <li>
                                        <select
                                            name="lang"
                                            id="lang"
                                            onChange={(e) => i18n.changeLanguage(e.target.value)}
                                        >
                                            <option value="ko">🇰🇷 Korean</option>
                                            <option value="en">🇺🇸 English</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5>{t("APPLICATIONS")}</h5>
                                <ul>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications/bus-wash-system">
                                            {t("bus-wash-systems")}
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications/truck-wash-system">
                                            {t("truck-wash-systems")}
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications/retail-truck-wash-system">
                                            {t("retail-truck-wash-systems")}
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications/aircraft-wash-system">
                                            {t("aircraft-wash-systems")}
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications/military-wash-system">
                                            {t("military-wash-systems")}
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications/train-wash-system">
                                            {t("train-wash-systems")}
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications/mining-oil-wash-system">
                                            {t("mining-oil-wash-systems")}
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/wash-systems/wheel-wash-system">
                                            {t("wheel-wash-systems")}
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/wash-systems/water-recycling">
                                            {t("water-recycling-wash-systems")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5>CONTACT US</h5>
                                <ul>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/"> InterClean Equipment, LLC</Link>
                                    </li>
                                    <li>709 James L Hart Pkwy, Ypsilanti, MI 48197</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer_bottom}>
                <div className="container">
                    <div className="inner__container">
                        <div className={styles.footer_bottom__title}>
                            © 2020. All Rights Reserved. InterClean Equipment, LLC
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

Footer.getInitialProps = async () => ({
    namespacesRequired: ["footer"],
});

export default withTranslation("footer")(Footer);

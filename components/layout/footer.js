import Link from "next/link";

import styles from "../../public/css/modules/footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_top}>
                <div className="container">
                    <div className="inner__container">
                        <div className={styles.footer_top__grid}>
                            <div>
                                <h5>Quick Links</h5>
                                <ul>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/about">ABOUT US</Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/contact">CONTACT US</Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications">APPLICATIONS</Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/wash-systems">WASH SYSTEMS</Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/services">SERVICES</Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/contact/locate-a-distributor">
                                            DISTRIBUTORS
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5>APPLICATIONS</h5>
                                <ul>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications/bus-wash-system">
                                            Bus Wash Systems
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications/truck-wash-system">
                                            Truck Wash Systems
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications/retail-truck-wash-system">
                                            Retail Truck
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications/aircraft-wash-system">
                                            Aircraft Wash Systems
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications/military-wash-system">
                                            Military Wash Systems
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications/train-wash-system">
                                            Train Wash Systems
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/applications/mining-oil-wash-system">
                                            Mining & Oil Wash Systems
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/wash-systems/wheel-wash-system">
                                            Wheel / Tire & Chassis
                                        </Link>
                                    </li>
                                    <li className={`${styles.footer_top__menu_items} click`}>
                                        <Link href="/wash-systems/water-recycling">
                                            Water Recycling Systems
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
                                <form action="">
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />
                                    <button type="submit">SUBMIT</button>
                                </form>
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

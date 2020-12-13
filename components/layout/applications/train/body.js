import styles from "@/public/css/modules/trainWash.module.css";
import Link from "next/link";

export default function Body() {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.body}>
          {/* 첫 번째 */}
          <div className={styles.body__title}>
            INTERCLEAN DESIGNS HIGH PRESSURE, CUSTOM WASH SYSTEMS FOR:
          </div>
          <div className={styles.body__body}>
            <li>Light Rail</li>
            <li>Locomotive</li>
            <li>Tram</li>
            <li>Water Test</li>
          </div>
          {/* 두 번째 */}
          <div className={styles.body__title}>
            SITE SPECIFIC TRANSIT RAIL WASH SYSTEMS
          </div>
          <div className={styles.body__body}>
            InterClean’s approach to transit rail wash systems is as innovative
            as the company itself. Every transit rail wash system we design is
            site specific with special chemical formulations designed to achieve
            a successful clean, wash after wash. Whether catenary, third rail,
            diesel, or hybrid electric, we have the experience and knowledge to
            create the appropriate train wash systems that require little
            maintenance. Whether the train is located in the frigid winters of
            Canada, the warm humidity of the Southeastern United States, or
            anywhere in between, we can design a heavy duty transit rail wash
            system that is safe, efficient, and effective.
          </div>
          <Link href="/contact">
            <div className={styles.button}>CONTACT US</div>
          </Link>
          {/* 세 번째 */}
          <div className={styles.body__title}>
            CUSTOM DIESEL LOCOMOTIVE WASH SYSTEMS
          </div>
          <div className={styles.body__body}>
            InterClean locomotive wash systems have been successfully used in a
            variety of different applications and climates from the iron mines
            of Australia to the Canadian Arctic. To date, our Centri*Spinner is
            the most effective piece of equipment ever designed for diesel
            locomotive washing. Using a combination of strategically placed flat
            and spinning nozzles and brushes, our custom drive through wash
            systems for locomotives reach all the hard places, removing dirt and
            fuel residue with clean water and custom detergents, wash after
            wash.
          </div>
          <Link href="/contact">
            <div className={styles.button}>CONTACT A PRODUCT EXPERT!</div>
          </Link>
          {/* 네 번째 */}
          <div className={styles.body__title}>
            US-MADE TRAIN & RAIL WASH SYSTEMS
          </div>
          <div className={styles.body__body}>
            InterClean train wash systems are designed and manufactured by
            experienced engineers, right here in the U.S.A. When you order a
            custom train wash system, we design and manufacture the system, at
            our headquarters, and use local distributors to build and maintain
            them. For you, that means a trusted, local InterClean specialist you
            can rely on for parts, service, and repair. And when you need that
            special blend of detergents, simply{" "}
            <span
              className={`${styles.body__body__bold} ${styles.body__body__link}`}
            >
              <Link href="/contact">contact us</Link>
            </span>{" "}
            direct. We will ship you the replacement chemicals you need, so you
            can keep your locomotive shiny and clean day after day.{" "}
            <span className={styles.body__body__bold}>
              For a custom-designed train wash system you can count on,{" "}
              <span className={styles.body__body__link}>
                <Link href="/contact">contact InterClean.</Link>
              </span>
            </span>
          </div>
          <Link href="/contact">
            <div className={styles.button}>CONTACT US</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

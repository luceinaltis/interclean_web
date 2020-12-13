import styles from "@/public/css/modules/busWash.module.css";
import Link from "next/link";

export default function HeadInfo() {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.headInfo}>
          <div className={styles.zoom__imageWrapper}>
            <img
              src="/image/applications/bus/headImage.jpg"
              className={styles.zoom__image}
            />
          </div>
          <div className={styles.headInfo__title__blue}>
            BUS WASH SYSTEMS FOR TRANSIT AND SCHOOLS
          </div>
          <div className={styles.headInfo__body}>
            InterClean has different approaches for washing transit, school,
            paratransit, and tour bus fleets. We offer drive through systems and
            gantry or rollover systems that provide design flexibility and
            proven cleaning technology. Both types of bus wash systems can be
            designed with touchless, advanced friction/brushes, or a combination
            of both. All systems are made in the U.S.A. and designed to clean
            effectively and efficiently.
          </div>
          <div className={styles.headInfo__title__orange}>
            SUSTAINABLE DESIGN FEATURES ARE AN INTEGRAL PART OF INTERCLEAN BUS
            WASH SYSTEMS
          </div>
          <div className={styles.headInfo__body}>
            All of the wash systems InterClean designs are available with the
            EQ100 water recycling module that effectively captures the wash
            water and recycles it through a series of settling pits,
            self-cleaning filter, separators, aeration, and circulation. The
            EQ100 water recycling system has been installed in multiple
            locations throughout the USA, Canada, Europe, Asia, Africa, South
            America, Australia, New Zealand and the Middle East and its
            effectiveness in recycling large volumes of water has been
            recognized globally for improving sustainability in Heavy Duty
            Vehicle Washing Systems.
          </div>
          <Link href="/contact">
            <div className={`${styles.button} ${styles.button__orange}`}>
              CONTACT US
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

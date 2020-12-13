import styles from "@/public/css/modules/busWash.module.css";
import Link from "next/link";

export default function Body() {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.body}>
          <div className={styles.zoom__imageWrapper}>
            <img
              src="/image/applications/bus/bodyImage.jpg"
              className={styles.zoom__image}
            />
          </div>
          <div className={styles.body__title}>
            DRIVE-THROUGH BUS WASH SYSTEMS
          </div>
          <div className={styles.body__body}>
            <span className={styles.body__body__bold}>
              InterClean’s Centri*Spinner
            </span>{" "}
            wash system is a leader in the School and Paratransit bus wash
            market and the wash system will not damage crossover mirrors, safety
            side signs, exterior cameras, bike racks or rear light covers and
            will effectively clean the contoured exterior of Paratransit buses.{" "}
            <br />
            <span className={styles.body__body__bold}>
              The XJ Bus Wash System
            </span>{" "}
            combines friction and touchless cleaning for Transit, Paratransit,
            and School Buses. This system can be customized for different bus
            wash applications. The most popular configuration is an overlapping
            4-brush system to wrap the bus combined with InterClean touchless
            cleaning to clean the wheels, chassis, around and behind bike racks
            and mirrors. There is no stopping required for this drive-through
            system! Contact us for a customized quote for your bus wash project.
            <br />
            <span className={styles.body__body__bold}>
              The Hybrid Wash System
            </span>{" "}
            is a drive-through wash system designed to use a combination of
            touchless cleaning for the front, top, rear, wheel and chassis and
            foam brushes for the sides. The brushes are in a fixed position and
            use a foam brush material to help prevent scratching and damage to
            the bus.
          </div>
          <Link href="/contact">
            <div
              className={`${styles.button} ${styles.button__blue} ${styles.body__button}`}
            >
              CONTACT A PRODUCT EXPERT!
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

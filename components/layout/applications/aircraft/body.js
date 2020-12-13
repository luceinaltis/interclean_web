import styles from "@/public/css/modules/aircraft.module.css";
import Link from "next/link";

export default function Body() {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.body}>
          {/* 첫 번째 */}
          <div className={styles.body__content__wrapper}>
            <div className={styles.content__title__orange}>
              THE INTERCLEAN CLEAR WASH RINSE SYSTEM MEETS US MILITARY
              SPECIFICATIONS FOR FUNCTIONALITY
            </div>
            <div className={styles.content__text}>
              Our Clear Water Rinse System (CWRS) is a high volume, low pressure
              washing system in which approximately 80% of the water used during
              the rinse process is collected and recycled. To assure efficient
              rinsing, the water being recycled is continually monitored for
              salinity and other contaminants (Total Dissolved Solids). Once the
              TDS reaches a specified level the water is discharged to the
              sanitary sewer or water storage tank for disposal and fresh water
              is used to recharge the system. This system was designed
              specifically to meet the aircraft wash needs of the US Navy.
              <br />
              <br />
              Because of the corrosive nature of sea water, the US Navy has
              established a requirement to wash all aircraft within a 300 mile
              radius of sea water or for aircraft flying below 3000’ over sea
              water. If you are looking for a custom designed, US made airplane
              wash system that meets military specs, call +1 (734) 961-3300 for
              a quote.
            </div>
            <Link href="/contact">
              <div className={styles.button__orange}>REQUEST A QUOTE</div>
            </Link>
          </div>
          {/* 두 번째 */}
          <div className={styles.body__content__wrapper}>
            <div className={styles.content__title__blue}>
              REPAIR AND MAINTENANCE FOR INTERCLEAN AIRCRAFT WASH SYSTEMS
            </div>
            <div className={styles.content__text}>
              The InterClean airplane wash systems are designed by an
              experienced team of engineers and guaranteed to meet your needs
              and specifications. However, both manual and automatic airplane
              wash systems need regular service and maintenance to continue to
              operate at peak performance. To request service, maintenance, or
              replacement parts for an InterClean aircraft wash system, contact
              us today.
            </div>
            <Link href="/contact">
              <div className={styles.button__blue}>REQUEST SERVICE</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import styles from "@/public/css/modules/aircraft.module.css";
import Link from "next/link";

export default function HeadInfo() {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.headInfo}>
          <div
            className={`${styles.content__title__blue} ${styles.headInfo__title}`}
          >
            AIRPLANE WASH SYSTEMS
          </div>
          <div className={styles.content__title__orange}>
            FOR PUBLIC, PRIVATE, AND MILITARY APPLICATIONS
          </div>
          <div className={styles.zoom__imageWrapper}>
            <img
              src="/image/applications/aircraft/headImage.jpg"
              className={styles.zoom__image}
            />
          </div>
          <div className={styles.content__text}>
            InterClean uses the latest technology to design systems that
            automate the wash and water recycling processes for aircraft wash
            systems. Our custom airplane washes use high-pressure nozzles to
            ensure a thorough clean, and a safe, efficient, operation wash after
            wash. Our touchless manual and automatic airplane wash systems are
            made in the USA and are installed and maintained by our local
            InterClean distributors. Contact us today for specs and pricing on a
            custom aircraft wash system.
          </div>
          <Link href="/contact">
            <div className={styles.button__blue}>CONTACT US</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

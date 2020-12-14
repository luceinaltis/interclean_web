import styles from "@/public/css/modules/applications/retailTruck.module.css";

import { ZoomImage } from "@/components/elements";

export default function HeadInfo() {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.headInfo}>
          {/* 첫 번째 */}
          <div className={styles.contentWrapper}>
            <ZoomImage imagePath="/image/applications/retailTruck/headImage.jpg" />
            <div className={styles.title__blue}>DRIVE THROUGH SYSTEM</div>
            <div className={styles.content__text}>
              The InterClean commercial truck wash systems are the most advanced
              wash systems in the world. Fully automated commercial truck wash
              systems designed by InterClean can produce 15 to 30 clean trucks
              per hour with only one employee. <br />
              <br />
              This commercial truck wash design allows the system to operate
              continuously using recycled water — even while the settling pits
              are being emptied and cleaned. The pits are emptied of liquids
              automatically while the dried sludge is removed by the use of a
              Bobcat and roll-off containers. <br />
              <br />
              InterClean does not design and build wash systems that use deadly
              hydrofluoric acid in any part of cleaning. InterClean opposes the
              use of hydrofluoric acid in any form in vehicle washing.{" "}
              <span className={styles.content__link}>HF Acid Report</span> (PDF,
              174.20 kB)
            </div>
          </div>
          {/* 두 번째 */}
          <div className={styles.contentWrapper}>
            <div className={styles.title__blue}>
              GANTRY / ROLLOVER DESIGN – ULTIMA
            </div>
            <ZoomImage imagePath="/image/applications/retailTruck/bodyImage.jpg" />
            <div className={styles.content__text}>
              The Ultima, our specially designed Gantry/Rollover Design require
              a smaller footprint and are available with multiple options such
              as touchless, friction or a combination of both.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

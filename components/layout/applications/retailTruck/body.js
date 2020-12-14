import styles from "@/public/css/modules/applications/retailTruck.module.css";

import { ButtonBlue } from "@/components/elements";

export default function Body() {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.body}>
          {/* 첫 번째 */}
          <div className={styles.contentWrapper}>
            <div className={styles.title__orange}>
              ULTIMATE CLEANING POWER FOR A VARIETY OF TRUCKS
            </div>
            <div className={styles.content__text}>
              The newly designed Ultima Fleet Washer presents state-of-the-art
              technology for the large vehicle cleaning industry and fulfils
              extensive needs in a variety of applications. The top models
              combine advanced brushless and brush wash methods and clean all
              kinds of vehicles from small trucks to complex shaped tractors and
              trailers.
            </div>
          </div>
          {/* 두 번째 */}
          <div className={styles.contentWrapper}>
            <div className={styles.title__orange}>
              TOP CLASS CLEANING POWER FOR HARD-TO-CLEAN VEHICLES
            </div>
            <div className={styles.content__text}>
              The Rainbow Ultima is equipped with a prewash and high-pressure
              systems consisting of oscillating and profiling solid stream
              nozzle assemblies that have the best available cleaning power for
              tanker trucks, garbage trucks and other hard-to-clean odd shaped
              vehicles. For standard applications the Ultima can be equipped
              with conventional high-pressure nozzles.
            </div>
          </div>
          {/* 세 번째 */}
          <div className={styles.contentWrapper}>
            <div className={styles.title__orange}>
              THE KEY CLEANING ADVANTAGE – HIGH PRESSURE WASHING
            </div>
            <div className={styles.content__text}>
              Transportation vehicles have a large number of areas beyond the
              reach of brushes. Therefore it is important to note that the
              high-pressure washing features in this system play a major role in
              the cleaning processes. Additionally, the high-pressure water jets
              remove sand and other coarse particles, which could potentially
              scratch finishes of vehicles during the brush stage of the wash.
              The Ultima high pressure arch’s use both the conventional flat
              spray and advanced solid stream pattern for the maximum cleaning
              impact and efficient washing.
            </div>
          </div>
          {/* 네 번째 */}
          <div className={styles.contentWrapper}>
            <div className={styles.title__orange}>
              TRIPLE COVERAGE SWEEPING TECHNIQUE FOR ENHANCED CLEANING
            </div>
            <div className={styles.content__text}>
              Vertically sweeping side jets clean the sides from sills to roof.
              For enhanced cleaning, they oscillate up and down so that they
              overlap each other. Similarly, the high-pressure water jets on the
              rotary head oscillate sideways. High-pressure water jets, from
              nozzles situated in the rotary head, clean the vertical and
              horizontal surfaces from bumper to bumper. Rotational motions of
              the head, together with the lateral oscillating pattern, direct
              the far-reaching water jets into vehicle recesses that are beyond
              the reach of brushes.
            </div>
          </div>
          {/* 다섯 번째 */}
          <div className={styles.contentWrapper}>
            <div className={styles.title__orange}>
              THESE SYSTEMS ARE AVAILABLE USING FRESH OR RECYCLED WATER AND THE
              FOLLOWING OPTIONS:
            </div>
            <div className={styles.content__text}>
              <li>Blowers</li>
              <li>RO Final Rinse</li>
              <li>2-Step Cleaning Chemistry</li>
              <li>Wax/Rinse Aid</li>
              <li>Wash Authorization</li>
            </div>
          </div>
          {/* 버튼 */}
          <ButtonBlue content="CONTACT A PRODUCT EXPERT!" />
        </div>
      </div>
    </div>
  );
}

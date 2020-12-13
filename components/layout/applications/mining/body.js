import styles from "@/public/css/modules/mining.module.css";
import Link from "next/link";

export default function Body() {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.body}>
          {/* 첫 번째 */}
          <div className={styles.body__content__wrapper}>
            <div
              className={`${styles.content__title__blue} ${styles.content__title__center}`}
            >
              AUTOMATIC, DRIVE THROUGH WASH SYSTEMS FOR THE MINING AND OIL
              INDUSTRY
            </div>
            <div className={styles.zoom__imageWrapper}>
              <img
                src="/image/applications/mining/bodyImage1.jpg"
                className={styles.zoom__image}
              />
            </div>
            <div className={styles.zoom__content__title__orange}>
              BENEFITS OF THE DRIVE THROUGH SYSTEM INCLUDE:
            </div>
            <div className={styles.content__text}>
              <li>
                Multi-vehicle design which can accommodate multiple fleet
                vehicle types
              </li>
              <li>Wash times less than 5 minutes</li>
              <li>Simple operation for wash users</li>
              <li>Up to 100% recycled water usage</li>
              <li>
                Pre-wired and Pre-plumbed containerized wash equipment rooms
                available
              </li>
            </div>
            <Link href="/contact">
              <div className={styles.button__blue}>
                CONTACT A PRODUCT EXPERT!
              </div>
            </Link>
          </div>
          {/* 두 번째 */}
          <div className={styles.body__content__wrapper}>
            <div
              className={`${styles.content__title__blue} ${styles.content__title__center}`}
            >
              MANUAL WASH SYSTEMS FOR HEAVY DUTY EQUIPMENT
            </div>
            <div className={styles.zoom__imageWrapper}>
              <img
                src="/image/applications/mining/bodyImage2.jpg"
                className={styles.zoom__image}
              />
            </div>
            <div className={styles.content__text}>
              The manual wash systems we provide rely on efficient and effective
              water recycling and include the proven EQ100 water recycling
              system. The low-pressure, high-volume design of our manual wash
              systems provide a stream of focused and intense water to maximize
              the cleaning impact and simplify cleaning the dirties vehicles.
            </div>
            <div className={styles.content__title__orange}>
              BENEFITS OF THE MANUAL WASH SYSTEM INCLUDE:
            </div>
            <div className={styles.content__text}>
              <li>Skid mounted EQ100 water recycling systems</li>
              <li>
                Manual monitor and fire hose packages for standard applications
                and detail work
              </li>
              <li>
                High volume adjustable monitors with options for semi-automatic
                joystick control packages
              </li>
              <li>
                Rigid rubber fire hose and reels with adjustable nozzles and
                spring rewind
              </li>
              <li>Other options available as needed</li>
              <div className={styles.content__text__bold}>
                The combined EQ100 water recycling system and high-pressure pump
                can feed up to four hoses simultaneously.
              </div>
            </div>
            <Link href="/contact">
              <div className={styles.button__blue}>CONTACT US</div>
            </Link>
          </div>
          {/* 세 번째 */}
          <div className={styles.body__content__wrapper}>
            <div
              className={`${styles.content__title__blue} ${styles.content__title__center}`}
            >
              ROBOTIC SYSTEMS FOR MINING AND OIL EQUIPMENT
            </div>
            <div className={styles.zoom__imageWrapper}>
              <img
                src="/image/applications/mining/bodyImage3.jpg"
                className={styles.zoom__image}
              />
            </div>
            <div className={styles.content__text}>
              Employee safety is a huge concern for the mining and oil
              industries, especially when it comes to cleaning large, heavy-duty
              vehicles. InterClean’s robotic wash systems provide a completely
              automatic wash system to clean oversized vehicles and gear by
              using multiple monitors that can perform multiple wash duties
              simultaneously. This means no more personnel in the bay. Our
              robotic wash systems for mining and oil equipment not only improve
              safety, they provide a better wash quality in less time.
            </div>
            <div className={styles.content__title__orange}>
              SOME KEY FEATURES OF THE ROBOTIC WASH SYSTEMS INCLUDE:
            </div>
            <div className={styles.content__text}>
              <li>
                Fully-automatic robotic monitor packages that maximize safety,
                efficiency and productivity
              </li>
              <li>
                Designed to recognize the vehicle and wash specifically
                designated areas while avoiding sections of the vehicle that
                cannot withstand a direct blast from the water cannons
              </li>
              <li>
                Programmable to accommodate multiple vehicle types and sizes
              </li>
              <li className={styles.content__text__bold}>
                Can be installed in hazardous locations such as underground
                mines and underneath the vehicle
              </li>
            </div>
            <Link href="/contact">
              <div className={styles.button__blue}>
                CONTACT A PRODUCT EXPERT!
              </div>
            </Link>
          </div>
          {/* 네 번째 */}
          <div className={styles.body__content__wrapper}>
            <div
              className={`${styles.content__title__blue} ${styles.content__title__center}`}
            >
              INTERCLEAN’S HEAVY-DUTY TIRE, WHEEL AND UNDER-CHASSIS WASH SYSTEMS
              FEATURE THE ULTIMATE IN WATER RECYCLING TECHNOLOGY
            </div>
            <div className={styles.zoom__imageWrapper}>
              <img
                src="/image/applications/mining/bodyImage4.jpg"
                className={styles.zoom__image}
              />
            </div>
            <div className={styles.content__text}>
              InterClean has become a leader for designing and engineering
              effective solutions to wash and decontaminate the tires and
              chassis of trucks and other heavy duty equipment leaving
              landfills, quarries, steel mills and chemical plants. Our
              low-pressure, high-volume tire and chassis wash system allow you
              to dial in on the exact amount of water and detergents you need,
              where you need them. Our wash systems are custom designed to
              accommodate the types of mining and oil equipment you are cleaning
              and whether your operations will be manual, robotic, or a
              combination of both. Call +1 (734) 961-3300 to discuss your heavy
              duty wheel, chassis, and equipment wash system needs.
            </div>
            <Link href="/contact">
              <div className={styles.button__orange}>CONTACT US</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

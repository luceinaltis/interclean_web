import styles from "@/public/css/modules/militaryWash.module.css";
import Link from "next/link";

export default function Body() {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.body}>
          <div className={styles.zoom__imageWrapper}>
            <img
              src="/image/applications/military/headImage.jpg"
              className={styles.zoom__image}
            />
          </div>
          {/* 첫 번째 */}
          <div className={styles.content__wrapper}>
            <div className={styles.content__title__blue}>
              HIGH-PRESSURE WASH SYSTEMS FOR MILITARY VEHICLES
            </div>
            <div className={styles.content__text}>
              Military Vehicles, such as tanks and transport trucks, perform in
              some of the most extreme operating conditions, making them a
              challenge for standard wash systems to clean. InterClean’s
              automatic and manual high pressure touchless and Gantry/Rollover
              washing systems are made in the U.S.A., and designed to quickly
              and safely power away caked on, built up mud and corrosives from
              military land vehicles such as tanks, heavy duty trucks, light
              utility vehicles, prime movers, and trucks. Contact InterClean for
              pricing and specifications on a custom heavy duty military wash
              system.
            </div>
          </div>
          {/* 두 번째 */}
          <div className={styles.content__wrapper}>
            <div className={styles.content__title__orange}>
              GIVE YOUR TIRES AND CHASSIS A DEEP, THOROUGH CLEAN IN MINUTES, NOT
              HOURS
            </div>
            <div className={styles.content__text}>
              To help reduce extra maintenance and life cycle costs, it is
              important to remove grease and other buildup from tires, chassis,
              and other hard to reach places. The extra sand, mud and dirt
              buildup will add excessive weight to the vehicle, leading to
              decreased performance and wear on the braking and driveline
              systems. This can take hours to remove using conventional methods.
              InterClean’s powerful manual and robotic, tire and chassis wash
              systems can clean military vehicles in just a few minutes. Our
              heavy duty cleaning systems use InterClean’s exclusive high
              powered water recycling module to reclaim dirty water and filter
              out 80% of the dangerous chemicals, making the water safe for the
              environment and safe for your vehicles. Our water recycling
              systems work with both our manual and robotic tire and chassis
              wash systems, spraying high volumes of water at relatively low
              pressure, providing the impact needed to blast away heavy buildup
              in a matter of minutes. Call +1 (734) 961-3300 to speak to a
              military wash system expert.
            </div>
            <Link href="/contact">
              <div className={styles.button__orange}>CONTACT US</div>
            </Link>
          </div>
          {/* 세 번째 */}
          <div className={styles.content__wrapper}>
            <div className={styles.content__title__blue}>
              INTRODUCING THE EQ100: INTERCLEAN’S EXCLUSIVE WATER RECYCLING
              MODULE
            </div>
            <div className={styles.content__text}>
              The heart of InterClean’s military wash systems is their ability
              for recycling the wash water effectively and efficiently using our
              very own EQ100. The InterClean EQ100 water recycling module uses
              settling, filtering, cyclonic separation, circulation and aeration
              to provide a continuous supply of recycled water used for manual
              or automatic washing applications. The EQ100 can be used as the
              standard water recycling module, or we can design a more
              customized system when a more demanding solution is required. The
              EQ100 module is pre-plumbed and pre-wired, is mounted to a skid,
              and includes its own panel to control the internal functions such
              as water level adjustment and monitoring motor controls and
              alarms. The water recycling modules are designed to automatically
              backwash the filter, circulate and aerate the wash water. These
              features prevent bad odors associated with many water recycling
              systems. <br />
              Contact us today for more information on the EQ100, replacement
              chemicals or replacement parts for our military wash systems, or
              to receive a quote.
            </div>
            <Link href="/contact">
              <div className={styles.button__blue}>
                CONTACT A PRODUCT EXPERT!
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

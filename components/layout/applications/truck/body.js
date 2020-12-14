import styles from "@/public/css/modules/applications/truckWash.module.css";

export default function Body() {
  const imagePath = [
    "/image/applications/truck/body1.jpg",
    "/image/applications/truck/body2.jpg",
    "/image/applications/truck/body3.jpg",
  ];

  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.body}>
          <div className={styles.body__grid}>
            {/* 첫 번째 */}
            <img
              src={imagePath[0]}
              className={`${styles.body__image} ${styles.body__grid__cell}`}
            />
            <div className={`${styles.body__text} ${styles.body__grid__cell}`}>
              <div className={styles.body__title}>
                DRIVE-THROUGH TRUCK WASH SYSTEM
              </div>
              <div className={styles.body__body}>
                Efficient, heavy-duty cleaning power perfect for large fleets
                with demanding wash cycles. InterClean drive-through washing
                systems use a combination of wash detergents, high-volume,
                low-pressure washing jets, and high-pressure washing jets to
                efficiently clean trucks of all shapes and sizes.
                <br />
                Choose between:
                <li>A completely brushless/ touchless system</li>
                <li>
                  A drive-through system coupled with a rollover wash system for
                  an extra powerful clean.
                </li>
                It’s a safe and easy way to wash a variety of vehicles with the
                least amount of water and chemicals.
              </div>
              <div className={styles.body__button}>LEARN MORE</div>
            </div>
            {/* 두 번째 */}
            <div className={`${styles.body__text} ${styles.body__grid__cell}`}>
              <div className={styles.body__title}>
                ROLLOVER/ GANTRY TRUCK WASH SYSTEM
              </div>
              <div className={styles.body__body}>
                Highly customizable, effective fleet washing system perfect for
                both standard vehicle configurations and challenging vehicle
                shapes (e.g. garbage trucks). The InterClean Ultra Gantry System
                roll-over machine can be made with friction, touch-less, or a
                combination of both. Customize your rollover vehicle wash system
                with a variety of options including:
                <br />
                Choose between:
                <li>Spot-free rinse</li>
                <li>Blowers</li>
                <li>Water recycling</li>
                <li>Undercarriage wash</li>
                Simply park your vehicle in the wash bay and let the rollover
                wash system do the work!
              </div>
              <div className={styles.body__button}>LEARN MORE</div>
            </div>
            <img
              src={imagePath[1]}
              className={`${styles.body__image} ${styles.body__grid__cell}`}
            />
            {/* 세 번째 */}
            <img
              src={imagePath[2]}
              className={`${styles.body__image} ${styles.body__grid__cell}`}
            />
            <div className={`${styles.body__text} ${styles.body__grid__cell}`}>
              <div className={styles.body__title}>
                WHEEL, TIRE, & CHASSIS WASH SYSTEM
              </div>
              <div className={styles.body__body}>
                A high-pressure, environmentally friendly truck wash solution
                perfect for removing dirt and grime from trucks working at job
                sites with pollutants. InterClean is a leader for designing and
                engineering effective solutions to wash and decontaminate the
                tires and chassis of trucks and other heavy-duty equipment
                leaving job sites such as:
                <li>Landfills</li>
                <li>Quarries</li>
                <li>Steel mills</li>
                <li>Chemical plants</li>
                From dust control to heavy mud removal, we have the solution for
                your tire and under chassis washing problem.
              </div>
              <div className={styles.body__button}>LEARN MORE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

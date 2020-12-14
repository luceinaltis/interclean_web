import styles from "@/public/css/modules/home.module.css";

export default function Services() {
  return (
    <div className={styles.services__background}>
      <div className="container">
        <div className="inner__container">
          <div className={styles.services__title}>SERVICES</div>
          <div className={styles.services__grid}>
            <div className={styles.services__text}>
              The heavy-duty vehicle wash systems InterClean designs and
              manufactures can help our clients simplify maintenance and improve
              efficiency by removing heavy mud, dirt and contaminants quickly
              and effectively from the vehicles in their fleets. Like any other
              piece of equipment, the wash system needs to be used and
              maintained properly. To help understand the maintenance that is
              required, we provide detailed operations and maintenance manuals
              for each wash system we manufacture. If you don’t have the time or
              resources to maintain the wash system, we also offer spare parts,
              preventative maintenance, training and a custom chemical program.
              <div className={styles.services__button}>READ MORE</div>
            </div>
            <span className={styles.services__imageContainer}>
              <img
                src="/image/home/WaterTank.jpg"
                className={styles.services__image}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

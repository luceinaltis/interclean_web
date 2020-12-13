import styles from "@/public/css/modules/truckWash.module.css";
import Link from "next/link";

export default function HeadIcon() {
  const iconData = [
    ["/image/applications/truck/headIcon1.png", "COMMERCIAL TRUCKS"],
    ["/image/applications/truck/headIcon2.png", "GARBAGE TRUCKS"],
    ["/image/applications/truck/headIcon3.png", "HEAVY TRUCKS"],
    ["/image/applications/truck/headIcon4.png", "TANKER TRUCKS"],
  ];
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.headInfo}>
          <div className={styles.headIcon__grid}>
            {iconData &&
              iconData.map((val, idx) => {
                return (
                  <div key={idx} className={styles.headIcon__wrapper}>
                    <img src={val[0]} className={styles.headIcon__image} />
                    <div className={styles.headIcon__text}>{val[1]}</div>
                  </div>
                );
              })}
          </div>
          <div className={styles.headText}>
            <div className={styles.headText__subtitle}>About Our</div>
            <div className={styles.headText__title}>TRUCK WASH SYSTEMS</div>
            <div className={styles.headText__body}>
              InterClean truck wash systems are fully-automated, custom cleaning
              solutions for municipal or commercial vehicles. Our in-house
              design team works with you to create the{" "}
              <span className={styles.headText__body__bold}>
                best truck wash system to maximize
              </span>
              efficiency while meeting the needs of{" "}
              <span className={styles.headText__body__bold}>
                your budget, space, and the shapes and sizes of your vehicles.
              </span>{" "}
              Our truck wash systems include a
              <span className={styles.headText__body__bold}>
                drive-through automatic wash system, a roll-over wash system, a
                wheel, tire, and chassis wash system, or a combination of
                multiple systems.
              </span>
            </div>
          </div>
          <Link href="/contact">
            <span className={styles.headButton}>TALK TO A PRODUCT EXPERT</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

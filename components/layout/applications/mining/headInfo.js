import styles from "@/public/css/modules/mining.module.css";
import Link from "next/link";

export default function HeadInfo() {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.headInfo}>
          <div
            className={`${styles.content__title__blue} ${styles.headInfo__title} ${styles.content__title__center}`}
          >
            OUR HEAVY DUTY, HIGH POWERED
          </div>
          <div
            className={`${styles.content__title__orange} ${styles.content__title__center}`}
          >
            WASH SYSTEMS FOR MINING AND OIL SAVE YOU MONEY
          </div>
          <div className={styles.zoom__imageWrapper}>
            <img
              src="/image/applications/mining/headImage.jpg"
              className={styles.zoom__image}
            />
          </div>
          <div className={styles.content__text}>
            Keeping your mining machinery, trucks, and other heavy-duty
            equipment clean is imperative to their longevity. InterClean
            understands that especially in the mining and oil industries, time
            is money, and every minute your vehicles are idle, affects your
            bottom line. Fact is, a 400-ton haul truck can 4-6 hours to wash
            manually, especially if you don’t have the right tools for the job.
            Not only is manual washing huge labor cost, it can be dangerous to
            the health and safety of your employees and the environment. By
            implementing the correct design and equipment wash system package
            from InterClean, we can significantly reduce your vehicle downtime,
            promote a safe work environment, reduce water waste, and help
            decrease your ongoing maintenance costs. Call InterClean today and
            talk to a heavy-duty wash system expert.
          </div>
          <Link href="/contact">
            <div className={styles.button__orange}>CONTACT US</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

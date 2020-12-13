import styles from "@/public/css/modules/trainWash.module.css";

export default function HeadInfo() {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.headInfo}>
          <div className={styles.headInfo__title}>
            SITE-SPECIFIC TRAIN WASH SYSTEMS
          </div>
          <div className={styles.headInfo__subtitle}>BY INTERCLEAN</div>
          <div className={styles.zoom__imageWrapper}>
            <img
              src="/image/applications/train/headImage.jpg"
              className={styles.zoom__image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

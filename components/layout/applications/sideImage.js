import styles from "@/public/css/modules/applications.module.css";

export default function SideImage({
  leftImage,
  rightImage,
  leftText,
  rightText,
}) {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.sideImage__container}>
          <div className={styles.sideImage__imageContainer}>
            <img src={leftImage} className={styles.sideImage__image} />
            <div className={leftText && styles.sideImage__image__bottom}>
              {leftText}
            </div>
          </div>
          <div className={styles.sideImage__imageContainer}>
            <img src={rightImage} className={styles.sideImage__image} />
            <div className={rightText && styles.sideImage__image__bottom}>
              {rightText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

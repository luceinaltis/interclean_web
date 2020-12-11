import styles from "@/public/css/modules/applications.module.css";

export default function ZoomImage({ imagePath }) {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.zoomImage__imageContainer}>
          <img className={styles.zoomImage__image} src={imagePath} />
        </div>
      </div>
    </div>
  );
}

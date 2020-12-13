import styles from "@/public/css/modules/applications/applications.module.css";

export default function handglassCell({ imageData, setIdx, openModal }) {
  const [imagePath] = imageData;

  return (
    <div
      className={styles.handglassCell}
      onClick={() => {
        setIdx();
        openModal();
      }}
    >
      <img className={styles.handglassCell__image} src={imagePath} />
      <div className={styles.handglassCell__glassContainer}>
        <span className={styles.handglassCell__glass}>
          <i className="fas fa-search" />
        </span>
      </div>
    </div>
  );
}

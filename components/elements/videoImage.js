import styles from "@/public/css/modules/video.module.css";
import Link from "next/link";

export default function VideoImage({ videoData, needTitle, openModal }) {
  const [_, videoImagePath, videoTitle] = videoData;
  return (
    <div>
      {needTitle ? <div className={styles.videoTitle}>{videoTitle}</div> : null}
      <div className={styles.imageWrapper} onClick={openModal}>
        <img src={videoImagePath} className={styles.videoImage} />
        <span className={styles.videoImage__iconWrapper}>
          <i className="fas fa-caret-right" />
        </span>
      </div>
    </div>
  );
}

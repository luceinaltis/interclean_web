import styles from "@/public/css/modules/video.module.css";

export default function ModalVideo({ isOpened, closeModal, videoHash }) {
  return (
    <>
      {isOpened ? (
        <div className={styles.background} onClick={closeModal}>
          <div className={styles.modalContainer}>
            <div className={styles.modalVideo__wrapper}>
              <iframe
                className={styles.modalVideo__video}
                src={`https://www.youtube.com/embed/${videoHash}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div>
              <span className={styles.closeIcon}>
                <i className="fas fa-times" />
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

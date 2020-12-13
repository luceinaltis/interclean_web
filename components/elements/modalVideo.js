import styles from "@/public/css/modules/video.module.css";

export default function ModalVideo({ isOpened, closeModal, videoHash }) {
  return (
    <>
      {isOpened ? (
        <div className={styles.background} onClick={closeModal}>
          <div className={styles.modalContainer}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoHash}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

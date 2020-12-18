import React, { useState, useEffect } from "react";

import styles from "@/public/css/modules/modalImage.module.css";

export default function ModalImage({
  photosData,
  idx,
  setIdx,
  isOpened,
  closeModal,
}) {
  const [currentImage, setCurrentImage] = useState({
    imagePath: photosData[idx][0],
    imageTitle: photosData[idx][1],
  });

  useEffect(() => {
    setCurrentImage({
      imagePath: photosData[idx][0],
      imageTitle: photosData[idx][1],
    });
  }, [idx]);

  return (
    <>
      {isOpened ? (
        <div
          className={styles.background}
          onClick={() => {
            closeModal();
          }}
        >
          <div className={styles.modalContainer}>
            <div className={styles.imageText}>{currentImage.imageTitle}</div>
            <div className={styles.imageContainer}>
              <img src={currentImage.imagePath} className={styles.image} />
              <div
                className={`${styles.image__arrowContainer} ${styles.image__arrowContainer__pos_left}`}
                onClick={(e) => {
                  e.stopPropagation(); // 이벤트 버블링 방지
                  setIdx(-1);
                }}
              >
                <span className={styles.image__arrow__dir_left}>
                  <i className="fas fa-angle-left" />
                </span>
              </div>
              <div
                className={`${styles.image__arrowContainer} ${styles.image__arrowContainer__pos_right}`}
                onClick={(e) => {
                  e.stopPropagation(); // 이벤트 버블링 방지
                  setIdx(1);
                }}
              >
                <span className={styles.image__arrow__dir_right}>
                  <i className="fas fa-angle-right" />
                </span>
              </div>
            </div>
            <div>
              <div className={styles.text__wrapper}>
                <div
                  className={styles.text__arrow}
                  onClick={(e) => {
                    e.stopPropagation(); // 이벤트 버블링 방지
                    setIdx(-1);
                  }}
                >
                  <i className="fas fa-angle-left" />
                </div>
                <div className={styles.imageText}>{`${idx + 1} / ${
                  photosData.length
                }`}</div>
                <div
                  className={styles.text__arrow}
                  onClick={(e) => {
                    e.stopPropagation(); // 이벤트 버블링 방지
                    setIdx(1);
                  }}
                >
                  <i className="fas fa-angle-right" />
                </div>
              </div>
              <div>
                <span className={styles.closeIcon}>
                  <i className="fas fa-times" />
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

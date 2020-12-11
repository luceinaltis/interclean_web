import React, { useState } from "react";

// css
import styles from "@/public/css/modules/home.module.css";

export default function SlideImage() {
  const styleSet = {
    1: styles.slide__image1,
    2: styles.slide__image2,
    3: styles.slide__image3,
    4: styles.slide__image1,
    5: styles.slide__image2,
    6: styles.slide__image3,
  };
  const imageSet = {
    1: "/image/home/slide1.jpg",
    2: "/image/home/slide2.jpg",
    3: "/image/home/slide3.jpg",
    4: "/image/home/slide4.jpg",
    5: "/image/home/slide5.jpg",
    6: "/image/home/slide6.jpg",
  };
  const [slideIdx, setSlideIdx] = useState(1);

  return (
    <div className={styles.slide}>
      {/* 슬라이드 내 이미지*/}
      <img className={styles.slide__image} src={imageSet[slideIdx]} alt="tmp" />
      <img
        className={`${styles.slide__image}  ${styles.top}`}
        src={imageSet[(slideIdx % 6) + 1]}
        alt="tmp"
      />
      <div className={styles.slide__arrow}>
        <span onClick={() => setSlideIdx((idx) => idx - 1 || 6)}>
          <i className="fas fa-chevron-circle-left" />
        </span>
        <span onClick={() => setSlideIdx((idx) => (idx % 6) + 1)}>
          <i className="fas fa-chevron-circle-right" />
        </span>
      </div>
    </div>
  );
}

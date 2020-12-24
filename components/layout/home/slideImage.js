import React, { useState, useEffect } from "react";
import { withTranslation } from "../../../i18n";

// css
import styles from "@/public/css/modules/home.module.css";

function SlideImage({ t }) {
    const imageSet = {
        1: "/image/home/slide1.jpg",
        2: "/image/home/slide2.jpg",
        3: "/image/home/slide3.jpg",
        4: "/image/home/slide4.jpg",
        5: "/image/home/slide5.jpg",
        6: "/image/home/slide6.jpg",
    };
    const [slideIdx, setSlideIdx] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => setSlideIdx((slideIdx % 6) + 1), 4000);
        return () => clearInterval(interval);
    }, [slideIdx]);

    return (
        <div className={styles.slide}>
            {Object.keys(imageSet).map((_, idx) => {
                const val = idx + 1;
                return (
                    <input
                        key={val}
                        style={{ display: "none" }}
                        type="radio"
                        name="pos"
                        id={`pos${val}`}
                        checked={val === slideIdx}
                        onChange={() => setSlideIdx(val)}
                    />
                );
            })}
            <ul className={styles.slide__ul}>
                {Object.keys(imageSet).map((_, idx) => {
                    const val = idx + 1;
                    return (
                        <li key={val} className={styles.slide__li}>
                            <div className={styles.slide__imageWrapper}>
                                <img src={imageSet[val]} className={styles.slide__image} />
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.slide__arrow}>
                <span onClick={() => setSlideIdx((idx) => idx - 1 || 6)}>
                    <i className="fas fa-chevron-circle-left" />
                </span>
                <span onClick={() => setSlideIdx((idx) => (idx % 6) + 1)}>
                    <i className="fas fa-chevron-circle-right" />
                </span>
            </div>
            <p className={styles.slide__idxWrapper}>
                {Object.keys(imageSet).map((_, idx) => {
                    const val = idx + 1;
                    return (
                        <label
                            className={styles.slide__idx}
                            key={val}
                            htmlFor={`pos${val}`}
                            onClick={() => setSlideIdx(val)}
                        >
                            {val}
                        </label>
                    );
                })}
            </p>
        </div>
    );
}

SlideImage.getInitialProps = async () => ({
    namespacesRequired: ["home"],
});

export default withTranslation("home")(SlideImage);

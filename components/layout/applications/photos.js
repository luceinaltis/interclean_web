import React, { useState } from "react";

import { Dropbar, HandglassCell, ModalImage } from "@/components/elements";
import styles from "@/public/css/modules/applications/applications.module.css";
import { Collapse } from "react-collapse";

export default function Photos({ photosData, menuOpened, openMenu }) {
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(3);

  const setIdx = (val) => {
    val === 1 && setSelectedIdx((selectedIdx + 1) % photosData.length);
    val === -1 && setSelectedIdx((selectedIdx || photosData.length) - 1);
  };

  return (
    <>
      <div className="container">
        <div className="inner__container">
          <Dropbar menuName="PHOTOS" opened={menuOpened} openMenu={openMenu} />
          <Collapse isOpened={menuOpened}>
            <div className={styles.handglassGrid}>
              {photosData &&
                photosData.map((val, idx) => {
                  return (
                    <HandglassCell
                      key={idx}
                      imageData={val} // [imagePath, imageTitle]
                      setIdx={() => setSelectedIdx(idx)}
                      openModal={() => setModalOpened(true)}
                    />
                  );
                })}
            </div>
          </Collapse>
        </div>
      </div>
      <ModalImage
        photosData={photosData}
        idx={selectedIdx}
        setIdx={(val) => setIdx(val)}
        isOpened={modalOpened}
        closeModal={() => setModalOpened(false)}
      />
    </>
  );
}

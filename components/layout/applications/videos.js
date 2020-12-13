import React, { useEffect, useState } from "react";

import { Dropbar, ModalVideo, VideoImage } from "@/components/elements";
import { Collapse } from "react-collapse";

import styles from "@/public/css/modules/video.module.css";

export default function Videos({ videoData, needTitle, menuOpened, openMenu }) {
  const [videoHash, setVideoHash] = useState(undefined);
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    setModalOpened(videoHash ? true : false);
  }, [videoHash]);

  return (
    <>
      <div className="container">
        <div className="inner__container">
          <Dropbar menuName="VIDEOS" opened={menuOpened} openMenu={openMenu} />
          <Collapse isOpened={menuOpened}>
            <div className={styles.videoGrid}>
              {videoData &&
                videoData.map((val, idx) => {
                  return (
                    <VideoImage
                      key={idx}
                      videoData={val} // [videoHash, videoImage, videoTitle]
                      needTitle={needTitle}
                      openModal={() => setVideoHash(val[0])}
                    />
                  );
                })}
            </div>
          </Collapse>
        </div>
      </div>
      <ModalVideo
        videoHash={videoHash}
        isOpened={modalOpened}
        closeModal={() => setVideoHash(undefined)}
      />
    </>
  );
}

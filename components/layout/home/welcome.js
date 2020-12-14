import React, { useState } from "react";
import styles from "@/public/css/modules/home.module.css";

import { VideoImage, ModalVideo, ButtonGreen } from "@/components/elements";

export default function Welcome() {
  const videoData = ["6TbYUHBB8wA", "/image/home/videoImage.png"];
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <div className={styles.services__background}>
        <div className="container">
          <div className="inner__container">
            <div className={styles.welcome}>
              <div className={styles.welcome__header}>
                <p className={styles.welcome__header__left}>
                  {"WELCOME "}
                  <font className={styles.welcome__header__right}>
                    TO INTERCLEAN
                  </font>
                </p>
              </div>
            </div>
            <div className={styles.welcome__grid}>
              <div>
                <p className={styles.welcome__text}>
                  InterClean Equipment , LLC. is headquartered in Ypsilanti, MI
                  and is a global, high-tech company that manufactures vehicle
                  wash systems from small trucks to heavy transport vehicles,
                  buses, rail fleets and a variety of special equipment. With
                  decades of experience, we are able to provide optimal results
                  for every project. <br />
                  <br />
                  With a team of wash experts, InterClean is known as one of the
                  leading and most innovative touchless wash systems and water
                  recycling pioneers in the world.
                </p>
                <div className={styles.welcome__buttonGrid}>
                  <ButtonGreen content="READ MORE" />
                  <img src="/image/home/USA.png" />
                </div>
              </div>
              <VideoImage
                videoData={videoData}
                need={false}
                openModal={() => setModalOpened(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        videoHash={videoData[0]}
        isOpened={modalOpened}
        closeModal={() => setModalOpened(false)}
      />
    </>
  );
}

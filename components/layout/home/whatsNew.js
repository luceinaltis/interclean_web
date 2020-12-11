import styles from "@/public/css/modules/home.module.css";

import { WhatsNewImage } from "@/components/elements";

export default function WhatsNew() {
  return (
    <div className={styles.whatsNew}>
      <div className="container">
        <div className="inner__container">
          <div className={styles.whatsNew__title__color_orange}>
            WHAT'S&nbsp;
            <span className={styles.whatsNew__title__color_white}>NEW</span>
          </div>
          <div className={styles.whatsNew__grid}>
            <WhatsNewImage target={"alpha"} />
            <WhatsNewImage target={"interior"} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Layouts
import { Header, Footer } from "../components/layout";
import Title from "@/components/layout/wash-systems/title";
import { ZoomImage } from "@/components/elements";

import styles from "@/public/css/modules/about.module.css";

import { withTranslation } from "../i18n";

function About({ t }) {
  return (
    <div>
      <Header />
      <Title titleString="ABOUT US" />
      <div className="container">
        <div className="inner__container">
          <div className={styles.about}>
            <div className={`${styles.title} ${styles.title__color_blue}`}>
              {t("p1")}
            </div>
            <ZoomImage imagePath="/image/about/headImage.jpg" />
            {/* 첫 번째 */}
            <div className={styles.content__wrapper}>
              <div className={`${styles.title} ${styles.title__color_emerald}`}>
                {t("p2")}
              </div>
              <p>{t("p3")}</p>
            </div>
            {/* 두 번째 */}
            <div className={styles.content__wrapper}>
              <div className={`${styles.title} ${styles.title__color_emerald}`}>
                {t("p4")}
              </div>
              <p>{t("p5")}</p>
            </div>
            {/* 세 번째 */}
            <div className={styles.content__wrapper}>
              <div className={`${styles.title} ${styles.title__color_emerald}`}>
                {t("p6")}
              </div>
              <p>{t("p7")}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

About.getInitialProps = async () => ({
  namespacesRequired: ["about", "footer", "header"],
});

export default withTranslation("about")(About);

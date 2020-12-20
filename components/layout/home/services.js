import styles from "@/public/css/modules/home.module.css";
import Link from "next/link";

import { withTranslation } from "../../../i18n";

function Services({ t }) {
  return (
    <div className={styles.services__background}>
      <div className="container">
        <div className="inner__container">
          <div className={styles.services__title}>SERVICES</div>
          <div className={styles.services__grid}>
            <div className={styles.services__text}>
              {t("p8")}
              <Link href="/services">
                <div className={styles.services__button}>READ MORE</div>
              </Link>
            </div>
            <span className={styles.services__imageContainer}>
              <img
                src="/image/home/WaterTank.jpg"
                className={styles.services__image}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Services.getInitialProps = async () => ({
  namespacesRequired: ["home"],
});

export default withTranslation("home")(Services);

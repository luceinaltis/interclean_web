import { withTranslation } from "../../../i18n";
import styles from "@/public/css/modules/home.module.css";

import { WhatsNewImage } from "@/components/elements";

function WhatsNew({ t }) {
    return (
        <div className={styles.whatsNew}>
            <div className="container">
                <div className="inner__container">
                    <div className={styles.whatsNew__title__color_orange}>{t("p6")}</div>
                    <div className={styles.whatsNew__grid}>
                        <WhatsNewImage target={"alpha"} />
                        <WhatsNewImage target={"interior"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

WhatsNew.getInitialProps = async () => ({
    namespacesRequired: ["home"],
});

export default withTranslation("home")(WhatsNew);

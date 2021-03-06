import Link from "next/link";
import { withTranslation } from "../../i18n";

import styles from "@/public/css/modules/home.module.css";

function WhatsNewImage({ target, t }) {
    let refPath = "";
    let imagePath = "";
    let title = "";

    switch (target) {
        case "interior":
            refPath = "/wash-systems/interior-trailer-wash-system";
            imagePath = "/image/home/Interior_trailer.jpg";
            title = "INTERIOR TRAILER\nAUTOMATED WASH SYSTEM";
            break;
        default:
            refPath = "/wash-systems/single-brush-wash-system";
            imagePath = "/image/home/Alpha500.jpg";
            title = "ALPHA 500Z\nSINGLE BRUSH WASH MACHINES";
            break;
    }

    return (
        <div className={styles.whatsNew__imageContainer}>
            <img src={imagePath} className={styles.whatsNew__image} />
            <div className={styles.whatsNew__image__bottom}>
                <span className={styles.whatsNew__image__bottom_text}>
                    {title.split("\n").map((str, idx) => {
                        return (
                            <p key={idx} className={styles.whatsNew__image__bottom_text}>
                                {str}
                                <br />
                            </p>
                        );
                    })}
                </span>
                <Link href={refPath}>
                    <div className={styles.whatsNew__image__bottom_button}>{t("read-more")}</div>
                </Link>
            </div>
        </div>
    );
}

WhatsNewImage.getInitialProps = async () => ({
    namespacesRequired: ["home"],
});

export default withTranslation("home")(WhatsNewImage);

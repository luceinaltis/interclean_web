import styles from "@/public/css/modules/commonComponent.module.css";
import { withTranslation } from "../../i18n";

function ButtoOrange({ content }) {
    return <div className={styles.button__green}>{content}</div>;
}

ButtoOrange.getInitialProps = async () => ({
    namespacesRequired: ["footer"],
});

export default withTranslation("footer")(ButtoOrange);

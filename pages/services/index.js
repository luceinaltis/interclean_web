import { withTranslation } from "../../i18n";

// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import Title from "../../components/layout/wash-systems/title";
import styles from "../../public/css/modules/services/index.module.css";

function Index({ t }) {
    return (
        <div>
            <Header />
            <Title titleString={t("title")} />
            <div className="container">
                <div className="inner__container">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h1>{t("p1")}</h1>
                    <h3>{t("p2")}</h3>
                    <p>{t("p3")}</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className={styles.grid}>
                        <div>
                            <h2>{t("p4")}</h2>
                            <hr />
                            <p>{t("p5")}</p>
                        </div>
                        <div>
                            <h2>{t("p6")}</h2>
                            <hr />
                            <p>{t("p7")}</p>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>{t("p8")}</h2>
                    <hr />
                    <p>{t("p9")}</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

Index.getInitialProps = async () => ({
    namespacesRequired: ["services", "footer", "header"],
});

export default withTranslation("services")(Index);

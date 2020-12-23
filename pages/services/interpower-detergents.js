import { withTranslation } from "../../i18n";

// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import Title from "../../components/layout/wash-systems/title";
import styles from "../../public/css/modules/services/interpower-detergents.module.css";

function InterpowerDetergents({ t }) {
    return (
        <div>
            <Header />
            <Title titleString={t("title")} />
            <div className="container">
                <div className="inner__container">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>{t("p1")}</h3>
                    <h3>{t("p2")}</h3>
                    <p>&nbsp;</p>
                    <p>{t("p3")}</p>
                    <p>{t("p4")}</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>{t("p5")}</h3>
                    <p>&nbsp;</p>
                    <div className={styles.grid}>
                        <div>
                            <h3>{t("p6")}</h3>
                            <p>{t("p7")}</p>
                            <h3>{t("p8")}</h3>
                            <p>{t("p9")}</p>
                        </div>
                        <div>
                            <h3>{t("p10")}</h3>
                            <p>{t("p11")}</p>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>{t("p12")}</h3>
                    <p>&nbsp;</p>
                    <div className={styles.grid}>
                        <div>
                            <h3>{t("p13")}</h3>
                            <p>{t("p14")}</p>
                        </div>
                        <div>
                            <h3>{t("p15")}</h3>
                            <p>{t("p16")}</p>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>{t("p17")}</h3>
                    <p>&nbsp;</p>
                    <div className={styles.grid}>
                        <div>
                            <h3>{t("p18")}</h3>
                            <p>{t("p19")}</p>
                            <h3>{t("p20")}</h3>
                            <p>{t("p21")}</p>
                            <h3>{t("p22")}</h3>
                            <p>{t("p23")}</p>
                            <h3>{t("p24")}</h3>
                            <p>{t("p25")}</p>
                        </div>
                        <div>
                            <h3>{t("p26")}</h3>
                            <p>{t("p27")}</p>
                            <h3>{t("p28")}</h3>
                            <p>{t("p29")}</p>
                            <h3>{t("p30")}</h3>
                            <p>{t("p31")}</p>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

InterpowerDetergents.getInitialProps = async () => ({
    namespacesRequired: ["services__interpower-detergents", "footer", "header"],
});

export default withTranslation("services__interpower-detergents")(InterpowerDetergents);

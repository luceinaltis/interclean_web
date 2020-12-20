// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import Title from "../../components/layout/wash-systems/title";
import styles from "../../public/css/modules/services/index.module.css";

export default function Index() {
    return (
        <div>
            <Header />
            <Title titleString={"SERVICES"} />
            <div className="container">
                <div className="inner__container">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h1>SERVICE & MAINTENANCE, DETERGENT, AND REPLACEMENT PARTS</h1>
                    <h3>FOR INTERCLEAN HEAVY-DUTY VEHICLE WASH SYSTEMS</h3>
                    <p>
                        InterClean heavy-duty wash systems are manufactured in the U.S.A and
                        installed and maintained by your local commercial wash system distributor.
                        Our wash systems for trucks, buses, fleets, aircraft, mining and oil
                        equipment, and trains are guaranteed to perform as specified. However,
                        should you need repair, maintenance, or parts, they are available through
                        your local InterClean distributor. In addition, InterClean’s InterPower
                        detergents are available directly through InterClean or your local
                        distributor.
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className={styles.grid}>
                        <div>
                            <h2>SERVICE AND MAINTENANCE</h2>
                            <hr />
                            <p>
                                Regular service and maintenance are important to keep commercial
                                wash systems working their best. InterClean offers several service
                                and maintenance plans to choose from. Please contact us or one of
                                our authorized dealers for InterClean maintenance plan details.
                            </p>
                        </div>
                        <div>
                            <h2>DETERGENTS</h2>
                            <hr />
                            <p>
                                For best results, we recommend using only InterClean’s InterPower
                                detergents. InterPower detergents will help keep your wash system
                                operating properly and your vehicles as clean as possible. Contact
                                us using the form below to request wash detergent refills in your
                                area.
                            </p>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>REPLACEMENT PARTS</h2>
                    <hr />
                    <p>
                        Ordering replacement parts for InterClean commercial wash systems is easy.
                        Simply reference the O&M Manual for the parts list for your system. Then,
                        contact us for parts availability and pricing. If you need professional
                        installation of your InterClean wash system replacement parts, we can also
                        provide an installation quote from one of our factory trained technicians or
                        authorized local distributors.{" "}
                        <strong>
                            Call +1 (734) 359-9837 for InterClean commercial wash system replacement
                            parts.
                        </strong>
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

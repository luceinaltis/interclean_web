// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import Title from "../../components/layout/wash-systems/title";
import styles from "../../public/css/modules/services/interpower-detergents.module.css";

export default function InterpowerDetergents() {
    return (
        <div>
            <Header />
            <Title titleString={"WASH DETERGENTS"} />
            <div className="container">
                <div className="inner__container">
                    <h3>InterPower Detergents</h3>
                    <h3>Heavy-Duty Detergents Designed For Heavy-Duty Equipment</h3>
                    <p>
                        All InterPower detergents are specifically designed for use in InterClean
                        Equipment, and other heavy-duty wash equipment, to ensure long and healthy
                        equipment life. InterPower detergents are formulated and proven to provide
                        the most powerful solutions for removing grease, grime, dirt, mud, and other
                        corrosives from trucks, buses, trains, and other heavy-duty vehicles.
                    </p>
                    <p>
                        The majority of our detergents are environmentally friendly, reclaim safe,
                        and have excellent biodegradability. None of our detergents contain the
                        toxic chemicals HF, ABF, or harmful carcinogens and most do not contain
                        harmful preservatives, quaternary compounds, or phosphates. They are
                        available for sale directly through our corporate headquarters or through
                        one of our local distributors.
                        <strong>
                            To learn more or to purchase detergents Call +1 (734) 822-7999.
                        </strong>
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>TRUCK & BUS</h3>
                    <p>&nbsp;</p>
                    <div className={styles.grid}>
                        <div>
                            <h3>INTERPOWER FLEET WASH</h3>
                            <p>
                                Low pH truck and bus detergent that safely and effectively cleans
                                aluminum and road grime while brightening chrome and glass. Contains
                                a pleasing lemon scent and is compatible with our water recycling
                                systems. Use as the first step in two-step cleaning applications
                                with a high pH InterPower detergent.
                            </p>
                            <h3>INTERPOWER WASH BLUE #42</h3>
                            <p>
                                High pH powdered truck and bus detergent used in systems that have
                                mixing tanks. Use as a single step detergent or as the second step
                                in a two-step cleaning application.
                            </p>
                        </div>
                        <div>
                            <h3>INTERPOWER TRUCK AND TRANSIT</h3>
                            <p>
                                Premium, high pH all-purpose detergent for heavy-duty trucks and
                                buses. Penetrates and loosens road film, bug residues, soot, diesel
                                fuel, grease and oil. Rinses easily, leaving a film free, shiny
                                surface. Contains no phosphates or acids and is compatible with
                                water recycling systems. Extremely effective when used as a single
                                step application detergent. For the most premier wash, use as a
                                second step detergent with InterPower Fleet Wash as the first step.
                            </p>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>TRAIN & RAIL</h3>
                    <p>&nbsp;</p>
                    <div className={styles.grid}>
                        <div>
                            <h3>INTERPOWER RAIL BRITE</h3>
                            <p>
                                Low pH train wash detergent that removes dirt, oil, and rust from
                                trains, rails, and other rolling stock. Helps dissolve brake/iron
                                dust particles and remove iron stains from paint. Use as the first
                                step in two-step cleaning process with InterPower Rail Finish or
                                Thunder X-Treme.
                            </p>
                        </div>
                        <div>
                            <h3>INTERPOWER RAIL FINISH</h3>
                            <p>
                                High pH train wash detergent that clings to the surface and reduces
                                tension leading to maximum cleaning and corrosion prevention after
                                rinse/flush. It is optimized for quick penetration of iron oxide
                                dust and film. Use as the second step with InterPower Rail Brite as
                                the first step.
                            </p>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>SPECIALTY</h3>
                    <p>&nbsp;</p>
                    <div className={styles.grid}>
                        <div>
                            <h3>INTERPOWER BRUSH LUBE</h3>
                            <p>
                                Neutral pH detergent that improves brush washing effectiveness,
                                protects vehicle surfaces, and enhances brush life. Provides
                                excellent cleaning in cold or warm water. Contains no phosphates and
                                is compatible with water recycling systems. For use in friction
                                cleaning wash systems.
                            </p>
                            <h3>INTERPOWER SPRAY SHINE</h3>
                            <p>
                                Neutral pH specialty formula that protects vehicles and creates
                                rapid water beading, leaving vehicles with a high shine. Can be used
                                with all wash systems under all wash conditions and water qualities.
                            </p>
                            <h3>INTERPOWER DEFOAMER</h3>
                            <p>
                                Fast-acting neutralizer that eliminates excessive foaming from water
                                reclaim systems. Used on surfactant-generated foams that can cause
                                cleaning or treatment problems.
                            </p>
                            <h3>INTERPOWER DEODORIZER</h3>
                            <p>
                                High pH odor eliminator that reduces or eliminates foul odors from
                                reclaim systems or water pits.
                            </p>
                        </div>
                        <div>
                            <h3>INTERPOWER THUNDER X-TREME</h3>
                            <p>
                                High pH versatile truck, bus, and train detergent that is effective
                                in a wide range of extreme temperature and pressure variations. Use
                                as a single step detergent or as the second step with a low pH
                                InterPower detergent as the first step.
                            </p>
                            <h3>INTERPOWER FAST BUG</h3>
                            <p>
                                High pH specialty formula that penetrates and loosens bug remains.
                                Detergent clings to the vehicle surface allowing maximum contact
                                time leading to easy removal via touchless or friction washing
                                methods. Has excellent biodegradability and is compatible with water
                                recycling systems.
                            </p>
                            <h3>INTERPOWER WHEEL SHINE</h3>
                            <p>
                                High pH wheel and tire cleaner that cuts through the most stringent
                                brake dust and mud and leaves the wheels with a lasting shine.
                                Excellent for use with InterClean’s Wheel Wash system.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

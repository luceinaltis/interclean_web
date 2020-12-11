import styles from "@/public/css/modules/home.module.css";

export default function Welcome() {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.welcome}>
          <div className={styles.welcome__header}>
            <p className={styles.welcome__header__left}>
              {"WELCOME "}
              <font className={styles.welcome__header__right}>
                TO INTERCLEAN
              </font>
            </p>
            {/* <p className={styles.welcome__header__left}>WELCOME&nbsp;</p>
                <p className={styles.welcome__header__right}>TO INTERCLEAN</p> */}
          </div>
        </div>
        <p>
          InterClean Equipment , LLC. is headquartered in Ypsilanti, MI and is a
          global, high-tech company that manufactures vehicle wash systems from
          small trucks to heavy transport vehicles, buses, rail fleets and a
          variety of special equipment. With decades of experience, we are able
          to provide optimal results for every project. With a team of wash
          experts, InterClean is known as one of the leading and most innovative
          touchless wash systems and water recycling pioneers in the world.
        </p>
      </div>
    </div>
  );
}

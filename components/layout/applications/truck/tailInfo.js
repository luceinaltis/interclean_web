import styles from "@/public/css/modules/truckWash.module.css";

export default function TailInfo() {
  const iconPath = [
    "/image/applications/truck/tailIcon1.png",
    "/image/applications/truck/tailIcon2.png",
    "/image/applications/truck/tailIcon3.png",
    "/image/applications/truck/tailIcon4.png",
  ];

  const iconInfo = [
    "We don’t believe in one-size-fits-all washing solutions. When you choose InterClean to design a custom truck washing system, you get the benefit of state-of-the-art technology coupled with a team of experienced engineers. The result is an efficient wash system design whether you’re looking for an automatic truck wash, a touchless truck wash, or any other unique vehicle washing specifications.",
    "Since 1984, InterClean has been committed to sustainable design concepts. All of our truck wash systems feature high-volume water recycling to support environmental sustainability. In addition, all InterClean truck wash systems include stainless steel chemical and rinse arches with specialized check valves, and high-efficiency motors. This reduces the risk of heavy metal discharge, minimizes water and chemical use, and further reduces the environmental impact of the truck wash system.",
    "There’s no such thing as “downtime” with an Interclean truck wash system. Our high-tech, heavy-duty wash systems are designed for continuous use and have very little upkeep required. Our low-maintenance truck wash solutions ensure that your truck fleet of clean vehicles can get back on the road as efficiently as possible.",
    "There is no attendant required for InterClean heavy-duty vehicle wash systems. Our truck cleaning systems are fully automated and easy to operate, so you can start using your new fleet washing system as soon as possible once it is installed.",
  ];

  const getIconName = (idx) => {
    switch (idx) {
      case 0:
        return (
          <div className={styles.tailInfo__iconName}>
            CUSTOMIZED
            <br />
            SOLUTIONS
          </div>
        );
      case 1:
        return (
          <div className={styles.tailInfo__iconName}>
            ENVIRONMENTALLY - <br />
            FRIENDLY SOLUTIONS
          </div>
        );
      case 2:
        return <div className={styles.tailInfo__iconName}>MINIMAL UPKEEP</div>;
      case 3:
        return (
          <div className={styles.tailInfo__iconName}>SIMPLE OPERATION</div>
        );
    }
  };

  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.tailInfo}>
          <div className={styles.tailInfo__grid}>
            {[0, 1, 2, 3].map((idx) => {
              return (
                <div key={idx}>
                  <img src={iconPath[idx]} className={styles.tailIcon__image} />
                  {getIconName(idx)}
                  <div className={styles.tailIcon__info}>{iconInfo[idx]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

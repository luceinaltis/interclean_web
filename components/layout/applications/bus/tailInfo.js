import styles from "@/public/css/modules/applications/busWash.module.css";

export default function TailInfo() {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.tailInfo}>
          <div className={styles.tailInfo__title}>
            INTERCLEAN ULTRA GANTRY SYSTEM FOR BUSES
          </div>
          <div className={styles.tailInfo__body}>
            InterClean Ultra Gantry System is the latest version of our Truck
            and Bus Wash System – now designed and built in the USA. This
            roll-over machine can be made with friction cleaning, touch-less or
            a combination of both. Ideal for commercial and retail applications,
            fleets, transit and can be customized for special applications such
            as RV’s and commercial delivery vehicles. Options include Spot Free
            Rinse, Blowers, Water Recycling and Chassis Wash.
          </div>
          <iframe
            className={styles.tailInfo__video}
            src="https://www.youtube.com/embed/0mamDH80cuU"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

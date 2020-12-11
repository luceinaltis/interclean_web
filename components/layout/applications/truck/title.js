import styles from "@/public/css/modules/truckWash.module.css";

export default function Title({ title, subtitle }) {
  return (
    <div className="container">
      <div classname="inner__container">
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
}

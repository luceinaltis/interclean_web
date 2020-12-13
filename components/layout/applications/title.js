import styles from "@/public/css/modules/applications/applications.module.css";

export default function Title({ title, subtitle }) {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.body__title}>{title}</div>
        <div className={styles.body__subtitle}>{subtitle}</div>
      </div>
    </div>
  );
}

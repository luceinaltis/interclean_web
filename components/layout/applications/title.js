import styles from "@/public/css/modules/applications.module.css";

export default function Title({ title, subtitle }) {
  return (
    <div className="container">
      <div classname="inner__container">
        <div className={styles.body__title}>{title}</div>
        <div className={styles.body__subtitle}>{subtitle}</div>
      </div>
    </div>
  );
}

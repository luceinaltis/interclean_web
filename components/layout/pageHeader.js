import styles from "@/public/css/modules/pageHeader.module.css";

export default function PageHeader({ title, subtitle }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
}

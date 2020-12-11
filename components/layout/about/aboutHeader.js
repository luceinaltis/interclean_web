import styles from "@/public/css/modules/pageHeader.module.css";

export default function AboutHeader() {
  return (
    <div className={styles.header}>
      {/* <img src="/image/about/header.jpg" className={styles.header__image} /> */}
      <div className={styles.header__title}>ABOUT US</div>
    </div>
  );
}

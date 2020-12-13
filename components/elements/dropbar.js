import styles from "@/public/css/modules/applications/applications.module.css";

export default function Dropbar({ menuName, opened, openMenu }) {
  return (
    <div className={styles.dropbar} onClick={() => openMenu(menuName)}>
      <div>{menuName}</div>
      <span className={styles.dropbar__icon}>
        {opened ? (
          <i className="fas fa-angle-up" />
        ) : (
          <i className="fas fa-angle-down" />
        )}
      </span>
    </div>
  );
}

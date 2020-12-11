import styles from "../../../public/css/modules/title.module.css";

export default function title({ titleString }) {
    return <div className={styles.title_image}>{titleString}</div>;
}

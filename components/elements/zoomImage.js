import styles from "@/public/css/modules/commonComponent.module.css";

export default function ZoomImage({ imagePath }) {
    return (
        <div className={styles.zoom__imageWrapper}>
            <img src={imagePath} className={styles.zoom__image} />
        </div>
    );
}

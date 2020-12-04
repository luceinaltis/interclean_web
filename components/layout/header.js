import styles from "../../public/css/modules/header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__top}>
                <div>Follow us on:</div>
                <div> +1 734-822-7999</div>
            </div>
            <div className={styles.header__bottom}>header bottom</div>
        </header>
    );
}

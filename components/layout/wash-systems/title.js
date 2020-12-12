import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import styles from "../../../public/css/modules/title.module.css";

export default function title({ titleString, titleSubString }) {
    return (
        <div className={styles.title_image}>
            <div>{titleString}</div>
            <div className={styles.subTitle}>{titleSubString}</div>
        </div>
    );
}

// import Image from "next/image";
import Link from "next/link";

import styles from "@/public/css/modules/home.module.css";

export default function ImageCell({ data }) {
  const [imagePath, refPath, title] = data;

  return (
    <Link href={refPath}>
      <div className={styles.gridCell}>
        <div className={styles.gridCell__imageContainer}>
          <img
            src={imagePath}
            className={styles.gridCell__image}
            alt={`${title}`}
          />
        </div>
        <div className={styles.gridCell__textContainer}>{title}</div>
      </div>
    </Link>
  );
}

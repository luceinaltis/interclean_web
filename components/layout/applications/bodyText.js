import styles from "@/public/css/modules/applications.module.css";

export default function BodyText({ children }) {
  return (
    <div className="container">
      <div className="inner__container">
        {children.map((val, idx) => {
          return (
            <div className={styles.bodyText} key={idx}>
              {val}
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

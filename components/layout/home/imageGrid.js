import { WashSystemCell } from "@/components/elements";

// css
import styles from "@/public/css/modules/home.module.css";

/* Wash System 그리드 이미지들 
   홈 화면과 Application에있는 그리드 */
export default function ImageGrid({ cellData, children }) {
/*<<<<<<< jintak
  return (
    <div className="container">
      <div className="inner__container">
        {children}
        <div className={styles.gridWrapper}>
          <div className={styles.grid}>
            {cellData &&
              cellData.map((val, idx) => {
                return <WashSystemCell key={idx} data={val} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
======= */
    return (
        <>
            {children}
            <div className={styles.grid}>
                {cellData &&
                    cellData.map((val, idx) => {
                        return <WashSystemCell key={idx} data={val} />;
                    })}
            </div>
        </>
    );
}

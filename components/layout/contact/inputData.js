import styles from "@/public/css/modules/contact.module.css";

export default function InputData({
  dataList,
  necessaryList,
  data,
  updateData,
}) {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.inputData}>
          <div className={styles.inputData__grid}>
            {dataList &&
              dataList.map((e, idx) => {
                return (
                  <div key={idx}>
                    <div className={styles.inputData__elementText}>
                      {e}
                      {necessaryList.includes(e) && (
                        <span className={styles.inputData__necessary}>
                          &nbsp;*
                        </span>
                      )}
                    </div>
                    {idx < dataList.length - 1 ? (
                      <input
                        className={styles.inputData__textBox}
                        type="text"
                        onChange={(text) =>
                          updateData({ ...data, [e]: text.target.value })
                        }
                      />
                    ) : (
                      <div className={styles.inputData__checkBox__wrapper}>
                        <input
                          className={styles.inputData__checkBox}
                          type="checkbox"
                          checked={data.newsLetter}
                          onClick={() =>
                            updateData({
                              ...data,
                              newsLetter: !data.newsLetter,
                            })
                          }
                        />
                        <p>Subscribe to InterClean Newsletter.</p>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
          <div className={styles.inputData__button}>SEND FORM</div>
        </div>
      </div>
    </div>
  );
}

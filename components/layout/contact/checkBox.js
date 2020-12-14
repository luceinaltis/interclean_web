import styles from "@/public/css/modules/contact.module.css";

export default function CheckBox({
  checkList,
  selected,
  selectElement,
  inputText,
}) {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.checkBox}>
          <h4 className={styles.checkBox__title}>
            I would like information on the following:
          </h4>
          <div className={styles.checkBox__grid}>
            {checkList &&
              checkList.map((element, idx) => {
                return (
                  <div key={idx} className={styles.checkBox__elementWrapper}>
                    <input
                      type="radio"
                      name="information subject"
                      checked={element === selected}
                      onChange={() => selectElement(element)}
                    />
                    {idx < checkList.length - 1 ? (
                      <p>{element} </p>
                    ) : (
                      <input
                        className={styles.checkBox__text}
                        type="text"
                        required
                        placeholder="Other"
                        onFocus={() => selectElement("Other")}
                        onChange={(text) => inputText(text.target.value)}
                      />
                    )}
                  </div>
                );
              })}
            <div className={styles.checkBox__elementWrapper}></div>
          </div>
          <div className={styles.seperator} />
        </div>
      </div>
    </div>
  );
}

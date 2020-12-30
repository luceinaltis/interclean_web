import styles from "@/public/css/modules/contact.module.css";

import { ButtonOrange } from "@/components/elements";
import Email from "@/components/email";

export default function ContactHead() {
  return (
    <div className="container">
      <div className="inner__container">
        <div className={styles.contactHead}>
          <h2 className={styles.contactHead__title}>
            PLEASE USE THIS FORM TO CONTACT US
          </h2>
          <p>
            We will send technical information for your specific application.
            Please describe your cleaning requirements and include as many
            details as possible.
          </p>
          <div className={styles.contactHead__button}>
            <ButtonOrange content="LOCATE A DISTRIBUTOR" />
          </div>
          <div style={{ marginTop: 40, marginBottom: 40 }}>
            <Email />
          </div>
        </div>
      </div>
    </div>
  );
}

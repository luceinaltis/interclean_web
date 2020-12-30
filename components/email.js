import React, { useState } from "react";
import emailjs from "emailjs-com";

import styles from "../public/css/modules/email.module.css";

const Email = () => {
    const [userName, setUserName] = useState(false);
    const [userEmail, setUserEmail] = useState(false);
    const [subject, setSubject] = useState(false);
    const [message, setMessage] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.SERVICE_ID, //"interclean_service",
                process.env.TEMPLATE_ID, //"interclean_template",
                e.target,
                process.env.USER_ID,
                // "user_z7EdG8oXwhyrNPSuYp8ze"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <form className={styles.contact_form} onSubmit={sendEmail}>
            <div className={styles.contact_form_row}>
                <div className={styles.input_container}>
                    <input
                        className={
                            userName
                                ? `${styles.contact_input} ${styles.touched}`
                                : styles.contact_input
                        }
                        type="text"
                        name="user_name"
                        required
                        placeholder="Name"
                        spellCheck="false"
                        onFocus={() => setUserName(true)}
                    />
                </div>
                <div className={styles.input_container}>
                    <input
                        className={
                            userEmail
                                ? `${styles.contact_input} ${styles.touched}`
                                : styles.contact_input
                        }
                        type="email"
                        name="user_email"
                        required
                        placeholder="Email"
                        spellCheck="false"
                        onFocus={() => setUserEmail(true)}
                    />
                </div>
            </div>
            <div className={styles.contact_form_row}>
                <div className={styles.input_container}>
                    <input
                        className={
                            subject
                                ? `${styles.contact_input} ${styles.touched}`
                                : styles.contact_input
                        }
                        type="text"
                        name="subject"
                        required
                        placeholder="Subject"
                        spellCheck="false"
                        onFocus={() => setSubject(true)}
                    />
                </div>
            </div>
            <div className={styles.contact_form_row}>
                <div className={styles.input_container}>
                    <textarea
                        className={
                            message
                                ? `${styles.contact_input} ${styles.touched}`
                                : styles.contact_input
                        }
                        name="message"
                        required
                        placeholder="Message"
                        rows="6"
                        spellCheck="false"
                        onFocus={() => setMessage(true)}
                    />
                </div>
            </div>
            <div className={styles.contact_form_row}>
                <div
                    id="recaptcha"
                    className="g-recaptcha"
                    data-sitekey="6LflYxoaAAAAAHvYdzStBrJvsVry4gkMR4_esUnI"
                ></div>
                <input className={styles.button} type="submit" value="Send" />
            </div>
        </form>
    );
};

export default Email;

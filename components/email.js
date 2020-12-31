import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { withTranslation } from "../i18n";
import styles from "../public/css/modules/email.module.css";

const Email = ({ t }) => {
    const [userName, setUserName] = useState(false);
    const [userEmail, setUserEmail] = useState(false);
    const [subject, setSubject] = useState(false);
    const [message, setMessage] = useState(false);
    const [isRobot, setIsRobot] = useState(true);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (userName && userEmail && subject && message && !isRobot) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [userName, userEmail, subject, message, isRobot]);

    const sendEmail = (e) => {
        e.preventDefault();

        const MySwal = withReactContent(Swal);

        emailjs
            .sendForm(
                "interclean_service",
                "interclean_template",
                e.target,
                process.env.EMAILJS_USER_ID
            )
            .then(
                (result) => {
                    MySwal.fire({
                        title: <p>Hello World</p>,
                        footer: "Copyright 2018",
                        didOpen: () => {
                            MySwal.clickConfirm();
                        },
                    }).then(() => {
                        return MySwal.fire({
                            title: t("success_title"),
                            text: t("success_text"),
                            icon: "success",
                            confirmButtonText: t("confirm"),
                        });
                    });
                },
                (error) => {
                    MySwal.fire({
                        title: <p>Hello World</p>,
                        footer: "Copyright 2018",
                        didOpen: () => {
                            MySwal.clickConfirm();
                        },
                    }).then(() => {
                        return MySwal.fire({
                            title: t("error_title"),
                            text: t("error_text"),
                            icon: "error",
                            confirmButtonText: t("confirm"),
                        });
                    });
                }
            );
    };

    function onChange(value) {
        if (value) {
            setIsRobot(false);
        } else {
            setIsRobot(true);
        }
    }

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
                        placeholder={t("name")}
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
                        placeholder={t("email")}
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
                        placeholder={t("subject")}
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
                        placeholder={t("message")}
                        rows="6"
                        spellCheck="false"
                        onFocus={() => setMessage(true)}
                    />
                </div>
            </div>
            <div className={styles.contact_form_row}>
                <ReCAPTCHA sitekey="6LflYxoaAAAAAHvYdzStBrJvsVry4gkMR4_esUnI" onChange={onChange} />
                <input
                    className={isValid ? `${styles.button} ${styles.valid}` : styles.button}
                    type="submit"
                    value={t("send")}
                />
            </div>
        </form>
    );
};

Email.getInitialProps = async () => ({
    namespacesRequired: ["email"],
});

export default withTranslation("email")(Email);

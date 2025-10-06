import React from "react";
import styles from "./ContactPage.module.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className={styles.contactPage}>
      <div
        className={`${styles.floatingIcons} ${styles.floatingIconPositions}`}
      >
        <FaEnvelope className={styles.icon} />
        <FaPhoneAlt className={styles.icon} />
        <FaLinkedin className={styles.icon} />
        <FaTwitter className={styles.icon} />
        <FaInstagram className={styles.icon} />
      </div>

      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Contact Me</h1>
        <p className={styles.pageSubtitle}>
          Feel free to reach out. Connect with me via email, phone, or social
          media.
        </p>

        <div className={styles.contactCards}>
          <a
            href="mailto:your.email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <FaEnvelope className={styles.cardIcon} />
            <span className={styles.cardText}>Email</span>
            <span className={styles.cardSubText}>your.email@example.com</span>
          </a>

          <a href="tel:+1234567890" className={styles.contactCard}>
            <FaPhoneAlt className={styles.cardIcon} />
            <span className={styles.cardText}>Phone</span>
            <span className={styles.cardSubText}>+123 456 7890</span>
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <FaLinkedin className={styles.cardIcon} />
            <span className={styles.cardText}>LinkedIn</span>
            <span className={styles.cardSubText}>
              linkedin.com/in/yourprofile
            </span>
          </a>

          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <FaTwitter className={styles.cardIcon} />
            <span className={styles.cardText}>Twitter</span>
            <span className={styles.cardSubText}>@yourhandle</span>
          </a>

          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <FaInstagram className={styles.cardIcon} />
            <span className={styles.cardText}>Instagram</span>
            <span className={styles.cardSubText}>@yourhandle</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1: About */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Dr. Mona Chahla</h3>
          <p className={styles.description}>
            Licensed Clinical Psychologist dedicated to helping you achieve
            mental wellness and personal growth.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Contact</h3>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <MdPhone className={styles.contactIcon} />
              <a href="tel:+1234567890" className={styles.contactLink}>
                +123 456 7890
              </a>
            </div>
            <div className={styles.contactItem}>
              <MdEmail className={styles.contactIcon} />
              <a
                href="mailto:info@monachahla.com"
                className={styles.contactLink}
              >
                info@monachahla.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <MdLocationOn className={styles.contactIcon} />
              <span className={styles.contactText}>
                Baabda, Mont-Liban, Lebanon
              </span>
            </div>
          </div>
        </div>

        {/* Column 3: Follow Us */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Follow Us</h3>
          <div className={styles.socialLinks}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            © {currentYear} Dr. Mona Chahla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

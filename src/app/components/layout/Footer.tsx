import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { MdWorkOff } from "react-icons/md";

import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1: Contact Info */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Contact</h3>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <MdPhone className={styles.contactIcon} />
              <a href="tel:+961 70 541 019" className={styles.contactLink}>
                +961 70 541 019
              </a>
            </div>
            <div className={styles.contactItem}>
              <MdEmail className={styles.contactIcon} />
              <a
                href="mailto:chahlamona@gmail.com"
                className={styles.contactLink}
              >
                chahlamona@gmail.com{" "}
              </a>
            </div>
            <div className={styles.contactItem}>
              <MdLocationOn className={styles.contactIcon} />
              <span className={styles.contactText}>
                <a
                  href="https://www.google.com/maps/place/Chtoura+Chams+Center,+Lebanon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  Chtoura Chams Center
                </a>{" "}
                |{" "}
                <a
                  href="https://www.google.com/maps/place/Badaro,+Beirut,+Lebanon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  Beirut Badaro
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: About */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Working Hours</h3>
          <div className={styles.contactItem}>
            <MdWork className={styles.contactIcon} />
            <p className={styles.contactLink}>Mon–Sat: 10:00 AM – 8:00 PM</p>
          </div>

          <div className={styles.contactItem}>
            <MdWorkOff className={styles.contactIcon} />
            <p className={styles.contactLink}>Sunday : Off Day</p>
          </div>
        </div>

        {/* Column 3: Follow Us */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Follow Us</h3>
          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/share/17Jxegriu8/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/mona_chahla?igsh=MXZnNjYzNGl6cjEyYg=="
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="http://linkedin.com/in/chahla-mona-50938b1ab"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/96170541019?text=Hello%20Dr.%20I%20would%20like%20to%20book%20an%20appointment"
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

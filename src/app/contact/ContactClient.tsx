"use client";

import React from "react";
import styles from "./ContactPage.module.css";
import { contacts } from "@/utils/data";

const ContactClient = () => {
  return (
    <section className={styles.contactPage}>
      <div
        className={`${styles.floatingIcons} ${styles.floatingIconPositions}`}
      >
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          return <Icon key={index} className={styles.icon} />;
        })}
      </div>

      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Contact Me</h1>
        <p className={styles.pageSubtitle}>
          Feel free to reach out. Connect with me via email, phone, or social
          media.
        </p>

        <div className={styles.contactCards}>
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
              >
                <Icon className={styles.cardIcon} />
                <span className={styles.cardText}>{contact.type}</span>
                <span className={styles.cardSubText}>{contact.value}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactClient;

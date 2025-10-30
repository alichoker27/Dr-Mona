"use client";

import React, { useState } from "react";
import styles from "./ContactPage.module.css";

const ContactClient = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, email, subject, message } = form;

    const mailtoLink = `mailto:alishoker1727@gmail.com.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className={styles.contactPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Get in Touch</h1>
        <p className={styles.pageSubtitle}>
          I’m here to support you. Feel free to contact me anytime.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject (Optional)"
            value={form.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.sendBtn}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactClient;

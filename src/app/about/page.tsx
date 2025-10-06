"use client";
import { values } from "../utils/data";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MdPsychology } from "react-icons/md";
import { GiMeditation } from "react-icons/gi";
import { FaBrain, FaHeart, FaLeaf } from "react-icons/fa";

import styles from "./AboutPage.module.css";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div
            className={`${styles.heroContent} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <div className={styles.badge}>
              <MdPsychology className={styles.badgeIcon} />
              <span className={styles.badgeText}>About Me</span>
            </div>
            <h1 className={styles.heroTitle}>Dr. Mona Chahla</h1>
            <p className={styles.heroSubtitle}>
              Licensed Clinical Psychologist dedicated to helping you achieve
              lasting positive change
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section - Image Left, Text Right */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div
            className={`${styles.contentWrapper} ${
              isVisible ? styles.visible : ""
            }`}
          >
            {/* Left - Image */}
            <div className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <Image
                  src="/moni2.jpg"
                  alt="Dr. Mona Chahla"
                  width={600}
                  height={700}
                  className={styles.mainImage}
                />
                <div className={styles.imageDecoration1}></div>
                <div className={styles.imageDecoration2}></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>My Journey in Psychology</h2>
              <div className={styles.titleUnderline}></div>

              <p className={styles.paragraph}>
                With over a decade of experience in clinical psychology,
                I&apos;ve dedicated my career to helping individuals, couples,
                and families navigate life&apos;s challenges and achieve
                meaningful personal growth. My approach combines evidence-based
                therapeutic techniques with genuine compassion and
                understanding.
              </p>

              <p className={styles.paragraph}>
                I believe that everyone has the capacity for healing and
                transformation. My role is to provide a safe, supportive
                environment where you can explore your thoughts and feelings,
                develop new coping strategies, and discover your inner
                strengths.
              </p>

              <p className={styles.paragraph}>
                Through our work together, you&apos;ll gain insights into
                patterns that may be holding you back, develop healthier ways of
                thinking and relating, and create lasting positive change in
                your life.
              </p>

              {/* Specializations */}
              <div className={styles.specializations}>
                <h3 className={styles.specializationsTitle}>
                  Areas of Expertise
                </h3>
                <ul className={styles.specializationsList}>
                  <li>
                    <FaBrain className={styles.listIcon} /> Cognitive Behavioral
                    Therapy (CBT)
                  </li>
                  <li>
                    <FaHeart className={styles.listIcon} /> Relationship &
                    Family Counseling
                  </li>
                  <li>
                    <GiMeditation className={styles.listIcon} />{" "}
                    Mindfulness-Based Therapy
                  </li>
                  <li>
                    <FaLeaf className={styles.listIcon} /> Stress & Anxiety
                    Management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Text Left, Image Right */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div
            className={`${styles.contentWrapper} ${styles.reverse} ${
              isVisible ? styles.visible : ""
            }`}
          >
            {/* Left - Content */}
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>
                My Mission: Empowering Personal Growth
              </h2>
              <div className={styles.titleUnderline}></div>

              <p className={styles.paragraph}>
                I believe not just in helping people overcome challenges, but in
                empowering them to thrive. My mission is to create a therapeutic
                space where healing happens naturally, and where every
                individual feels heard, valued, and supported on their journey.
              </p>

              <p className={styles.paragraph}>
                Growing better means aligning your mental wellness with your
                life goals and values. It&apos;s about building resilience,
                fostering healthy relationships, and creating a life that feels
                authentic and fulfilling. Together, we&apos;ll work towards
                sustainable change that honors your unique experiences and
                aspirations.
              </p>

              <p className={styles.paragraph}>
                Whether you&apos;re dealing with anxiety, depression,
                relationship issues, or simply seeking personal growth, I&apos;m
                here to support you every step of the way. Your success is my
                success, and I&apos;m committed to providing you with the tools
                and guidance you need to flourish.
              </p>
            </div>

            {/* Right - Image */}
            <div className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <Image
                  src="/moni4.jpg"
                  alt="Dr. Mona Chahla - Clinical Practice"
                  width={600}
                  height={700}
                  className={styles.mainImage}
                />
                <div className={styles.imageDecoration1}></div>
                <div className={styles.imageDecoration2}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesHeader}>
            <h2 className={styles.valuesTitle}>My Core Values</h2>
            <p className={styles.valuesSubtitle}>
              The principles that guide my therapeutic approach
            </p>
            <div className={styles.titleUnderline}></div>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={styles.valueCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.valueIcon}>
                    <IconComponent />
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

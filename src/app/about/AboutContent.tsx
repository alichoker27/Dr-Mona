//Client side component used in the server side
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MdPsychology } from "react-icons/md";
import { GiMeditation } from "react-icons/gi";
import { FaBrain, FaHeart, FaLeaf } from "react-icons/fa";
import { values, personalInfo } from "@/utils/data";
import styles from "./AboutPage.module.css";

const AboutContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* ✅ HERO SECTION */}
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

            {/* ✅ Personal Info from Data */}
            <h1 className={styles.heroTitle}>{personalInfo.name}</h1>
            <p className={styles.heroSubtitle}>{personalInfo.subtitle}</p>
          </div>
        </div>
      </section>

      {/* ✅ MAIN ABOUT SECTION */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div
            className={`${styles.contentWrapper} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <div className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <Image
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  width={600}
                  height={700}
                  className={styles.mainImage}
                />
                <div className={styles.imageDecoration1}></div>
                <div className={styles.imageDecoration2}></div>
              </div>
            </div>

            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <div className={styles.titleUnderline}></div>

              {personalInfo.aboutParagraphs.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}

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

      {/* ✅ MISSION SECTION */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div
            className={`${styles.contentWrapper} ${styles.reverse} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>
                My Mission: Empowering Personal Growth
              </h2>
              <div className={styles.titleUnderline}></div>

              {personalInfo.missionParagraphs.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <Image
                  src={personalInfo.image}
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

      {/* ✅ VALUES SECTION */}
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
    </>
  );
};

export default AboutContent;

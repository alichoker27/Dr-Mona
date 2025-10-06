import React from "react";
import styles from "./LabPage.module.css";
import {
  FaBrain,
  FaComments,
  FaSearch,
  FaHandsHelping,
  FaHeart,
} from "react-icons/fa";

const steps = [
  {
    number: 1,
    title: "Understanding the Mind",
    icon: <FaBrain />,
    description:
      "Every healing journey begins with understanding. We listen deeply to identify emotional patterns and core challenges.",
  },
  {
    number: 2,
    title: "Building Trust & Connection",
    icon: <FaComments />,
    description:
      "A safe, compassionate space allows open communication — the foundation of effective psychological support.",
  },
  {
    number: 3,
    title: "Exploring the Root Cause",
    icon: <FaSearch />,
    description:
      "We explore experiences and thoughts shaping your current emotional state, focusing on awareness and clarity.",
  },
  {
    number: 4,
    title: "Guided Healing Process",
    icon: <FaHandsHelping />,
    description:
      "Through personalized therapy sessions, we reshape negative beliefs, develop resilience, and nurture growth.",
  },
  {
    number: 5,
    title: "Achieving Balance & Wellbeing",
    icon: <FaHeart />,
    description:
      "The final step is cultivating self-acceptance, peace of mind, and mental strength — achieving your healthiest self.",
  },
];

const LabPage = () => {
  return (
    <section className={styles.labPage}>
      <div className={styles.floatingIcons}>
        <FaBrain className={styles.icon} />
        <FaHeart className={styles.icon} />
        <FaComments className={styles.icon} />
        <FaSearch className={styles.icon} />
        <FaHandsHelping className={styles.icon} />
      </div>

      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Therapeutic Lab</h1>
        <p className={styles.pageSubtitle}>
          Explore the structured journey of psychological healing — from
          awareness to balance.
        </p>

        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.number} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabPage;

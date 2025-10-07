"use client";

import React, { useState, useEffect } from "react";
import styles from "./LabPage.module.css";
import { labSteps } from "@/utils/data";

const LabClient = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.labPage}>
      <div className={styles.floatingIcons}>
        {labSteps.map((step, index) => {
          const Icon = step.icon;
          return <Icon key={index} className={styles.icon} />;
        })}
      </div>

      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Therapeutic Lab</h1>
        <p className={styles.pageSubtitle}>
          Explore the structured journey of psychological healing — from
          awareness to balance.
        </p>

        <div className={styles.stepsGrid}>
          {labSteps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepIcon}>
                  <IconComponent />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LabClient;

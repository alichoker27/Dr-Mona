// src/app/services/ServicesContent.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiLotusFlower } from "react-icons/gi";
import styles from "./ServicesPage.module.css";
import { mainServices, additionalServices } from "@/utils/data";

const ServicesContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div
            className={`${styles.heroContent} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <div className={styles.badge}>
              <GiLotusFlower className={styles.badgeIcon} />
              <span className={styles.badgeText}>Services</span>
            </div>
            <h1 className={styles.heroTitle}>My Features & Services</h1>
            <p className={styles.heroSubtitle}>
              Comprehensive therapeutic services tailored to your unique needs
              and goals, offered through both in-person and online sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className={styles.mainServicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`${styles.serviceCard} ${
                    isVisible ? styles.visible : ""
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={styles.serviceImageWrapper}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={200}
                      className={styles.serviceImage}
                    />
                    <div className={styles.serviceIconOverlay}>
                      <IconComponent />
                    </div>
                  </div>

                  <div className={styles.serviceContent}>
                    <div className={styles.serviceIconBadge}>
                      <IconComponent />
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>
                      {service.description}
                    </p>

                    <ul className={styles.featuresList}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className={styles.featureItem}>
                          <span className={styles.featureCheck}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className={styles.additionalServicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Additional Specialized Services
            </h2>
            <p className={styles.sectionSubtitle}>
              Explore more ways we can support your mental wellness journey
            </p>
            <div className={styles.titleUnderline}></div>
          </div>

          <div className={styles.additionalGrid}>
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={styles.additionalCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.additionalIcon}>
                    <IconComponent />
                  </div>
                  <h4 className={styles.additionalTitle}>{service.title}</h4>
                  <p className={styles.additionalDescription}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Begin Your Journey?</h2>
            <p className={styles.ctaText}>
              Take the first step towards positive change. Schedule your
              consultation today.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Contact Me and book a session
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesContent;

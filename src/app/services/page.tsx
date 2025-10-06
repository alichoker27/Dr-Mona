"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBrain,
  FaHeart,
  FaUsers,
  FaLeaf,
  FaSpa,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { GiMeditation, GiLotusFlower } from "react-icons/gi";
import { MdPsychology, MdFamilyRestroom } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import styles from "./ServicesPage.module.css";

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mainServices = [
    {
      id: 1,
      image: "/service1.jpg",
      icon: FaBrain,
      title: "Individual Therapy",
      description:
        "One-on-one sessions focused on your personal growth, mental wellness, and overcoming life challenges through evidence-based therapeutic approaches.",
      features: [
        "Cognitive Behavioral Therapy (CBT)",
        "Anxiety & Depression Treatment",
        "Stress Management",
        "Personal Development",
      ],
    },
    {
      id: 2,
      image: "/service2.jpg",
      icon: FaHeart,
      title: "Couples Counseling",
      description:
        "Strengthen your relationship through guided communication, conflict resolution, and rebuilding emotional connection with your partner.",
      features: [
        "Communication Skills",
        "Conflict Resolution",
        "Trust Rebuilding",
        "Intimacy Enhancement",
      ],
    },
    {
      id: 3,
      image: "/service3.jpg",
      icon: MdFamilyRestroom,
      title: "Family Therapy",
      description:
        "Create harmony within your family system by addressing conflicts, improving communication, and fostering healthy relationships among all members.",
      features: [
        "Family Dynamics",
        "Parent-Child Relations",
        "Sibling Conflicts",
        "Blended Family Support",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: GiMeditation,
      title: "Mindfulness-Based Therapy",
      description:
        "Learn mindfulness techniques to reduce stress, increase self-awareness, and cultivate inner peace.",
    },
    {
      icon: FaLeaf,
      title: "Trauma & PTSD Treatment",
      description:
        "Specialized care for healing from traumatic experiences using evidence-based trauma therapy approaches.",
    },
    {
      icon: BiSupport,
      title: "Grief Counseling",
      description:
        "Compassionate support through the grieving process, helping you navigate loss and find healing.",
    },
    {
      icon: FaSpa,
      title: "Stress & Burnout Recovery",
      description:
        "Develop healthy coping strategies and restore balance in your personal and professional life.",
    },
    {
      icon: MdPsychology,
      title: "Life Transitions Support",
      description:
        "Navigate major life changes with guidance, whether career shifts, relocation, or personal transformations.",
    },
    {
      icon: FaHandHoldingHeart,
      title: "Self-Esteem Building",
      description:
        "Develop confidence, self-worth, and a positive self-image through targeted therapeutic interventions.",
    },
  ];

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
            <h1 className={styles.heroTitle}>Our Features & Services</h1>
            <p className={styles.heroSubtitle}>
              Comprehensive therapeutic services tailored to your unique needs
              and goals
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
                  {/* Service Image */}
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

                  {/* Service Content */}
                  <div className={styles.serviceContent}>
                    <div className={styles.serviceIconBadge}>
                      <IconComponent />
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className={styles.featuresList}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className={styles.featureItem}>
                          <span className={styles.featureCheck}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Button */}
                    <Link href="/contact" className={styles.learnMoreButton}>
                      Learn More
                    </Link>
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
              Book a Session
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBrain, FaHeart, FaLeaf, FaSpa } from "react-icons/fa";
import { GiFlowerPot, GiLotusFlower, GiMeditation } from "react-icons/gi";
import { IoSparklesSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import styles from "./Hero.module.css";

interface HeroProps {
  onDiscoverClick?: () => void;
}

const Hero = ({ onDiscoverClick }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingElements = [
    { icon: GiLotusFlower, delay: 0, position: { top: "10%", left: "5%" } },
    { icon: FaBrain, delay: 1, position: { top: "20%", right: "8%" } },
    { icon: GiFlowerPot, delay: 2, position: { top: "60%", left: "10%" } },
    { icon: FaHeart, delay: 0.5, position: { top: "70%", right: "5%" } },
    { icon: FaLeaf, delay: 1.5, position: { top: "15%", left: "15%" } },
    { icon: GiMeditation, delay: 2.5, position: { top: "80%", left: "20%" } },
    { icon: FaSpa, delay: 3, position: { top: "25%", right: "15%" } },
    { icon: BiSupport, delay: 3.5, position: { top: "50%", right: "12%" } },
    { icon: GiLotusFlower, delay: 4, position: { bottom: "15%", left: "8%" } },
    { icon: IoSparklesSharp, delay: 4.5, position: { top: "40%", left: "5%" } },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.gradientBackground}></div>
      <div className={styles.floatingElements}>
        {floatingElements.map((element, i) => {
          const Icon = element.icon;
          return (
            <div
              key={i}
              className={styles.floatingElement}
              style={{
                ...element.position,
                animationDelay: `${element.delay}s`,
              }}
            >
              <Icon />
            </div>
          );
        })}
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div
            className={`${styles.contentSection} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <div className={styles.badge}>
              <IoSparklesSharp className={styles.badgeIcon} />
              <span className={styles.badgeText}>
                Discover the Art of Healing
              </span>
            </div>

            <h1 className={styles.heading}>
              Welcome, I’m
              <br />
              <span className={styles.highlight}>Mona Chahla</span>
            </h1>

            <p className={styles.subtitle}>
              Clinical Psychologist & Wellness Expert
            </p>

            <p className={styles.description}>
              Through compassionate guidance and evidence-based practice, I help
              individuals cultivate balance, peace, and personal growth.
              Together, we’ll create a safe space where healing is nurtured, and
              transformation truly begins.
            </p>

            <div className={styles.keyPoints}>
              <div className={styles.keyPoint}>
                <div className={styles.keyPointIcon}>
                  <FaBrain />
                </div>
                <div className={styles.keyPointText}>
                  <h3>Holistic Therapy</h3>
                  <p>
                    Integrating mind, body, and emotion for complete well-being.
                  </p>
                </div>
              </div>

              <div className={styles.keyPoint}>
                <div className={styles.keyPointIcon}>
                  <FaHeart />
                </div>
                <div className={styles.keyPointText}>
                  <h3>Empathetic Connection</h3>
                  <p>A calm environment where your voice is truly heard.</p>
                </div>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <button
                onClick={onDiscoverClick}
                className={styles.primaryButton}
              >
                <span>Discover my official certificate</span>
                <IoSparklesSharp className={styles.buttonIcon} />
              </button>

              <Link href="/about" className={styles.secondaryButton}>
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            className={`${styles.imageSection} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <div className={styles.imageContainer}>
              <div className={styles.imageGlow}></div>
              <Image
                src="/moni4.jpg"
                alt="Mona Chahla"
                width={400}
                height={480}
                className={styles.profileImage}
                priority
              />
              <div className={styles.decorativeCircle1}></div>
              <div className={styles.decorativeCircle2}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

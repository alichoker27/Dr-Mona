"use client";

import { useState } from "react";
import Image from "next/image";
import { IoClose, IoSparklesSharp } from "react-icons/io5";
import {
  FaBrain,
  FaHeart,
  FaLeaf,
  FaAward,
  FaCertificate,
} from "react-icons/fa";
import { GiMeditation, GiLotusFlower } from "react-icons/gi";
import { MdPsychology } from "react-icons/md";
import styles from "./Testimonials.module.css";

interface Certificate {
  id: number;
  image: string;
  title: string;
  description: string;
  institution: string;
  year: string;
  icon: any;
}

const Testimonials = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      image: "/certificate1.jpg",
      title: "Clinical Psychology Doctorate",
      description:
        "Advanced degree in Clinical Psychology with specialization in cognitive behavioral therapy and trauma-informed care.",
      institution: "American Psychological Association",
      year: "2018",
      icon: FaBrain,
    },
    {
      id: 2,
      image: "/certificate2.jpg",
      title: "Family Therapy Certification",
      description:
        "Specialized training in systemic family therapy and relationship counseling techniques.",
      institution: "Institute of Family Therapy",
      year: "2019",
      icon: FaHeart,
    },
    {
      id: 3,
      image: "/certificate3.jpg",
      title: "Mindfulness-Based Therapy",
      description:
        "Certified practitioner in mindfulness-based stress reduction and meditation therapy.",
      institution: "Center for Mindfulness Studies",
      year: "2020",
      icon: GiMeditation,
    },
    {
      id: 4,
      image: "/certificate4.jpg",
      title: "Trauma & PTSD Specialist",
      description:
        "Advanced certification in trauma treatment, EMDR therapy, and post-traumatic stress disorder management.",
      institution: "International Society for Traumatic Stress Studies",
      year: "2021",
      icon: FaLeaf,
    },
    {
      id: 5,
      image: "/certificate5.jpg",
      title: "Holistic Wellness Psychology",
      description:
        "Integrative approach combining traditional psychology with holistic wellness practices.",
      institution: "Holistic Psychology Institute",
      year: "2022",
      icon: GiLotusFlower,
    },
    {
      id: 6,
      image: "/certificate6.jpg",
      title: "Neuropsychology Certification",
      description:
        "Specialized training in brain-behavior relationships and cognitive assessment techniques.",
      institution: "Academy of Clinical Neuropsychology",
      year: "2023",
      icon: MdPsychology,
    },
  ];

  const openCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = "hidden";
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerIcon}>
            <FaAward />
          </div>
          <h2 className={styles.title}>
            Professional Certifications & Credentials
          </h2>
          <p className={styles.subtitle}>
            Evidence of Excellence, Commitment, and Continuous Professional
            Development
          </p>
          <div className={styles.titleUnderline}></div>
        </div>

        {/* Certificates Grid */}
        <div className={styles.certificatesGrid}>
          {certificates.map((certificate, index) => {
            const IconComponent = certificate.icon;
            return (
              <div
                key={certificate.id}
                className={styles.certificateCard}
                onClick={() => openCertificate(certificate)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Certificate Icon */}
                <div className={styles.cardIcon}>
                  <IconComponent />
                </div>

                {/* Certificate Image */}
                <div className={styles.imageWrapper}>
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={400}
                    height={300}
                    className={styles.certificateImage}
                  />
                  <div className={styles.imageOverlay}>
                    <FaCertificate className={styles.overlayIcon} />
                    <span className={styles.overlayText}>View Certificate</span>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className={styles.cardContent}>
                  <h3 className={styles.certificateTitle}>
                    {certificate.title}
                  </h3>
                  <p className={styles.certificateDescription}>
                    {certificate.description}
                  </p>

                  <div className={styles.certificateFooter}>
                    <div className={styles.institution}>
                      <IoSparklesSharp className={styles.footerIcon} />
                      <span>{certificate.institution}</span>
                    </div>
                    <div className={styles.year}>{certificate.year}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for Full Certificate View */}
      {selectedCertificate && (
        <div className={styles.modal} onClick={closeCertificate}>
          <div className={styles.modalOverlay}></div>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className={styles.closeButton} onClick={closeCertificate}>
              <IoClose />
            </button>

            {/* Certificate Full Image */}
            <div className={styles.modalImageWrapper}>
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                width={900}
                height={700}
                className={styles.modalImage}
              />
            </div>

            {/* Certificate Details */}
            <div className={styles.modalDetails}>
              <div className={styles.modalIcon}>
                {selectedCertificate.icon && <selectedCertificate.icon />}
              </div>
              <h3 className={styles.modalTitle}>{selectedCertificate.title}</h3>
              <p className={styles.modalDescription}>
                {selectedCertificate.description}
              </p>
              <div className={styles.modalFooter}>
                <div className={styles.modalInstitution}>
                  <FaAward className={styles.modalFooterIcon} />
                  <span>{selectedCertificate.institution}</span>
                </div>
                <div className={styles.modalYear}>
                  {selectedCertificate.year}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;

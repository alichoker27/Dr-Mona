"use client";

import { useState } from "react";
import Image from "next/image";
import { IoClose, IoSparklesSharp } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import { Certificate } from "@/utils/types";
import { certificates } from "@/utils/data";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

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
        {/* Header */}
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
                <div className={styles.cardIcon}>
                  <IconComponent />
                </div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={400}
                    height={300}
                    className={styles.certificateImage}
                  />
                  <div className={styles.imageOverlay}>
                    <FaAward className={styles.overlayIcon} />
                    <span className={styles.overlayText}>View Certificate</span>
                  </div>
                </div>
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

      {/* Modal */}
      {selectedCertificate && (
        <div className={styles.modal} onClick={closeCertificate}>
          <div className={styles.modalOverlay}></div>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeCertificate}>
              <IoClose />
            </button>
            <div className={styles.modalImageWrapper}>
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                width={900}
                height={700}
                className={styles.modalImage}
              />
            </div>
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

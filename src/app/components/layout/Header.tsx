"use client";
import { RiPlantFill } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Lab", path: "/lab" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Profile Section - Desktop Only */}
        <div className={styles.profileDesktop}>
          <div className={styles.imageWrapper}>
            <Image
              src="/mind.jpg"
              alt="mind therapy"
              width={60}
              height={60}
              className={styles.profileImage}
              priority
            />
          </div>
          <div className={styles.profileInfo}>
            <h1 className={styles.profileName}>
              <RiPlantFill />
              Mona Chahla
            </h1>
            <p className={styles.profileTitle}>Clinical Psychologist</p>
          </div>
        </div>

        {/* Mobile Title - Center (Mobile Only) */}
        <div className={styles.mobileTitleWrapper}>
          <h1 className={styles.mobileTitle}>
            <RiPlantFill />
            Mona Chahla
            <RiPlantFill />
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name} className={styles.navItem}>
                <Link href={link.path} className={styles.navLink}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className={styles.menuIcon}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoClose size={32} /> : <HiMenuAlt3 size={32} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`${styles.mobileNav} ${
            menuOpen ? styles.mobileNavOpen : ""
          }`}
        >
          <ul className={styles.mobileNavList}>
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={styles.mobileNavItem}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link
                  href={link.path}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay for mobile menu */}
        {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
      </div>
    </header>
  );
};

export default Header;

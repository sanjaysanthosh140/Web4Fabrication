"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
 
  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(`.${styles.navBar}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={styles.navBar}>
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        &#9776;
      </button>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/assets/fab_logo.png"
            alt="Web4Fabrication Logo"
            width={90}
            height={80}
            priority
          />
        </Link>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link href="/" onClick={handleLinkClick}>Home Page</Link>
        </li>
        <li>
          <Link href="/services" onClick={handleLinkClick}>Services</Link>
        </li>
        <li>
          <Link href="/details" onClick={handleLinkClick}>Details</Link>
        </li>
        <li>
          <Link href="/contact" onClick={handleLinkClick}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

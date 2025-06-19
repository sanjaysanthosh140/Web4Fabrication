"use client";
import Link from "next/link";
import { useState } from "react";
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
          <img
            src="/logo.svg" // Assuming you have a logo.svg in your public directory
            alt="Loop Logo"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link href="/">Home Page</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/details">Details</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
      {/* <button className={styles.learnButton}> */}
      {/* Learn */}
      {/* </button> */}
    </nav>
  );
};

export default NavBar;

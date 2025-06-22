import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
// import Link from "react";
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <Link href="/">
            <img
              src="/assets/fab_logo.png" // Assuming a light version of your logo for dark background
              alt="Loop Logo"
              width={100}
              height={100}
              className={styles.footerLogo}
            />
          </Link>
        </div>
        <nav className={styles.footerNav}>
          {/* <Link href="/link-one">Link One</Link> */}
          {/* <Link href="/link-two">Link Two</Link> */}
          {/* <Link href="/link-three">Link Three</Link> */}
          {/* <Link href="/link-four">Link Four</Link> */}

          <Link
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF /> Facebook
          </Link>
          <Link
            href="https://youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube /> YouTube
          </Link>
          <Link
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </Link>
          <Link href="tel: 1234567890">
            <FaPhoneAlt /> Contact
          </Link>
        </nav>

        <hr className={styles.footerSeparator} />

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Aluminium. All rights reserved.
          </p>
          <div className={styles.policyLinks}>
            {/* <Link href='/privacy-policy'> */}
            {/* Privacy Policy */}
            {/* </Link> */}
            {/* <Link href='/terms-of-service'> */}
            {/* Terms of Service */}
            {/* </Link> */}
            {/* <Link href='/cookie-settings'> */}
            {/* Cookie Settings */}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

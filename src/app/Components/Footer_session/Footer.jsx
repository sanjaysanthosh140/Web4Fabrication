import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <Link href='/'>
            <img
              src='/logo-light.svg' // Assuming a light version of your logo for dark background
              alt='Loop Logo'
              width={80}
              height={80}
              className={styles.footerLogo}
            />
          </Link>
        </div>

        <nav className={styles.footerNav}>
          <Link href='/link-one'>
            Link One
          </Link>
          <Link href='/link-two'>
            Link Two
          </Link>
          <Link href='/link-three'>
            Link Three
          </Link>
          <Link href='/link-four'>
            Link Four
          </Link>
        </nav>

        <hr className={styles.footerSeparator} />

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Aluminium. All rights reserved.
          </p>
          <div className={styles.policyLinks}>
            <Link href='/privacy-policy'>
              Privacy Policy
            </Link>
            <Link href='/terms-of-service'>
              Terms of Service
            </Link>
            <Link href='/cookie-settings'>
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
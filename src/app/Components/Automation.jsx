'use client'
import React, { useEffect, useRef } from 'react';
import styles from './Auto.module.css';

const HeroSection = () => {
  const topScrollRef = useRef(null);
  const bottomScrollRef = useRef(null);

  useEffect(() => {
    const topContainer = topScrollRef.current;
    const bottomContainer = bottomScrollRef.current;
    let topScrollAmount = 0;
    let bottomScrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      if (topContainer && bottomContainer) {
        // Top row scrolls right to left
        topScrollAmount += scrollSpeed;
        if (topScrollAmount >= topContainer.scrollWidth / 2) {
          topScrollAmount = 0;
        }
        topContainer.scrollLeft = topScrollAmount;

        // Bottom row scrolls left to right
        bottomScrollAmount = (bottomScrollAmount + scrollSpeed) % (bottomContainer.scrollWidth / 2);
        bottomContainer.scrollLeft = bottomContainer.scrollWidth / 2 - bottomScrollAmount;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  const renderImageCards = (startIndex = 0) => {
    return Array.from({length: 10}).map((_, index) => (
      <div
        key={`${startIndex}-${index}`}
        className={styles.imageCard}
        aria-label='Placeholder image'
      >
        <div className={styles.cardContent}>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={styles.placeholderIcon}
          >
            <rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
            <circle cx='8.5' cy='8.5' r='1.5'></circle>
            <polyline points='21 15 16 10 5 21'></polyline>
          </svg>
          <div className={styles.cardOverlay}>
            <h3>Project {index + 1}</h3>
            <p>View Details</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Precision Aluminium Fabrication <br />
          for Every Need
        </h1>
        <p className={styles.heroDescription}>
          Transforming your ideas into high‑quality aluminium solutions. Our expert team is
          dedicated to delivering exceptional craftsmanship tailored to your specifications.
        </p>
        <div className={styles.heroButtons}>
          <button className={styles.primaryButton}>
            Button
          </button>
          <button className={styles.secondaryButton}>
            Button
          </button>
        </div>
      </div>
      <div className={styles.scrollContainer} ref={topScrollRef}>
        <div className={styles.imageGrid}>
          {renderImageCards(0)}
          {renderImageCards(10)}
        </div>
      </div>
      <div className={styles.scrollContainer} ref={bottomScrollRef}>
        <div className={styles.imageGrid}>
          {renderImageCards(20)}
          {renderImageCards(30)}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
'use client'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

import tvs from "../../public/assets/tv.jpg"
import partition from "../../public/assets/partition.jpg"
import sink from "../../public/assets/sink.jpg"
import wall from "../../public/assets/wall2.jpg"
import bathroom from "../../public/assets/bathroom.jpg"
import kichen from "../../public/assets/kichen1.jpg"
import fargola from "../../public/assets/fargola2.jpg"
import window from "../../public/assets/window2.jpg"
import glass_store from '../../public/assets/glass_store.jpg'
import prayer_room from '../../public/assets/parayer.jpg'
// import bathroom from "../../public/assets/bathroom.jpg"
const content = [
  {
    id: 1,
    title: "🛁 Bathroom Door",
    image: bathroom,
  },
  {
    id: 2,
    title: "🚪 Room Partition",
    image: partition,
  },
  {
    id: 3,
    title: "📺 Aluminum Fabrication TV Unit",
    image: tvs,
  },
  {
    id: 4,
    title: "🚿 Aluminum Fabrication Wash Area",
    image: sink,
  },
  {
    id: 5,
    title: "🧱 Wall Panel",
    image: wall,
  },
  {
    id: 6,
    title: "🍽️ Kitchen Cupboard",
    image: kichen,
  },
  {
    id: 7,
    title: "🌿 Pergola (Fargola)",
    image: fargola,
  },
  {
    id: 8,
    title: "🪟 Window Section",
    image:window,
  },
  {
    id: 9,
    title: "🧊 Glass Cupboard",
    image:glass_store,
  },
  {
    id: 10,
    title: "🛐 Prayer Area",
    image: prayer_room,
  }
]

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
    return Array.from({length: 10}).map((_, index) => {
      const projectIndex = (index % content.length);
      const project = content[projectIndex];
      
      return (
        <div
          key={`${startIndex}-${index}`}
          className={styles.imageCard}
          aria-label={project.title}
        >
          <div className={styles.cardContent}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className={styles.projectImage}
              priority={index < 4}
            />
            <div className={styles.cardOverlay}>
              <h3>{project.title}</h3>
              <p>View Details</p>
            </div>
          </div>
        </div>
      );
    });
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
          <Link href="/services">
            <button className={styles.primaryButton}>
              Our Services
            </button>
          </Link>
          <button className={styles.secondaryButton}>
            Contact Us
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

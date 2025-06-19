'use client';

import React, { useState, useCallback } from 'react';
import styles from './detali.module.css';

const services = [
  {
    id: 1,
    title: "Bathroom Door Installation",
    gif: "/assets/bathroom.jpg", // Ensure these paths are correct and are indeed GIFs
    tags: ["Aluminum", "Bathroom", "Door"],
    description: "Elegant and durable aluminum bathroom doors, custom-fitted for modern aesthetics and long-lasting performance.",
  },
  {
    id: 2,
    title: "Room Partition",
    gif: "/assets/partition.jpg",
    tags: ["Aluminum", "Interior", "Partition"],
    description: "Flexible and stylish aluminum room partitions, ideal for optimizing space and creating distinct zones within any interior.",
  },
  {
    id: 3,
    title: "TV Unit",
    gif: "/assets/tv.jpg",
    tags: ["Aluminum", "Entertainment", "Furniture"],
    description: "Modern aluminum TV units designed for robust support and sleek integration into contemporary living spaces.",
  },
  {
    id: 4,
    title: "Wash Area",
    gif: "/assets/sink.jpg",
    tags: ["Aluminum", "Kitchen", "Utility"],
    description: "Practical and hygienic aluminum solutions for wash areas, providing resistance to moisture and ease of maintenance.",
  },
  {
    id: 5,
    title: "Wall Panel",
    gif: "/assets/wall2.jpg",
    tags: ["Aluminum", "Interior", "Decoration"],
    description: "Artistic aluminum wall panels that add a unique texture and sophisticated touch to any interior design.",
  },
];

export default function Page() {
  const [activeCardId, setActiveCardId] = useState(null);

  const handleCardClick = useCallback((id) => {
    setActiveCardId((prevId) => (prevId === id ? null : id));
  }, []);

  return (
    <section className={styles.servicesWrapper}>
      <header className={styles.servicesHeader}>
        <small className={styles.pretitle}>Portfolio</small>
        <h2 className={styles.title}>Our Featured Projects</h2>
        <p className={styles.subtitle}>Explore our latest aluminium-fabrication projects.</p>
      </header>

      <div className={styles.cardsGrid}>
        {services.map((service) => (
          <article
            key={service.id}
            className={`${styles.serviceCard} ${activeCardId === service.id ? styles.active : ''}`}
            onClick={() => handleCardClick(service.id)}
          >
            <img
              src={service.gif}
              alt={service.title}
              loading="lazy"
              className={`${styles.cardMedia} ${activeCardId === service.id ? styles.blurred : ''}`}
            />

            <div className={styles.frostedGlassOverlay}></div> {/* Frosted glass effect */}

            <div className={styles.contentPopup}>
              <div className={styles.popupContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <ul className={styles.tagList}>
                  {service.tags.map((tag) => (
                    <li key={tag} className={styles.tagItem}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
'use client';

import React, { useState, useCallback } from 'react';
import styles from './detali.module.css';

const services = [
  {
    id: 1,
    title: "Bathroom Door Installation",
    gif: "/assets/doors_detals.jpg",
    tags: ["Aluminum", "Bathroom", "Door"],
    description: "Elegant and durable aluminum bathroom doors, custom-fitted for modern aesthetics and long-lasting performance.",
  },
  {
    id: 2,
    title: "Room Partition",
    gif: "/assets/Flux_Dev_A_sleek_aluminum_and_glass_room_divider_stands_elegan_3.jpg",
    tags: ["Aluminum", "Interior", "Partition"],
    description: "Flexible and stylish aluminum room partitions, ideal for optimizing space and creating distinct zones within any interior.",
  },
  {
    id: 3,
    title: "TV Unit",
    gif: "/assets/tv (2).jpg",
    tags: ["Aluminum", "Entertainment", "Furniture"],
    description: "Modern aluminum TV units designed for robust support and sleek integration into contemporary living spaces.",
  },
  {
    id: 4,
    title: "Wash Area",
    gif: "/assets/Flux_Dev_A_sunlit_outdoor_aluminum_wash_area_with_a_sleek_mode_2.jpg",
    tags: ["Aluminum", "Kitchen", "Utility"],
    description: "Practical and hygienic aluminum solutions for wash areas, providing resistance to moisture and ease of maintenance.",
  },
  {
    id: 5,
    title: "Wall Panel",
    gif: "/assets/tv (5).jpg",
    tags: ["Aluminum", "Interior", "Decoration"],
    description: "Artistic aluminum wall panels that add a unique texture and sophisticated touch to any interior design.",
  },

 
  {
    id: 6,
    title: "🍽️ Kitchen Cupboard",
    gif: "/assets/kichen2.jpg",
    tags: ["Aluminum", "Kitchen", "Storage"],
    description: "Custom kitchen solutions with premium aluminum materials designed for durability and modern aesthetics.",
  },
  {
    id: 7,
    title: "🌿 Pergola (Fargola)",
    gif: "/assets/fargola1.jpg",
    tags: ["Aluminum", "Outdoor", "Structure"],
    description: "Beautiful and durable pergola structures that enhance outdoor living spaces with elegant aluminum designs.",
  },
  {
    id: 8,
    title: "Window Section",
    gif: "/assets/window1.jpg",
    tags: ["Aluminum", "Windows", "Exterior"],
    description: "Premium aluminum window sections offering excellent insulation, durability, and contemporary design for any building.",
  },
  {
    id: 9,
    title: "Prayer Area",
    gif: "/assets/parayer.jpg",
    tags: ["Aluminum", "Interior", "Specialized"],
    description: "Respectfully designed aluminum structures for prayer areas, combining functionality with elegant, minimalist aesthetics.",
  },
    {
    id: 10,
    title: "Glass Cupboard",
    gif: "/assets/detal_glasbox.jpg",
    tags: ["Aluminum", "Glass", "Storage"],
    description: "Elegant glass cupboards with aluminum framing, providing stylish display and storage solutions with modern transparency and durability.",
  },
    {
    id: 12,
    title: "Aluminum Cabinet",
    gif: "/assets/caboard.jpg",
    tags: ["Aluminum", "Storage", "Furniture"],
    description: "Custom-designed aluminum cabinets offering durable and lightweight storage solutions with sleek, modern aesthetics for any space.",
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
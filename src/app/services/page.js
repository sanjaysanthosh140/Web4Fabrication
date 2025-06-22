'use client';

import {useState} from 'react';
import Image from 'next/image';
import styles from './services.module.css';

// NOTE: All image imports remain the same.
import glass_door from '../../../public/assets/glass_store.jpg';
import tvs from '../../../public/assets/tv.jpg';
import partition from '../../../public/assets/partition.jpg';
import sink from '../../../public/assets/sink.jpg';
import wall from '../../../public/assets/wall2.jpg';
import bathroom from '../../../public/assets/imge_door.jpg';
import kichen from '../../../public/assets/kichen1.jpg';
import fargola from '../../../public/assets/fargola2.jpg';
import window from '../../../public/assets/window2.jpg';
import prayer_room from '../../../public/assets/parayer.jpg';
import cabinet from '../../../public/assets/caboard2.jpg';

const services = [
  {
    id: 1,
    title: '🧊 Glass Cupboard',
    tagline: 'Premium Service',
    description: 'Professional aluminium fabrication tailored to your exact requirements. From concept to installation, we handle every step with precision.',
    image: glass_door,
  },
  {
    id: 2,
    title: '📺 Aluminum Fabrication TV Unit',
    tagline: 'Expert Solutions',
    description: 'State‑of‑the‑art machining for industrial and commercial components that demand micron‑level accuracy.',
    image: tvs,
  },
  {
    id: 3,
    title: '🚪 Room Partition',
    tagline: 'Quality Work',
    description: 'A veteran crew that assembles and installs complex aluminium structures safely and on schedule.',
    image: partition,
  },
  {
    id: 4,
    title: '🚿 Aluminum Fabrication Wash Area',
    tagline: 'Premium Service',
    description: 'Professional aluminium fabrication tailored to your exact requirements. From concept to installation, we handle every step with precision.',
    image: sink,
  },
  {
    id: 5,
    title: '🧱 Wall Panel',
    tagline: 'Expert Solutions',
    description: 'State‑of‑the‑art machining for industrial and commercial components that demand micron‑level accuracy.',
    image: wall,
  },
  {
    id: 6,
    title: '🛁 Bathroom Door',
    tagline: 'Quality Work',
    description: 'A veteran crew that assembles and installs complex aluminium structures safely and on schedule.',
    image: bathroom,
  },
  {
    id: 7,
    title: '🍽️ Kitchen Cupboard',
    tagline: 'Quality Work',
    description: 'Custom kitchen solutions with premium aluminum materials, designed for both functionality and aesthetics.',
    image: kichen,
  },
  {
    id: 8,
    title: '🌿 Pergola (Fargola)',
    tagline: 'Outdoor Solutions',
    description: 'Beautiful and durable pergola structures that enhance your outdoor living space with style and shade.',
    image: fargola,
  },
  {
    id: 9,
    title: "🪟 Window Section",
    image:window,
  },
  {
    id: 10,
    title: "🛐 Prayer Area",
    image: prayer_room,
  },
  {
    id: 11,
    title: "🗄️ Aluminum Cabinet",
    image: cabinet,
  },
];

export default function Services() {
  const [flipped, setFlipped] = useState([]);

  const toggleFlip = (id) => {
    setFlipped((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section className={styles.servicesWrapper}>
      <header className={styles.servicesHeader}>
        {/* //<p className={styles.pretitle}>Our Services</p> */}
        <h2 className={styles.titleGradient}>Professional Aluminium Solutions</h2>
        <p className={styles.subtitle}>
          Delivering exceptional quality and precision across every project
        </p>
      </header>

      <div className={styles.grid}>
        {services.map((svc, index) => (
          <article
            key={svc.id}
            className={`${styles.card} ${flipped.includes(svc.id) ? styles.flipped : ''}`}
            onClick={() => toggleFlip(svc.id)}
            style={{'--bg-image': `url(${svc.image.src})`}}
          >
            <div className={styles.cornerBrackets}>
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className={styles.inner}>
              <div className={styles.front}>
                <div className={styles.frontContent}>
                  <h3 className={styles.cardTitleFront}>{svc.title}</h3>
                  <p className={styles.cardTaglineFront}>{svc.tagline}</p>
                </div>
              </div>
              <div className={styles.back}>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.tagline}>{svc.tagline}</p>
                <p className={styles.desc}>{svc.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
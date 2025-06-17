'use client'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from "./services.module.css";

const services = [
  {
    id: 1,
    title: 'Custom Aluminium Fabrication Services',
    description:
      'Professional aluminium fabrication services tailored to your specific needs. From design to installation, we handle it all with precision and care.',
    tagline: 'Premium Service',
    image: '/images/aluminium-fabrication.jpg', // Add your image path here
    reverse: false,
  },
  {
    id: 2,
    title: 'Precision Cutting & Manufacturing',
    description:
      'State-of-the-art cutting technology for precise aluminium components. Perfect for industrial and commercial applications requiring exact specifications.',
    tagline: 'Expert Solutions',
    image: '/images/precision-cutting.jpg', // Add your image path here
    reverse: true,
  },
  {
    id: 3,
    title: 'Assembly & Installation Services',
    description:
      'Complete assembly and installation services for all your aluminium structures. Professional team ensuring quality work and timely delivery.',
    tagline: 'Quality Work',
    image: '/images/assembly-installation.jpg', // Add your image path here
    reverse: false,
  },
];

const Services = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(`.${style.serviceCard}, .${style.serviceHeader}`);
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className={style.serviceWrapper}>
      <div className={`${style.serviceHeader}`}>
        <p className={style.pretitle}>Our Services</p>
        <h2 className={style.title}>Professional Aluminium Solutions</h2>
        <p className={style.subtitle}>
          Delivering exceptional quality and precision across all our service offerings
        </p>
      </div>

      {services.map(({ id, title, description, tagline, image, reverse }, index) => (
        <div 
          key={id} 
          className={`${style.serviceCard} ${reverse ? style.reverse : ''}`}
          ref={el => sectionRefs.current[index] = el}
        >
          <div className={style.serviceText}>
            <div className={style.contentWrapper}>
              <p className={style.tagline}>{tagline}</p>
              <h3 className={style.cardTitle}>{title}</h3>
              <p className={style.description}>{description}</p>
              <div className={style.buttons}>
                <button className={style.btnPrimary}>
                  <span>Get Quote</span>
                  <div className={style.btnGlow}></div>
                </button>
                <button className={style.btnSecondary}>
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className={style.serviceImage}>
            <div className={style.imageContainer}>
              {/* Fallback for development - remove this in production */}
              <div className={style.imagePlaceholder}>
                <div className={style.imageOverlay}></div>
                <div className={style.placeholderText}>
                  {title.split(' ')[0]}
                </div>
              </div>
              
              {/* Next.js Image component - uncomment and use this in production */}
              {/* 
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={style.realImage}
                priority={index === 0}
              />
              <div className={style.imageOverlay}></div>
              */}
              
              <div className={style.cornerAccent}></div>
            </div>
          </div>
        </div>
      ))}

      <Link href="/" className={style.backLink}>
        <button className={style.backButton}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Back to Home</span>
        </button>
      </Link>
    </section>
  );
};

export default Services;

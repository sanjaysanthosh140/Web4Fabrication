'use client'

import styles from '../page.module.css'

const FeatureSection = ({ imagePosition, tagline, heading, description }) => {
  return (
    <section className={`${styles.featureSection} ${imagePosition === 'right' ? styles.rightImage : styles.leftImage}`}>
      <div className={styles.content}>
        <span className={styles.tagline}>{tagline}</span>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder}></div>
      </div>
    </section>
  )
}

export default FeatureSection 
import React from 'react';
import styles from './Location.module.css';

const LocationsSection = () => {
  return (
    <section className={styles.locationsContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.textColumn}>
          <p className={styles.sectionCategory}>
            Our Location
          </p>
          <h2 className={styles.sectionTitle}>
            Find Us Here
          </h2>
          <p className={styles.sectionDescription}>
            Visit our workshop and see our craftsmanship in person.
          </p>
          <div className={styles.locationItem}>
            <h3>Main Workshop</h3>
            <p>123 Workshop Street, Industrial Area</p>
            <p>City, State - 12345</p>
          </div>
        </div>
        <div className={styles.mapColumn}>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425882426698!3d40.71277994533683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1709123456789!5m2!1sen!2s"
              width="500px"
              height="400px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Workshop Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
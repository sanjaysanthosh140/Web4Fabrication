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
            {/* Added a placeholder for a "Get Directions" link */}
            <a
              href="https://maps.google.com/?q=123+Workshop+Street,+Industrial+Area,+City,+State+-+12345"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewMapLink}
            >
              Get Directions
            </a>
          </div>
        </div>
        <div className={styles.mapColumn}>
          <div className={styles.mapContainer}>
            {/* It's highly recommended to use a legitimate Google Maps Embed API URL here.
                The provided URL `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425882426698!3d40.71277994533683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1709123456789!5m2!1sen!2s` will not work.
                You'll need to generate a valid embed URL from Google Maps:
                1. Go to Google Maps.
                2. Search for your location.
                3. Click "Share" -> "Embed a map".
                4. Copy the `src` attribute from the iframe code.
                Example: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dXYZ!2dXYZ!3dXYZ!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ5JzAxLjEiTiA3NsKwMjknMzEuNCJF!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin`
            */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.7513511874454!2d76.28919627581534!3d10.038164372996657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f555c65697d%3A0x8e5f1f7d6a5e1e0!2sLulu%20International%20Shopping%20Mall!5e0!3m2!1sen!2sin!4v1718898691234!5m2!1sen!2sin" // Placeholder for a valid embed URL
              width="100%" // Changed to 100% for responsiveness
              height="100%" // Changed to 100% for responsiveness
              style={{ border: 0, borderRadius: '8px' }} // Added border-radius for visual appeal
              allowFullScreen={true} // `allowFullScreen=""` is valid, but `true` is clearer
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
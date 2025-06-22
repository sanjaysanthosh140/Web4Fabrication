'use client';

import {
  FiMail,
  FiMessageCircle,
  FiPhone,
  FiMapPin,
} from 'react-icons/fi';
import styles from './contact.module.css';

const CONTACT_ITEMS = [
  // {
    // icon: <FiMail />,
    // title: 'Email',
    // blurb: 'Reach us anytime at our dedicated email address.',
    // action: 'info@aluminiumfabrication.com',
  // },
  // {
    // icon: <FiMessageCircle />,
    // title: 'Live chat',
    // blurb: 'Chat with our support team for immediate assistance.',
    // action: 'Start a chat',
  // },
  {
    icon: <FiPhone />,
    title: 'Phone',
    blurb: 'Call us for quick answers to your questions.',
    action: '9605482721',
  },
  // {
    // icon: <FiMapPin />,
    // title: 'Office',
    // blurb: 'Visit us at our headquarters for personalized service.',
    // action: '456 Fabrication Lane, Sydney NSW 2000 AU',
  // },
];

export default function ContactSection() {
  return (
    <section id="contact" className={styles.wrapper}>
      <h5 className={styles.kicker}>Connect</h5>
      <h2 className={styles.heading}>Get in Touch</h2>
      <p className={styles.subtitle}>
        We&rsquo;re here to assist you with your inquiries.
      </p>

      <div className={styles.grid}>
        {CONTACT_ITEMS.map(({ icon, title, blurb, action }) => (
          <article key={title} className={styles.card}>
            <span className={styles.icon}>{icon}</span>
            <h3>{title}</h3>
            <p className={styles.blurb}>{blurb}</p>
            <span className={styles.action}>{action}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

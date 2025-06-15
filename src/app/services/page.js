'use client'
import React from 'react';
import Link from 'next/link';
import style from "./services.module.css"

const services = [
  {
    id: 1,
    title: 'Custom Aluminium Fabrication',
    description:
      'Professional aluminium fabrication services tailored to your specific needs. From design to installation, we handle it all.',
    tagline: 'Premium Service',
    location: 'New York, NY',
    address: '123 Business Avenue, Suite 100',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    reverse: false,
  },
  {
    id: 2,
    title: 'Precision Cutting Services',
    description:
      'State-of-the-art cutting technology for precise aluminium components. Perfect for industrial and commercial applications.',
    tagline: 'Expert Solutions',
    location: 'Los Angeles, CA',
    address: '456 Industrial Park Road',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v6m0 6v6"/>
        <path d="m21 12-6-6-6 6-6-6"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    reverse: true,
  },
  {
    id: 3,
    title: 'Assembly & Installation',
    description:
      'Complete assembly and installation services for all your aluminium structures. Professional team ensuring quality work.',
    tagline: 'Quality Work',
    location: 'Chicago, IL',
    address: '789 Manufacturing Street',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    reverse: false,
  },
];

const Service = () => {
  return (
    <main className={style['service-wrapper']}>
      <div className={style['service-header']}>
        <div className={style['header-decoration']}></div>
        <p className={style.pretitle}>Our Services</p>
        <h2 className={style.title}>Professional Aluminium Solutions</h2>
        <p className={style.subtitle}>
          Serving clients across multiple locations with expert fabrication services
        </p>
        <div className={style['header-decoration']}></div>
      </div>

      <div className={style['services-container']}>
        {services.map(({ id, title, description, tagline, location, address, icon, gradient, reverse }) => (
          <div key={id} className={`${style['service-card']} ${reverse ? style.reverse : ''}`}>
            <div className={style['card-glow']}></div>
            <div className={style['card-content']}>
              
              {/* Icon Section */}
              <div className={style['icon-section']} style={{ background: gradient }}>
                <div className={style['icon-wrapper']}>
                  {icon}
                </div>
                <div className={style['icon-bg-pattern']}></div>
              </div>

              {/* Main Content */}
              <div className={style['main-content']}>
                <div className={style['content-header']}>
                  <div className={style['tagline-badge']}>
                    <span className={style.tagline}>{tagline}</span>
                    <div className={style['badge-shine']}></div>
                  </div>
                  <h3 className={style['service-title']}>{title}</h3>
                  <p className={style['service-description']}>{description}</p>
                </div>

                {/* Location Card */}
                <div className={style['location-card']}>
                  <div className={style['location-header']}>
                    <div className={style['location-icon']}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className={style['location-details']}>
                      <h4 className={style['location-name']}>{location}</h4>
                      <p className={style['location-address']}>{address}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className={style['action-section']}>
                  <div className={style['primary-actions']}>
                    <button className={style['btn-primary']}>
                      <span>Get Quote</span>
                      <div className={style['btn-icon']}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                      <div className={style['btn-ripple']}></div>
                    </button>
                    <button className={style['btn-secondary']}>
                      <span>Learn More</span>
                      <div className={style['btn-icon']}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </button>
                  </div>
                  <button className={style['btn-directions']}>
                    <div className={style['directions-icon']}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
                      </svg>
                    </div>
                    <span>Get Directions</span>
                    <div className={style['btn-arrow']}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className={style['floating-elements']}>
              <div className={style['float-1']}></div>
              <div className={style['float-2']}></div>
              <div className={style['float-3']}></div>
            </div>
          </div>
        ))}
      </div>

      <Link href="/" className={style['back-link']}>
        <button className={style.backButton}>
          <div className={style['back-icon']}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </div>
          <span>Back to Home</span>
          <div className={style['button-shine']}></div>
        </button>
      </Link>
    </main>
  );
};

export default Service;

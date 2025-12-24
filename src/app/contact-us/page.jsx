'use client';

import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './contact.module.css';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - SSB Bank</title>
        <meta name="description" content="Get in touch with Shalini Sahakari Bank Ltd. Find our contact details, office address, and working hours." />
      </Head>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          
          <h1 className={styles.heading}>Contact Us</h1>

          <div className={styles.contentGrid}>
            
            <div className={styles.infoSection}>
              
              <div className={styles.infoItem}>
                <Image src="/contact/BuildingOffice.svg" alt="Office Icon" width={36} height={36} />
                <div className={styles.details}>
                  <strong>Head Office</strong>
                  395, N M Joshi Marg,<br/>
                  Chinchpokli, Mumbai 400011
                </div>
              </div>

              <div className={styles.infoItem}>
                <Image src="/contact/PhoneCall.svg" alt="Phone Icon" width={36} height={36} />
                <div className={styles.details}>
                  <strong>Phone</strong>
                  <a href="tel:9920031925">+91-9920031925</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Image src="/contact/EnvelopeSimple.svg" alt="Email Icon" width={36} height={36} />
                <div className={styles.details}>
                  <strong>Email</strong>
                  <a href="mailto:customer.care@ssbbank.in">customer.care@ssbbank.in</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.details}>
                  <strong>Working Hours</strong>
                  Monday - Saturday: 10am - 5pm<br/>
                  <span style={{fontSize:'0.85rem', color:'var(--color-text-light)'}}>
                    (2nd & 4th Saturday Off)
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.mapSection}>
                
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.8335611983125!2d72.82943920991451!3d18.97877885494493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce5f6f103c0d%3A0x758e342190151618!2sShalini%20Sahakari%20Bank%20Limited!5e0!3m2!1sen!2sin!4v1766582740197!5m2!1sen!2sin"
                className={styles.mapFrame} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
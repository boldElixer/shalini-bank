'use client';

import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './help.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function HelpPage() {
  return (
    <>
      <Head>
        <title>Help Center - Shalini Sahakari Bank</title>
        <meta name="description" content="Help for Shalini Sahakari Bank" />
      </Head>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          
          <div className={styles.header}>
            <h1 className={styles.title}>Need Help?</h1>
          </div>

          <div className={styles.grid}>
            
            <div className={styles.card}>
              <Image src="/help/EnvelopeSimple.svg" alt="Feedback & Complaints" width={36} height={36} />
              <h3 className={styles.cardTitle}>Feedback & Complaints</h3>
              <p className={styles.cardDesc}>
                Have a concern? Raise a service request to resolve issues or share your experience.
              </p>
              <button className={styles.arrow}>
                <Link href="/service-request">Raise Service Request</Link>
              </button>
            </div>

            <div className={styles.card}>
              <Image src="/help/PhoneCall.svg" alt="Contact Customer Care" width={36} height={36} />
              <h3 className={styles.cardTitle}>Contact Customer Care</h3>
              <p className={styles.cardDesc}>
                 Speak directly with our support team or send us an email for immediate assistance.
              </p>
              <button className={styles.arrow}>
                <Link href="/contact-us">Contact Customer Care</Link>
              </button>
            </div>

            <div className={styles.card}>
              <Image src="/help/Question.svg" alt="FAQ" width={36} height={36} />
              <h3 className={styles.cardTitle}>FAQ</h3>
              <p className={styles.cardDesc}>
                Find quick answers to the most frequently asked banking questions.
              </p>
              <button className={styles.arrow}>
                <Link href="/faq">View FAQs</Link>
              </button>
            </div>

            <div className={styles.card}>
              <Image src="/help/Table.svg" alt="Form Center" width={36} height={36} />
              <h3 className={styles.cardTitle}>Form Center</h3>
              <p className={styles.cardDesc}>
                Download necessary application forms for accounts, loans, and services.
              </p>
              <button className={styles.arrow}>
                <Link href="/form-center">Download Forms</Link>
              </button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
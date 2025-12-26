'use client';

import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../help/help.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceRequestPage() {
  return (
    <>
      <Head>
        <title>Service Request - Shalini Sahakari Bank</title>
        <meta name="description" content="Raise a service request for Shalini Sahakari Bank" />
      </Head>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          
          <div className={styles.header}>
            <h1 className={styles.title}>Raise a Service Request?</h1>
          </div>

          <div className={styles.grid}>
            
            <div className={styles.card}>
              <Image src="/help/EnvelopeSimple.svg" alt="Feedback & Complaints" width={36} height={36} />
              <h3 className={styles.cardTitle}>Send mail</h3>
              <p className={styles.cardDesc}>
                Raise your concern by emailing us for prompt review and resolution to <strong>customer.care@ssbbank.in</strong>
              </p>
              <button className={styles.arrow}>
                <Link href="mailto:customer.care@ssbbank.in">Send an Email</Link>
              </button>
            </div>

            <div className={styles.card}>
              <Image src="/help/Newspaper.svg" alt="Complaint Form" width={36} height={36} />
              <h3 className={styles.cardTitle}>Complaint Form</h3>
              <p className={styles.cardDesc}>
                 Submit your complaint through our online form for structured and faster assistance.
              </p>
              <button className={styles.arrow}>
                <Link href="/complaint-form">Fill Complaint Form</Link>
              </button>
            </div>

          </div>
          <br/>
          <p>*To know more about our Grievance Redressal Mechanism <Link href="/grievance-redressal"><strong>Click Here</strong></Link></p>
        </div>
      </div>

      <Footer />
    </>
  );
}
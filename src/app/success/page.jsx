'use client';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../privacy-policy/privacy.module.css';
import { useSearchParams } from 'next/navigation';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const ticket = searchParams.get('ticket');
  return (
    <>
      <Head>
        <title>Success - Shalini Sahakari Bank</title>
        <meta name="description" content="Your complaint has been submitted successfully." />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1 style={{ color: 'green' }}>Success</h1>
                <p>
                    Your complaint has been submitted successfully. We will review your submission and get back to you within 24 hours.
                </p>
                {ticket && (
                  <div style={{
                    backgroundColor: '#f8f9fa',
                    border: '2px dashed #ccc',
                    padding: '20px',
                    margin: '30px auto',
                    maxWidth: '400px',
                    borderRadius: '8px'
                  }}>
                    <span style={{ display: 'block', color: 'var(--color-text-light)', marginBottom: '10px' }}>
                      Your Ticket Number:
                    </span>
                    <strong style={{ fontSize: '2rem', color: 'var(--color-primary-red)', letterSpacing: '1px' }}>
                      {ticket}
                    </strong>
                  </div>
                )}

                {ticket && (
                  <p style={{ color: 'var(--color-text-light)', marginTop: '20px' }}>
                    Please save this ticket number for future reference.
                  </p>
                )}
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}
// src/app/success/SuccessClient.jsx
"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import styles from '../privacy-policy/privacy.module.css';

// 1. The Inner Component that uses the hook
function SuccessContent() {
  const searchParams = useSearchParams();
  const ticket = searchParams.get('ticket'); 

  return (
    <div className={styles.container}>
      <section className={styles.section} style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ color: 'var(--color-primary-blue)', marginBottom: '1rem' }}>Success</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dark)', maxWidth: '600px', margin: '0 auto' }}>
          Your complaint has been submitted successfully. We will review your submission during banking hours and provide a response within 48 hours.
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
  );
}

// 2. The Default Export that wraps the inner component in Suspense
export default function SuccessClient() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '100px' }}>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
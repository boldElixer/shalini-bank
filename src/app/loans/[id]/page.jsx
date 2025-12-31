'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import loansData from '@/data/loan-details.json';
import styles from './loan-detail.module.css';
import Image from 'next/image';

export default function LoanDetailPage({ params }) {
  const resolvedParams = use(params);
  const loanId = resolvedParams.id;
  const loan = loansData.find((item) => item.id === loanId);

  if (!loan) return notFound();

  return (
    <>
      <Head>
        <title>{loan.title} - SSB Bank</title>
        <meta name="description" content="${loan.title} details of Shalini Sahakari Bank Ltd." />
      </Head>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          

          <Link href="/loans" className={styles.backLink}>
             &larr; Back to All Loans
          </Link>

          
          <header className={styles.headerSection}>
            <h1 className={styles.title}>{loan.title}</h1>
            <p className={styles.subtitle}>{loan.purpose}</p>
          </header>

          
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Interest Rate</span>
              <span className={styles.statValue}>{loan.interestRate}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Maximum Amount</span>
              <span className={styles.statValue}>{loan.maxAmount}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Maximum Tenure</span>
              <span className={styles.statValue}>{loan.maxTenure}</span>
            </div>
          </div>

          {/* 3. DETAILS SECTIONS (Stacked Cards) */}
          
          
          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Key Highlights</h2>
            <div className={styles.listGrid}>
              {loan.highlights.map((point, idx) => (
                <div key={idx} className={styles.listItem}>
                  <span className={styles.check}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--color-primary-red)" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                  </span>
                  {point}
                </div>
              ))}
            </div>
          </section>


          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Eligibility Criteria</h2>
            <div className={styles.listGrid}>
              {loan.eligibility.map((item, idx) => (
                <div key={idx} className={styles.listItem}>
                  <span className={styles.check}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--color-primary-red)" viewBox="0 0 256 256"><path d="M149.61,85.71l-89.6,88a8,8,0,0,1-11.22,0L10.39,136a8,8,0,1,1,11.22-11.41L54.4,156.79l84-82.5a8,8,0,1,1,11.22,11.42Zm96.1-11.32a8,8,0,0,0-11.32-.1l-84,82.5-18.83-18.5a8,8,0,0,0-11.21,11.42l24.43,24a8,8,0,0,0,11.22,0l89.6-88A8,8,0,0,0,245.71,74.39Z"></path></svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </section>

          
          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Documents Required</h2>
            <div className={styles.listGrid}>
              {loan.documents.map((doc, idx) => (
                <div key={idx} className={styles.listItem}>
                  <span className={styles.check}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--color-primary-red)" viewBox="0 0 256 256"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path></svg>
                  </span>
                  {doc}
                </div>
              ))}
            </div>
          </section>

          {/* Security & Fees */}
          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Security & Fees</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              
              <div>
                <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600'}}>Collateral / Security</h3>
                <p className={styles.textBlock}>{loan.security}</p>
              </div>

              <div className={styles.feeBox}>
                <span style={{fontSize: '1.5rem'}}>🏷️</span>
                <div>
                  <div style={{fontSize: '0.8rem', opacity: 0.8, textTransform:'uppercase', letterSpacing:'0.5px'}}>Processing Fee</div>
                  <div style={{fontSize: '1.1rem'}}>{loan.processingFee}</div>
                  {loan.processingFee !== "NIL" ? (
                    <Link href="/loans/service-charges" target="_blank" rel="noopener noreferrer" className={styles.applyButton}>
                        Check fees and charges
                    </Link>
                    ) : null}
                  
                </div>
              </div>

            </div>
          </section>

          
          <div className={styles.ctaSection}>
            <p>
              Visit the branch or call us for more details.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
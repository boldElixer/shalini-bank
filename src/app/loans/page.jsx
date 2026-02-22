// 'use client';

import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './loans.module.css';
import loansData from '@/data/loan-list.json';
import Image from 'next/image';

export const metadata = {
  title: 'Loan Products & Interest Rates',
  description: 'Achieve your goals with Shalini Sahakari Bank\'s flexible loan products. Explore Home, Car, Education, and Personal loans with competitive interest rates.',
  openGraph: {
    title: 'Loan Products | Shalini Sahakari Bank',
    description: 'Explore our tailored loan products with attractive interest rates and easy repayment options.',
    url: 'https://ssbbank.bank.in/loans',
  }
};

export default function LoansPage() {
  return (
    <>
      <Head>
        <title>Loans - SSB Bank</title>
        <meta name="description" content="Explore our range of loan products tailored to your needs." />
      </Head>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          

          <div className={styles.header}>
            <h1 className={styles.title}>Our Loan Products</h1>
          </div>


          <div className={styles.grid}>
            {loansData.map((loan) => (
              <div key={loan.id} className={styles.card}>
                <div className={styles.iconBox}>
                  <Image src={loan.icon} alt={loan.title} fill style={{objectFit: 'cover'}} />
                </div>
                <h3 className={styles.cardTitle}>{loan.title}</h3>
                
                <Link href={loan.link} className={styles.applyLink}>
                  Explore
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
'use client';

import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './services.module.css';
import Image from 'next/image';

const servicesData = [
  {
    id: 'customer',
    title: 'Become a Customer',
    icon: '/services/customer.png',
    desc: 'Join SSB Bank today and experience personalized banking solutions tailored to your needs. Enjoy competitive interest rates and exceptional customer service.',
    link: '/become-a-customer'
  },
  {
    id: 'deposit',
    title: 'Deposits',
    icon: '/services/deposit.png',
    desc: 'Secure your savings with our flexible deposit options. Choose from fixed deposits, recurring deposits, and more to grow your wealth with confidence.',
    link: '/deposits'
  },
  {
    id: 'loans',
    title: 'Loans',
    icon: '/services/loan.png',
    desc: 'Achieve your dreams with our range of loan products. Whether it\'s for a home, car, education, or personal needs, we offer competitive rates and easy repayment options.',
    link: '/loans'
  }
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services - SSB Bank</title>
        <meta name="description" content="Services offered by SSB Bank" />
      </Head>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          

          <div className={styles.header}>
            <h1 className={styles.title}>Services</h1>
          </div>


          <div className={styles.grid}>
            {servicesData.map((service) => (
              <div key={service.id} className={styles.card}>
                <div className={styles.iconBox}>
                  <Image src={service.icon} alt={service.title} fill style={{objectFit: 'cover'}} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                
                <Link href={service.link} className={styles.applyLink}>
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
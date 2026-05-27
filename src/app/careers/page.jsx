import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './career.module.css';
import Image from 'next/image';

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers - Shalini Sahakari Bank</title>
        <meta name="description" content="Career information" />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>Careers</h1>
                <div style={{
                  'display': 'flex',
                  'justifyContent': 'center'
                }}>
                    <Image src="/careers.jpeg" alt="Careers at Shalini Sahakari Bank" width={493} height={640} />
                </div>
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}
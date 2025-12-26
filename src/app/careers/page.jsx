import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './career.module.css';

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
                <p>
                    No job openings available at the moment. Please check back later.
                </p>
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}
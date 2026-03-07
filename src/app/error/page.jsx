import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../privacy-policy/privacy.module.css';

export default function SuccessPage() {
  return (
    <>
      <Head>
        <title>Error - Shalini Sahakari Bank</title>
        <meta name="description" content="There was an error submitting your complaint." />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1 style={{color: 'red'}}>Error</h1>
                <p>
                    There was an error submitting your complaint. Please try again later.
                </p>
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}
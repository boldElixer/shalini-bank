import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './shareholders.module.css';

export default function ShareholdersPage() {
  return (
    <>
      <Head>
        <title>Shareholders - Shalini Sahakari Bank</title>
        <meta name="description" content="Shareholders information" />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>Shareholders</h1>
                <p>
                    At Shalini Sahakari Bank, our shareholders are the cornerstone of our cooperative model, embodying the spirit of community ownership and participation. We are committed to maintaining transparent communication and fostering a collaborative relationship with our shareholders. Through regular updates, annual general meetings, and inclusive decision-making processes, we ensure that our shareholders are well-informed and actively engaged in the bank's growth and governance. Together, we strive to build a resilient financial institution that serves the needs of our members and the broader community.
                </p>
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}
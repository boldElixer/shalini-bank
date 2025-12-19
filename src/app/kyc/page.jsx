import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './kyc.module.css';
import Link from 'next/link';

export default function KycPage() {
  return (
    <>
      <Head>
        <title>CKYC - SSB Bank</title>
        <meta name="description" content="Central KYC" />
      </Head>

      <Header />

      <main>
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.textWrapper}>
                    <h1>Know Your Customer (KYC)</h1>
                    <p>
                        In accordance with the Reserve Bank Of India (RBI) guidelines on Know Your Customer (KYC) and Risk Categorization norms, customers are required to complete the KYC formalities periodically.
                    </p>
                    <p>
                        All account holders with Shalini Sahakari Bank Ltd. are obliged to undergo a KYC refresher process as part of the bank's compliance and regulatory requirements.
                    </p>
                    <Link href="/CKYC_FORM.pdf" className={styles.ctaButton} target='__blank' rel="noopener noreferrer">Complete KYC Now</Link>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/about.png"
                        alt="About SSB Bank"
                        width={619}
                        height={575}
                    />
                </div>
            </div>
          </section>
        <section className={styles.section}>
             <div className={styles.mvCard}>
                <h3>Important Notice from Central KYC Records Registry (CKYCRR)</h3>
                <p>
                  You can now access your CKYC details through the following modes:
                </p>
                <p>
                  To get your CKYC number: Give a missed call on the toll-free number - <b>7799022129</b>
                </p>
                <p>
                    To view your CKYC Card: Visit the web portal here - <Link href="https://www.ckycindia.in/" target="_blank" rel="noopener noreferrer"><b>https://www.ckycindia.in/</b></Link>
                </p>
             </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
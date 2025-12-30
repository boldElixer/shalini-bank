import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './mobile.module.css';
import Link from 'next/link';

export default function MobilePage() {
  return (
    <>
      <Head>
        <title>Mobile Banking - SSB Bank</title>
        <meta name="description" content="Mobile Banking" />
      </Head>

      <Header />

      <main>
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.textWrapper}>
                    <h1>Mobile Banking</h1>
                    <p>
                        Manage your accounts, transfer funds, and access essential banking services anytime, anywhere with Shalini Sahakari Bank's Mobile Banking. Simple, secure, and always within reach.
                    </p>
                    <Link href="#" className={styles.ctaButton} target='__blank' rel="noopener noreferrer">Download App</Link>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/mobile_banking.png"
                        alt="Mobile Banking Services"
                        width={486}
                        height={451.45}
                    />
                </div>
            </div>
          </section>
        <section className={styles.section}>
             <div className={styles.mvCard}>
                <h3>Key Features</h3>
                <p><strong>Bank from Anywhere</strong> - Manage your account conveniently using your smartphone</p>
                <p><strong>Instant Transfers within the Bank</strong> - Send money easily to other Shalini Sahakari Bank accounts</p>
                <p><strong>RTGS & NEFT at Your Fingertips</strong> - Initiate RTGS and NEFT transactions directly through the app</p>
                <p><strong>Stay Updated</strong> - View account balance and last 10 transactions instantly</p>
                <p><strong>Access Statements Anytime</strong> - Download and view your bank statements with ease</p>
                <p><strong>Simple & Secure Interface</strong> - Designed for smooth, safe, and hassle-free banking</p>
             </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
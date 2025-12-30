import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './sms.module.css';
import Image from 'next/image';

export default function SMSPage() {
  return (
    <>
      <Head>
        <title>SMS Banking - Shalini Sahakari Bank</title>
        <meta name="description" content="SMS Banking information" />
      </Head>

      <Header />

      <main>
        {/* <div className={styles.container}>
            <section className={styles.section}>
                <h1>SMS Banking</h1>
                <p>
                    Stay connected to your bank anytime with our SMS Banking service. Get instant, real-time transaction updates directly on your mobile phone, no internet required. We make banking simple, secure, and accessible beyond regular banking hours.
                </p>
                <h2>Receive SMS alerts for:</h2>
                <ul>
                    <li>Credit or debit transactions</li>
                    <li>Issued cheques</li>
                    <li>Deposited cheques</li>
                    <li>PPS(Positive Pay System) notifications</li>
                    <li>Term deposit maturity reminders</li>
                </ul>
                <p>Bank smarter, wherever you are.</p>
            </section>
        </div> */}
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.textWrapper}>
                    <h1>SMS Banking</h1>
                    <p>
                        Stay connected to your bank anytime with our SMS Banking service. Get instant, real-time transaction updates directly on your mobile phone, no internet required. We make banking simple, secure, and accessible beyond regular banking hours.
                    </p>
                    <h2>Receive SMS alerts for:</h2>
                    <ul>
                        <li>Credit or debit transactions</li>
                        <li>Issued cheques</li>
                        <li>Deposited cheques</li>
                        <li>PPS(Positive Pay System) notifications</li>
                        <li>Term deposit maturity reminders</li>
                    </ul>
                    <p>Bank smarter, wherever you are!</p>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/sms_banking.png"
                        alt="SMS Alerts for Banking Transactions"
                        width={486}
                        height={451.45}
                    />
                </div>
            </div>
          </section>

      </main>

      <Footer />
    </>
  );
}
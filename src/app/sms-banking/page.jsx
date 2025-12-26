import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './sms.module.css';

export default function SMSPage() {
  return (
    <>
      <Head>
        <title>SMS Banking - Shalini Sahakari Bank</title>
        <meta name="description" content="SMS Banking information" />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
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
        </div>

      </main>

      <Footer />
    </>
  );
}
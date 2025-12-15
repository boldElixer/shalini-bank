import Head from 'next/head';
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
                    Shalini Sahakari Bank(SSB) shares are held in physical form. The face value and market value of each share is <b>₹10</b>. The minimum number of shares to be held by any member is <b>10 shares</b>.
                </p>
                <p>
                    Please note that if the dividend remains unencashed on or before 31st December, 2024, it shall stand forfeited by the Bank and the proceeds thereof will be transferred to the Bank's Reserve Fund, in accordance with the provisions of the Bank.
                </p>
                <p>
                    This intimation may be treated as the final notice to all concerned members who are yet to encash their dividends.
                </p>
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}
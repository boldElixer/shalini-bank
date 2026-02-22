import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './shareholders.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Shareholders Information',
  description: 'Information for Shalini Sahakari Bank shareholders. Learn about share value, minimum holdings, and download the membership form.',
  openGraph: {
    title: 'Shareholders | Shalini Sahakari Bank',
    description: 'Important information and forms for the esteemed shareholders of SSB Bank.',
    url: 'https://ssbbank.bank.in/shareholders',
  }
};

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
                    Shalini Sahakari Bank(SSB) shares are held in physical form. The face value and market value of each share is <b>₹100</b>. The minimum number of shares to be held by any member is <b>10 shares</b>.
                </p>
                <p>Legal heirs may raise death claim of their deceased member/s.</p>
                <br/>
                <Link href="/forms/Membership_Form.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here to download Membership Form</Link>
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}
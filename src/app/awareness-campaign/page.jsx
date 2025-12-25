import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './awareness.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function AwarenessCampaignPage() {
  return (
    <>
      <Head>
        <title>Awareness Campaign - Shalini Sahakari Bank</title>
        <meta name="description" content="RBI Nationwide Intensive Financial Awareness Campaign" />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>Awareness Campaign</h1>
                <p>
                    While the digital technology has made our lives easier and more convenient, it has also made it easier for the fraudsters to trick and cheat us. Learn more about such fraud, and how you can stay safe by being vigilant.
                </p>
                <br/>
                <p><Link href="https://rbidocs.rbi.org.in/rdocs/content/pdfs/BEAWARE07032022.pdf" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                    BE(A)WARE Booklet- A Booklet on Modus Operandi of Financial Frauds
                </Link></p>
                <p><Link href="https://www.rbi.org.in/commonman/english/Scripts/BasicBankingNew.aspx" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                    Raju & The Forty Thieves
                </Link></p>
                <p><Link href="https://www.rbi.org.in/financialeducation/RajuandATM.aspx" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                    Raju & The Friendly ATM
                </Link></p>
                <br/>
                <Image src="/awareness-poster.png" alt="RBI Awareness Campaign" width={889} height={500} />
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}
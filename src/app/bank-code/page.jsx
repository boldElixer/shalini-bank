import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './bankCode.module.css';
import Link from 'next/link';

export default function BankCodePage() {
  return (
    <>
      <Head>
        <title>Bank Code - Shalini Sahakari Bank</title>
        <meta name="description" content="Code of Commitment" />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>Bank Code</h1>
                <p>
                    The Bank is a member of the Banking Codes and Standards Board of India (BCSBI) and has adopted a Code of Commitment to Customers in accordance with BCSBI guidelines.
                </p>
                <p>
                    This Code establishes the minimum standards of banking practices we follow and outlines our commitment to fair, transparent, and ethical dealings. It is designed to safeguard customer interests and clearly define how we engage with customers across our day-to-day banking operations.
                </p>
                <table className={styles.resultsTable}>
                    <thead>
                        <tr>
                            <th style={{borderTopLeftRadius: 'var(--radius-card)'}}>Code of Commitment</th>
                            <th style={{borderTopRightRadius: 'var(--radius-card)'}}>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Code of Bank's Commitment to Customers</td>
                            <td><Link href="/bank_code/BCSBI-Code-2018.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>Code of Bank's Commitment to Micro and Small Enterprises</td>
                            <td><Link href="/bank_code/mse_code_eng_aug2015.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './notice.module.css';
import Link from 'next/link';

export default function AnnualReportPage() {
  return (
    <>
      <Head>
        <title>Annual Reports - Shalini Sahakari Bank</title>
        <meta name="description" content="Annual reports of Shalini Sahakari Bank" />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>Notices</h1>
                <table className={styles.resultsTable}>
                    <thead>
                        <tr>
                            <th style={{borderTopLeftRadius: 'var(--radius-card)'}}>Date</th>
                            <th>Notice</th>
                            <th style={{borderTopRightRadius: 'var(--radius-card)'}}>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>16th Sep, 2025</td>
                            <td>43rd Annual General Meeting(AGM) notice</td>
                            <td><Link href="/notices/AGM_2025.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>27th Sep, 2024</td>
                            <td>42nd Annual General Meeting(AGM) notice</td>
                            <td><Link href="/notices/AGM_2024.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
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
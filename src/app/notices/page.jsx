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
                            <th style={{borderTopRightRadius: 'var(--radius-card)'}}>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20th Dec, 2025</td>
                            <td>43rd Annual Report FY 2024-25</td>
                            <td><Link href="/annual_reports/Shalini_Annual_Report_2024-25.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>20th Dec, 2025</td>
                            <td>42nd Annual Report FY 2023-24</td>
                            <td><Link href="/annual_reports/Shalini_Annual_Report_2023-24.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>20th Dec, 2025</td>
                            <td>41st Annual Report FY 2022-23</td>
                            <td><Link href="/annual_reports/Shalini_Annual_Report_2022-23.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
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
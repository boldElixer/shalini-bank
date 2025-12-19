import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './annual.module.css';
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
                <h1>Annual Reports</h1>
                <p>
                    The Annual Reports present a comprehensive snapshot of Shalini Sahakari Bank's performance, milestones, and financial strength over the years. They reflect our disciplined approach to growth, responsible management, and continued focus on serving our members and communities with trust and transparency.
                </p>
                <table className={styles.resultsTable}>
                    <thead>
                        <th style={{borderTopLeftRadius: 'var(--radius-card)'}}>Report</th>
                        <th style={{borderTopRightRadius: 'var(--radius-card)'}}>Download</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>43rd Annual Report FY 2024-25</td>
                            <td><Link href="/annual_reports/Shalini_Annual_Report_2024-25.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>42nd Annual Report FY 2023-24</td>
                            <td><Link href="/annual_reports/Shalini_Annual_Report_2023-24.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
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
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './forms.module.css';
import Link from 'next/link';

export default function FormsPage() {
  return (
    <>
      <Head>
        <title>Form Center - Shalini Sahakari Bank</title>
        <meta name="description" content="Forms for Shalini Sahakari Bank" />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>Form Center</h1>
                <table className={styles.resultsTable}>
                    <thead>
                        <tr>
                            <th style={{borderTopLeftRadius: 'var(--radius-card)'}}>Form</th>
                            <th>Type</th>
                            <th style={{borderTopRightRadius: 'var(--radius-card)'}}>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Savings Account Opening Form</td>
                            <td>PDF</td>
                            <td><Link href="/forms/Saving_Account_Opening_Form.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>Current Account Opening Form</td>
                            <td>PDF</td>
                            <td><Link href="/forms/Current_Account_Opening_Form.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>Fixed Deposit/Recurring Deposit/Daily Deposit Account Opening Form</td>
                            <td>PDF</td>
                            <td><Link href="/forms/FD-Account.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>Fixed Deposit/Recurring Deposit New/Renewal Form</td>
                            <td>PDF</td>
                            <td><Link href="/forms/FD-Recurring.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>ATM Card Application Form</td>
                            <td>PDF</td>
                            <td><Link href="/forms/ATM_Card_Form.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>Membership Form</td>
                            <td>PDF</td>
                            <td><Link href="/forms/Membership_Form.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>KYC Form</td>
                            <td>PDF</td>
                            <td><Link href="/forms/KYC.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>Central KYC Form (For Individuals)</td>
                            <td>PDF</td>
                            <td><Link href="/forms/CKYC_FORM.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>Form 15G</td>
                            <td>PDF</td>
                            <td><Link href="/forms/15G.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>Form 15H</td>
                            <td>PDF</td>
                            <td><Link href="/forms/15H.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
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
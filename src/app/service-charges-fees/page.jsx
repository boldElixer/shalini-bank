import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './fees.module.css';
import Link from 'next/link';


export default function ChargesFeesPage() {
  return (
    <>
      <Head>
        <title>Account Service Charges - SSB Bank</title>
        <meta name="description" content="Account Service Charges of Shalini Sahakari Bank Ltd." />
      </Head>

      <Header />

      <main>
         <div className={styles.container}>
        <section className={styles.section}>
            <h1>Service Fees and Charges</h1>
            <p>
                At Shalini Sahakari Bank, we are committed to maintaining transparency in our fee structure. Below is a comprehensive list of service charges applicable to various account-related services. We encourage our customers to review these charges to better understand the costs associated with their banking activities.
            </p>
            <table className={styles.resultsTable}>
                <thead>
                    <tr>
                        <th style={{borderTopLeftRadius: 'var(--radius-card)'}}>Service Charges</th>
                        <th style={{borderTopRightRadius: 'var(--radius-card)'}}>View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Account Service Charges</td>
                        <td><Link href="/become-a-customer/service-charges" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                    </tr>
                    <tr>
                        <td>Loan Service Charges</td>
                        <td><Link href="/loans/service-charges" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                    </tr>
                    <tr>
                        <td>ATM Charges</td>
                        <td><Link href="/atm-card/#atmChargesTable" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
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
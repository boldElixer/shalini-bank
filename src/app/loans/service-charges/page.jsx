import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './fees.module.css';
import feesData from '@/data/loan-charges.json';


export default function ChargesPage() {
  return (
    <>
      <Head>
        <title>Loan Service Charges - SSB Bank</title>
        <meta name="description" content="Loan sevice charges for Shalini Sahakari Bank" />
      </Head>

      <Header />

      <main>
         <div className={styles.container}>
        <section className={styles.section}>
            <h1>Loan Fees and Charges</h1>
            <table className={styles.resultsTable}>
                <thead>
                    <tr>
                        <th style={{borderTopLeftRadius: 'var(--radius-card)'}}>Particulars</th>
                        <th style={{borderTopRightRadius: 'var(--radius-card)'}}>Service Charges</th>
                    </tr>
                </thead>
                <tbody>
                    {feesData.map((fee, index) => (
                    fee.charges === '' ? (
                        <tr key={index}>
                            <td colSpan="2" className={styles.feeCategory}>{fee.Particulars}</td>
                        </tr>
                    ) : (
                        <tr key={index}>
                            <td>{fee.Particulars}</td>
                            <td>{fee.charges}</td>
                        </tr>
                    )
                    ))}
                </tbody>
            </table>
        </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
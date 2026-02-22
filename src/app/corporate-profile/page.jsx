import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../become-a-customer/service-charges/fees.module.css';


export default function CorporateProfile() {
  return (
    <>
      <Head>
        <title>Corporate Profile - SSB Bank</title>
        <meta name="description" content="Corporate Profile of Shalini Sahakari Bank Ltd." />
      </Head>

      <Header />

      <main>
         <div className={styles.container}>
        <section className={styles.section}>
            <h1>Corporate Profile</h1>
            <div className={styles.tableWrapper}>
                <table className={styles.resultsTable}>
                    <tbody>
                        <tr>
                            <td style={{borderTopLeftRadius: 'var(--radius-card)'}}>Name of the Bank</td>
                            <td style={{borderTopRightRadius: 'var(--radius-card)'}}>Shalini Sahakari Bank Ltd.</td>
                        </tr>
                        <tr>
                            <td>Bank Registration Number</td>
                            <td>BOM/BNK/GS/261 Dt. 24th Jan 1982</td>
                        </tr>
                        <tr>
                            <td>RBI License Number</td>
                            <td>ACD/MH/292-P/ Dt. 8th March 1982</td>
                        </tr>
                        <tr>
                            <td>Area of Operation</td>
                            <td>Mumbai, Navi Mumbai and Thane District</td>
                        </tr>
                        <tr>
                            <td>GSTIN</td>
                            <td>27AAAAS0066R1Z3</td>
                        </tr>
                        <tr>
                            <td>MICR Code</td>
                            <td>400068257</td>
                        </tr>
                        <tr>
                            <td>IFSC Code</td>
                            <td>SVCB0046002</td>
                        </tr>
                        <tr>
                            <td>PAN</td>
                            <td>AAAAS0066R</td>
                        </tr>
                        <tr>
                            <td>Legal Entity Identifier(LEI) Code</td>
                            <td>335800N5SGH4H87DNU42</td>
                        </tr>
                        <tr>
                            <td>TAN</td>
                            <td>MUMS72246G</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
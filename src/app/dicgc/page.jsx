import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './dicgc.module.css';
import Link from 'next/link';

export default function DicgcPage() {
  return (
    <>
      <Head>
        <title>DICGC - Shalini Sahakari Bank</title>
        <meta name="description" content="DICGC information" />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>DICGC(Deposit Insurance and Credit Guarantee Corporation)</h1>
                <p>
                    Cooperative banks in States/Union Territories with amended Cooperative Societies Acts, granting RBI authority to order winding up or supersede management committees, are covered by the Deposit Insurance Scheme. The Bank provides its depositors with an added layer of safety and confidence. Eligible deposits are insured as per DICGC guidelines, reinforcing our commitment to protecting customer funds and maintaining trust, stability, and reliability in all our banking services.
                </p>
                <p>
                    Secure your financial records with ease by downloading Digit Insurance(DI) returns, ensuring transparency and accessibility under the DICGC coverage.
                </p>
                <table className={styles.resultsTable}>
                    <thead>
                        <tr>
                            <th style={{borderTopLeftRadius: 'var(--radius-card)'}}>Return</th>
                            <th style={{borderTopRightRadius: 'var(--radius-card)'}}>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>DI Half-Yearly Return ending 30th Sep,2025</td>
                            <td><Link href="/DI/dicgc_sep25.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>DI Half-Yearly Return ending 31st Mar,2025</td>
                            <td><Link href="/DI/dicgc_mar25.pdf" target="_blank" rel="noopener noreferrer" className={styles.DownloadBtn}>Click Here</Link></td>
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
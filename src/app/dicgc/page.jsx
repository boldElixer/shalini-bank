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
                <p>
                    <Link href="/DI/dicgc_sep25.pdf" locale={false} target="_blank" rel="noopener noreferrer" className={styles.link}>DI Half-Yearly Return ending 30/09/2025</Link>
                </p>
                <p>
                    <Link href="/DI/dicgc_mar25.pdf" locale={false} target="_blank" rel="noopener noreferrer" className={styles.link}>DI Half-Yearly Return ending 31/03/2025</Link>
                </p>
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './awareness.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function AwarenessCampaignPage() {
  return (
    <>
      <Head>
        <title>Awareness Campaign - Shalini Sahakari Bank</title>
        <meta name="description" content="RBI Nationwide Intensive Financial Awareness Campaign" />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>Awareness Campaign</h1>
                <p>
                    While the digital technology has made our lives easier and more convenient, it has also made it easier for the fraudsters to trick and cheat us. Learn more about such fraud, and how you can stay safe by being vigilant.
                </p>
                <section className={styles.notice}>
                    <Link href="/awareness-campaign.pdf" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                        RBI Nationwide Intensive Financial Awareness Campaign
                    </Link>
                    <Link href="https://rbidocs.rbi.org.in/rdocs/content/pdfs/BEAWARE07032022.pdf" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                        BE(A)WARE Booklet on Modus Operandi of Financial Frauds
                    </Link>
                    <Link href="https://www.rbi.org.in/commonman/english/Scripts/BasicBankingNew.aspx" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                        Raju & The Forty Thieves
                    </Link>
                    <Link href="https://www.rbi.org.in/financialeducation/RajuandATM.aspx" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                        Raju & The Friendly ATM
                    </Link>
                </section>
                <section className={styles.do_donts}>
                    <h2 style={{color: '#28B71A'}}>Safe Banking Practices - What to Do</h2>
                    <ul>
                        <li><Image src="/CheckCircle.svg" alt="Check Circle" width={30} height={30} /> Before transacting with any company, verify whether they are a registered and licensed entity.</li>
                        <li><Image src="/CheckCircle.svg" alt="Check Circle" width={30} height={30} /> Check the spelling of the website / url being accessed to avoid fraud by fake websites resembling Banks or e-commerce platforms.</li>
                        <li><Image src="/CheckCircle.svg" alt="Check Circle" width={30} height={30} /> Always visit the official websites of Banks/service provider and use those websites which are secure, i.e. https:// - where 's' means secured website.</li>
                        <li><Image src="/CheckCircle.svg" alt="Check Circle" width={30} height={30} /> Be careful when buying/selling items online. There is no need to enter PIN/password to receive money through UPI.</li>
                    </ul>
                    <h2>Safe Banking Practices - Don'ts</h2>
                    <ul>
                        <li><Image src="/XCircle.svg" alt="Cross Circle" width={30} height={30} /> Do not take help from unknown person for withdrawing or depositing money from ATM. For any kind of assistance, just contact the Bank official</li>
                        <li><Image src="/XCircle.svg" alt="Cross Circle" width={30} height={30} /> Don't get caught up in tempting offers, offered by call center agents in the form of Banks, insurance, government etc. and don't share your name, password, card details/PIN/CVV/OTP, date of birth, Aadhaar, family members name etc.</li>
                        <li><Image src="/XCircle.svg" alt="Cross Circle" width={30} height={30} /> Don't respond to fake messages promising KYC updation / jobs to get lottery, government assistance and money</li>
                        <li><Image src="/XCircle.svg" alt="Cross Circle" width={30} height={30} /> Do not take Bank / NBFC contact details from Search Engines, SMS, Social Media, Email etc. Use only official website / mobile application for correct information</li>
                    </ul>
                </section>
                <Image src="/awareness-poster.png" alt="RBI Awareness Campaign" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}
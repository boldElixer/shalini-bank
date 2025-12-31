import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './customer.module.css';
import Link from 'next/link';

const servicesData = [
  {
    id: 'interest',
    icon: '/customer/ClockClockwise.svg',
    title: 'Monthly Interest Credits',
    desc: 'Earn interest every month and grow your savings balance faster with the benefit of compounding'
  },
  {
    id: 'options',
    icon: '/customer/Bank.svg',
    title: 'Flexible Banking Options',
    desc: 'Choose from an array of account variants, including options for senior citizens, women and minors'
  },
  {
    id: 'accessibility',
    icon: '/customer/ShieldCheck.svg',
    title: 'Enhanced Accessibility',
    desc: 'Enjoy convenient mobile banking access along with flexible daily ATM withdrawal and purchase limits'
  }
];

export default function CustomerPage() {
  return (
    <>
      <Head>
        <title>Savings Account - SSB Bank</title>
        <meta name="description" content="Open a savings account with Shalini Sahakari Bank Ltd." />
      </Head>

      <Header />

      <main>
        <section className={styles.hero}>
            <div className={styles.heroContainer} style={{marginBottom: 'var(--spacing-lg)'}}>
                <div className={styles.textWrapper}>
                    <h1>Open Savings Account & Watch Your Money Grow</h1>
                    <p>
                        <Image src="/customer/CalendarDots.svg" alt="calendar" width={36} height={36} /> Monthly interest credits
                    </p>
                    <p>
                        <Image src="/customer/SealPercent.svg" alt="shield" width={36} height={36} /> Attractive interest rates
                    </p>
                    <p>
                        <Image src="/customer/CreditCard.svg" alt="trending up" width={36} height={36} /> Exclusive Shalini Bank Debit Card
                    </p>
                    <p>
                        <Link href="/form-center" className={styles.ctaButton} target='__blank' rel="noopener noreferrer">Open an Account</Link>
                    </p>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/customer/1.png"
                        alt="Savings Account SSB Bank"
                        width={486}
                        height={420}
                    />
                </div>
            </div>
            <div className={styles.heroContainer}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/customer/2.png"
                        alt="Savings Account SSB Bank"
                        width={466.37}
                        height={342.32}
                    />
                </div>
                <div className={styles.textWrapper}>
                    <p>
                        A Savings Account is a secure deposit account that lets you store your money safely while earning interest on the balance. It helps you manage everyday expenses by offering instant account access and grow your wealth to meet both short-term and long-term goals.
                    </p>
                    <p>
                        Open Bank Account with Shalini Sahakari Bank to enjoy exclusive benefits. Experience all services such as IMPS, NEFT, RTGS, ATM withdrawals with our Savings Account. No hidden charges!
                    </p>
                </div>
            </div>
          </section>
        <section className={styles.section}>
             <h2>Why Choose Shalini Sahakari Bank Savings Accounts?</h2>
             <div className={styles.grid}>
                {servicesData.map((service) => (
                <div key={service.id} className={styles.card}>
                    <div className={styles.iconBox}>
                        <Image src={service.icon} alt={service.title} fill style={{objectFit: 'cover'}} />
                    </div>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDesc}>{service.desc}</p>
                </div>
                ))}
            </div>
        </section>
        <section className={styles.levelSection}>
            <h2 className={styles.levelTitle}>Eligibility & Documentation for Opening Savings Account</h2>
            <p className={styles.levelDesc}>
              Opening a Savings Account with Shalini Sahakari Bank is quick, convenient, and secure—helping you save smarter right away. Unlock the benefits of a feature-rich Savings Account and apply effortlessly with the valid documents.
            </p>
            <h4 className={styles.levelSubDesc}>Who can apply?</h4>
            <div className={styles.l1Grid}>
              
              <div className={styles.channelBox}>
                <div className={styles.channelLabel}>Resident Individuals (Sole or Joint Accounts)</div>
              </div>


              <div className={styles.verticalDivider}><span className={styles.orText}>OR</span></div>


              <div className={styles.channelBox}>
                <div className={styles.channelLabel}>Foreign Nationals Residing in India with valid documentation</div>
              </div>


              <div className={styles.verticalDivider}><span className={styles.orText}>OR</span></div>


              <div className={styles.channelBox}>
                <div className={styles.channelLabel}>Hindu Undivided Families (HUF)</div>
              </div>

            </div>
            <h4 className={styles.levelSubDesc}>KYC Documents needed</h4>
            <div className={styles.channelLabel} style={{textAlign: 'center'}}>Aadhaar Card, PAN Card</div>
        </section>
        <section className={styles.section}>
             <div className={styles.mvCard}>
                <h3>Interest Rates on Savings Account</h3>
                <p>
                  At Shalini Sahakari Bank, your Savings Account earns <strong>2.5% p.a. interest</strong>, compounded monthly for both regular and senior citizen accounts.
                </p>
                <Link href="/become-a-customer/service-charges" className={styles.ctaButton} target='__blank' rel="noopener noreferrer">Know all fees and charges</Link>
             </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
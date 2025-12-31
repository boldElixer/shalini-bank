import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './deposit.module.css';
import Link from 'next/link';
import ratesData from '@/data/fd-rates.json';

const servicesData = [
  {
    id: 'interest',
    icon: '/deposits/coins.svg',
    title: 'Grow Your Surplus Funds',
    desc: 'Invest in Shalini Sahakari Bank Fixed Deposits and enjoy competitive interest rates you can rely on'
  },
  {
    id: 'senior-citizens',
    icon: '/deposits/security.svg',
    title: 'Benefit for senior citizens',
    desc: 'Shalini Sahakari Bank offers an additional 0.25% p.a. interest to senior citizens on their fixed deposits'
  },
  {
    id: 'flexible-payments',
    icon: '/deposits/time.svg',
    title: 'Flexible interest pay-outs',
    desc: 'Choose a tenure, from 7 days to 10 years, that fits your saving goals & opt for payouts monthly, quarterly, or at maturity'
  },
  {
    id: 'compounding',
    icon: '/deposits/interest.svg',
    title: 'Benefit of Compounding',
    desc: 'Enjoy the benefit of quarterly compounding, with interest paid along with the principal at maturity'
  },
  {
    id: 'low-amount',
    icon: '/deposits/coin.svg',
    title: 'Low Booking Amount',
    desc: 'Start investing with just ₹500 and earn up to 7.75% p.a. with safety and stability. Watch your money grow like never before!'
  },
  {
    id: 'overdraft',
    icon: '/deposits/od.svg',
    title: 'Overdraft Facility',
    desc: 'Avail an overdraft facility against your fixed deposit on select deposits as per bank norms'
  }
];

export default function DepositPage() {
  return (
    <>
      <Head>
        <title>Deposits - SSB Bank</title>
        <meta name="description" content="Open a fixed deposit with Shalini Sahakari Bank Ltd." />
      </Head>

      <Header />

      <main>
        <section className={styles.hero}>
            <div className={styles.heroContainer} style={{marginBottom: 'var(--spacing-lg)'}}>
                <div className={styles.textWrapper}>
                    <h1>Open a Fixed Deposit today and lock in attractive returns of up to 7.75% p.a.*</h1>
                    <p>
                        <Link href="/deposit-calculator" className={styles.ctaButton} target='__blank' rel="noopener noreferrer">Calculate FD Returns &nbsp;
                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.16646 10L7.9998 8.79167L10.9581 5.83333H0.83313V4.16667H10.9581L7.9998 1.20833L9.16646 0L14.1665 5L9.16646 10Z" fill="white"></path>
                        </svg></Link>
                    </p>
                    <p>
                        <Link href="/forms/FD-Account.pdf" className={styles.ctaButton} target='__blank' rel="noopener noreferrer">Book FD now!</Link>
                    </p>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/deposits/1.png"
                        alt="Deposit Account SSB Bank"
                        width={486}
                        height={420}
                    />
                </div>
            </div>
          </section>
        <section className={styles.section}>
             <h2>Why Choose Shalini Sahakari Bank Fixed Deposits?</h2>
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
        <section className={styles.section} style={{marginBottom: 'var(--spacing-md)'}}>
             <div className={styles.mvCard}>
                <h3>Interest Rates on Fixed Deposits</h3>
                <p>
                  At Shalini Sahakari Bank, your FD earns up to <strong>7.75% p.a. interest</strong>, compounded quarterly for both regular and senior citizen accounts.
                </p>
                <table className={styles.resultsTable}>
                    <thead>
                        <tr>
                            <th colSpan={5} style={{borderTopLeftRadius: 'var(--radius-card)', borderTopRightRadius: 'var(--radius-card)', color: 'var(--color-bg-white)', background: 'var(--color-primary-blue)', textAlign: 'center'}}>
                                Revised Interest Rates (w.e.f. 1<sup>st</sup> December, 2025)
                            </th>
                        </tr>
                        <tr>
                            <th>Period</th>
                            <th>General Public</th>
                            <th>Senior Citizen</th>
                            <th>Bulk Deposits(above ₹15 Lakhs)</th>
                            <th>Special Card Rate(Minimum ₹5 Lakhs)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ratesData.map((rate, index) => (
                        <tr key={index}>
                            <td>{rate.period}</td>
                            <td>{rate.general}</td>
                            <td>{rate.senior}</td>
                            <td>{rate.bulk}</td>
                            <td>{rate.special}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
             </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
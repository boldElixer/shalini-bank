import Image from 'next/image';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image src="/header.svg" alt="Shalini Bank Logo" width={248.75} height={70} />
        <div className={styles.grid}>
          <div className={styles.col}>
            <h4>About</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about#BOD">Board of Directors</Link></li>
              <li><Link href="/shareholders">Shareholders</Link></li>
              <li><Link href="/bank-holidays">Bank Holidays</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/esg">Environment, Social & Governance</Link></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Explore</h4>
            <ul>
              <li>Become a Customer</li>
              <li>Deposits</li>
              <li>Loans</li>
              <li><Link href="/unclaimed-deposits">Unclaimed Deposits</Link></li>
              <li><Link href="/kyc">Know Your Customer</Link></li>
              <li><Link href="/dicgc">DICGC</Link></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Ways to Bank</h4>
            <ul>
              <li>SMS Banking</li>
              <li>Mobile Banking</li>
              <li>UPI</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Customer Service</h4>
            <ul>
              <li>Contact Us</li>
              <li><Link href="/form-center">Download Forms</Link></li>
              <li>Feedbacks & Complaints</li>
              <li>Grievance Redressal</li>
              <li><Link href="/deposit-calculator">Deposit Calculator</Link></li>
              <li><Link href="/emi-calculator">EMI Calculator</Link></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Investor Center</h4>
            <ul>
              <li><Link href="/annual-reports">Annual Reports</Link></li>
              <li><Link href="/notices">Notices</Link></li>
              <li><Link href="/financials">Financials</Link></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Regulatory Information</h4>
            <ul>
              <li>RBI Awareness Campaign</li>
              <li><Link href="https://www.rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=21110" target="_blank" rel="noopener noreferrer">RBI: Beware of Fictitious Offers</Link></li>
              <li><Link href="https://www.rbi.org.in/commonperson/English/Scripts/rbikehtahai.aspx" target="_blank" rel="noopener noreferrer">RBI Kehta Hai</Link></li>
              <li><Link href="https://udgam.rbi.org.in/unclaimed-deposits/#/login" target="_blank" rel="noopener noreferrer">RBI-UDGAM Portal</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.installApp}>
          <div className={styles.appBadges}>
            <h4>Install Mobile Banking App</h4>
            <Image src="/footer/playstore.svg" alt="Google Play Store" width={147} height={44} />
          </div>
          <div className={styles.appBadges}>
            <h4>Shalini Sahakari Bank Ltd. is<br/> registered with DICGC</h4>
            <Image src="/footer/dicgc.png" alt="DICGC Logo" width={68} height={65} />
            <Image src="/footer/dicgc_qr.png" alt="DICGC QR CODE" width={68} height={68} />
          </div>
        </div>
        <div className={styles.bottomBar}>
          <div>
            <ul style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <li><Link href="/bank-code">Bank Code</Link></li>
              <li>Disclaimer</li>
              <li>Sitemap</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>Copyright © 2025 Shalini Sahakari Bank Ltd.</div>
        </div>
      </div>
    </footer>
  );
}
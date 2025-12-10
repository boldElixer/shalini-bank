import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <h4 style={{color:'#D62F4A'}}>SSB Bank</h4>
            <p style={{color:'#666', fontSize:'0.85rem'}}>Trusted banking for everyone.</p>
          </div>
          <div className={styles.col}>
            <h4>About</h4>
            <ul>
              <li>About Us</li>
              <li>Board of Directors</li>
              <li>Career</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Explore</h4>
            <ul>
              <li>Savings Account</li>
              <li>Loans</li>
              <li>Digital Banking</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Customer Service</h4>
            <ul>
              <li>Contact Us</li>
              <li>Branch Locator</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Mobile App</h4>
            <div className={styles.appBadges}>
              <div className={styles.badge}>Google Play</div>
              <div className={styles.badge}>App Store</div>
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <div>Bank Code | Disclaimer | Sitemap | Privacy Policy</div>
          <div>Copyright © 2024 SSB Bank Ltd.</div>
        </div>
      </div>
    </footer>
  );
}
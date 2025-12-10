import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span style={{ color: 'var(--color-primary-red)' }}>▼</span> SSB
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Complaints</li>
            <li>Help</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/header.svg" alt="Shalini Bank Logo" width={199} height={56} />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/service-request">Complaints</Link></li>
            <li><Link href="/help">Help</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
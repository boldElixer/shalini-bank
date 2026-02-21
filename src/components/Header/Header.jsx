'use client'; // Required for managing state in Next.js App Router

import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/header.svg" alt="Shalini Bank Logo" width={199} height={56} className={styles.logoImage} />
        </div>
        
        {/* Hamburger Icon */}
        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul>
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link href="/service-request" onClick={toggleMenu}>Complaints</Link></li>
            <li><Link href="/help" onClick={toggleMenu}>Help</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
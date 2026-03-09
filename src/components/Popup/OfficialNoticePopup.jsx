"use client";

import { useState, useEffect } from 'react';
import styles from './popup.module.css';

export default function OfficialNoticePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the popup in this session
    const hasSeenNotice = sessionStorage.getItem('officialNoticeDismissed');
    
    if (!hasSeenNotice) {
      // Small delay makes the entrance feel smoother after the page loads
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Remember that the user closed it so it doesn't show again this session
    sessionStorage.setItem('officialNoticeDismissed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} role="dialog" aria-modal="true">
        <div className={styles.iconWrapper}>
          <span className={styles.alertIcon}>⚠️</span>
        </div>
        
        <h2 className={styles.title}>Official Website Notice</h2>
        
        <p className={styles.text}>
          The only official website of Shalini Sahakari Bank is:
        </p>
        
        <div className={styles.urlBox}>
          <a href="https://ssbbank.bank.in" className={styles.url}>
            https://ssbbank.bank.in
          </a>
        </div>
        
        <p className={styles.textWarning}>
          Any other website claiming to represent the bank is fraudulent.
        </p>
        
        <button onClick={handleClose} className={styles.closeButton}>
          I Understand
        </button>
      </div>
    </div>
  );
}
"use client";

import { useState, useEffect } from 'react';
import styles from './popup.module.css';

export default function OfficialNoticePopup() {
  // Track the sequence: 'hidden' or 'notice'
  const [popupState, setPopupState] = useState('hidden');

  useEffect(() => {
    const hasSeenNotice = sessionStorage.getItem('officialNoticeDismissed');
    
    if (!hasSeenNotice) {
      const timer = setTimeout(() => setPopupState('notice'), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseNotice = () => {
    sessionStorage.setItem('officialNoticeDismissed', 'true');
    setPopupState('hidden'); // Close completely
  };

  if (popupState === 'hidden') return null;

  return (
    <div className={styles.overlay}>
      {/* --- POPUP: OFFICIAL NOTICE --- */}
      {popupState === 'notice' && (
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
          
          <button onClick={handleCloseNotice} className={styles.closeButton}>
            I Understand
          </button>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './popup.module.css';

export default function OfficialNoticePopup() {
  // Track the sequence: 'hidden', 'notice', or 'ad'
  const [popupState, setPopupState] = useState('hidden');

  useEffect(() => {
    const hasSeenNotice = sessionStorage.getItem('officialNoticeDismissed');
    const hasSeenAd = sessionStorage.getItem('careersAdDismissed');
    
    if (!hasSeenNotice) {
      const timer = setTimeout(() => setPopupState('notice'), 500);
      return () => clearTimeout(timer);
    } else if (!hasSeenAd) {
      // Optional: Show the ad if they previously closed the notice but not the ad
      const timer = setTimeout(() => setPopupState('ad'), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseNotice = () => {
    sessionStorage.setItem('officialNoticeDismissed', 'true');
    setPopupState('ad'); // Transition to the advertisement
  };

  const handleCloseAd = () => {
    sessionStorage.setItem('careersAdDismissed', 'true');
    setPopupState('hidden'); // Close completely
  };

  if (popupState === 'hidden') return null;

  return (
    <div className={styles.overlay}>
      
      {/* --- POPUP 1: OFFICIAL NOTICE --- */}
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

      {/* --- POPUP 2: CAREERS ADVERTISEMENT --- */}
      {popupState === 'ad' && (
        <div className={styles.adModal} role="dialog" aria-modal="true">
          <button 
            onClick={handleCloseAd} 
            className={styles.closeAdButton} 
            aria-label="Close advertisement"
          >
            &times;
          </button>
          
          <div className={styles.imageContainer}>
            <Image
              src="/careers.jpeg"
              alt="Careers Advertisement"
              width={968}
              height={1280}
              className={styles.adImage}
              priority
            />
          </div>
        </div>
      )}
      
    </div>
  );
}
'use client';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './atm.module.css';
import Link from 'next/link';
import { useState } from 'react';


const faqData = [
  {
    id: 1,
    question: "Is the ATM cum Debit Card transferable?",
    answer: "No. The card is strictly non-transferable and must be used only by the Card Holder."
  },
  {
    id: 2,
    question: "Can the Bank cancel my ATM cum Debit Card?",
    answer: "Yes. The Bank reserves the right to cancel or deactivate the card at its discretion, without assigning any reason."
  },
  {
    id: 3,
    question: "How is the PIN issued and used?",
    answer: "A computer-generated 4-digit PIN is initially issued in a sealed and secure PIN mailer. Card Holders are advised to change the PIN immediately using the ATM. While choosing a PIN, avoid easily identifiable numbers such as: <ul><li>&#9679; Date of birth</li><li>&#9679; Telephone number</li><li>&#9679; Sequential or repeated numbers</li><li>&#9679; Account-related number sequences</li></ul>"
  },
  {
    id: 4,
    question: "How important is PIN confidentiality?",
    answer: "PIN confidentiality is the sole responsibility of the Card Holder. If both the card and PIN are accessed by an unauthorized person, the Bank will not be liable for any loss arising from such misuse."
  },
  {
    id: 5,
    question: "What should I do if my ATM cum Debit Card is lost or stolen?",
    answer: "Immediately inform the Bank branch from where the card was issued. Intimation can be given via phone, email, or other means, but must be confirmed in writing."
  },
  {
    id: 6,
    question: "Can the Bank debit from my account for card transactions?",
    answer: "Yes. The Card Holder authorizes the Bank to debit the linked account for: <ul><li>&#9679; All ATM withdrawals and transactions</li><li>&#9679; Applicable service charges</li></ul>The Bank's records will be considered final and binding."
  },
  {
    id: 7,
    question: "How do I close my account or surrender the ATM facility?",
    answer: "Customers wishing to close the linked account or discontinue ATM services must: <ul><li>&#9679; Submit a written request to the Bank.</li><li>&#9679; Surrender the ATM cum Debit Card along with the request.</li></ul>"
  },
  {
    id: 8,
    question: "What services are available through the ATM cum Debit Card?",
    answer: "<ul><li>&#9679; <strong>Cash Withdrawal:</strong> Minimum ₹100 and maximum ₹20,000 per day, subject to limits fixed by the Bank</li><li>&#9679; <strong>Balance Enquiry:</strong> View account balance on the ATM screen and receive a receipt</li><li>&#9679; <strong>Mini Statement:</strong> View last five transactions</li><li>&#9679; <strong>PIN Change:</strong> Change PIN directly at the ATM</li></ul>"
  },
  {
    id: 9,
    question: "Do I need to maintain a minimum balance?",
    answer: "Yes. Customers must maintain sufficient balance in the linked account to cover withdrawals and service charges."
  }
];

export default function MobilePage() {
    const [activeIndex, setActiveIndex] = useState(0); // Default first one open

    const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <>
      <Head>
        <title>ATM Debit Card - SSB Bank</title>
        <meta name="description" content="ATM Debit Card" />
      </Head>

      <Header />

      <main>
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.textWrapper}>
                    <h1>ATM Debit Card</h1>
                    <p>
                        Easy access to your money. Withdraw cash, make payments, and manage daily transactions securely with Shalini Bank's ATM Debit Card.
                    </p>
                    <Link href="/forms/ATM_Card_Form.pdf" className={styles.ctaButton} target='__blank' rel="noopener noreferrer">Apply now!</Link>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/atm_card.png"
                        alt="Mobile Banking Services"
                        width={564.55}
                        height={344}
                    />
                </div>
            </div>
          </section>
        <section className={styles.section} style={{marginBottom: 0}}>
             <div className={styles.mvCard}>
                <h3>Key Features</h3>
                <p><strong>Easy Cash Access</strong> - Withdraw cash conveniently from ATMs whenever you need</p>
                <p><strong>Cash Deposit Facility</strong> - Deposit cash directly through supported ATMs</p>
                <p><strong>Pay Online with Confidence</strong> - Use your debit card for secure online purchases and bill payments</p>
                <p><strong>Safe & Secure</strong> - EMV chip-enabled card for enhanced transaction security</p>
                <p><strong>Everyday Banking Made Simple</strong> - A reliable card for your daily banking needs</p>
             </div>
        </section>
         <section className={styles.section}>
            <div className={styles.accordion}>
            {faqData.map((item, index) => (
              <div key={item.id} className={styles.item}>
                <button 
                  className={activeIndex === index ? `${styles.questionBtn} ${styles.open}` : styles.questionBtn}
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={`${styles.icon} ${activeIndex === index ? styles.iconRotated : ''}`}>
                    <Image src="/caret.svg" alt="Caret Icon" width={24} height={24} />
                  </span>
                </button>
                
                <div className={`${styles.answerWrapper} ${activeIndex === index ? styles.open : ''}`}>
                  <div className={styles.answerContent}>
                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className={styles.resultsTable}>
                <thead>
                    <tr>
                        <th style={{borderTopLeftRadius: 'var(--radius-card)', borderTopRightRadius: 'var(--radius-card)', textAlign: 'center'}} colSpan={2}>
                            ATM Charges w.e.f. 01/10/2025
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>New ATM Card issue</td>
                        <td>₹150 + GST</td>
                    </tr>
                    <tr>
                        <td>Duplicate ATM Card issue</td>
                        <td>₹300 + GST</td>
                    </tr>
                    <tr>
                        <td>Repin Generation Charges</td>
                        <td>₹100 + GST</td>
                    </tr>
                    <tr>
                        <td>ATM Maintenance Charges</td>
                        <td>₹150 + GST</td>
                    </tr>
                    <tr>
                        <td>ATM Financial Transaction Charges (1<sup>st</sup> Three Transactions Free)</td>
                        <td>₹25 + GST</td>
                    </tr>
                    <tr>
                        <td>ATM non-Financial Transaction Charges</td>
                        <td>₹10 + GST</td>
                    </tr>
                </tbody>
            </table>
        </section>
      </main>

      <Footer />
    </>
  );
}
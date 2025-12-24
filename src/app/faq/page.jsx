'use client';

import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './faq.module.css';
import Image from 'next/image';

const faqData = [
  {
    id: 1,
    question: "What is KYC?",
    answer: "KYC is an acronym for \"Know your Customer\", a term used for customer identification. It involves making reasonable efforts to determine true identity and beneficial ownership of accounts, source of funds, the nature of customer's business, reasonableness of operations in the account in relation to the customer's business, etc which in turn helps the banks to manage their risks prudently. The objective of the KYC guidelines is to prevent banks being used, intentionally or unintentionally by criminal elements for money laundering. KYC has two components - Identity and Address. While identity remains the same, the address may change and hence the banks are required to periodically update their records."
  },
  {
    id: 2,
    question: "What is CKYC?",
    answer: "CKYC stands for Central Know Your Customer. It's like a single ID card for all your financial needs in India. Imagine having a single number that stores all your personal details (such as name, address, and ID proofs) in a secure, government-managed system. This number is referred to as your CKYC number, and it's a 14-digit unique code.<br/>With CKYC, you don't need to submit documents like your PAN card or Aadhaar card every time you deal with a bank, insurance company, or mutual fund. Once your CKYC is done, you can use this number to start new financial services quickly. It saves time, reduces paperwork, and makes life easier!<br/><br/><strong>For example:</strong><br/><ul><li>Opening a new bank account? Just share your CKYC number</li><li>Buying a mutual fund? No need to submit documents again</li><li>Getting insurance? Your CKYC number does the job</li></ul><br/>CKYC is managed by a government body called CERSAI (Central Registry of Securitisation Asset Reconstruction and Security Interest). They keep your information safe and share it with banks or companies only when needed."
  },
  {
    id: 3,
    question: "Once KYC requirements are complied while opening the account, whether the bank can again ask for KYC compliance from me?",
    answer: "Yes. To ensure that the latest details about the customer are available, banks have been advised to periodically update the customer identification data based upon the risk category of the customers. Banks create a customer profile based on details about the customer like social/financial status, nature of business activity, information about his clients' business and their location, the purpose and reason for opening the account, the expected origin of the funds to be used within the relationship and details of occupation/employment, sources of wealth or income, expected monthly remittance, expected monthly withdrawals etc. When the transactions in the account are observed not consistent with the profile, the bank may ask for any additional details / documents as required. This is just to confirm that the account is not being used for any Money Laundering/Terrorist/Criminal activities."
  },
  {
    id: 4,
    question: "Is there any procedure specified for Customer Identification?",
    answer: "Customer identification means identifying the customer and verifying his/her identity by using reliable, independent source documents, data or information. Banks have been advised to lay down Customer Identification Procedure to be carried out at different stages i.e. while establishing a banking relationship; carrying out a financial transaction or when the bank has a doubt about the authenticity/veracity or the adequacy of the previously obtained customer identification data."
  },
  {
    id: 5,
    question: " I had submitted my driving licence as a proof of identity and address but still the bank asked for a telephone / electricity bill / Gas Bill",
    answer: "There are two aspects of Customer Identification. One is establishing identity and the other is establishing a present residential address. For establishing identity, the bank requires any authentic document carrying a photo of the customer such as driving licence/ passport/ pan card/ voters' card etc. Though these documents carry the residential address of the customer, it may not be the present address. Therefore, in order to establish the present address of the customer, in addition to passport/ driving licence / voters' card / pan card, the bank may ask for utility bills such as Telephone / Electricity bill etc."
  },
  {
    id: 6,
    question: "Can my wife, who is not having any address proof in her name, open an account with the bank?",
    answer: "Yes. In such cases where the utility bills required for address verification are not in the name of the person who wants to open an account ( close relatives, e.g. wife, son, daughter and daughter and parents etc. who live with their husband, father/mother and son, as the case may be) , an identity document and a utility bill of the relative with whom the prospective customer is living along with a declaration from the relative that the said person (prospective customer) wanting to open an account is a relative and is staying with him/her is acceptable. As supplementary evidence, the bank may ask for a letter received through post for further confirmation."
  },
  {
    id: 7,
    question: "Whether a certificate from my employer is sufficient as identity as well as address proof for opening an account?",
    answer: "Banks rely on such certification only from corporate and other entities of repute provided that they are aware of the competent authority designated by the concerned employer to issue such certificate. In addition, banks also require at least one of the valid documents indicated above viz. Passport, Driving Licence, PAN Card, Voter's Identity Card etc. or utility bills for KYC purposes for opening bank accounts of salaried employees of corporate and other entities."
  },
  {
    id: 8,
    question: "Whether the information given by me to the bank under KYC is treated as confidential?",
    answer: "Yes. The information collected from the customer for the purpose of opening of account is treated as confidential and details thereof are not divulged for cross selling or any other similar purposes."
  },
  {
    id: 9,
    question: "If I refuse to give information on re-KYC asked by the bank, what action can the bank take against me?",
    answer: "Where the bank is unable to apply appropriate KYC measures due to non-furnishing of information and /or non-cooperation by the customer, the bank can consider closing the account or terminating the banking/business relationship after issuing due notice to the customer explaining the reasons for taking such a decision."
  }
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(0); // Default first one open

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>FAQ - SSB Bank</title>
      </Head>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          
          <div className={styles.header}>
            <h1 className={styles.title}>Frequently Asked Questions</h1>
          </div>

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

        </div>
      </div>

      <Footer />
    </>
  );
}
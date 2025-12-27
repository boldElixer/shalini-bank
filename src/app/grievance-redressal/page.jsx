'use client';

import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './grievance.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function GrievancePage() {
  return (
    <>
      <Head>
        <title>Grievance Redressal - SSB Bank</title>
        <meta name="description" content="Grievance Redressal Mechanism of Shalini Sahakari Bank Ltd." />
      </Head>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          
          <div className={styles.header}>
            <h1 className={styles.title}>Grievance Redressal</h1>
            <p className={styles.subtitle}>
              Help us take the necessary corrective action and serve you better.
            </p>
          </div>


          <section className={styles.levelSection}>
            <span className={styles.levelBadge}>Level 1</span>
            <h2 className={styles.levelTitle}>Submitting your complaint for the first time?</h2>
            <p className={styles.levelDesc}>
              You can reach out to us through any of the following channels for a quick resolution.
            </p>

            <div className={styles.l1Grid}>
              
              <div className={styles.channelBox}>
                <Image src="/grievance/EnvelopeSimple.svg" alt="Email" width={36} height={36} />
                <div className={styles.channelLabel}>Email us</div>
                <a href="mailto:customer.care@ssbbank.com" className={styles.l1Btn}>
                  customer.care@ssbbank.com
                </a>
              </div>


              <div className={styles.verticalDivider}><span className={styles.orText}>OR</span></div>


              <div className={styles.channelBox}>
                <Image src="/help/Newspaper.svg" alt="Online Form" width={36} height={36} />
                <div className={styles.channelLabel}>Submit Online</div>
                <Link href="/complaint-form" className={styles.formBtn}>Fill Complaint Form</Link>
              </div>


              <div className={styles.verticalDivider}><span className={styles.orText}>OR</span></div>


              <div className={styles.channelBox}>
                <Image src="/grievance/PhoneCall.svg" alt="Call" width={36} height={36} />
                <div className={styles.channelLabel}>Call us</div>
                <a href="tel:919920031925" className={styles.l1Btn}>+91-9920031925</a>
              </div>

            </div>
          </section>


          <section className={styles.levelSection}>
            <span className={styles.levelBadge}>Level 2</span>
            <h2 className={styles.levelTitle}>Not satisfied with the response?</h2>
            <p className={styles.levelDesc}>
              You may take up the matter further with the <strong>Branch Manager</strong>.
            </p>

            <div className={styles.officerCard}>
                <span className={styles.postTitle}>Branch Manager</span>
              <div className={styles.officerDetails}>
                <div>
                  <div className={styles.detailRow}><strong>Name:</strong> Neha Sudesh Wedhikar</div>
                  <div className={styles.detailRow}><strong>Ph No:</strong> 022-23086805/23093179</div>
                </div>
                <div>
                   <div className={styles.detailRow}><strong>Address:</strong> 395, N M Joshi Marg, Chinchpokli, Mumbai 400011</div>
                   <div className={styles.detailRow}>
                     (Monday - Saturday: 10am to 5pm, excluding holidays)
                   </div>
                </div>
              </div>
            </div>
          </section>


          <section className={styles.levelSection}>
            <span className={styles.levelBadge}>Level 3</span>
            <h2 className={styles.levelTitle}>Still not satisfied with the resolution?</h2>
            <p className={styles.levelDesc}>
              In case you are not satisfied with the resolution provided by the Bank, you may approach the Office of the Banking Ombudsman.
            </p>

            <div className={styles.l1Grid}>
              
              <div className={styles.channelBox}>
                <Image src="/grievance/EnvelopeSimple.svg" alt="Email" width={36} height={36} />
                <div className={styles.channelLabel}>Email</div>
                <a href="mailto:crpc@rbi.org.in" className={styles.l1Btn}>
                  crpc@rbi.org.in
                </a>
              </div>


              <div className={styles.verticalDivider}><span className={styles.orText}>OR</span></div>


              <div className={styles.channelBox}>
                <Image src="/help/Newspaper.svg" alt="Online Form" width={36} height={36} />
                <div className={styles.channelLabel}>Submit Online</div>
                <Link href="https://cms.rbi.org.in" target="_blank" className={styles.formBtn}>https://cms.rbi.org.in</Link>
              </div>


              <div className={styles.verticalDivider}><span className={styles.orText}>OR</span></div>


              <div className={styles.channelBox}>
                <Image src="/grievance/PhoneCall.svg" alt="Call" width={36} height={36} />
                <div className={styles.channelLabel}>Toll Free Number</div>
                <a href="tel:14448" className={styles.l1Btn}>14448</a>
                <div>(9:30 am to 5:15 pm)</div>
              </div>

            </div>

            <div className={styles.officerCard} style={{marginTop: 'var(--spacing-md)'}}>
              <div className={styles.officerDetails}>
                <div>
                  <div className={styles.detailRow}><strong>Complaints can be sent in physical mode to:</strong></div>
                  <div className={styles.detailRow}>Centralised Receipt and Processing Centre(CRPC)<br/>Reserve Bank of India,<br/>4th Floor, Sector 17,<br/>Chandigarh - 160017</div>
                </div>
                <div className={styles.linkBox}>
                   <Link href="https://rbidocs.rbi.org.in/rdocs/content/pdfs/RBIOS2021_121121_A.pdf" target="_blank" className={styles.formBtn}>Complaint Format</Link>
                    <Link href="https://rbidocs.rbi.org.in/rdocs/content/pdfs/RBIOS2021_amendments05082022.pdf" target="_blank" className={styles.formBtn}>RBI - Integrated Ombudsman Scheme, 2021</Link>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
}
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './about.module.css';
import jsonData from '@/data/bod.json';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - SSB Bank</title>
        <meta name="description" content="History and Mission of Shalini Sahakari Bank" />
      </Head>

      <Header />

      <main>
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.textWrapper}>
                    <h1>About Us</h1>
                    <p>
                        SSB established in 1982 is a pioneering cooperative bank committed to driving inclusive growth, financial empowerment, and economic resilience across Mumbai. Rooted in the values of community, transparency, and trust, the bank plays a crucial role in bridging the gap between traditional banking and grassroots entrepreneurship, especially in urban areas. Our customer-centric approach and cooperative model ensure that every member is not just a customer but a co-owner in the bank’s mission.
                    </p>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/about.png"
                        alt="About SSB Bank"
                        width={619}
                        height={575}
                    />
                </div>
            </div>
        </section>

        <div className={styles.container}>
            
          <section className={styles.section}>
              <div className={styles.mvCard}>
                <h3>Our Mission</h3>
                <p>
                  We are committed to providing accessible, transparent, and reliable banking services that promote financial independence, support entrepreneurship, and drive sustainable socio-economic development—especially for underserved communities.
                </p>
              </div>
              <div className={styles.mvCard}>
                <h3>Our Vision</h3>
                <p>
                  To be Mumbai's leading cooperative bank, delivering ethical, innovative, and inclusive financial solutions that strengthen local economies and enable every citizen to participate in India's growth.
                </p>
              </div>
          </section>

          <section className={styles.ValueSection}>
            <h2 className={styles.sectionTitle}>Core Values</h2>
            <p className={styles.sectionSubTitle}>The principles that define our commitment to you and our community.</p>
            <div className={styles.valuesGrid}>
              <div className={styles.valueItem}>
                <Image src="/values/1.svg" alt="Community First" width={36} height={36} />
                <h4>Community First</h4>
                <p>We believe in uplifting communities through cooperative efforts and shared prosperity</p>
              </div>
              <div className={styles.valueItem}>
                <Image src="/values/2.svg" alt="Integrity & Transparency" width={36} height={36} />
                <h4>Integrity & Transparency</h4>
                <p>Trust is the foundation of our relationships and we uphold it through transparency in every interaction</p>
              </div>
              <div className={styles.valueItem}>
                <Image src="/values/3.svg" alt="Innovation" width={36} height={36} />
                <h4>Innovation</h4>
                <p>We are committed to integrating cutting-edge technologies to ensure our members have access to the best banking solutions</p>
              </div>
              <div className={styles.valueItem}>
                <Image src="/values/4.svg" alt="Inclusive Growth" width={36} height={36} />
                <h4>Inclusive Growth</h4>
                <p>We empower every segment of society, from small farmers and artisans to urban entrepreneurs, by offering them tailored financial services</p>
              </div>
              <div className={styles.valueItem}>
                <Image src="/values/5.svg" alt="Trust & Transparency" width={36} height={36} />
                <h4>Trust & Transparency</h4>
                <p>Building long-lasting relationships based on honesty, integrity, and transparent banking practices</p>
              </div>
              <div className={styles.valueItem}>
                <Image src="/values/6.svg" alt="Community Empowerment" width={36} height={36} />
                <h4>Community Empowerment</h4>
                <p>Empowering individuals and local businesses by providing tailored financial products and services</p>
              </div>
            </div>
          </section>


          <section className={styles.TeamSection} id='BOD'>
            <h2 className={styles.sectionTitle}>Board of Directors</h2>
            <table className={styles.resultsTable}>
              <tbody>
                  {jsonData.map((item, index) => (
                      <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.designation}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
          </section>

          <section className={styles.section}>
             <div className={styles.mvCard}>
                <h3>Our History</h3>
                <p>
                  SSB began as a small cooperative bank with the purpose of serving local community, artisans, and small businesses in Mumbai. Over the decades, the bank has expanded its services to meet the needs of a growing and diverse population, adapting to changes in technology and the economic landscape while maintaining its commitment to cooperative principles. Today, SSB stands as a symbol of financial empowerment, a strong digital banking platform, and satisfied members. Shalini Sahakari Bank Ltd is a Co-operative entity founded in the year 1982 and started working from the March 1982.
                </p>
                <p>
                  The Late Shri ManoharMama Phalke, Ex-MLC was the main architect of this financial institution which was founded in 1982. The founding architect with his high sense of service towards humanity gathered around him like minded colleagues and convinced them that through this financial entity, we could help the downtrodden and the marginalized public and uplift them. Thus inspired by the divine ideals for the economic and material well-being of the lower strata of the society, this bank was started with the modest beginning.
                </p>
                <p>
                  The invaluable leadership skills and contribution rendered by Late Shri ManoharMama Phalke and the patronage and support of his colleagues, the bank has made a phenomenal progress. The main object of establishing this bank was to have a financially sound and stable organization so that the poor and the needy could be helped and their financial grievances can be addressed. The bank has 10191shareholders and adding new every day.
                </p>
                <p>
                  To summarize, we would like to be an effective servant and provider in the financial necessity and suitable custodian in the common public’s debts and savings and making our bank a responsive, sustainable and viable cooperative financial entity. To protect the interests of the weaker sections of the society we are based on the values of Self-help, self-responsibility, equality and solidarity. We believe in the ethical values of honesty, clarity, social responsibility and caring for others and notably our customers.
                </p>
             </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './esg.module.css';

export default function ESGPage() {
  return (
    <>
      <Head>
        <title>ESG - Shalini Sahakari Bank</title>
        <meta name="description" content="Environmental, Social and Governance initiatives at SSB" />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <div className={styles.initiativeCard}>
                    <div className={styles.initiativeContent}>
                        <h3 style={{fontSize: '2.8rem'}}>Being Responsible, Being Sustainable</h3>
                        <p>Driving sustainable finance with purpose, our ESG commitment puts people, planet, and principles at the heart of everything we do. We support responsible growth by financing greener initiatives, empowering communities, and upholding the highest standards of governance—building long-term value for our customers and a more resilient future for all.</p>
                    </div>
                    <Image 
                        src="/esg/esg_hero.png" 
                        alt="Environmental, Social & Governance"
                        width={619}
                        height={575}
                    />
                </div>
            </section>
        </div>

        <div className={styles.container}>
          <section className={styles.section}>
            <div className={styles.philosophyGrid}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <Image src="/esg/eye.svg" alt="Eye Icon" width={41.25} height={27.5} />
                    <h3>Our Vision</h3>
                </div>
                <p>
                  To be the trusted financial service provider of choice for our customers, 
                  thereby creating sustainable value for our stakeholders through responsible practices.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <Image src="/esg/plant.svg" alt="Plant Icon" width={41.24} height={33} />
                    <h3>Our ESG Philosophy</h3>
                </div>
                <p>
                  To adopt sustainable business practices that ensure the long term success of the 
                  organization and have a positive impact on the environment and society at large.
                </p>
              </div>
            </div>
          </section>
        </div>


        <section className={styles.sdgSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Contributing to UN Sustainable Development Goals</h2>
            <div className={styles.sdgGrid}>
                <Image src="/goals/1.png" alt="No Poverty" width={150} height={150} />
                <Image src="/goals/2.png" alt="Good Health" width={150} height={150} />
                <Image src="/goals/3.png" alt="Quality Education" width={150} height={150} />
                <Image src="/goals/4.png" alt="Economic Growth" width={150} height={150} />
                <Image src="/goals/5.png" alt="Industry, Innovation & Infrastructure" width={150} height={150} />
                <Image src="/goals/6.png" alt="Reduced Inequalities" width={150} height={150} />
            </div>
          </div>
        </section>


        <div className={styles.container}>
            <section className={styles.section}>
                <div className={styles.initiativeCard}>
                    <Image 
                        src="/esg/esg_paper.png" 
                        alt="Paperless Banking"
                        width={619}
                        height={529}
                    />
                    <div className={styles.initiativeContent}>
                        <h3>Minimising Paper Consumption</h3>
                        <p>Digitisation of operations and encouraging adoption of digital solutions by customers</p>
                        <p>A4 sized paper sheets saved through digitisation efforts</p>
                        <p>Shifting to BIS ECO (Bureau of Indian Standards Eco) mark A4 paper</p>
                    </div>
                </div>
            </section>
            <br/><br/>
        </div>

      </main>

      <Footer />
    </>
  );
}
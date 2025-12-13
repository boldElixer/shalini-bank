import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './about.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - SSB Bank</title>
        <meta name="description" content="History and Mission of Shalini Sahakari Bank" />
      </Head>

      <Header />

      <main>
        {/* --- Hero Section --- */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>About Us</h1>
            <p>
              Established in 1982, SSB is a pioneering cooperative bank committed to 
              driving inclusive growth, financial empowerment, and economic resilience across Mumbai.
            </p>
          </div>
        </section>

        <div className={styles.container}>
            
          {/* --- Mission & Vision [cite: 9, 11] --- */}
          <section className={styles.section}>
            <div className={styles.mvGrid}>
              <div className={styles.mvCard}>
                <h3>Our Mission</h3>
                <p>
                  We are committed to providing accessible, transparent, and reliable banking services 
                  that promote financial independence, support entrepreneurship, and drive sustainable 
                  socio-economic development especially for underserved communities.
                </p>
              </div>
              <div className={styles.mvCard}>
                <h3>Our Vision</h3>
                <p>
                  To be Mumbai's leading cooperative bank delivering ethical, innovative and inclusive 
                  financial solutions that strengthen local economies and enable every citizen to 
                  participate in India's growth.
                </p>
              </div>
            </div>
          </section>

          {/* --- Core Values [cite: 13] --- */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Core Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueItem}>
                <span className={styles.valueIcon}>👥</span>
                <h4>Community First</h4>
                <p>We believe in uplifting communities through cooperative efforts and shared prosperity.</p>
              </div>
              <div className={styles.valueItem}>
                <span className={styles.valueIcon}>🔎</span>
                <h4>Integrity & Transparency</h4>
                <p>Trust is the foundation of our relationships and we uphold it through transparency.</p>
              </div>
              <div className={styles.valueItem}>
                <span className={styles.valueIcon}>💡</span>
                <h4>Innovation</h4>
                <p>Integrating cutting-edge technologies to ensure members have access to the best banking solutions.</p>
              </div>
              <div className={styles.valueItem}>
                <span className={styles.valueIcon}>🌱</span>
                <h4>Inclusive Growth</h4>
                <p>We empower every segment of society, from small farmers to urban entrepreneurs.</p>
              </div>
            </div>
          </section>

          {/* --- History Section [cite: 39] --- */}
          <section className={styles.historySection}>
             <div className={styles.historyContent}>
                <h2>Our History</h2>
                <p>
                  Shalini Sahakari Bank Ltd is a Cooperative entity founded in the year 1982. 
                  The Late Shri ManoharMama Phalke, Ex-MLC was the main architect of this financial institution.
                </p>
                <p>
                  The founding architect with his high sense of service towards humanity gathered around him 
                  like-minded colleagues and convinced them that through this financial entity, we could help 
                  the downtrodden and the marginalized public and uplift them.
                </p>
                <p>
                  Today, SSB stands as a symbol of financial empowerment with over 10,191 shareholders, 
                  adapting to changes in technology while maintaining its commitment to cooperative principles.
                </p>
             </div>
          </section>

          {/* --- Board of Directors [cite: 32] --- */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Board of Directors</h2>
            <div className={styles.teamGrid}>
               {/* Using a helper array to render the grid 8 times as per the PDF grid */}
               {[1, 2, 3, 1, 2, 3, 1, 2, 3].map((item) => (
                  <div key={item} className={styles.teamMember}>
                    <div className={styles.memberImage}>
                      {/* Replace with actual board member photos */}
                      <Image 
                        src={`/chooseIcons/${item}.png`}
                        alt="Director Name"
                        fill
                        style={{objectFit: 'cover'}}
                      />
                    </div>
                    <div className={styles.memberName}>Director Name</div>
                    <div className={styles.memberRole}>Director</div>
                  </div>
               ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
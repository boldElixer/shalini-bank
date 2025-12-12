import Image from 'next/image';
import styles from './WhyChooseUs.module.css';

const FeatureIcon = ({ title, icon }) => (
  <div className={styles.featureItem}>
    <Image src={`/chooseIcons/${icon}.png`} alt={title} width={60} height={60} className={styles.featureIcon} />
    <div className={styles.featureTitle}>{title}</div>
  </div>
);

export default function WhyChooseUs() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2>Why to choose us?</h2>
            <p>We are more than just a bank. We are your financial partners, dedicated to your growth and success.</p>
          </div>
          
          <div className={styles.features}>
            <FeatureIcon title="Member Oriented" icon="1" />
            <FeatureIcon title="Community Impact" icon="2" />
            <FeatureIcon title="Ethical Banking" icon="3" />
            <FeatureIcon title="Trust and Integrity" icon="4" />
            <FeatureIcon title="Tailored Solution" icon="5" />
            <FeatureIcon title="Innovative and Accessible" icon="6" />
          </div>
        </div>
      </div>
    </section>
  );
}
import styles from './WhyChooseUs.module.css';

const FeatureIcon = ({ title, icon }) => (
  <div className={styles.featureItem}>
    <div className={styles.iconCircle}>{icon}</div>
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
            <FeatureIcon title="Member Oriented" icon="👤" />
            <FeatureIcon title="Community Impact" icon="📈" />
            <FeatureIcon title="Ethical Banking" icon="🏛️" />
            <FeatureIcon title="Trust & Integrity" icon="🤝" />
            <FeatureIcon title="Tailored Solution" icon="📊" />
            <FeatureIcon title="Innovative Access" icon="💳" />
          </div>
        </div>
      </div>
    </section>
  );
}
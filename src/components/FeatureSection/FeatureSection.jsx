import Image from 'next/image';
import styles from './FeatureSection.module.css';

export default function FeatureSection({ title, points, buttonText, imageSrc, reverse }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Adds 'reversed' class if prop is true */}
        <div className={`${styles.grid} ${reverse ? styles.reversed : ''}`}>
          
          <div className={styles.imageWrapper}>
            <Image 
              src={imageSrc} 
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className={styles.contentWrapper}>
            <h2>{title}</h2>
            <div className={styles.checkList}>
              {points.map((point, index) => (
                <div key={index} className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
            <button className={styles.button}>{buttonText}</button>
          </div>

        </div>
      </div>
    </section>
  );
}
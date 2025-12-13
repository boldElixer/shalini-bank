import Image from 'next/image';
import styles from './FeatureSection.module.css';

export default function FeatureSection({ title, points, buttonText, imageSrc, reverse }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
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
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.checkList}>
              {points.map((point, index) => (
                <div key={index} className={styles.checkItem}>
                  <span className={styles.checkIcon}><Image src="/checklist.svg" alt="Check" width={16.97} height={12.02} /></span>
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
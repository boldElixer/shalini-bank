import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { siteRoutes } from '@/data/siteRoutes';
import styles from './sitemap.module.css';

export const metadata = {
  title: 'Sitemap',
  description: 'Explore all sections and services of Shalini Sahakari Bank through our comprehensive sitemap.',
};

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Sitemap</h1>
          </header>

          <div className={styles.sitemapGrid}>
            {siteRoutes.map((section, idx) => (
              <section key={idx} className={styles.section}>
                <h2 className={styles.categoryTitle}>{section.category}</h2>
                <ul className={styles.linkList}>
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx} className={styles.linkItem}>
                      <Link href={link.href} className={styles.link}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
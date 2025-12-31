'use client';

import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { siteRoutes } from '@/data/siteRoutes';
import styles from './sitemap.module.css';

export default function SitemapPage() {
  return (
    <>
      <Head>
        <title>Sitemap - SSB Bank</title>
      </Head>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          
          <div className={styles.header}>
            <h1 className={styles.title}>Sitemap</h1>
          </div>

          <div className={styles.sitemapGrid}>
            {siteRoutes.map((section, idx) => (
              <div key={idx} className={styles.section}>
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
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
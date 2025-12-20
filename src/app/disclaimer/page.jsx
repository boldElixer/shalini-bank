import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './disclaimer.module.css';

export default function DisclaimerPage() {
  return (
    <>
      <Head>
        <title>Disclaimer - Shalini Sahakari Bank</title>
        <meta name="description" content="Legal Disclaimer - Shalini Sahakari Bank" />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>Disclaimer</h1>
                <p>
                    Shalini Sahakari Bank Ltd. maintains this website (the “Site”) to provide general information, education, and communication to customers and the public. The information contained on this Site is provided for informational purposes only and should not be construed as financial, legal, or professional advice.
                </p>
                <p>
                    You may browse the Site and download materials displayed on the Site solely for personal and non-commercial use, provided that all copyright, trademark, and other proprietary notices are retained. No part of the content on this Site, including text, graphics, images, audio, and video, may be copied, reproduced, distributed, modified, transmitted, republished, or used for any public or commercial purpose without the prior written consent of Shalini Sahakari Bank Ltd.
                </p>
                <p>
                    While the Bank endeavours to ensure that the information on this Site is accurate and up to date in accordance with applicable laws, regulations, and guidelines issued by the Reserve Bank of India (RBI) and other relevant regulatory authorities, the Bank makes no representations or warranties, express or implied, regarding the completeness, accuracy, reliability, or suitability of the information provided.
                </p><br/>
                <h3>Limitation of Liability</h3>
                <p>
                    Shalini Sahakari Bank Ltd. shall not be liable for any loss, damage, cost, or expense of any kind, whether direct, indirect, incidental, consequential, or otherwise, arising out of or in connection with the access to, use of, or reliance on the information contained on this Site, including but not limited to any errors or omissions, interruptions, delays, or technical failures. Users are advised to verify information independently and consult the Bank directly for official, current, and binding information.
                </p>
                <p>
                    Access to and use of this Site are subject to these terms and conditions and all applicable laws and regulations. By accessing and browsing the Site, you agree to be bound by these terms without limitation or qualification. Any prior agreements, understandings, or communications between you and the Bank relating to the subject matter hereof shall stand superseded.
                </p>
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}
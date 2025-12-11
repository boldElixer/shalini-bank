import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import FeatureSection from '@/components/FeatureSection/FeatureSection';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>SSB Bank - Financial Services</title>
        <meta name="description" content="Customer centric banking" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <div className={styles.hero}>
           {/* <Image 
             src="https://placehold.co/1920x800/e0e0e0/555?text=Banking+Hero+Image" 
             alt="Banking Hero"
             fill
             style={{ objectFit: 'cover' }}
             priority
           /> */}
        </div>

        <FeatureSection 
          title="Customer-Centric & Trust-Focused"
          points={[
            "Your Trusted Partner in Financial Growth",
            "Empowering individuals, businesses, and communities through smart banking solutions."
          ]}
          buttonText="Open Account"
          // imageSrc="https://placehold.co/600x450/png?text=Meeting"
        />

        <FeatureSection 
          reverse={true}
          title="Community & Financial Inclusion"
          points={[
            "Building Prosperity, One Family at a Time",
            "Empowering rural and urban lives with inclusive financial services",
            "From Microfinance to housing loans — we grow together"
          ]}
          buttonText="Apply for loan"
          // imageSrc="https://placehold.co/600x450/png?text=Family"
        />

        <FeatureSection 
          title="Innovation & Accessibility"
          points={[
            "Banking Made Simple, Secure, and Seamless",
            "Experience next-generation digital banking with personal care and trust",
            "24/7 access to your finances — anytime, anywhere"
          ]}
          buttonText="Mobile Banking"
          // imageSrc="https://placehold.co/600x450/png?text=Digital+Banking"
        />

        <FeatureSection 
          reverse={true}
          title="Stability & Growth"
          points={[
            "Decades of Trust. Future-Ready Banking",
            "Your financial journey starts here — reliable, transparent, and secure",
            "Serving individuals, SMEs, and communities with excellence"
          ]}
          buttonText="Our Story"
          // imageSrc="https://placehold.co/600x450/png?text=Growth"
        />

        <WhyChooseUs />
        
      </main>

      <Footer />
    </>
  );
}
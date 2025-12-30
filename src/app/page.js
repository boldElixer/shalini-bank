import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import FeatureSection from '@/components/FeatureSection/FeatureSection';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import styles from './page.module.css';
import HeroCarousel from '@/components/HeroCarousel/HeroCarousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>SSB Bank - Financial Services</title>
        <meta name="description" content="Customer centric banking" />
      </Head>

      <Header />

      <main>
        <div className={styles.hero}>
          <HeroCarousel />
        </div>

        <FeatureSection 
          title="Customer-Centric & Trust-Focused"
          points={[
            "Your Trusted Partner in Financial Growth",
            "Empowering individuals, businesses, and communities through smart banking solutions"
          ]}
          buttonLink="/become-a-customer"
          buttonText="Open Account"
          imageSrc="/features/customer.png"
        />

        <FeatureSection 
          reverse={true}
          title="Community & Financial Inclusion"
          points={[
            "Building Prosperity, One Family at a Time",
            "Empowering rural and urban lives with inclusive financial services",
            "From Microfinance to housing loans — we grow together"
          ]}
          buttonLink="/loans"
          buttonText="Apply for loan"
          imageSrc="/features/loan.png"
        />

        <FeatureSection 
          title="Innovation & Accessibility"
          points={[
            "Banking Made Simple, Secure, and Seamless",
            "Experience next-generation digital banking with personal care and trust",
            "24/7 access to your finances — anytime, anywhere"
          ]}
          buttonLink="/mobile-banking"
          buttonText="Mobile Banking"
          imageSrc="/features/innovation.png"
        />

        <FeatureSection 
          reverse={true}
          title="Stability & Growth"
          points={[
            "Decades of Trust. Future-Ready Banking",
            "Your financial journey starts here — reliable, transparent, and secure",
            "Serving individuals, SMEs, and communities with excellence"
          ]}
          buttonLink="/financials"
          buttonText="Our Story"
          imageSrc="/features/growth.png"
        />

        <WhyChooseUs />
        
      </main>

      <Footer />
    </>
  );
}
// src/app/success/page.jsx
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SuccessClient from './SuccessClient';

export const metadata = {
  title: 'Success - Shalini Sahakari Bank',
  description: 'Your complaint has been submitted successfully.',
};

export default function SuccessPage() {
  return (
    <>
      <Header />
      <main>
        <SuccessClient />
      </main>
      <Footer />
    </>
  );
}
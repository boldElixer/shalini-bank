import { Poppins } from 'next/font/google';
import './globals.css';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

// Initialize the font with the necessary weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Light, Regular, Medium, SemiBold, Bold
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://ssbbank.bank.in'),
  title: {
    default: 'Shalini Sahakari Bank Ltd.',
    template: '%s | Shalini Sahakari Bank'
  },
  description: 'Shalini Sahakari Bank Ltd. offers secure and reliable banking services including Savings, Loans, and Mobile Banking.',
  keywords: ['Shalini Sahakari Bank', 'SSB Bank', 'Cooperative Bank', 'Banking Services India', 'Loans', 'Savings Account'],
  authors: [{ name: 'Shalini Sahakari Bank Ltd.' }],
  creator: 'Shalini Sahakari Bank Ltd.',
  publisher: 'Shalini Sahakari Bank Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Shalini Sahakari Bank Ltd.',
    description: 'Providing secure banking solutions for a better future.',
    url: 'https://ssbbank.bank.in',
    siteName: 'Shalini Sahakari Bank',
    images: [
      {
        url: '/header.svg',
        width: 1200,
        height: 630,
        alt: 'Shalini Sahakari Bank Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
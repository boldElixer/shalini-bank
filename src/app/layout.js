import { Poppins } from 'next/font/google';
import './globals.css';

// Initialize the font with the necessary weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Light, Regular, Medium, SemiBold, Bold
  display: 'swap',
});

export const metadata = {
  title: 'Shalini Bank',
  description: 'Customer centric banking solutions',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
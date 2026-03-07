export const dynamic = 'force-static';

export default function robots() {
  return {
    // Notice that rules is now an array [] containing multiple objects {}
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/', 
      },
      {
        // This explicitly allows the Facebook and WhatsApp scrapers
        userAgent: 'facebookexternalhit',
        allow: '/',
      }
    ],
    sitemap: 'https://ssbbank.bank.in/sitemap.xml',
  };
}
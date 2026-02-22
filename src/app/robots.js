export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Add any private paths here
    },
    sitemap: 'https://ssbbank.bank.in/sitemap.xml',
  };
}
import { siteRoutes } from '@/data/siteRoutes';

export default function sitemap() {
  const baseUrl = 'https://ssbbank.bank.in';

  // Flatten your siteRoutes data into a format Google understands
  const routes = siteRoutes.flatMap((category) =>
    category.links.map((link) => ({
      url: `${baseUrl}${link.href}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }))
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...routes,
  ];
}
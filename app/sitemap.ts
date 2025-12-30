import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Aqui você define a URL base do seu site
  const baseUrl = 'https://www.mkcodesolutions.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly', // Frequência que a página muda (yearly, monthly, weekly, daily)
      priority: 1, // Prioridade da página (1 é a mais alta, para a home)
    },
    // Se você criar outras páginas no futuro (ex: /sobre, /contato),
    // basta adicionar novos objetos aqui nesta lista.
  ];
}
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Aplica a regra para todos os robôs (Google, Bing, etc)
      allow: '/',     // Permite ler todo o site
      disallow: '/private/', // Exemplo: Bloqueia pastas privadas (se tiver)
    },
    sitemap: 'https://www.mkcodesolutions.com/sitemap.xml', // Aponta para o sitemap que criamos no passo 1
  };
}
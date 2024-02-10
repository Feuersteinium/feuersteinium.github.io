import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: 'https://feuerstein.dev',
    items: await pagesGlobToRssItems(import.meta.glob('./blog/*.md')),
    customData: `<language>en-us</language>`,
  });
}

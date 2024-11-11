import { fetchStrapiData } from '@/queries/strapiQueries';
import type { CollectionEntry } from 'astro:content';

const data = await fetchStrapiData('/global');
const { seo } = data;

interface Author {
  fullName: string;
}

const jsonLDGenerator = ({
  type,
  post,
  url,
}: {
  type: string;
  post: CollectionEntry<'articles'> & { data: { author: Author } };
  url: string;
}) => {
  if (type === 'post') {
    const { title, description, publishedAt, image, author } = post.data;
    return `<script type="application/ld+json">
          {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": "${url}"
                  },
                  "headline": "${title}",
                  "description": "${description}",
                  "image": "${image.url}",
                  "author": {
                      "@type": "Person",
                      "name": "${author?.fullName}"
                  },

                  "datePublished": "${publishedAt}"

              }
              </script>`;
  }
  return `<script type="application/ld+json">
        ${JSON.stringify(seo?.jsonData, null, 2)}
          </script>`;
};

export default jsonLDGenerator;

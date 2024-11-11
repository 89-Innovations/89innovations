export const getStrapiURL = () => {
  return import.meta.env.PUBLIC_STRAPI_URL || 'http://localhost:1337';
};

export const getStrapiMedia = (url: string | null) => {
  if (url === null) return null;
  if (url.startsWith('data:')) return url;
  if (url.startsWith('http') || url.startsWith('//')) return url;
  return `${getStrapiURL()}${url}`;
};

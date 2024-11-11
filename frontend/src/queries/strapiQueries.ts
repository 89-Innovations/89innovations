import { getStrapiURL } from '@/utils/strapi';

export const fetchStrapiData = async (
  endpoint: string,
  _token: string | null = null
) => {
  try {
    const headers: Record<string, string> = {};
    const res = await fetch(`${getStrapiURL()}/api${endpoint}`, { headers });

    if (!res.ok) {
      throw new Error('An error occurred while fetching the data');
    }

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

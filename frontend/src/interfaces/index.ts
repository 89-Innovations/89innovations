export interface Logo {
  href: string;
  image: {
    url: string | null;
    alternativeText: string;
  };
}

export interface Testimonial {
  id: number;
  review: string;
  name: string;
  isFeatured: boolean;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  summary: string;
  image: {
    url: string;
    alternativeText?: string;
  };
}

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
  icon: {
    url: string;
    alternativeText: string;
  };
  link: {
    href: string;
    label: string;
  };
  description: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface FAQs {
  id: number;
  name: string;
  slug: string;
  faqs: FAQ[];
}

export interface FaqSectionProps {
  faqCategories: FAQs[];
}

import type { FaqSectionProps } from '@/interfaces';
import { useState } from 'react';
import FaqItem from './FaqItem';

const FaqSection = ({ faqCategories }: FaqSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState(
    faqCategories.length > 0 ? faqCategories[0].id : null
  );

  // Determine which FAQs to display based on the selected category
  const displayedFaqs =
    faqCategories.find((cat) => cat.id === selectedCategory)?.faqs || [];

  return (
    <div className='mx-auto max-w-4xl mb-32 divide-y divide-gray-900/10'>
      {/* Category Buttons */}
      <div className='justify-center items-center align-middle flex flex-wrap gap-4 mb-8'>
        {faqCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded uppercase font-semibold border-2 text-primary font-heading tracking-tight text-xl ${
              selectedCategory === category.id ? 'bg-gray-200' : 'bg-white'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <dl className='mt-10 bg-white divide-y divide-gray-900/10'>
        {displayedFaqs.map((faq) => (
          <FaqItem key={faq.id} faq={faq} />
        ))}
      </dl>
    </div>
  );
};

export default FaqSection;

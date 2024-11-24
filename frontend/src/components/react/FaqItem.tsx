import type { FAQ } from '@/interfaces';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import ReactMarkdown from 'react-markdown';

const FaqItem = ({ faq }: { faq: FAQ }) => {
  return (
    <Disclosure key={faq.question} as='div' className='py-6'>
      <dt>
        <DisclosureButton className='group flex w-full items-start justify-between text-left text-primary'>
          <span className='text-xl uppercase font-heading font-semibold'>
            {faq.question}
          </span>
          <span className='ml-6 flex h-7 items-center'>
            <PlusIcon
              aria-hidden='true'
              className='size-6 group-data-[open]:hidden'
            />
            <MinusIcon
              aria-hidden='true'
              className='size-6 [.group:not([data-open])_&]:hidden'
            />
          </span>
        </DisclosureButton>
      </dt>
      <DisclosurePanel
        as='dd'
        className='mt-2 prose max-w-none prose-a:text-accent prose-a:no-underline hover:prose-a:underline'
      >
        <ReactMarkdown className=''>{faq.answer}</ReactMarkdown>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default FaqItem;

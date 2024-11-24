import type { Testimonial } from '@/interfaces';
import { cardVariants, featuredVariants } from '@/lib/motion';
import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo } from 'react';

interface Props {
  testimonials: Testimonial[];
  numberOfColumns: number;
  description: string;
}

const Testimonials = ({
  testimonials,
  numberOfColumns,
  description,
}: Props) => {
  const featuredTestimonial = testimonials.find(
    (testimonial) => testimonial.isFeatured
  );

  const regularTestimonials = testimonials.filter(
    (testimonial) => !testimonial.isFeatured
  );

  const columns: Testimonial[][] = Array.from(
    { length: numberOfColumns },
    () => []
  );

  regularTestimonials.forEach((testimonial, index) => {
    columns[index % numberOfColumns].push(testimonial);
  });

  // Group columns into column groups (pairs)
  const nestedTestimonials = [];
  for (let i = 0; i < columns.length; i += 2) {
    nestedTestimonials.push(columns.slice(i, i + 2));
  }

  return (
    <div>
      <p className='lg:max-w-4xl max-w-screen-sm mx-auto lg:text-lg leading-7 text-secondary text-center -mt-8'>
        {description}
      </p>

      <div className='mx-auto mt-16 grid max-w-4xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-primary sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4'>
        {/* Featured Testimonial */}
        <motion.figure
          variants={featuredVariants}
          initial='hidden'
          animate='visible'
          whileHover={{ scale: 1.02 }}
          className='rounded-2xl bg-white shadow-lg ring-1 ring-primary/5 sm:col-span-2 xl:col-start-2 xl:row-end-1'
        >
          <blockquote className='p-6 text-lg font-semibold leading-7 tracking-tight text-primary sm:p-12 sm:text-xl sm:leading-8'>
            <p>{`“${featuredTestimonial?.review}”`}</p>
          </blockquote>
          <figcaption className='flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-primary/10 px-6 py-4 sm:flex-nowrap'>
            <div className='flex-auto'>
              <div className='font-semibold'>- {featuredTestimonial?.name}</div>
            </div>
          </figcaption>
        </motion.figure>

        {/* Map over nestedTestimonials */}
        {nestedTestimonials.map((columnGroup, columnGroupIdx) => (
          <div
            key={columnGroupIdx}
            className='space-y-8 xl:contents xl:space-y-0'
          >
            {columnGroup.map((column, columnIdx) => (
              <div
                key={columnIdx}
                className={cn(
                  (columnGroupIdx === 0 && columnIdx === 0) ||
                    (columnGroupIdx === nestedTestimonials.length - 1 &&
                      columnIdx === columnGroup.length - 1)
                    ? 'xl:row-span-2'
                    : 'xl:row-start-1',
                  'space-y-8'
                )}
              >
                <AnimatePresence>
                  {column.map((testimonial, idx) => {
                    // Generate a random starting position for each card
                    const randomPosition = useMemo(() => {
                      return {
                        x: Math.floor(Math.random() * 200) - 100, // Random value between -100 and 100
                        y: Math.floor(Math.random() * 200) - 100,
                      };
                    }, []);

                    return (
                      <motion.figure
                        key={testimonial.id}
                        className='rounded-2xl bg-white p-6 shadow-lg ring-1 ring-primary/5'
                        custom={randomPosition}
                        variants={cardVariants}
                        initial='offscreen'
                        animate='onscreen'
                        exit='offscreen'
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          duration: 0.2,
                          delay: (columnGroupIdx * column.length + idx) * 0.1,
                        }}
                      >
                        <blockquote className='text-primary'>
                          <p>{`“${testimonial.review}”`}</p>
                        </blockquote>
                        <figcaption className='mt-6 flex items-center gap-x-4'>
                          <div>
                            <div className='font-semibold'>
                              - {testimonial.name}
                            </div>
                          </div>
                        </figcaption>
                      </motion.figure>
                    );
                  })}
                </AnimatePresence>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

import { motion } from 'framer-motion';
import ImageComponent from './ImageComponent';

interface Image {
  url: string;
  alternativeText: string;
}

interface HeroImagesProps {
  images: Image[];
}

const HeroImages = ({ images }: HeroImagesProps) => {
  // Define container variants for each group
  const containerVariants = {
    hidden: {},
    visible: (delay = 0) => ({
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay,
      },
    }),
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
  };

  const group1 = images.slice(0, 1);
  const group2 = images.slice(1, 3);
  const group3 = images.slice(3);

  return (
    <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
      {/* First Column */}
      <motion.div
        className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        custom={0} // No delay
      >
        {group1.map((image, index) => (
          <motion.div className='relative' key={index} variants={imageVariants}>
            <ImageComponent
              src={image.url}
              alt={image.alternativeText || 'Hero Image'}
              loading='eager'
              className='aspect-[2/3] w-full h-auto rounded-xl object-cover shadow-lg'
            />

            <div className='absolute inset-0 rounded-xl ring-1 ring-gray-900/10'></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Second Column */}
      <motion.div
        className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        custom={0.15} // Delay the start of this group's animation
      >
        {group2.map((image, index) => (
          <motion.div className='relative' key={index} variants={imageVariants}>
            <ImageComponent
              src={image.url}
              alt={image.alternativeText || 'Hero Image'}
              loading='eager'
              className='aspect-[2/3] w-full h-auto rounded-xl object-cover shadow-lg'
            />
            <div className='absolute inset-0 rounded-xl ring-1 ring-gray-900/10'></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Third Column */}
      <motion.div
        className='w-44 flex-none space-y-8 pt-32 sm:pt-0'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        custom={0.3} // Further delay
      >
        {group3.map((image, index) => (
          <motion.div className='relative' key={index} variants={imageVariants}>
            <ImageComponent
              src={image.url}
              alt={image.alternativeText || 'Hero Image'}
              loading='eager'
              className='aspect-[2/3] w-full h-auto rounded-xl object-cover shadow-lg'
            />
            <div className='absolute inset-0 rounded-xl ring-1 ring-gray-900/10'></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroImages;

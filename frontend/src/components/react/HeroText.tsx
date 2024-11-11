import { motion } from 'framer-motion';
import Link from './Link';

interface HeroTextProps {
  heading: string;
  subheading: string;
  cta: {
    label: string;
    href: string;
    style: 'primary' | 'secondary' | 'plain' | 'animated';
  }[];
}

const HeroText = ({ heading, subheading, cta }: HeroTextProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        // when: 'beforeChildren',
        staggerChildren: 0.13,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className='relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.h1
        className='text-4xl font-bold tracking-tighter font-heading text-primary sm:text-6xl'
        variants={itemVariants}
      >
        {heading}
      </motion.h1>
      <motion.p
        className='mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'
        variants={itemVariants}
      >
        {subheading}
      </motion.p>
      <motion.div
        className='mt-10 flex items-center gap-x-4 lg:gap-x-6'
        variants={itemVariants}
      >
        {cta.map((button, index) => (
          <Link href={button.href} style={button.style} block key={index}>
            {button.label}
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroText;

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
      className='mx-auto max-w-2xl lg:text-left text-center lg:mx-0 lg:flex-auto'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.h1
        className='mt-10 text-pretty font-heading text-primary uppercase font-bold text-3xl sm:text-5xl lg:text-7xl tracking-tight'
        variants={itemVariants}
      >
        {heading}
      </motion.h1>
      <motion.p
        className='mt-8 text-pretty text-lg font-medium text-secondary sm:text-xl/8'
        variants={itemVariants}
      >
        {subheading}
      </motion.p>
      <motion.div
        className='mt-10 mx-auto lg:mx-0 flex items-center gap-6 max-w-md lg:max-w-56 flex-col sm:flex-row'
        variants={itemVariants}
      >
        {cta.map((button, index) => (
          <Link
            href={button.href}
            style={button.style}
            block
            key={index}
            class='text-xs sm:text-base'
          >
            {button.label}
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroText;

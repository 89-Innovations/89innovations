import type { Service } from '@/interfaces';
import { motion } from 'framer-motion';
import ImageComponent from './ImageComponent';

const ServiceCard = ({
  service,
  animationDelay = 0,
}: {
  service: Service;
  animationDelay?: number;
}) => {
  return (
    <motion.div
      className='bg-white hover:bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: animationDelay,
      }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <a href={`/services/${service.slug}`} className='block'>
        <ImageComponent
          src={service.image.url}
          alt={service.image.alternativeText || service.title}
          loading='lazy'
          className='w-full h-48 object-cover rounded-t-lg'
        />

        <div className='p-4'>
          <h3 className='text-xl font-semibold font-heading mb-2'>
            {service.title}
          </h3>
          <p className='text-gray-600'>{service.summary}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default ServiceCard;

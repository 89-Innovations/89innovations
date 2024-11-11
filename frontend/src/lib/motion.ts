export const cardVariants = {
  offscreen: (custom: { x: any; y: any }) => ({
    x: custom.x,
    y: custom.y,
    opacity: 0,
  }),
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 15,
    },
  },
};

export const featuredVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: 0.2, // Delay to start after other cards begin animating
    },
  },
};

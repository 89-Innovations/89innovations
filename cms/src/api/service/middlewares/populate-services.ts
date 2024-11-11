export default (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = {
      image: {
        fields: ['url', 'alternativeText'],
      },
      cta: {
        populate: {
          link: true,
        },
      },
    };
    await next();
  };
};

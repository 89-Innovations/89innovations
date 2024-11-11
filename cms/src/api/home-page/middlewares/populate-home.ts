export default (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = {
      hero: {
        populate: {
          heroImg: {
            fields: ['url', 'alternativeText'],
          },
          cta: true,
        },
      },
      dynamicPageSection: {
        on: {
          'layout.service': {
            populate: {
              services: {
                populate: {
                  image: {
                    fields: ['url', 'alternativeText'],
                  },
                },
              },
            },
          },
        },
      },
    };
    await next();
  };
};

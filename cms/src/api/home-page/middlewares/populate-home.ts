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
          'layout.service-info': {
            populate: {
              card: {
                populate: {
                  icon: {
                    fields: ['url', 'alternativeText'],
                  },
                  link: true,
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

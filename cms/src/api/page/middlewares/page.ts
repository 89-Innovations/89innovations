export default (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = {
      dynamicPageSection: {
        on: {
          'layout.about': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
          'layout.content': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
          'layout.cta': {
            populate: {
              link: true,
            },
          },
          'layout.contact': {
            populate: {
              button: true,
            },
          },
          'layout.testimonial': {
            populate: {
              testimonial: true,
            },
          },
          'layout.showcase': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
              cta: true,
            },
          },
          'layout.service': {
            populate: {
              services: {
                fields: ['title', 'slug', 'summary', 'description'],
                populate: {
                  image: {
                    fields: ['url', 'alternativeText'],
                  },
                },
              },
            },
          },
          'ui.link': true,
          'layout.pricing': {
            populate: {
              pricing_tiers: {
                fields: [
                  'name',
                  'price',
                  'frequency',
                  'description',
                  'featured',
                ],
                populate: {
                  features: true,
                  addOns: true,
                  cta: true,
                },
              },
              bundles: {
                populate: {
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

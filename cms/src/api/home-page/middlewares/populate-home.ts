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
                  icon: true,
                  link: true,
                },
              },
            },
          },
          'layout.featured-offer': {
            populate: {
              image: {
                fields: ['url', 'alternativeText', 'caption'],
              },
              features: true,
              cta: true,
            },
          },
          'layout.featured-articles': true,
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
          'layout.portfolio': {
            populate: {
              showcase: {
                populate: {
                  image: {
                    fields: ['url', 'alternativeText'],
                  },
                  cta: true,
                },
              },
            },
          },
          'layout.performance': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
              stats: true,
              cta: true,
              highlights: {
                populate: {
                  icon: true,
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

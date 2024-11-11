export default (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = {
      company: {
        populate: {
          logo: {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
          address: true,
          socialMedia: true,
        },
      },
      navbar: {
        populate: {
          navItems: {
            fields: ['title', 'path'],
            populate: {
              children: {
                fields: ['title', 'path'],
              },
            },
          },
          ctaLink: true,
        },
      },
      footer: {
        populate: {
          section: {
            populate: {
              links: {
                fields: ['title', 'path'],
                populate: {
                  children: {
                    fields: ['title', 'path'],
                  },
                },
              },
            },
          },
        },
      },
      seo: {
        populate: {
          fields: ['jsonData', 'title', 'description'],
          image: {
            fields: ['url', 'alternativeText'],
          },
        },
      },
    };
    await next();
  };
};

export default (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = {
      image: {
        fields: ['url', 'alternativeText'],
      },
      author: {
        fields: ['fullName'],
        populate: {
          image: {
            fields: ['url', 'alternativeText'],
          },
          articles: {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
        },
      },
    };
    await next();
  };
};

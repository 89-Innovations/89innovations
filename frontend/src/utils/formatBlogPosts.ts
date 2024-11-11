export const formatBlogPosts = (
  posts: any[],
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit,
  }: {
    filterOutDrafts?: boolean;
    filterOutFuturePosts?: boolean;
    sortByDate?: boolean;
    limit?: number;
  } = {}
) => {
  const filteredPosts = posts.reduce((acc, post) => {
    const { publishedAt, isDraft } = post.data;

    if (filterOutDrafts && isDraft) return acc;
    if (filterOutFuturePosts && new Date(publishedAt) > new Date()) return acc;

    acc.push(post);
    return acc;
  }, []);

  if (sortByDate) {
    filteredPosts.sort(
      (
        a: { data: { publishedAt: string | number | Date } },
        b: { data: { publishedAt: string | number | Date } }
      ) => {
        const aDate = new Date(a.data.publishedAt);
        const bDate = new Date(b.data.publishedAt);

        return bDate.getTime() - aDate.getTime();
      }
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // limit the number of posts
  if (typeof limit === 'number') {
    return filteredPosts.slice(0, limit);
  }

  return filteredPosts;
};

import type { CollectionEntry } from 'astro:content';

export interface BlogPage {
  data: CollectionEntry<'articles'>[];
  currentPage: number;
  lastPage: number;
  url: {
    prev?: string;
    next?: string;
  };
}

export interface Pagination {
  paginate: (
    collection: CollectionEntry<'articles'>[],
    options: { pageSize: number }
  ) => Promise<{
    data: CollectionEntry<'articles'>[];
    currentPage: number;
    lastPage: number;
    url: {
      prev?: string;
      next?: string;
    };
  }>;
}

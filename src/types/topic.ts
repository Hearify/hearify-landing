import type { Author } from '@/types/author';

export type TopicPreview = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  date: string;
  minutesToRead: number;
  coverUrl: string;
  authorSlug: string;
  editorSlug: string;
};

export type Topic = {
  slug: string;
  tag: string;
  description: string;
  coverUrl: string;
  title: string;
  date: string;
  minutesToRead: number;
  author: Author;
  editor: Author;
  suggestions: TopicPreview[];
};

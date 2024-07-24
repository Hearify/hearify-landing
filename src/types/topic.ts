import type { Author } from '@/types/author';

export type TopicPreview = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  minutesToRead: number;
  date: string;
  coverUrl: string;
};

export type Topic = {
  title: string;
  slug: string;
  author: Author;
  editor: Author;
  minutesToRead: number;
  date: string;
  sections: string[];
  suggestions: TopicPreview[];
};

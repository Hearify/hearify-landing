import type { Author } from '@/types/author';

export type FAQItem = {
  question: string;
  answer: string;
};

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
  faq?: FAQItem[];
};

export type Topic = {
  slug: string;
  tag: string;
  description: string;
  coverUrl: string;
  title: string;
  date: string;
  minutesToRead: number;
  faq?: FAQItem[];
  author: Author;
  editor: Author;
  suggestions: TopicPreview[];
};

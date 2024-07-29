import type { Author } from '@/types/author';

export type QuizPreview = {
  slug: string;
  title: string;
  description: string;
  coverUrl: string;
  authorSlug: string;
};

export type Quiz = QuizPreview & {
  author: Author;
  suggestions: QuizPreview[];
};

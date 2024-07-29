import Head from 'next/head';

import Library from '@/templates/Library/Library';
import BlogService from '@/services/BlogService';

import type { GetServerSideProps, NextPage } from 'next';
import type { LibraryProps } from '@/templates/Library/Library';

const BlogPage: NextPage<LibraryProps> = ({ quizzes, quizOfTheDay }) => {
  const pageTitle = `Library — Hearify`;
  const pageDescription = `Dive into a world where artificial intelligence meets personal growth. Our blog is dedicated to providing you with engaging AI quizzes that not only test your knowledge but also enhance your learning experience. Discover insightful tips on how to maximize your study sessions, utilize AI tools for smarter learning, and continuously improve yourself.`;
  const pageKeywords = `hearify blog, ai quizzes, study tips, learning experience, ai tools, personal growth`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <Library quizzes={quizzes} quizOfTheDay={quizOfTheDay} />
    </>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<LibraryProps> = async () => {
  const quizzes = await BlogService.loadQuizPreviews();
  const randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];

  return {
    props: {
      quizzes,
      quizOfTheDay: randomQuiz,
    },
  };
};

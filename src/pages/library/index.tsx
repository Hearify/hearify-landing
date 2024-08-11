import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Library from '@/templates/Library/Library';
import BlogService from '@/services/BlogService';

import type { GetServerSideProps, NextPage } from 'next';
import type { LibraryProps } from '@/templates/Library/Library';

const BlogPage: NextPage<LibraryProps> = ({ quizzes, quizOfTheDay }) => {
  const pageTitle = `Library — Hearify`;
  const pageDescription = `Learn, Play, and Challenge Yourself! It's a fun place where you can find quizzes on all kinds of topics. Whether you want to learn something new or just have a good time, we've got quizzes for you. You can test your knowledge, challenge yourself, or simply enjoy the experience. It's all about learning and having fun!`;
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

export const getServerSideProps: GetServerSideProps<LibraryProps> = async context => {
  const quizzes = await BlogService.loadQuizPreviews();
  const randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];

  return {
    props: {
      quizzes,
      quizOfTheDay: randomQuiz,
      ...(await serverSideTranslations(String(context.locale), ['common'])),
    },
  };
};

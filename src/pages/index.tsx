import Head from 'next/head';

import Home from '@/templates/Home/Home';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  const pageTitle = `AI Quiz Generator from PDF, Video & Text by Hearify AI Quiz Maker`;
  const pageDescription = `Transform your content with our ultimate AI question generator. Convert PDFs, texts and videos into engaging quizzes, customize questions, and provide instant feedback. Ideal for educators, students, professionals, and lifelong learners.`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <Home />
    </>
  );
};

export default HomePage;

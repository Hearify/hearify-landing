import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Home from '@/templates/Home/Home';

import type { GetServerSideProps, NextPage } from 'next';

const HomePage: NextPage = () => {
  const pageTitle = `AI Quiz Maker from PDF, Video & Text by Hearify AI Quiz Generator`;
  const pageDescription = `Transform your content with our ultimate AI question generator. Convert PDFs, texts and videos into engaging quizzes, customize questions, and provide instant feedback. Ideal for educators, students, professionals, and lifelong learners.`;

  const canonicalUrl: string = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <Home />
    </>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      ...(await serverSideTranslations(String(context.locale), ['common'])),
    },
  };
};

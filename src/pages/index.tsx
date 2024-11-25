import Head from 'next/head';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useMemo } from 'react';

import Home from '@/templates/Home/Home';

import type { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage = () => {
  const router = useRouter();

  const pageTitle = `AI Quiz Maker from PDF, Video & Text by Hearify Quiz Generator`;
  const pageDescription = `Transform your content with our ultimate AI question generator. Convert PDFs, texts and videos into engaging quizzes, customize questions, and provide instant feedback. Ideal for educators, students, professionals, and lifelong learners.`;

  const canonicalUrl = useMemo<string>(() => {
    if (router.locale === 'en-CA') return 'https://ca.hearify.org';
    if (router.locale === 'en-AU') return 'https://au.hearify.org';
    if (router.locale === 'en-GB') return 'https://uk.hearify.org';
    if (router.locale === 'uk') return 'https://ua.hearify.org';
    return 'https://hearify.org';
  }, [router.locale]);

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

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      ...(await serverSideTranslations(String(context.locale), ['common'])),
    },
  };
};

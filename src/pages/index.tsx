import Head from 'next/head';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Home from '@/templates/Home/Home';

import type { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage = () => {
  const router = useRouter();

  const pageTitle = `AI Quiz Maker from PDF, Video & Text by Hearify Quiz Generator`;
  const pageDescription = `Transform your content with our ultimate AI question generator. Convert PDFs, texts and videos into engaging quizzes, customize questions, and provide instant feedback. Ideal for educators, students, professionals, and lifelong learners.`;

  const canonicalUrl = `https://hearify.org${router.locale === 'en' ? '' : `/${router.locale}`}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <link rel="alternate" hrefLang="en-GB" href="https://hearify.org/en-gb" />
        <link rel="alternate" hrefLang="en-CA" href="https://hearify.org/en-ca" />
        <link rel="alternate" hrefLang="en-AU" href="https://hearify.org/en-au" />
        <link rel="alternate" hrefLang="x-default" href="https://hearify.org" />
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

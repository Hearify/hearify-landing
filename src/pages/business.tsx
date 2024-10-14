import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Business from '@/templates/Business/Business';

import type { GetStaticProps, NextPage } from 'next';

const BusinessPage: NextPage = () => {
  const pageTitle = `Hearify for Business - AI Question Generator`;
  const pageDescription = `Transform your content with our ultimate AI question generator. Convert PDFs, texts and videos into engaging quizzes, customize questions, and provide instant feedback. Ideal for educators, students, professionals, and lifelong learners.`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <Business />
    </>
  );
};

export default BusinessPage;

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      ...(await serverSideTranslations(String(context.locale), ['common'])),
    },
  };
};

import Head from 'next/head';

import Custom404 from '@/templates/PageNotFound/404';

import type { NextPage } from 'next';

const PageNotFound: NextPage = () => {
  const pageTitle = `Page Not Found`;
  const pageDescription = `The page you’re looking for may have been moved, deleted, or the URL might be incorrect. While this content
          isn't available, your next quiz is just a click away.`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <Custom404 />
    </>
  );
};

export default PageNotFound;

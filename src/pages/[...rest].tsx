import type { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return null;
};

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: 'https://hearify.org',
      statusCode: 302,
    },
  };
};

export default NotFoundPage;

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';

import Topic from '@/templates/Topic/Topic';
import BlogService from '@/services/BlogService';
import extractHeaders from '@/utils/extractHeaders';

import type { TopicProps } from '@/templates/Topic/Topic';
import type { GetServerSideProps, NextPage } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

type MDXProps = {
  mdxSource: MDXRemoteSerializeResult;
};

/* eslint-disable react/jsx-props-no-spreading */
const TopicPage: NextPage<TopicProps & MDXProps> = ({ topic, headers, mdxSource }) => {
  const pageTitle = `${topic.title} — Hearify`;
  const pageDescription = topic.description;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta key="og:image" property="og:image" content={topic.coverUrl} />
      </Head>

      <Topic topic={topic} headers={headers}>
        <MDXRemote {...mdxSource} />
      </Topic>
    </>
  );
};

export default TopicPage;

export const getServerSideProps: GetServerSideProps<MDXProps> = async context => {
  try {
    const slug = context.params?.slug as string;

    const mdxText = await BlogService.loadTopicMarkdown(slug);
    const mdxSource = await serialize(mdxText);

    const topic = await BlogService.loadTopic(slug);
    const headers = extractHeaders(mdxText);

    return {
      props: {
        mdxSource,
        topic,
        headers,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

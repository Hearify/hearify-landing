import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';

import Topic from '@/templates/Topic/Topic';
import BlogService from '@/services/BlogService';
import extractHeaders from '@/utils/extractHeaders';
import serializeMarkdown from '@/utils/serializeMarkdown';

import type { ArticleProps } from '@/templates/Topic/Topic';
import type { GetServerSideProps, NextPage } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

type MDXProps = {
  mdxSource: MDXRemoteSerializeResult;
};

/* eslint-disable react/jsx-props-no-spreading */
const ArticlePage: NextPage<ArticleProps & MDXProps> = ({ topic, headers, mdxSource }) => {
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

export default ArticlePage;

export const getServerSideProps: GetServerSideProps<MDXProps> = async context => {
  try {
    const slug = context.params?.slug as string;

    const mdxText = await BlogService.loadArticleMarkdown(slug);
    const mdxSource = await serializeMarkdown(mdxText);

    const topic = await BlogService.loadArticle(slug);
    const headers = extractHeaders(mdxText);

    return {
      props: {
        mdxSource,
        topic,
        headers,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

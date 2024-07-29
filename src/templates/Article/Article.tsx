import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import AppBreadcrumbs from '@/components/AppBreadcrumbs/AppBreadcrumbs';
import AuthorCard from '@/containers/AuthorCard/AuthorCard';
import styles from './Article.module.scss';
import BoostAlert from '@/containers/BoostAlert/BoostAlert';
import ArticleCard from '@/containers/ArticleCard/ArticleCard';
import AppHeading from '@/components/AppHeading/AppHeading';
import slugify from '@/utils/slugify';
import FAQBlock from '@/containers/FAQBlock/FAQBlock';

import type { Article as ArticleType } from '@/types/article';

export type ArticleProps = {
  article: ArticleType;
  headers: string[];
  children: React.ReactNode;
};

const Article: React.FC<ArticleProps> = ({
  article, //
  headers,
  children,
}) => {
  const router = useRouter();

  const cleanPath: string = router.asPath.split('#')[0].split('?')[0];

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <article className={styles.body}>
          <AppBreadcrumbs
            items={[
              { text: 'Blog', href: '/blog' },
              { text: article.title, href: `/blog/${article.slug}` },
            ]}
          />

          <div className={styles.authors}>
            {/* eslint-disable jsx-a11y/aria-role */}
            <AuthorCard author={article.author} role="author" />
            <AuthorCard author={article.editor} role="editor" />
          </div>

          <div className={styles.header}>
            <h1 className={styles.title}>{article.title}</h1>

            <div className={styles.container}>
              <span className={styles.text}>{article.minutesToRead} min read</span>
              <span className={styles.text}>·</span>
              <span className={styles.text}>{article.date}</span>
            </div>
          </div>

          <div className={styles.content}>{children}</div>

          <div className={styles.footer}>
            <div className={styles.about}>
              <div className={styles.aboutContainer}>
                <Image
                  src={article.author.avatarUrl}
                  alt={article.author.name}
                  className={styles.aboutImage}
                  width={100}
                  height={100}
                />
                <h4 className={styles.aboutTitle}>Written by {article.author.name}</h4>
              </div>
              <p className={styles.aboutText}>{article.author.aboutMe}</p>
            </div>
          </div>
        </article>

        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>Table of contents</h3>
          <nav className={styles.sidebarContainer}>
            {headers.map(item => (
              <Link key={item} className={styles.sidebarItem} href={`${cleanPath}#${slugify(item)}`}>
                {item}
              </Link>
            ))}
          </nav>
        </aside>
      </div>

      {article.faq && (
        <div className={styles.faq}>
          <AppHeading variant="h2" className={styles.faqTitle}>
            FAQ
          </AppHeading>

          <div className={styles.faqList}>
            {article.faq.map(faq => (
              <FAQBlock key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      )}

      <BoostAlert />

      <div className={styles.suggestions}>
        <AppHeading variant="h2">Related Posts</AppHeading>

        <div className={styles.suggestionsList}>
          {article.suggestions.map(suggestion => (
            <ArticleCard key={suggestion.slug} article={suggestion} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;

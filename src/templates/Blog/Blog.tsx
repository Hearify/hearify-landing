import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import AppHeading from '@/components/AppHeading/AppHeading';
import ArticleCard from '@/containers/ArticleCard/ArticleCard';
import BoostAlert from '@/containers/BoostAlert/BoostAlert';
import BlogHeroImg from '@/assets/images/blog-hero.png';
import styles from './Blog.module.scss';

import type { ArticlePreview } from '@/types/article';

export type BlogProps = {
  articles: ArticlePreview[];
};

const Blog: React.FC<BlogProps> = ({ articles }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <AppHeading className={styles.heroTitle} variant="h2">
            {t('welcome_to_blog')}
          </AppHeading>
          <p className={styles.heroText}>{t('blog_description')}</p>
          <AppButtonLink className={styles.heroButton} href="https://app.hearify.org/register" size="lg" width="240px">
            {t('try_for_free')}
          </AppButtonLink>
        </div>

        <Image src={BlogHeroImg} alt="AI robot" className={styles.heroImage} width={700} height={500} />
      </div>

      <div className={styles.topics}>
        <AppHeading variant="h2" className={styles.topicsTitle}>
          {t('articles')}
        </AppHeading>

        <div className={styles.list}>
          {articles.map(item => (
            <ArticleCard key={item.slug} article={item} />
          ))}
        </div>
      </div>

      <BoostAlert />
    </div>
  );
};

export default Blog;

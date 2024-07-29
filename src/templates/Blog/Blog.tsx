import React from 'react';
import Image from 'next/image';

import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import AppHeading from '@/components/AppHeading/AppHeading';
import TopicCard from '@/containers/TopicCard/TopicCard';
import BoostAlert from '@/containers/BoostAlert/BoostAlert';
import BlogHeroImg from '@/assets/images/blog-hero.png';
import styles from './Blog.module.scss';

import type { ArticlePreview } from '@/types/article';

export type BlogProps = {
  topics: ArticlePreview[];
};

const Blog: React.FC<BlogProps> = ({ topics }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <AppHeading className={styles.heroTitle} variant="h2">
            Welcome to our blog!
          </AppHeading>
          <p className={styles.heroText}>
            Dive into a world where artificial intelligence meets personal growth. Our blog is dedicated to providing
            you with engaging AI quizzes that not only test your knowledge but also enhance your learning experience.
            Discover insightful tips on how to maximize your study sessions, utilize AI tools for smarter learning, and
            continuously improve yourself.
          </p>
          <AppButtonLink className={styles.heroButton} href="https://app.hearify.org/register" size="lg" width="240px">
            TRY FOR FREE
          </AppButtonLink>
        </div>

        <Image src={BlogHeroImg} alt="AI robot" className={styles.heroImage} width={700} height={500} />
      </div>

      <div className={styles.topics}>
        <AppHeading variant="h2" className={styles.topicsTitle}>
          Topics
        </AppHeading>

        <div className={styles.list}>
          {topics.map(topic => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </div>

      <BoostAlert />
    </div>
  );
};

export default Blog;

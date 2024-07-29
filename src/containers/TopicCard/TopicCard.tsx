import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import styles from './TopicCard.module.scss';

import type { ArticlePreview } from '@/types/article';

export type TopicCardProps = {
  topic: ArticlePreview;
};

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  const topicUrl = `/blog/${topic.slug}`;

  return (
    <div className={styles.wrapper}>
      <Link href={topicUrl}>
        <Image src={topic.coverUrl} alt={topic.title} width={320} height={230} className={styles.image} />
      </Link>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.section}>{topic.tag}</span>
          <span className={styles.minutes}>{topic.minutesToRead} min read</span>
        </div>

        <div className={styles.body}>
          <Link href={topicUrl} className={styles.link}>
            <h4 className={styles.title}>{topic.title}</h4>
            <p className={styles.description}>{topic.description}</p>
          </Link>

          <div className={styles.footer}>
            <div className={styles.date}>{topic.date}</div>
            <AppButtonLink href={topicUrl} size="sm" variant="secondary">
              READ MORE
            </AppButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;

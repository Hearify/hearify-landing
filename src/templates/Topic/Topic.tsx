import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import AppBreadcrumbs from '@/components/AppBreadcrumbs/AppBreadcrumbs';
import TopicAuthor from '@/containers/TopicAuthor/TopicAuthor';
import facebookImg from '@/assets/icons/facebook.svg';
import linkedInImg from '@/assets/icons/linkedin.svg';
import instagramImg from '@/assets/icons/instagram.svg';
import styles from './Topic.module.scss';
import BoostAlert from '@/containers/BoostAlert/BoostAlert';
import TopicCard from '@/containers/TopicCard/TopicCard';
import AppHeading from '@/components/AppHeading/AppHeading';
import slugify from '@/utils/slugify';

import type { Topic as TopicType } from '@/types/topic';

export type TopicProps = {
  topic: TopicType;
  headers: string[];
  children: React.ReactNode;
};

const Topic: React.FC<TopicProps> = ({
  topic, //
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
              { text: topic.title, href: `/blog/${topic.slug}` },
            ]}
          />

          <div className={styles.authors}>
            {/* eslint-disable jsx-a11y/aria-role */}
            <TopicAuthor author={topic.author} role="author" />
            <TopicAuthor author={topic.editor} role="editor" />
          </div>

          <div className={styles.header}>
            <h1 className={styles.title}>{topic.title}</h1>

            <div className={styles.container}>
              <span className={styles.text}>{topic.minutesToRead} min read</span>
              <span className={styles.text}>·</span>
              <span className={styles.text}>{topic.date}</span>
            </div>
          </div>

          <div className={styles.content}>{children}</div>

          <div className={styles.footer}>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/people/Hearify/61552644703836/" target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                <Image src={facebookImg} alt="Facebook" width={32} height={32} />
              </a>
              <a href="https://www.linkedin.com/company/hearify/" target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                <Image src={linkedInImg} alt="LinkedIn" width={32} height={32} />
              </a>
              <a href="https://www.instagram.com/hearify.tech/" target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                <Image src={instagramImg} alt="Instagram" width={32} height={32} />
              </a>
            </div>

            <div className={styles.about}>
              <div className={styles.aboutContainer}>
                <Image
                  src={topic.author.avatarUrl}
                  alt={topic.author.name}
                  className={styles.aboutImage}
                  width={100}
                  height={100}
                />
                <h4 className={styles.aboutTitle}>Written by {topic.author.name}</h4>
              </div>
              <p className={styles.aboutText}>{topic.author.aboutMe}</p>
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

      <BoostAlert />

      <div className={styles.suggestions}>
        <AppHeading variant="h2">Related posts</AppHeading>

        <div className={styles.suggestionsList}>
          {topic.suggestions.map(suggestion => (
            <TopicCard key={suggestion.slug} topic={suggestion} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topic;

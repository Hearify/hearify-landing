import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import AppHeading from '@/components/AppHeading/AppHeading';
import BoostAlert from '@/containers/BoostAlert/BoostAlert';
import QuizCard from '@/containers/QuizCard/QuizCard';
import styles from './Library.module.scss';

import type { QuizPreview } from '@/types/quiz';

export type LibraryProps = {
  quizzes: QuizPreview[];
  quizOfTheDay: QuizPreview;
};

const Library: React.FC<LibraryProps> = ({ quizzes, quizOfTheDay }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <AppHeading className={styles.heroTitle} variant="h2">
            {t('welcome_to_library')}
          </AppHeading>
          <p className={styles.heroText}>{t('blog_description')}</p>
        </div>

        <div className={styles.quiz}>
          <span className={styles.quizTag}>{t('recommended_for_you')}</span>

          <Link href={quizOfTheDay.appUrl}>
            <Image
              src={quizOfTheDay.coverUrl}
              alt={quizOfTheDay.title}
              className={styles.quizImage}
              width={600}
              height={500}
            />
          </Link>

          <div className={styles.quizContent}>
            <div className={styles.quizBackground}>
              <h4 className={styles.quizTitle}>{quizOfTheDay.title}</h4>
              <p className={styles.quizDescription}>{quizOfTheDay.description}</p>
              <AppButtonLink className={styles.quizButton} href={quizOfTheDay.appUrl} size="lg" width="240px">
                {t('start_quiz')}
              </AppButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.topics}>
        <AppHeading variant="h2" className={styles.topicsTitle}>
          {t('all_quizzes')}
        </AppHeading>

        <div className={styles.list}>
          {quizzes.map(item => (
            <QuizCard key={item.slug} quiz={item} />
          ))}
        </div>
      </div>

      <BoostAlert />
    </div>
  );
};

export default Library;

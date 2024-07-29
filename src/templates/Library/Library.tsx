import React from 'react';
import Image from 'next/image';

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
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <AppHeading className={styles.heroTitle} variant="h2">
            Welcome to our quiz library!
          </AppHeading>
          <p className={styles.heroText}>
            Dive into a world where artificial intelligence meets personal growth. Our blog is dedicated to providing
            you with engaging AI quizzes that not only test your knowledge but also enhance your learning experience.
            Discover insightful tips on how to maximize your study sessions, utilize AI tools for smarter learning, and
            continuously improve yourself.
          </p>
        </div>

        <div className={styles.quiz}>
          <span className={styles.quizTag}>Recommended for you</span>

          <Image
            src={quizOfTheDay.coverUrl}
            alt={quizOfTheDay.title}
            className={styles.quizImage}
            width={600}
            height={500}
          />

          <div className={styles.quizContent}>
            <h4 className={styles.quizTitle}>{quizOfTheDay.title}</h4>
            <p className={styles.quizDescription}>{quizOfTheDay.description}</p>
            <AppButtonLink className={styles.quizButton} href={`/library/${quizOfTheDay.slug}`} size="lg" width="240px">
              START QUIZ
            </AppButtonLink>
          </div>
        </div>
      </div>

      <div className={styles.topics}>
        <AppHeading variant="h2" className={styles.topicsTitle}>
          All Quizzes
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

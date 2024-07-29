import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import AppBreadcrumbs from '@/components/AppBreadcrumbs/AppBreadcrumbs';
import AuthorCard from '@/containers/AuthorCard/AuthorCard';
import styles from './Quiz.module.scss';
import BoostAlert from '@/containers/BoostAlert/BoostAlert';
import QuizCard from '@/containers/QuizCard/QuizCard';
import AppHeading from '@/components/AppHeading/AppHeading';
import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';

import type { Quiz as QuizType } from '@/types/quiz';

export type QuizProps = {
  quiz: QuizType;
  children: React.ReactNode;
};

const Quiz: React.FC<QuizProps> = ({ quiz, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <article className={styles.body}>
          <AppBreadcrumbs
            items={[
              { text: 'Library', href: '/library' },
              { text: quiz.title, href: `/library/${quiz.slug}` },
            ]}
          />

          <div className={styles.authors}>
            {/* eslint-disable jsx-a11y/aria-role */}
            <AuthorCard author={quiz.author} role="author" />
          </div>

          <div className={styles.header}>
            <h1 className={styles.title}>{quiz.title}</h1>
          </div>

          <div className={styles.content}>
            <Link className={styles.popup} href={quiz.appUrl}>
              <Image src={quiz.coverUrl} alt={quiz.title} width={800} height={500} className={styles.popupImage} />

              <div className={styles.popupContainer}>
                <div className={styles.popupBackground}>
                  <h4 className={styles.popupTitle}>{quiz.title}</h4>
                  <AppButtonLink href="#" size="lg" className={styles.popupButton}>
                    START QUIZ
                  </AppButtonLink>
                </div>
              </div>
            </Link>

            {children}
          </div>
        </article>
      </div>

      <BoostAlert/>

      <div className={styles.suggestions}>
        <AppHeading variant="h2">Related Quizzes</AppHeading>

        <div className={styles.suggestionsList}>
          {quiz.suggestions.map(item => (
            <QuizCard key={item.slug} quiz={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

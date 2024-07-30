import React from 'react';
import Image from 'next/image';
import { Trans, useTranslation } from 'next-i18next';

import icon from '@/assets/landing/icon.svg';
import quizWindowIcon from '@/assets/landing/quiz_window.svg';
import quizImageIcon from '@/assets/landing/quiz_matching_questions_no_answer_student.svg';
import arrowIcon from '@/assets/landing/arrow.svg';
import customizeIcon from '@/assets/landing/customize.svg';
import questionsIcon from '@/assets/landing/questions.svg';
import sharePayIcon from '@/assets/landing/share-pay.svg';
import performanceIcon from '@/assets/landing/performance.svg';
import pdfWindowIcon from '@/assets/landing/pdf_window.svg';
import apploadVideoIcon from '@/assets/landing/appload-video.svg';
import styles from './Home.module.scss';
import FAQBlock from '@/containers/FAQBlock/FAQBlock';

import type { FAQItem } from '@/types/article';

// TODO(Sasha): Fix the issue with the icons
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const Home: React.FC = () => {
  const { t } = useTranslation();

  const faqBlocks: FAQItem[] = t('faq_blocks', { returnObjects: true });

  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>{t('ai_generate_custom_quiz')}</h1>
          <p className={styles.heroDescription}>{t('ai_automatically_create_questions')}</p>

          <a href="https://app.hearify.org/register" className={styles.heroButton}>
            {t('start_free')}
            <Image src={icon} alt="arrow icon" />
          </a>
        </div>

        <div className={styles.heroRight}>
          <Image src={quizWindowIcon} className={styles.heroQuizWindowImage} alt="quiz window" />
          <Image src={quizImageIcon} className={styles.heroQuizImage} alt="quiz image" />
          <Image src={arrowIcon} className={styles.heroQuizArrow} alt="arrow" />
        </div>
      </section>

      <section className={styles.howItWorks} id="how-it-works-section">
        <h2 className={styles.howItWorksTitle}>{t('how_hearify_works')}</h2>
        <div className={styles.dashboard}>
          <div className={styles.howItWorksRow}>
            <div className={styles.howItWorksItem}>
              <h3 className={styles.howItWorksItemTitle}>{t('upload_file')}</h3>
              <p className={styles.howItWorksDescription}>{t('any_material')}</p>

              <Image src={pdfWindowIcon} className={styles.howItWorksImage} alt="pdf window" />
              <Image src={apploadVideoIcon} className={styles.howItWorksImageSecond} alt="appload video" />
            </div>
            <div className={styles.howItWorksItem}>
              <h3 className={styles.howItWorksItemTitle}>{t('customize')}</h3>
              <p className={styles.howItWorksDescription}>{t('choose_difficulty')}</p>

              <Image src={customizeIcon} className={styles.howItWorksImage} alt="customize image" />
            </div>
          </div>
          <div className={styles.howItWorksRow}>
            <div className={styles.howItWorksItem}>
              <h3 className={styles.howItWorksItemTitle}>{t('generate')}</h3>
              <p className={styles.howItWorksDescription}>{t('click_button')}</p>

              <Image src={questionsIcon} className={styles.howItWorksImage} alt="generate window" />
            </div>
            <div className={styles.howItWorksItemSecond}>
              <h3 className={styles.howItWorksItemTitle}>{t('share_play')}</h3>
              <p className={styles.howItWorksDescription}>{t('copy_code')}</p>
              <Image src={sharePayIcon} className={styles.howItWorksImage} alt="share pay" />
            </div>
            <div className={styles.howItWorksItemThird}>
              <h3 className={styles.howItWorksItemTitle}>{t('see_performance')}</h3>
              <p className={styles.howItWorksDescription}>{t('automatic_grading')}</p>
              <Image src={performanceIcon} className={styles.howItWorksImage} alt="performance" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.faq} id="faq-section">
        <h2 className={styles.faqTitle}>{t('faq')}</h2>
        <div className={styles.faqList}>
          {faqBlocks.map(item => (
            <FAQBlock key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      <section className={styles.createQuiz}>
        <div>
          <p className={styles.createQuizText}>
            <Trans i18nKey="create_quiz_in_minute">
              Create your <span className={styles.createQuizColorText}>custom</span> quiz in just
              <span className={styles.createQuizColorText}>1 minute!</span>
            </Trans>
          </p>
          <a href="https://app.hearify.org/register" className={styles.createQuizButton}>
            {t('start_free')}
            <Image src={icon} alt="arrow icon" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

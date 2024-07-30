import React from 'react';
import Image from 'next/image';

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
import { homeFaq } from '@/constants/faq';
import styles from './Home.module.scss';
import FAQBlock from '@/containers/FAQBlock/FAQBlock';

// TODO(Sasha): Fix the issue with the icons
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const Home: React.FC = () => {
  return (
    <div className={styles.wrapper} data-testid="testing-workflow">
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle} data-translate="ai_generate_custom_quiz">
            AI Quiz Generator from PDFs, Videos & Text
          </h1>
          <p className={styles.heroDescription} data-translate="ai_automatically_create_questions">
            Automatically create questions for assignments, tests, and exams from your content with our ultimate AI
            question generator. Ideal for educators, students, professionals, and lifelong learners.
          </p>

          <a href="https://app.hearify.org/register" className={styles.heroButton} data-translate="start_free">
            try for free
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
        <h2 className={styles.howItWorksTitle} data-translate="how_hearify_works">
          How Hearify works
        </h2>
        <div className={styles.dashboard}>
          <div className={styles.howItWorksRow}>
            <div className={styles.howItWorksItem}>
              <h3 className={styles.howItWorksItemTitle} data-translate="upload_file">
                1. Upload a file
              </h3>
              <p className={styles.howItWorksDescription} data-translate="any_material">
                It could be any book, presentation, document or YouTube video link
              </p>

              <Image src={pdfWindowIcon} className={styles.howItWorksImage} alt="pdf window" />
              <Image src={apploadVideoIcon} className={styles.howItWorksImageSecond} alt="appload video" />
            </div>
            <div className={styles.howItWorksItem}>
              <h3 className={styles.howItWorksItemTitle} data-translate="customize">
                2. Customize
              </h3>
              <p className={styles.howItWorksDescription} data-translate="choose_difficulty">
                Choose difficulty, number of questions and your preferences
              </p>

              <Image src={customizeIcon} className={styles.howItWorksImage} alt="customize image" />
            </div>
          </div>
          <div className={styles.howItWorksRow}>
            <div className={styles.howItWorksItem}>
              <h3 className={styles.howItWorksItemTitle} data-translate="generate">
                3. Generate
              </h3>
              <p className={styles.howItWorksDescription} data-translate="click_button">
                Click the button, wait a few minutes and your quiz is ready! You can edit it if needed
              </p>

              <Image src={questionsIcon} className={styles.howItWorksImage} alt="generate window" />
            </div>
            <div className={styles.howItWorksItemSecond}>
              <h3 className={styles.howItWorksItemTitle} data-translate="share_play">
                4. Share & Play
              </h3>
              <p className={styles.howItWorksDescription} data-translate="copy_code">
                Copy code to start your engaging quiz session
              </p>
              <Image src={sharePayIcon} className={styles.howItWorksImage} alt="share pay" />
            </div>
            <div className={styles.howItWorksItemThird}>
              <h3 className={styles.howItWorksItemTitle} data-translate="see_performance">
                5. See performance
              </h3>
              <p className={styles.howItWorksDescription} data-translate="automatic_grading">
                The system automatically grades and creates a rating among all participants
              </p>
              <Image src={performanceIcon} className={styles.howItWorksImage} alt="performance" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.faq} id="faq-section">
        <h2 className={styles.faqTitle} data-translate="faq">
          FAQ
        </h2>
        <div className={styles.faqList}>
          {homeFaq.map(item => (
            <FAQBlock key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      <section className={styles.createQuiz}>
        <div>
          <p className={styles.createQuizText} data-translate="create_quiz_in_minute">
            Create your <span className={styles.createQuizColorText}>custom</span> quiz in just{' '}
            <span className={styles.createQuizColorText}>1 minute !</span>
          </p>
          <a href="https://app.hearify.org/register" className={styles.createQuizButton} data-translate="start_free">
            try for free
            <Image src={icon} alt="arrow icon" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

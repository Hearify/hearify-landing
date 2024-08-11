import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import Carousel from 'nuka-carousel';
import Link from 'next/link';

import AppHeading from '@/components/AppHeading/AppHeading';
import createQuizImage1 from '@/assets/images/create-quiz/create-quiz-1.png';
import createQuizImage2 from '@/assets/images/create-quiz/create-quiz-2.png';
import createQuizImage3 from '@/assets/images/create-quiz/create-quiz-3.png';
import createQuizImage4 from '@/assets/images/create-quiz/create-quiz-4.png';
import createQuizImage5A from '@/assets/images/create-quiz/create-quiz-5-a.png';
import createQuizImage5B from '@/assets/images/create-quiz/create-quiz-5-b.png';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import styles from './HomeCreateQuiz.module.scss';

type CreateQuizStep = {
  title: string;
  description: string;
};

const HomeCreateQuiz: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.HomeCreateQuiz' });

  const { isDeviceLarge } = useDeviceDetect('lg');

  const textSteps: CreateQuizStep[] = t('steps', { returnObjects: true });
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentTitle = textSteps[activeStep].title;
  const currentDescription = textSteps[activeStep].description;

  return (
    <section className={styles.wrapper} id="create-quiz">
      <AppHeading variant="h2" className={styles.title}>
        {t('title')}
      </AppHeading>

      {isDeviceLarge ? (
        <div className={styles.card}>
          <div className={styles.sidebar}>
            {textSteps.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className={cn(styles.sidebarItem, activeStep === index && styles.sidebarItemActive)}
                onClick={() => setActiveStep(index)}
              >
                {`${index + 1}.  ${item.title}`}
              </button>
            ))}
          </div>

          <div className={styles.body}>
            <h4 className={styles.subtitle}>{currentTitle}</h4>
            <p className={styles.description}>{currentDescription}</p>

            <Link href="https://app.hearify.org" className={styles.images}>
              {activeStep === 0 && <Image src={createQuizImage1} alt={currentTitle} />}
              {activeStep === 1 && <Image src={createQuizImage2} alt={currentTitle} />}
              {activeStep === 2 && <Image src={createQuizImage3} alt={currentTitle} />}
              {activeStep === 3 && <Image src={createQuizImage4} alt={currentTitle} />}
              {activeStep === 4 && (
                <>
                  <Image src={createQuizImage5A} alt={currentTitle} />
                  <Image src={createQuizImage5B} alt={currentTitle} />
                </>
              )}
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.card}>
          <Carousel
            className={styles.carousel}
            renderCenterLeftControls={null}
            renderCenterRightControls={null}
            defaultControlsConfig={{
              containerClassName: styles.controls,
              pagingDotsClassName: styles.dots,
            }}
            wrapAround
            autoplay
          >
            {textSteps.map((item, index) => (
              <div key={item.title} className={styles.body}>
                <h4 className={styles.subtitle}>1. {item.title}</h4>
                <p className={styles.description}>{item.description}</p>

                <div className={styles.images}>
                  {index === 0 && <Image src={createQuizImage1} alt={currentTitle} />}
                  {index === 1 && <Image src={createQuizImage2} alt={currentTitle} />}
                  {index === 2 && <Image src={createQuizImage3} alt={currentTitle} />}
                  {index === 3 && <Image src={createQuizImage4} alt={currentTitle} />}
                  {index === 4 && (
                    <>
                      <Image src={createQuizImage5A} alt={currentTitle} />
                      <Image src={createQuizImage5B} alt={currentTitle} />
                    </>
                  )}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </section>
  );
};

export default HomeCreateQuiz;

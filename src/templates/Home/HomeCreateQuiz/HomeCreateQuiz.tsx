import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'nuka-carousel';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';

import AppHeading from '@/components/AppHeading/AppHeading';
import createQuizImage1 from '@/assets/images/create-quiz/create-quiz-1.png';
import createQuizImage2 from '@/assets/images/create-quiz/create-quiz-2.png';
import createQuizImage3 from '@/assets/images/create-quiz/create-quiz-3.png';
import createQuizImage4 from '@/assets/images/create-quiz/create-quiz-4.png';
import createQuizImage5 from '@/assets/images/create-quiz/create-quiz-5.png';
import mobileCreateQuizImage1 from '@/assets/images/mobile-create-quiz/mobile-create-quiz-1.png';
import mobileCreateQuizImage2 from '@/assets/images/mobile-create-quiz/mobile-create-quiz-2.png';
import mobileCreateQuizImage3 from '@/assets/images/mobile-create-quiz/mobile-create-quiz-3.png';
import mobileCreateQuizImage4 from '@/assets/images/mobile-create-quiz/mobile-create-quiz-4.png';
import mobileCreateQuizImage5 from '@/assets/images/mobile-create-quiz/mobile-create-quiz-5.png';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prevStep => (prevStep + 1) % textSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [textSteps.length]);

  return (
    <section className={styles.wrapper} id="create-quiz">
      <AppHeading variant="h2" className={styles.title}>
        {t('title')}
      </AppHeading>
      <p className={styles.mainDescription}>{t('description')}</p>

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
              {activeStep === 0 && <Image src={createQuizImage1} alt={currentTitle} width={350} height={400} />}
              {activeStep === 1 && <Image src={createQuizImage2} alt={currentTitle} width={450} height={400} />}
              {activeStep === 2 && <Image src={createQuizImage3} alt={currentTitle} width={450} height={400} />}
              {activeStep === 3 && <Image src={createQuizImage4} alt={currentTitle} width={400} height={300} />}
              {activeStep === 4 && <Image src={createQuizImage5} alt={currentTitle} width={750} height={400} />}
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
                <h4 className={styles.subtitle}>
                  {index + 1}. {item.title}
                </h4>
                <p className={styles.description}>{item.description}</p>
                <Link href="https://app.hearify.org" className={styles.images}>
                  {index === 0 && <Image src={mobileCreateQuizImage1} alt={currentTitle} width={350} height={400} />}
                  {index === 1 && <Image src={mobileCreateQuizImage2} alt={currentTitle} width={450} height={400} />}
                  {index === 2 && <Image src={mobileCreateQuizImage3} alt={currentTitle} width={450} height={400} />}
                  {index === 3 && <Image src={mobileCreateQuizImage4} alt={currentTitle} width={400} height={300} />}
                  {index === 4 && <Image src={mobileCreateQuizImage5} alt={currentTitle} width={750} height={400} />}
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </section>
  );
};

export default HomeCreateQuiz;

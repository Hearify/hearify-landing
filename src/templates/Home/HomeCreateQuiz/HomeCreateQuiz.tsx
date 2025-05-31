import React from 'react';
import { useTranslation } from 'next-i18next';

import AppHeading from '@/components/AppHeading/AppHeading';
import styles from './HomeCreateQuiz.module.scss';

const HomeCreateQuiz: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.HomeCreateQuiz' });

  return (
    <section className={styles.wrapper} id="create-quiz">
      <AppHeading variant="h2" className={styles.title}>
        {t('title')}
      </AppHeading>
      
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      {/* <video src="/how_it_works.mp4" width="100%" controls /> */}

      <div style={{ position: 'relative', paddingBottom: '62.5%', height: 0 }}>
        <iframe
          src="https://www.loom.com/embed/06e96bcd3b2e4a90b0a884e54d905d51?sid=69b1638d-4a2f-4983-ad39-67094c476f70"
          frameBorder="0"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </section>
  );
};

export default HomeCreateQuiz;

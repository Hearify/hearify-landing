import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'next-i18next';

import InfoBoardCard from '@/containers/InfoBoardCard/InfoBoardCard';
import styles from './CorporateTrainingInfoBoard.module.scss';

const BusinessInfoBoard: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.CorporateTrainingInfoBoard' });
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.description}>{t('description')}</p>

        <div className={styles.content}>
          <InfoBoardCard text={t('text1')} image={CheckIcon} />
          <InfoBoardCard text={t('text2')} image={CheckIcon} />
          <InfoBoardCard text={t('text3')} image={CheckIcon} />
        </div>
      </div>
    </section>
  );
};

export default BusinessInfoBoard;

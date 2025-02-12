import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from './CorporateTraining.module.scss';

import CorporateTrainingHero from '@/templates/BusinessSubpages/CorporateTraining/CorporateTrainingHero/CorporateTrainingHero';


const CorporateTraining: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.CorporateTrainingInfoBoard' });


  return (
    <main className={styles.wrapper}>
      <CorporateTrainingHero />
    </main>
  );
};

export default CorporateTraining;

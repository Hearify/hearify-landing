import React from 'react';

import styles from './CorporateTraining.module.scss';
import CorporateTrainingHero from '@/templates/BusinessSubpages/CorporateTraining/CorporateTrainingHero/CorporateTrainingHero';

const CorporateTraining: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <CorporateTrainingHero />
    </main>
  );
};

export default CorporateTraining;

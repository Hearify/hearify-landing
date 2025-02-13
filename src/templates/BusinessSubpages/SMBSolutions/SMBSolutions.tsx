import React from 'react';

import styles from './SMBSolutions.module.scss';
import SMBSolutionsHero from '@/templates/BusinessSubpages/SMBSolutions/SMBSolutionsHero/SMBSolutionsHero';

const SMBSolutions: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <SMBSolutionsHero />
    </main>
  );
};

export default SMBSolutions;

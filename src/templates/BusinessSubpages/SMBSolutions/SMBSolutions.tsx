import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from './SMBSolutions.module.scss';

import SMBSolutionsHero from '@/templates/BusinessSubpages/SMBSolutions/SMBSolutionsHero/SMBSolutionsHero';


const SMBSolutions: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.SMBSolutionsInfoBoard' });


  return (
    <main className={styles.wrapper}>
      <SMBSolutionsHero />
    </main>
  );
};

export default SMBSolutions;

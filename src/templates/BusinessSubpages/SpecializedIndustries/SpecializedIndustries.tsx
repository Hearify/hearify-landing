import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from './SpecializedIndustries.module.scss';

import SpecializedIndustriesHero from '@/templates/BusinessSubpages/SpecializedIndustries/SpecializedIndustriesHero/SpecializedIndustriesHero';


const SpecializedIndustries: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.SpecializedIndustriesInfoBoard' });


  return (
    <main className={styles.wrapper}>
      <SpecializedIndustriesHero />
    </main>
  );
};

export default SpecializedIndustries;

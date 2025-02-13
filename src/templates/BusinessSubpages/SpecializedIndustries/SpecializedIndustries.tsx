import React from 'react';

import styles from './SpecializedIndustries.module.scss';
import SpecializedIndustriesHero from '@/templates/BusinessSubpages/SpecializedIndustries/SpecializedIndustriesHero/SpecializedIndustriesHero';

const SpecializedIndustries: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <SpecializedIndustriesHero />
    </main>
  );
};

export default SpecializedIndustries;

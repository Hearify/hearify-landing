import React from 'react';

import styles from './Business.module.scss';
import BusinessHero from './BusinessHero/BusinessHero';
import BusinessForWhom from './BusinessForWhom/BusinessForWhom';
import BusinessBoostAlert from './BusinessBoostAlert/BusinessBoostAlert';
import BusinessInfoBoard from './BusinessInfoBoard/BusinessInfoBoard';

const Business: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <BusinessHero />
      <BusinessForWhom />
      <BusinessInfoBoard />
      <BusinessBoostAlert />
    </main>
  );
};

export default Business;

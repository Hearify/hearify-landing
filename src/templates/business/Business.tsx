import React from 'react';

import styles from './Business.module.scss';
import BusinessHero from './BusinessHero/BusinessHero';

const B2B: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <BusinessHero />
    </main>
  );
};

export default B2B;

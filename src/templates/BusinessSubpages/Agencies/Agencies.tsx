import React from 'react';

import styles from './Agencies.module.scss';
import AgenciesHero from '@/templates/BusinessSubpages/Agencies/AgenciesHero/AgenciesHero';

const Agencies: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <AgenciesHero />
    </main>
  );
};

export default Agencies;

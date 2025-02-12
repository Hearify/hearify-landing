import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from './Agencies.module.scss';

import AgenciesHero from '@/templates/BusinessSubpages/Agencies/AgenciesHero/AgenciesHero';


const Agencies: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.AgenciesInfoBoard' });


  return (
    <main className={styles.wrapper}>
      <AgenciesHero />
    </main>
  );
};

export default Agencies;

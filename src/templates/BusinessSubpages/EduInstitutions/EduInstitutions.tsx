import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from './EduInstitutions.module.scss';

import EduInstitutionsHero from '@/templates/BusinessSubpages/EduInstitutions/EduInstitutionsHero/EduInstitutionsHero';


const EduInstitutions: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.EduInstitutionsInfoBoard' });


  return (
    <main className={styles.wrapper}>
      <EduInstitutionsHero />
    </main>
  );
};

export default EduInstitutions;

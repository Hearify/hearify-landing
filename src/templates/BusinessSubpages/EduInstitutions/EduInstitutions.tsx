import React from 'react';

import styles from './EduInstitutions.module.scss';
import EduInstitutionsHero from '@/templates/BusinessSubpages/EduInstitutions/EduInstitutionsHero/EduInstitutionsHero';

const EduInstitutions: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <EduInstitutionsHero />
    </main>
  );
};

export default EduInstitutions;

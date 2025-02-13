import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from './CorporateTraining.module.scss';
import CorporateTrainingHero from './CorporateTrainingHero/CorporateTrainingHero';
import CorporateTrainingBenefits from './CorporateTrainingBenefits/CorporateTrainingBenefits';
import CorporateTrainingFAQ from './CorporateTrainingFAQ/CorporateTrainingFAQ';
import CorporateTrainingInfoBoard from './CorporateTrainingInfoBoard/CorporateTrainingInfoBoard';
import CorporateTrainingForWhom from './CorporateTrainingForWhom/CorporateTrainingForWhom';
import BoostAlert from '@/containers/BoostAlert/BoostAlert';
import GroupImg from '@/assets/images/corporate_training_cta.png';

const CorporateTraining: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.CorporateTrainingInfoBoard' });

  return (
    <main className={styles.wrapper}>
      <CorporateTrainingHero />
      <CorporateTrainingBenefits />
      <CorporateTrainingInfoBoard />
      <CorporateTrainingForWhom />
      <CorporateTrainingFAQ />
      <div style={{ marginBottom: '100px' }} />
      <BoostAlert
        title={t('alert-title')}
        text={t('alert-text')}
        button={t('alert-button')}
        image={GroupImg}
        width={360}
        height={260}
      />
    </main>
  );
};

export default CorporateTraining;

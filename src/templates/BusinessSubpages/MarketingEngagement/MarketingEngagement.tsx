import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from './MarketingEngagement.module.scss';

import MarketingEngagementHero from '@/templates/BusinessSubpages/MarketingEngagement/MarketingEngagementHero/MarketingEngagementHero';


const MarketingEngagement: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.MarketingEngagementInfoBoard' });


  return (
    <main className={styles.wrapper}>
      <MarketingEngagementHero />
    </main>
  );
};

export default MarketingEngagement;

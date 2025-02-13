import React from 'react';

import styles from './MarketingEngagement.module.scss';
import MarketingEngagementHero from '@/templates/BusinessSubpages/MarketingEngagement/MarketingEngagementHero/MarketingEngagementHero';

const MarketingEngagement: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <MarketingEngagementHero />
    </main>
  );
};

export default MarketingEngagement;

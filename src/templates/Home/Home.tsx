import React from 'react';
import { useTranslation } from 'next-i18next';

import GroupImg from '@/assets/images/blog-group.png';
import JoinCommunityAlert from '@/containers/JoinCommunityAlert/JoinCommunityAlert';
import BoostAlert from '@/containers/BoostAlert/BoostAlert';
import HomeHero from './HomeHero/HomeHero';
import HomeFeatured from './HomeFeatured/HomeFeatured';
import HomeCreateQuiz from './HomeCreateQuiz/HomeCreateQuiz';
import HomeBenefits from './HomeBenefits/HomeBenefits';
import HomeReviews from './HomeReviews/HomeReviews';
import HomeAudience from './HomeAudience/HomeAudience';
import HomeWhyUs from './HomeWhyUs/HomeWhyUs';
import HomeFAQ from './HomeFAQ/HomeFAQ';
import styles from './Home.module.scss';

// TODO(Sasha): Fix the issue with the icons
const Home: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.HomeBoostAlert' });

  return (
    <main className={styles.wrapper}>
      <HomeHero />
      <HomeFeatured />
      <HomeCreateQuiz />
      <HomeBenefits />
      <HomeReviews />
      <HomeAudience />
      <HomeWhyUs />
      <JoinCommunityAlert />
      <HomeFAQ />
      <BoostAlert t={t} image={GroupImg} width={360} height={300} />
    </main>
  );
};

export default Home;

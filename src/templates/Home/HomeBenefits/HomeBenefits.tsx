import React from 'react';
import { useTranslation } from 'next-i18next';

import AppHeading from '@/components/AppHeading/AppHeading';
import ClockIcon from '@/assets/icons/clock.svg';
import LanguageIcon from '@/assets/icons/language.svg';
import MenuIcon from '@/assets/icons/menu.svg';

import CustomizationIcon from '@/assets/icons/customize.svg';
import MediaIcon from '@/assets/icons/media.svg';
import AnalyticsIcon from '@/assets/icons/analytics.svg';
import InteractiveIcon from '@/assets/icons/interactive.svg';
import IntegrationIcon from '@/assets/icons/integration.svg';
import styles from './HomeBenefits.module.scss';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import AppDropdown from '@/components/AppDropdown/AppDropdown';

type BenefitBlock = {
  title: string;
  description: string;
};

const HomeBenefits: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.HomeBenefits' });

  const { isDeviceLarge } = useDeviceDetect('md');

  const benefitBlocks: BenefitBlock[] = t('benefits', { returnObjects: true });

  return (
    <section className={styles.wrapper}>
      <AppHeading variant="h2" className={styles.title}>
        {t('title')}
      </AppHeading>
      <p className={styles.description}>{t('description')}</p>

      {isDeviceLarge ? (
        <ul className={styles.list}>
          {benefitBlocks.map((block, index) => (
            <li key={block.title} className={styles.item}>
              <div className={styles.image}>
                {index === 0 && <ClockIcon />}
                {index === 1 && <MenuIcon />}
                {index === 2 && <LanguageIcon />}
                {index === 3 && <CustomizationIcon />}
                {index === 4 && <MediaIcon />}
                {index === 5 && <AnalyticsIcon />}
                {index === 6 && <InteractiveIcon />}
                {index === 7 && <IntegrationIcon />}
              </div>

              <div className={styles.content}>
                <h3 className={styles.subtitle}>{block.title}</h3>
                <p className={styles.text}>{block.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={styles.list}>
          {benefitBlocks.map((block, index) => (
            <AppDropdown
              key={block.title}
              icon={
                <div className={styles.image}>
                  {index === 0 && <ClockIcon />}
                  {index === 1 && <MenuIcon />}
                  {index === 2 && <LanguageIcon />}
                  {index === 3 && <CustomizationIcon />}
                  {index === 4 && <MediaIcon />}
                  {index === 5 && <AnalyticsIcon />}
                  {index === 6 && <InteractiveIcon />}
                  {index === 7 && <IntegrationIcon />}
                </div>
              }
              title={block.title}
              content={block.description}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default HomeBenefits;

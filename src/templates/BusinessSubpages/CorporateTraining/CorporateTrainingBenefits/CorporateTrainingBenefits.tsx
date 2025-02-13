import React from 'react';
import { useTranslation } from 'next-i18next';

import ClockIcon from '@/assets/icons/clock.svg';
import CustomizationIcon from '@/assets/icons/customize.svg';
import MediaIcon from '@/assets/icons/media.svg';
import AnalyticsIcon from '@/assets/icons/analytics.svg';
import styles from './CorporateTrainingBenefits.module.scss';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import AppDropdown from '@/components/AppDropdown/AppDropdown';

type BenefitBlock = {
  title: string;
  description: string;
};

const CorporateTrainingBenefits: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.WhyCorporateTraining' });

  const { isDeviceLarge } = useDeviceDetect('md');

  const benefitBlocks: BenefitBlock[] = t('benefits', { returnObjects: true });

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{t('title')}</h2>

      {isDeviceLarge ? (
        <ul className={styles.list}>
          {benefitBlocks.map((block, index) => (
            <li key={block.title} className={styles.item}>
              <div className={styles.image}>
                {index === 0 && <ClockIcon />}
                {index === 1 && <AnalyticsIcon />}
                {index === 2 && <CustomizationIcon />}
                {index === 3 && <MediaIcon />}
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
                  {index === 1 && <AnalyticsIcon />}
                  {index === 2 && <CustomizationIcon />}
                  {index === 3 && <MediaIcon />}
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

export default CorporateTrainingBenefits;

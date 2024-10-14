import React from 'react';
import { useTranslation } from 'next-i18next';

import AppHeading from '@/components/AppHeading/AppHeading';
import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.PrivacyPolicy' });

  return (
    <main className={styles.wrapper}>
      <AppHeading variant="h1">{t('title')}</AppHeading>
      <p className={styles.date}>{t('date')}</p>

      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`introduction`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`definitions`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`information-collection`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`types-data`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`use-data`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`data-retention`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`data-transfer`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`data-disclosure`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`data-security`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`gdpr-rights`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`caloppa-rights`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`do-not-track`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`ccpa-rights`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`service-providers`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`analytics`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`ci-cd`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`payments`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`links`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`children`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`changes`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`introduction`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`contact-us`) }} />
    </main>
  );
};

export default PrivacyPolicy;

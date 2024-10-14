import React from 'react';
import { useTranslation } from 'next-i18next';

import AppHeading from '@/components/AppHeading/AppHeading';
import styles from './TermsOfUse.module.scss';

const TermsOfUse: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.TermsOfUse' });

  return (
    <main className={styles.wrapper}>
      <AppHeading variant="h1">{t('title')}</AppHeading>
      <p className={styles.date}>{t('date')}</p>

      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`introduction`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`terms`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`definitions`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`restrictions`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`payments`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`subscriptions`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`free-trial`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`fee-changes`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`refund`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`promotions`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`suggestions`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`links`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`cookies`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`changes`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`modifications`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`updates`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`third-party`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`term-termination`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`indemnification`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`warranties`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`liability`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`severability`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`waiver`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`amendments`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`agreement`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`updates-terms`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`property`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`notice`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`arbitrate`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`binding-arbitration`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`submissions-privacy`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`typographical-errors`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`miscellaneous`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`disclaimer`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`consent`) }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: t(`contact-us`) }} />
    </main>
  );
};

export default TermsOfUse;

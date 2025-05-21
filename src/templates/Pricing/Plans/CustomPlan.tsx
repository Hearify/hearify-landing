import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from './DesktopPlans.module.scss';
import EnvelopeIcon from '@/assets/icons/envelope.svg';

const CustomPlan: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.customPlan' });

  return (
    <div className={styles['custom-plan']}>
      <div className={styles['general-info']}>
        <p className={styles.title}>{t('title')}</p>
        <p className={styles.price}>{t('price')}</p>
        <p className={styles.description}>{t('description')}</p>
      </div>
      <form className={styles['form-container']}>
        <div className={styles['name-email-inputs']}>
          <div className={styles['input-container']}>
            <p className={styles.label}>{t('nameLabel')}</p>
            <input type="text" className={styles.input} placeholder={t('namePlaceholder')} />
          </div>
          <div className={styles['input-container']}>
            <p className={styles.label}>{t('emailLabel')}</p>
            <input type="email" className={styles.input} placeholder={t('emailPlaceholder')} />
          </div>
        </div>
        <div className={styles['input-container']}>
          <p className={styles.label}>{t('requirementsLabel')}</p>
          <textarea
            className={`${styles.input} ${styles['description-textarea']}`}
            placeholder={t('requirementsPlaceholder')}
          />
        </div>
        <div className={styles['btn-container']}>
          <button type="button" className={styles.btn}>
            <EnvelopeIcon width={22} height={22} />
            {t('button')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomPlan;

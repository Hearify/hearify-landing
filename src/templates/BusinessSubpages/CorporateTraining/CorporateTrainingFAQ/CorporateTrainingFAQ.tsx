import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from './CorporateTrainingFAQ.module.scss';
import FAQBlock from '@/containers/FAQBlock/FAQBlock';
import FAQSchema from '@/containers/FAQSchema/FAQSchema';

import type { FAQItem } from '@/types/article';

const CorporateTrainingFAQ: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.CorporateTrainingFAQ' });

  const faqBlocks: FAQItem[] = t('blocks', { returnObjects: true });

  return (
    <section className={styles.wrapper} id="faq">
      <FAQSchema items={faqBlocks} />

      <h2 className={styles.title}>{t('title')}</h2>
      <div className={styles.list}>
        {faqBlocks.map(item => (
          <FAQBlock key={item.question} question={item.question} answer={item.answer} />
        ))}

      </div>
    </section>
  );
};

export default CorporateTrainingFAQ;

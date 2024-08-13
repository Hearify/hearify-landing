import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from './HomeFAQ.module.scss';
import FAQBlock from '@/containers/FAQBlock/FAQBlock';
import AppHeading from '@/components/AppHeading/AppHeading';
import FAQSchema from '@/containers/FAQSchema/FAQSchema';

import type { FAQItem } from '@/types/article';

const HomeFAQ: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.HomeFAQ' });

  const faqBlocks: FAQItem[] = t('blocks', { returnObjects: true });

  return (
    <section className={styles.wrapper} id="faq">
      <FAQSchema items={faqBlocks} />

      <AppHeading variant="h2" className={styles.title}>
        {t('title')}
      </AppHeading>

      <div className={styles.list}>
        {faqBlocks.map(item => (
          <FAQBlock key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default HomeFAQ;

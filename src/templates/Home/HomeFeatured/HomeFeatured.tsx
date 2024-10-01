import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { featuredByBlocks } from './HomeFeatured.data';
import styles from './HomeFeatured.module.scss';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import AppButton from '@/components/AppButton/AppButton';

import type { FeaturedBlock } from './HomeFeatured.data';

const HomeFeatured: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.HomeFeatured' });

  const { isDeviceLarge } = useDeviceDetect('md');
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);

  const blocks = useMemo<FeaturedBlock[]>(() => {
    if (isDeviceLarge) return featuredByBlocks;
    if (isLoadMore) return featuredByBlocks;
    return featuredByBlocks.slice(0, 7);
  }, [isDeviceLarge, isLoadMore]);

  return (
    <section className={styles.wrapper} id="featured-by">
      <h2 className={styles.title}>{t('title')}</h2>

      <div className={styles.list}>
        {blocks.map(item => (
          <Image
            key={item.title} //
            src={item.imageUrl}
            alt={item.title}
            height={60}
            className={styles.image}
          />
        ))}
      </div>

      {!isDeviceLarge && !isLoadMore && (
        <AppButton variant="secondary" width="200px" onClick={() => setIsLoadMore(true)}>
          {t('button')}
        </AppButton>
      )}
    </section>
  );
};

export default HomeFeatured;

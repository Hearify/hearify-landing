import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import arrowIcon from '@/assets/icons/chevron-right.svg';
import styles from './AppBreadcrumbs.module.scss';

export type BreadcrumbItem = {
  text: string;
  href: string;
};

export type AppBreadcrumbsProps = {
  items: BreadcrumbItem[];
};

const AppBreadcrumbs: React.FC<AppBreadcrumbsProps> = ({ items }) => {
  return (
    <nav className={styles.wrapper} aria-label="breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => (
          <>
            {index !== items.length - 1 ? (
              <li key={item.text} className={cn(styles.item, styles.itemActive)}>
                <Link href={item.href}>{item.text}</Link>
              </li>
            ) : (
              <li key={item.text} className={styles.item}>
                {item.text}
              </li>
            )}

            <li className={styles.item}>{index < items.length - 1 && <Image src={arrowIcon} alt="separator" />}</li>
          </>
        ))}
      </ol>
    </nav>
  );
};

export default AppBreadcrumbs;

import React from 'react';

import styles from './PageLayout.module.scss';
import PageHeader from './PageHeader/PageHeader';
import PageFooter from './PageFooter/PageFooter';

export type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <PageHeader />
      </header>

      <div className={styles.container}>
        <main className={styles.body}>{children}</main>
      </div>

      <footer className={styles.footer}>
        <PageFooter />
      </footer>
    </div>
  );
};

export default PageLayout;

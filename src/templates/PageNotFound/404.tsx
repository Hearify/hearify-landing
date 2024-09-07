import Image from 'next/image';
import React from 'react';

import styles from './404.module.scss';
import logo from '../../assets/images/404-logo.png';
import stars from '../../assets/images/stars.png';
import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';

export default function Custom404() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Image src={logo} alt="404 Logo" />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>Page Not Found</p>
        <p className={styles.description}>
          The page you’re looking for may have been moved, deleted, or the URL might be incorrect. While this content
          isn&apos;t available, your next quiz is just a click away.
        </p>
      </div>
      <div className={styles.buttons}>
        <AppButtonLink variant="secondary" className={styles.explore_btn} width="280px" href="/library">
          EXPLORE MORE
        </AppButtonLink>
        <AppButtonLink
          variant="primary"
          className={styles.generate_btn}
          width="280px"
          href="https://app.hearify.org/login"
        >
          <Image src={stars} alt="Starts" />
          GENERATE QUIZ
        </AppButtonLink>
      </div>
    </div>
  );
}

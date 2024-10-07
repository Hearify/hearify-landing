import React from 'react';
import Image from 'next/image';

import styles from './BusinessInfoBoard.module.scss';
import { ClockIcon, CalendarIcon } from '@heroicons/react/24/solid';
import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import TeacherIcon from '@/assets/images/teacher.png';

const BusinessInfoBoard = () => {
  return (
    <section className={styles.wrapper}>
      <Image className={styles.imageBack} src={TeacherIcon} alt="" width={554} height={554} />
      <div className={styles.container}>
        <h3 className={styles.title}>Effective Learning and Corporate Training</h3>
        <p className={styles.description}>
          Automate the process of quiz creation for corporate training and track employee progress.
        </p>
        <div className={styles.content}>
          <div className={styles.contentItem}>
            <div className={styles.imageBox}>
              <ClockIcon className={styles.image} />
            </div>
            <p className={styles.itemText}>Automated quiz creation</p>
          </div>
          <div className={styles.contentItem}>
            <div className={styles.imageBox}>
              <ClockIcon className={styles.image} />
            </div>
            <p className={styles.itemText}>Integration with LMS</p>
          </div>
          <div className={styles.contentItem}>
            <div className={styles.imageBox}>
              <ClockIcon className={styles.image} />
            </div>
            <p className={styles.itemText}>Instant progress analytics</p>
          </div>
        </div>
        <AppButtonLink className={styles.button} href="https://app.hearify.org/signup" size="lg">
          GET A DEMO
          <CalendarIcon />
        </AppButtonLink>
      </div>
    </section>
  );
};

export default BusinessInfoBoard;

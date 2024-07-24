import React from 'react';
import Image from 'next/image';

import BlogGroupImg from '@/assets/images/blog-group.png';
import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import styles from './BoostAlert.module.scss';

const BoostAlert: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>Boost Your Knowledge: Create Personalized Quizzes with AI!</h3>
        <p className={styles.text}>Try our AI quiz creator now—completely free of charge!</p>
        <AppButtonLink className={styles.button} href="https://app.hearify.org/register" width="240px" size="lg">
          TRY FOR FREE
        </AppButtonLink>
      </div>

      <Image src={BlogGroupImg} alt="AI group of people" width={350} height={300} className={styles.image} />
    </div>
  );
};

export default BoostAlert;

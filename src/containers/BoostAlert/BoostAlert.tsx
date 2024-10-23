import React from 'react';
import { TFunction } from 'next-i18next';
import Image, { StaticImageData } from 'next/image';

import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import styles from './BoostAlert.module.scss';

type PropssType = {
  title: string;
  text: string;
  button: string;
  image: StaticImageData;
  width: number;
  height: number;
};

const BoostAlert: React.FC<PropssType> = ({ title, text, button, image, width, height }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
           <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <AppButtonLink className={styles.button} href="https://app.hearify.org/signup" width="240px" size="lg">
          {button}
        </AppButtonLink>
      </div>

      <Image src={image} alt="AI group of people" width={width} height={height} className={styles.image} />
    </div>
  );
};

export default BoostAlert;

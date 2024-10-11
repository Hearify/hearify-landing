import React from 'react';

import styles from './AppForWhomCard.module.scss';

export type AppForWhomCardProps = {
  title: string;
  description: string;
  image: React.FC<React.SVGProps<SVGSVGElement>>;
};

const AppForWhomCard: React.FC<AppForWhomCardProps> = ({ title, description, image: ImageComponent }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <ImageComponent className={styles.image} width={56} height={56} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default AppForWhomCard;

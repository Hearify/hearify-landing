import React from 'react';

import styles from './BusinessForWhomCard.module.scss';

export type BusinessForWhomCardProps = {
  title: string;
  description: string;
  image: React.FC<React.SVGProps<SVGSVGElement>>;
};

const BusinessForWhomCard: React.FC<BusinessForWhomCardProps> = ({
  title, //
  description,
  image: ImageComponent,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <ImageComponent className={styles.image} width={56} height={56} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default BusinessForWhomCard;

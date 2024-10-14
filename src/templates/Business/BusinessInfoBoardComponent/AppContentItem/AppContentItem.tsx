import React from 'react';

import styles from './AppContentItem.module.scss';

type AppContentItemProps = {
  text: string;
  image: React.FC<React.SVGProps<SVGSVGElement>>;
};

const AppContentItem: React.FC<AppContentItemProps> = ({ text, image: ImageComponent }) => {
  return (
    <div className={styles.contentItem}>
      <div className={styles.imageBox}>
        <ImageComponent className={styles.image} />
      </div>
      <p className={styles.itemText}>{text}</p>
    </div>
  );
};

export default AppContentItem;

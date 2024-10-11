import React from 'react';
import { CalendarIcon } from '@heroicons/react/24/solid';

import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import AppContentItem from './AppContentItem/AppContentItem';
import styles from './BusinessInfoBoard.module.scss';

export type BusinessInfoBoardProos = {
  title: string;
  description: string;
  button: string;
  href: string;
  addStyles?: boolean;
  text1: string;
  text2: string;
  text3: string;
  backImg: React.FC<React.SVGProps<SVGSVGElement>>;
  image1: React.FC<React.SVGProps<SVGSVGElement>>;
  image2: React.FC<React.SVGProps<SVGSVGElement>>;
  image3: React.FC<React.SVGProps<SVGSVGElement>>;
};

const BusinessInfoBoard: React.FC<BusinessInfoBoardProos> = ({
  title,
  description,
  button,
  href,
  addStyles = false,
  text1,
  text2,
  text3,
  backImg: BackImageComponent,
  image1,
  image2,
  image3,
}) => {
  return (
    <section className={addStyles ? styles.wrapper2 : styles.wrapper}>
      <BackImageComponent className={addStyles ? styles.imageBack2 : styles.imageBack} width={554} height={554} />
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.content}>
          <AppContentItem text={text1} image={image1} />
          <AppContentItem text={text2} image={image2} />
          <AppContentItem text={text3} image={image3} />
        </div>
        <AppButtonLink className={styles.button} href={href} size="lg">
          {button}
          <CalendarIcon />
        </AppButtonLink>
      </div>
    </section>
  );
};

export default BusinessInfoBoard;

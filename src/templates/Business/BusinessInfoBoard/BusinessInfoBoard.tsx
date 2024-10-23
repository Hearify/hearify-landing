import React from 'react';
import { CalendarIcon } from '@heroicons/react/24/solid';

import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import BusinessInfoBoardCard from '../BusinessInfoBoardCard/BusinessInfoBoardCard';
import styles from './BusinessInfoBoard.module.scss';

export type BusinessInfoBoardProps = {
  title: string;
  description: string;
  button: string;
  showButtonIcon?: boolean;
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

const BusinessInfoBoard: React.FC<BusinessInfoBoardProps> = ({
  title,
  description,
  button,
  href,
  showButtonIcon = false,
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
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.content}>
          <BusinessInfoBoardCard text={text1} image={image1} />
          <BusinessInfoBoardCard text={text2} image={image2} />
          <BusinessInfoBoardCard text={text3} image={image3} />
        </div>

        <AppButtonLink className={styles.button} href={href} size="lg">
          {button}
          {showButtonIcon && <CalendarIcon />}
        </AppButtonLink>
      </div>
    </section>
  );
};

export default BusinessInfoBoard;

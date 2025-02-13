import React from 'react';
import { CalendarIcon } from '@heroicons/react/24/solid';

import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import InfoBoardCard from '@/containers/InfoBoardCard/InfoBoardCard';
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
  text4: string;
  backImg: React.FC<React.SVGProps<SVGSVGElement>>;
  image: React.FC<React.SVGProps<SVGSVGElement>>;
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
  text4,
  backImg: BackImageComponent,
  image,
}) => {
  return (
    <section className={addStyles ? styles.wrapper2 : styles.wrapper}>
      <BackImageComponent className={addStyles ? styles.imageBack2 : styles.imageBack} width={554} height={554} />

      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.content}>
          <InfoBoardCard text={text1} image={image} />
          <InfoBoardCard text={text2} image={image} />
          <InfoBoardCard text={text3} image={image} />
          <InfoBoardCard text={text4} image={image} />
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

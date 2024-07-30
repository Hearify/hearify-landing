import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trans, useTranslation } from 'next-i18next';

import logoImg from '@/assets/images/logo.png';
import facebookImg from '@/assets/icons/facebook.svg';
import linkedInImg from '@/assets/icons/linkedin.svg';
import instagramImg from '@/assets/icons/instagram.svg';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import { footerNavigation } from '@/constants/navigation';
import styles from './PageFooter.module.scss';

const PageFooter: React.FC = () => {
  const { t } = useTranslation();

  const { isDeviceLarge, isDeviceSmall } = useDeviceDetect('md');

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {isDeviceSmall && (
          <Link href="/">
            <Image src={logoImg} alt="Hearify logo" width={180} height={68} className={styles.logo} />
          </Link>
        )}

        <nav className={styles.navigation}>
          {footerNavigation.map(item => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {t(item.i18nKey)}
            </Link>
          ))}
        </nav>

        {isDeviceLarge && (
          <Link href="/">
            <Image src={logoImg} alt="Hearify logo" width={180} height={68} className={styles.logo} />
          </Link>
        )}

        <div className={styles.socials}>
          <div className={styles.socialsContainer}>
            <a href="https://www.facebook.com/people/Hearify/61552644703836/" target="_blank" rel="noreferrer">
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
              <Image src={facebookImg} alt="Facebook" width={32} height={32} />
            </a>
            <a href="https://www.linkedin.com/company/hearify/" target="_blank" rel="noreferrer">
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
              <Image src={linkedInImg} alt="LinkedIn" width={32} height={32} />
            </a>
            <a href="https://www.instagram.com/hearify.tech/" target="_blank" rel="noreferrer">
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
              <Image src={instagramImg} alt="Instagram" width={32} height={32} />
            </a>
          </div>

          <a className={styles.email} href="mailto:hearify.tech@gmail.com">
            hearify.tech@gmail.com
          </a>
        </div>
      </div>

      {isDeviceLarge ? (
        <p className={styles.privacy}>
          <Trans i18nKey="terms_of_use_and_privacy_policy">
            Be sure to take a look at our <Link href="https://terms-of-service.hearify.org/">Terms of Use</Link> and{' '}
            <Link href="https://privacy-policy.hearify.org/">Privacy Policy</Link>
          </Trans>
        </p>
      ) : (
        <p className={styles.privacy}>
          <Link href="https://terms-of-service.hearify.org/">{t('terms')}</Link> |{' '}
          <Link href="https://privacy-policy.hearify.org/">{t('privacy')}</Link>
        </p>
      )}
    </div>
  );
};

export default PageFooter;

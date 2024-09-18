import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trans, useTranslation } from 'next-i18next';

import logoImg from '@/assets/images/logo.png';
import FacebookIcon from '@/assets/icons/facebook.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import { footerNavigation } from '@/constants/navigation';
import styles from './PageFooter.module.scss';

const PageFooter: React.FC = () => {
  const { t } = useTranslation();

  const { isDeviceLarge, isDeviceSmall } = useDeviceDetect('sm');

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.phoneFooter}>
          {isDeviceSmall && (
            <nav className={styles.navigation}>
              {footerNavigation.map(item => (
                <Link key={item.href} href={item.href} className={styles.link}>
                  {t(item.i18nKey)}
                </Link>
              ))}
            </nav>
          )}

          {isDeviceSmall && (
            <div className={styles.phoneSocials}>
              <Link href="/">
                <Image src={logoImg} alt="Hearify logo" width={180} height={68} className={styles.logo} />
              </Link>
              <div className={styles.socials}>
                <div>
                  <p className={styles.subtitle}>{t('contact_us')}</p>
                  <a className={styles.email} href="mailto:hearify.tech@gmail.com">
                    hearify.tech@gmail.com
                  </a>
                </div>
                <div className={styles.socialsContainer}>
                  <a
                    href="https://www.facebook.com/people/Hearify/61552644703836/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook icon"
                  >
                    <FacebookIcon width={32} height={32} className={styles.facebookIcon} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/hearify/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn icon"
                  >
                    <LinkedInIcon width={32} height={32} className={styles.linkedinIcon} />
                  </a>
                  <a
                    href="https://www.instagram.com/hearify.tech/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram icon"
                  >
                    <InstagramIcon width={32} height={32} className={styles.instagramIcon} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {isDeviceSmall && (
          <p className={styles.privacy}>
            <Link href="https://terms-of-service.hearify.org/">{t('terms')}</Link> |{' '}
            <Link href="https://privacy-policy.hearify.org/">{t('privacy')}</Link>
          </p>
        )}

        {isDeviceLarge && (
          <div className={styles.socials}>
            <p className={styles.title}>{t('follow_us')}</p>
            <div className={styles.socialsContainer}>
              <a
                href="https://www.facebook.com/people/Hearify/61552644703836/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook icon"
              >
                {isDeviceSmall ? <FacebookIcon width={24} height={24} /> : <FacebookIcon width={32} height={32} />}
              </a>
              <a
                href="https://www.linkedin.com/company/hearify/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn icon"
              >
                {isDeviceSmall ? <LinkedInIcon width={24} height={24} /> : <LinkedInIcon width={32} height={32} />}
              </a>
              <a
                href="https://www.instagram.com/hearify.tech/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram icon"
              >
                {isDeviceSmall ? <InstagramIcon width={24} height={24} /> : <InstagramIcon width={32} height={32} />}
              </a>
            </div>
            <div>
              <p className={styles.subtitle}>{t('contact_us')}</p>
              <a className={styles.email} href="mailto:hearify.tech@gmail.com">
                hearify.tech@gmail.com
              </a>
            </div>
          </div>
        )}

        <div className={styles.terms}>
          {isDeviceLarge && (
            <Link href="/">
              <Image src={logoImg} alt="Hearify logo" width={180} height={68} className={styles.logo} />
            </Link>
          )}
          {isDeviceLarge && (
            <p className={styles.privacy}>
              <Trans i18nKey="terms_of_use_and_privacy_policy">
                Be sure to take a look at our <Link href="https://terms-of-service.hearify.org/">Terms of Use</Link> and{' '}
                <Link href="https://privacy-policy.hearify.org/">Privacy Policy</Link>
              </Trans>
            </p>
          )}
        </div>

        {isDeviceLarge && (
          <nav className={styles.navigation}>
            {footerNavigation.map(item => (
              <Link key={item.href} href={item.href} className={styles.link}>
                {t(item.i18nKey)}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default PageFooter;

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import logoImg from '@/assets/images/logo.png';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import { headerNavigation } from '@/constants/navigation';
import styles from './PageHeader.module.scss';

const PageHeader: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const { isDeviceLarge, isServer } = useDeviceDetect('lg');

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { locale } = useRouter();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg} alt="Hearify logo" width={180} height={68} className={styles.logoImage} />
      </Link>

      {!isServer && isDeviceLarge ? (
        <>
          <nav className={styles.navigation}>
            {headerNavigation.map(item => {
              const href = locale === 'ua' || item.isAnchor ? item.href : `https://hearify.org${item.href}`;

              return (
                <Link
                  href={href}
                  key={item.i18nKey}
                  className={cn(styles.link, router.asPath === item.href && styles.linkActive)}
                >
                  {t(item.i18nKey)}
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <AppButtonLink variant="secondary" width="110px" href="https://app.hearify.org/login">
              {t('log_in')}
            </AppButtonLink>
            <AppButtonLink href="https://app.hearify.org/signup">{t('try_for_free')}</AppButtonLink>
          </div>
        </>
      ) : (
        <>
          <button
            aria-label="Burger menu button"
            type="button"
            className={cn(styles.hamburger, isMenuOpen && styles.hamburgerActive)}
            onClick={toggleMenu}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>

          <div className={cn(styles.drawer, isMenuOpen && styles.drawerActive)}>
            <div className={styles.drawerContent}>
              <Link href="/">
                <Image src={logoImg} alt="Hearify logo" width={180} height={68} />
              </Link>

              <nav className={styles.navigation}>
                {headerNavigation.map(item => {
                  const href = locale === 'ua' || item.isAnchor ? item.href : `https://hearify.org${item.href}`;

                  return (
                    <Link
                      href={href}
                      key={item.i18nKey}
                      className={cn(styles.link, router.asPath === item.href && styles.linkActive)}
                    >
                      {t(item.i18nKey)}
                    </Link>
                  );
                })}
              </nav>

              <div className={styles.actions}>
                <AppButtonLink variant="secondary" width="110px" href="https://app.hearify.org/login">
                  {t('log_in')}
                </AppButtonLink>
                <AppButtonLink href="https://app.hearify.org/signup">{t('try_for_free')}</AppButtonLink>
              </div>
            </div>
          </div>

          <div className={cn(styles.overlay, isMenuOpen && styles.overlayActive)} />
        </>
      )}
    </div>
  );
};

export default PageHeader;

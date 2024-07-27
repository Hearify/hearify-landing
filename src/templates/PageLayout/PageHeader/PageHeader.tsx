import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import logoImg from '@/assets/images/logo.png';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import { headerNavigation } from '@/constants/navigation';
import styles from './PageHeader.module.scss';

const PageHeader: React.FC = () => {
  const router = useRouter();

  const { isDeviceLarge } = useDeviceDetect('lg');

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg} alt="Hearify logo" width={180} height={68} className={styles.logoImage} />
      </Link>

      {isDeviceLarge ? (
        <>
          <nav className={styles.navigation}>
            {headerNavigation.map(item => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(styles.link, router.asPath === item.href && styles.linkActive)}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <AppButtonLink variant="secondary" width="110px" href="https://app.hearify.org/login">
              LOG IN
            </AppButtonLink>
            <AppButtonLink href="https://app.hearify.org/register">TRY FOR FREE</AppButtonLink>
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
                {headerNavigation.map(item => (
                  <Link key={item.title} href={item.href} className={styles.link}>
                    {item.title}
                  </Link>
                ))}
              </nav>

              <div className={styles.actions}>
                <AppButtonLink variant="secondary" width="110px" href="https://app.hearify.org/login">
                  LOG IN
                </AppButtonLink>
                <AppButtonLink href="https://app.hearify.org/register">TRY FOR FREE</AppButtonLink>
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

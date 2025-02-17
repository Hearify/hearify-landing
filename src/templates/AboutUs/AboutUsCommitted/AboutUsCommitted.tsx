import React from 'react';
import { useTranslation } from 'next-i18next';

import TeacherIcon from '@/assets/icons/teacher.svg';
import StudentIcon from '@/assets/icons/student.svg';
import LightIcon from '@/assets/icons/light-bulb.svg';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import AppDropdown from '@/components/AppDropdown/AppDropdown';
import styles from './AboutUsCommitted.module.scss';

type DataType = {
  title: string;
  description: string;
};

const AboutUsCommitted: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.AboutUsCommitted' });
  const data = t('data', { returnObjects: true });

  const { isDeviceLarge } = useDeviceDetect('md');

  return (
    <section className={styles.wrapper} id="committed">
      <h2 className={styles.title}>{t('title')}</h2>
      {isDeviceLarge ? (
        <ul className={styles.list}>

          {(data as DataType[]).map((item, index) => (
            <li key={item.title} className={styles.item}>
              <div className={styles.image}>
                {index === 0 && <TeacherIcon />}
                {index === 1 && <StudentIcon />}
                {index === 2 && <LightIcon />}
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={styles.list}>
          {(data as DataType[]).map((item, index) => (
            <AppDropdown
              key={item.title}
              icon={
                <div className={styles.image}>
                  {index === 0 && <TeacherIcon />}
                  {index === 1 && <StudentIcon />}
                  {index === 2 && <LightIcon />}
                </div>
              }
              title={item.title}
              content={item.description}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default AboutUsCommitted;

import React from 'react';
import { useTranslation } from 'next-i18next';

import AppHeading from '@/components/AppHeading/AppHeading';
import TeacherIcon from '@/assets/icons/teacher.svg';
import StudentIcon from '@/assets/icons/student.svg';
import OfficeIcon from '@/assets/icons/office.svg';
import SchoolIcon from '@/assets/icons/school.svg';
import styles from './HomeAudience.module.scss';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import AppDropdown from '@/components/AppDropdown/AppDropdown';

type AudienceBlock = {
  title: string;
  text: string;
};

const HomeAudience: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.HomeAudience' });

  const { isDeviceLarge } = useDeviceDetect('md');

  // TODO(Sasha): use data blocks and titles instead of returnObject from transiation
  const audienceBlocks: AudienceBlock[] = t('blocks', { returnObjects: true });

  return (
    <section className={styles.wrapper} id="audience">
      <AppHeading variant="h2" className={styles.title}>
        {t('title')}
      </AppHeading>
      <p className={styles.description}>{t('description')}</p>

      {isDeviceLarge ? (
        <ul className={styles.list}>
          {audienceBlocks.map((item, index) => (
            <li key={item.title} className={styles.item}>
              <div className={styles.image}>
                {index === 0 && <TeacherIcon />}
                {index === 1 && <StudentIcon />}
                {index === 2 && <OfficeIcon />}
                {index === 3 && <SchoolIcon />}
              </div>

              <div className={styles.content}>
                <h3 className={styles.subtitle}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={styles.list}>
          {audienceBlocks.map((item, index) => (
            <AppDropdown
              key={item.title}
              icon={
                <div className={styles.image}>
                  {index === 0 && <TeacherIcon />}
                  {index === 1 && <StudentIcon />}
                  {index === 2 && <OfficeIcon />}
                  {index === 3 && <SchoolIcon />}
                </div>
              }
              title={item.title}
              content={item.text}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default HomeAudience;

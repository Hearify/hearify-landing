import React from 'react';
import Image from 'next/image';

import linkedInImg from '@/assets/icons/linkedin.svg';
import { AuthorRoleEnum } from '@/types/author';
import styles from './TopicAuthor.module.scss';

import type { Author, AuthorRole } from '@/types/author';

export type TopicAuthorProps = {
  author: Author;
  role: AuthorRole;
};

const TopicAuthor: React.FC<TopicAuthorProps> = ({ author, role }) => {
  return (
    <div className={styles.wrapper}>
      <Image src={author.avatarUrl} alt={author.name} className={styles.avatar} width={100} height={100} />

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.name}>{author.name}</p>

          <div className={styles.body}>
            <p className={styles.role}>{AuthorRoleEnum[role]}</p>
            <a href={author.linkedInUrl} target="_blank" rel="noreferrer">
              {/* TODO(Sasha): Fix image assign everywhere */}
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
              <Image src={linkedInImg} alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
        </div>
        <p className={styles.description}>{author.description}</p>
      </div>
    </div>
  );
};

export default TopicAuthor;

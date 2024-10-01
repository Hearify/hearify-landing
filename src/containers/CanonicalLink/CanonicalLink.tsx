import React from 'react';
import { NextRouter } from 'next/router';

const CanonicalLink: React.FC<{ router: NextRouter }> = ({ router }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '');
  const cleanPath = router.asPath.split('#')[0].split('?')[0];
  const canonicalEnUrl = `${baseUrl}${cleanPath === '/' ? '' : cleanPath}`;
  const canonicalUkUrl = `${baseUrl}/uk${cleanPath === '/' ? '' : cleanPath}`;
  return (
    <>
      <link rel="alternate" href={canonicalEnUrl} hrefLang="en" />
      <link rel="alternate" href={canonicalUkUrl} hrefLang="uk" />;
    </>
  );
};

export default CanonicalLink;

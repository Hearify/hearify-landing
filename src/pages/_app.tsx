import React from 'react';
import { Nunito, Caveat } from 'next/font/google';

import PageLayout from '@/templates/PageLayout/PageLayout';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-caveat',
});

// Suppress useLayoutEffect (and its warnings) when not running in a browser.
if (typeof window === 'undefined') {
  React.useLayoutEffect = () => {};
}

/* eslint-disable react/jsx-props-no-spreading */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={`${nunito.variable} ${caveat.variable}`}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </div>
  );
};

export default App;

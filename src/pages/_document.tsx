import { Html, Head, Main, NextScript } from 'next/document';
import { GoogleTagManager } from '@next/third-parties/google';

const Document = () => {
  return (
    <Html>
      <Head>
        <GoogleTagManager gtmId="GTM-PV5D2MP9" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

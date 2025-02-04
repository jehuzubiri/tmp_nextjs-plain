import { AppConfig } from '@/constants/App.const';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

  return (
    <Html lang='en' version={AppConfig.appVersion}>
      <Head>
        <link rel="icon" href="favicon.png" />
        <meta
          name={AppConfig.metaAlt}
          content={AppConfig.metaDescription}
        />
        <meta name="theme-color" content={AppConfig.theme_color} />
        <meta name="application-name" content={AppConfig.appName} />
        <meta name="msapplication-tooltip" content={AppConfig.appName} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

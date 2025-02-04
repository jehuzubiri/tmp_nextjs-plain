import { AppConfig } from '@/constants/App.const';
import Head from 'next/head';

const PageHead = () => {
  //@DESC: meta content source can also come from SSR data

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content={AppConfig.metaDescription}
      />
      <meta name="keywords" content={AppConfig.keywords} />
      <meta name="author" content="Jehu Zubiri | ReactJS Developer" />
      <meta property="og:title" content="Your Page Title" />
      <meta
        property="og:description"
        content="A brief description of your page for social sharing."
      />
      <meta
        property="og:image"
        content="URL to an image that represents your page"
      />
      <meta property="og:url" content="URL of your page" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={AppConfig.siteUrl} />
      <title>{AppConfig.metaAlt}</title>
    </Head>
  );
};

export default PageHead;

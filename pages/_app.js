import App from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import StoreProvider from '@/redux/provider';

import { GlobalScripts } from '@/components/Main';
import PageHead from '@/components/PageHead';
import Layout from '@/components/Layout';
import '../src/style/App.scss';

const AppMain = ({ Component, pageProps, main }) => {
  const validRqrmnts = true;
  const script = main?.layout?.script;

  return (
    <StoreProvider preloadedState={pageProps?.initialReduxState}>
      <PageHead />
      {validRqrmnts ? (
        <>
          <NextNProgress color="#FAC50F" />
          <GlobalScripts script={script} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      ) : (
        <p>Under Development</p>
      )}
    </StoreProvider>
  );
};

AppMain.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context);

  return {
    ...ctx,
    main: {
      layout: {},
      home: {},
    },
  };
};

export default AppMain;

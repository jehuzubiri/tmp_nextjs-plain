import App from 'next/app';
import Heads from '@src/layouts/Heads';
import Layout from '@src/layouts/index';
import Theme from '@src/components/Theme/index';
import '@styles/main.css';

const AppMain = ({ Component, pageProps, data }) => {
  return (
    <Theme>
      <Heads />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
};

AppMain.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context);
  const customDataHere = { name: 'custom data' };
  return { ...ctx, data: customDataHere };
};

export default AppMain;

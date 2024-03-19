import App from 'next/app';
import { useStore } from '@src/redux/store';
import { Provider } from 'react-redux';

import Heads from '@src/layouts/Heads';
import Layout from '@src/layouts/index';
import Theme from '@src/components/Theme/index';
import '@styles/main.css';

const AppMain = ({ Component, pageProps, data }) => {
  const store = useStore(pageProps?.initialReduxState);

  return (
    <Provider store={store}>
      <Theme>
        <Heads settings={{}} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </Provider>
  );
};

AppMain.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context);
  const customDataHere = { name: "custom data" }
  return { ...ctx, data: customDataHere };
};

export default AppMain;

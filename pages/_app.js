import App from 'next/app';
import { useStore } from '@src/redux/store';
import { Provider } from 'react-redux';

import Heads from '@src/layouts/Heads';
import Layout from '@src/layouts/index';
import Theme from '@src/components/Theme/index';
import UnderDevelopment from '@src/components/UnderDevelopment';
import '@styles/main.css';

const AppMain = ({ Component, pageProps, data }) => {
  const store = useStore(pageProps?.initialReduxState);
  const validRqrmnts = true; //@DESC: Here is a function that check the data if requirements are valid.

  return (
    <Provider store={store}>
      {validRqrmnts ? <Theme>
        <Heads settings={{}} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme> : <UnderDevelopment />}
    </Provider>
  );
};

AppMain.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context);
  const customDataHere = { name: "custom data" }
  return { ...ctx, data: customDataHere };
};

export default AppMain;

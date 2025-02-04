import { makeStore } from '@/redux/store';
import { stackIsLoggedIn } from '@/redux/slices/Global.slice';
import LoremPage from '@/modules/lorem';

const PageComponent = ({ data }) => <LoremPage data={data} />;
export default PageComponent;

export async function getServerSideProps() {
  // Fetch initial data for the page
  const sampleAPIRes = { loggedin: true };

  // Create a store to dispatch actions and populate state
  const store = makeStore();

  // NOTE: this dispatch action will not take effect if the data is not from async await function
  store.dispatch(stackIsLoggedIn(sampleAPIRes.loggedin));

  return {
    props: {
      initialReduxState: store.getState(),
      data: {
        sample_data: {
          message: 'hello from pages/lorem.js'
        },
      },
    },
  };
}

import { stackIsLoggedIn } from '@/redux/slices/Global.slice';
import { useRouter } from 'next/router';

const PageComponent = ({ data }) => {
  const router = useRouter();
  const routerQuery = router?.query;
  console.log('Router Query:', routerQuery);

  return (
    <section>
      <p>Sample Page Content: Inner</p>
    </section>
  );
};
export default PageComponent;

export async function getServerSideProps() {
  return {
    props: {
      data: {
        sample_data: {
          message: 'hello from pages/lorem.js'
        },
      },
    },
  };
}

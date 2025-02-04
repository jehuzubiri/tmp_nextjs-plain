import LandingPage from '@/modules/landingpage';

const PageIndex = ({ data }) => <LandingPage data={data} />;
export default PageIndex;

export async function getServerSideProps() {
  return {
    props: {
      data: {
        sample_data: {
          message: 'hello from pages/index.js'
        },
      },
    },
  };
}

import MainPage from "@src/modules/MainPage"

const PageContent = ({ data }) => <MainPage />;
export default PageContent;

export async function getServerSideProps() {
  let data = {}

  return {
    props: {
      data,
    },
  };
}

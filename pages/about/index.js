import About from "@src/modules/About"

const PageContent = ({ data }) => <About />;
export default PageContent;

export async function getServerSideProps() {
    let data = {}

    return {
        props: {
            data,
        },
    };
}

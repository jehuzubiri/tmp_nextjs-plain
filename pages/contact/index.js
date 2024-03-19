import ContactUs from "@src/modules/ContactUs"

const PageContent = ({ data }) => <ContactUs />;
export default PageContent;

export async function getServerSideProps() {
    let data = {}

    return {
        props: {
            data,
        },
    };
}

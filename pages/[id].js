import Layout, { getLayout } from "../components/layout";

Main.getLayout = getLayout(99);
// Main.getLayout = (page) => <Layout type={1}>{page}</Layout>;

export default function Main({ id }) {
  return (
    <>
      <h1>{id}</h1>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.id;
  return {
    props: {
      id,
    },
  };
}

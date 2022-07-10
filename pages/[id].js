import Layout, { getLayout } from "../components/layout";
import { useDispatch } from "react-redux";
import { setType } from "../components/layoutSlice";
import { useEffect } from "react";

// Main.getLayout = (page) => <Layout type={1}>{page}</Layout>;
Main.getLayout = getLayout(99);

export default function Main({ id, type }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setType(222));
  }, []);

  return (
    <>
      <h1>
        {id},{type}
      </h1>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.id;
  return {
    props: {
      id,
      type: 888,
    },
  };
}

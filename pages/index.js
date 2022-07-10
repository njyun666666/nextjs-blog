import Head from "next/head";
import Layout, { siteTitle, getLayout } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import cn from "classnames";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Header from "../components/header";
import { useDispatch } from "react-redux";
import { setType } from "../components/layoutSlice";
import { useEffect } from "react";

Home.getLayout = getLayout(11);
// Home.getLayout = (page) => <Layout type={0}>{page}</Layout>;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const type = "success"; // success error
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setType(111));
  }, []);

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p
          className={cn({
            [utilStyles.success]: type === "success",
            [utilStyles.error]: type === "error",
          })}
        >
          [Your Self Introduction]
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

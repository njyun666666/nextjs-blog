import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import cn from "classnames";

export default function Home() {
  const type = "success"; // success error

  return (
    <Layout home>
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
    </Layout>
  );
}

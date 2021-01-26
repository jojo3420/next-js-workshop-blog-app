import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

function SubPost() {
  return (
    <Layout>
      <Head>
        <title>sub-post</title>
      </Head>
      <h1>Sub Post</h1>
      <Link href="/sub-posts/first-post"><a>go to first-post</a></Link>
    </Layout>
  );
}

export default SubPost;

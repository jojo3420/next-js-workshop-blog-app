import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/sub-posts/sub-post">
        <a>go to sub-post</a>
      </Link>
    </Layout>
  );
}

export default FirstPost;

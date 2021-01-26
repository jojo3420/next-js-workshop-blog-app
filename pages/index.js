import Head from 'next/head'
import Layout from "../components/layout";
import utilsStyles from '../styles/utils.module.css'
import Alert from "../components/alert";
import { getSortedPostsData } from "../lib/posts";
// import axios from 'axios';
import Link from 'next/link'
import Date from '../components/date'



//1. 정적 생성(static generation): 사전 렌더링
// 소스코드 컴파일(빌드) 시점 데이터 로 확정 하여 정적 html 만드므로
// 모든 요청값에 대한 페이지 결과가 동일함.
// 정적 페이지에 주로 사용해야 함
// (사용자의 요청에 앞서 데이터를 미리 렌더링 할 수있는 경우)
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

//  2. 서버사이드 랜더링.  각 요청 마다 data fetch
// 빌드 시간 대신 요청 시간에 데이터를 가져와야하는 경우
// export async function getServerSideProps(context) {
//   let url = 'https://jsonplaceholder.typicode.com/posts';
//   let allPostsData
//   try {
//     const res = await axios.get(url);
//     // console.log({data : res.data})
//     allPostsData = res.data || []
//   } catch (e) {
//     console.error('api fetch error => ', e.message)
//   }
//   return {
//     props: {
//       allPostsData,
//     }
//   }
// }
// 3. 클라이언트 사이드- 바닐라 리액트 방식.
// SEO와 관련이없는 비공개 사용자 별 페이지


export default function Home({allPostsData}) {
  // console.log({ allPostsData })
  if (!allPostsData) return;

  return (
    <Layout home={true}>
      <Head>
        <title>HOME</title>
      </Head>
      <section className={utilsStyles.headingMd}>
        <p>Your self introduction</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Alert type={'success'}>
          this is success message
        </Alert>
        <Alert type={'error'}>
          this is error message
        </Alert>
      </section>
      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2 className={utilsStyles.headingLg}>Blog</h2>
        <ul className={utilsStyles.list}>
          {allPostsData && allPostsData.map(({id, date, title}) => (
            <li key={id} className={utilsStyles.listItem}>
              <Link href={`posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br/>
              <small className={utilsStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <small>
          {process.env.NEXT_PUBLIC_ANALYTICS_ID}
        </small>
      </section>
    </Layout>
  )
}

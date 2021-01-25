



// this is Server Side. Not Client side
// 서버 측 코드를 직접 작성 하거나 도우미 함수를 호출
// 이유는 클라이언트 사이드에서 실행 되지 않음. 오직 서버 사이드 임.

// Api router 목적
// 1. Saving incoming data to your database
// 2. Securely communicating with a third-party API
// 3. Previewing draft content from your CMS
export default function handler(req, res){

  // const email = req.body.email ;
  // The Save email to your database, etc

  res.status(200).json({ text: 'hello', data: getData() })



}
const DB = [
  {id: 1, name: 'haha'},
  {id: 2, name: 'hoho'},
]
// helper func
const getData = () => DB

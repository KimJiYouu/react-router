import { Link } from "react-router-dom"


function Home() {
  return (
    <div>
      <h3>메인페이지</h3>

{/* a태그는 Link로 바뀜 */}
      <ul>
        <li><Link to="/user">회원페이지</Link></li>
        <li><Link to="/user?id=aaa123&name=Charlie">회원페이지</Link></li>
        <li><Link to="/info/1/charlie">인포페이지</Link></li>
        <li><Link to="/info/2/lola">인포페이지</Link></li>
        <li><Link to="/info/3/don">인포페이지</Link></li>
      </ul>
    </div>
  )
}
export default Home
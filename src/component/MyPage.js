import { Navigate, useNavigate } from "react-router-dom"

function MyPage() {

  const loginYN =  false // localStorage.getItem("token");

  /* navigate훅은 렌더링 과정에서 사용이 불가함 */
  // const nav = useNavigate();
  // if(!loginYN) {
  //   nav('/'); //동작이 안됨
  // }

  //to=경로, replace=기록을 남길지의 여부(true인경우 기록x)
  if(!loginYN) {
    return <Navigate to='/' replace={true}/>
  }


  return (
    <div>
      <h3>여기는 권한이 있는 사람만 접근할 수 있음</h3>
    </div>
  )

}
export default MyPage
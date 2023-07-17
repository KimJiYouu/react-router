import { useContext } from "react"
import UserContext from "../context/ContextAPI2"


function C () {
  //context API사용
  const {state, action} = useContext(UserContext);
  return (
    <div>
      <h3>C컴포넌트</h3>
      {state.id} <br />
      {state.name} <br />
    </div>
  )
}
export default C
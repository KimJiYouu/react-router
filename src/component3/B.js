import { useContext } from "react"
import UserContext from "../context/ContextAPI2"


function B () {
  //context API 사용
  const {state, actioon} = useContext(UserContext);
  return (
    <div>
      <h3>B컴포넌트</h3>
      {state.id} <br />
      {state.name} <br />
    </div>
  )
}
export default B
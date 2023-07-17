import ColorComponent from "./component3/ColorComponent"
import ColorContext from "./context/ContextAPI"

function App() {
  return (
    /* provider는 하위컴포넌트에 전달할 props값을 제공하는 역할을 함 */
    /* value속성에는 consumer에서 제어할 값이 들어감 */
    <div>

      <ColorContext.Provider value={{color: 'green'}}>
      <ColorComponent />
      </ColorContext.Provider>
    </div>
  )
}
export default App
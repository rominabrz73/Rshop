
import {  useState } from "react"
import Button from "./component/button/Button"
import Input from "./component/input/Input";


function App() {
  const [user,setUser] = useState("romina");



  return (
  <>
  <Input   />
  <Button  user={user} setUser={setUser}>
    Click Me
    </Button></>
  )
}

export default App

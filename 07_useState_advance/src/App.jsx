import { useState } from "react"
import StateChangeOnArray from "./StateChangeOnArray"

const App = () => {

  let [user, setUser] = useState({name: "rifat", age: 24});//using useState
  
  const ChangUser = () => {
    let newUser = {...user}//destructuring

    newUser.age = 25
    newUser.name = "jack"
    setUser(newUser)
  }


  //array to sent as props to the StateChangeOnArray components
  let number = 10;

  return (
    
    <>
      <div>
        <h1>Name is <span>{user.name}</span> and he is <span>{user.age}</span></h1>
        <button onClick={ChangUser}>Click here!</button>
      </div>

      <StateChangeOnArray number = {number} />

    </>
  )
}

export default App

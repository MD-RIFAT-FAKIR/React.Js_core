import { useState } from "react"

const App = () => {

  const [users, setUser] = useState([
    
  ])

   async function getUser ()  {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await response.json();

      setUser(data)

    }


  return (
    <div>
      <button onClick={getUser}>Get todos</button>
      {users.map((user) => {
        return(
          <div key={user.id} >
            <p>{user.title}</p>
          </div>
        )
      })}
    </div>
  )
}
export default App
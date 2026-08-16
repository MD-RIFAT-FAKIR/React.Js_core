import { useState } from "react"

const App = () => {

  let [alluser, setUser] = useState([ () => {
    let isExist = JSON.parse(localStorage.getItem('userDetails'))
    return (isExist) ? isExist : [{name:'', email:''}]
  }])

  let handleInput = (e) => {
    setUser ({
        ...alluser,
        [e.target.name]:e.target.value
    })
  }

  let handleSubmit = (e) => {
      e.preventDefault()
      localStorage.setItem("userDetails", JSON.stringify(alluser))
      setUser(
        {
          name:'',
          email:''
        }
      )
  }

  const deleteStorage = () => {
    localStorage.clear()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={alluser.name} name="name" placeholder="enter name" />
        <input type="email" onChange={handleInput} value={alluser.email} name="email" placeholder="email" />
        <button>save to local storage</button>
      </form>
      <button onClick={deleteStorage}>delete storage</button>
    </div>
  )
}


export default App 
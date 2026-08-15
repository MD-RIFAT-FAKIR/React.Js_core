import { useState } from "react"

const App = () => {

  let [user, setUser] = useState({
    name:'',
    email:''
  })

  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handeSubmit = (e) => {
    e.preventDefault()
    console.log(user.name)
  }



  return (
    <>
      <form onSubmit={handeSubmit} className="max-w-md mx-auto w-3xl p-6 bg-blue-200 shadow-md rounded-lg space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
          <input 
            type="text" name="name" value={user.name} onChange={handelChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input 
            type="email" name="email" value={user.email} onChange={handelChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="you@example.com"
          />
        </div>

        <button className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-450 transition">
          Submit
        </button>
      </form>
    </>
  )
}
export default App
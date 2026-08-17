import { useContext } from 'react'
import  { UserContext }  from './App'


const Avater = () => {
    const user = useContext(UserContext);
    console.log(user)
  return (
    <div>
       <h1>name {user.name}</h1>
       <h1>avater {user.avater}</h1>
    </div>
  )
}

export default Avater
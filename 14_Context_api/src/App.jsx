import React from 'react'
import Avater from './Avater'
import { createContext } from 'react'

export const UserContext = createContext();


const App = () => {
  let user = {name:'jack', avater:"imgIsHere"}

  return (
    <UserContext.Provider value={ user }>  
      <Avater />
    </UserContext.Provider>
  )
}

export default App
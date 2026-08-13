//components is a small block of UI
//props means sending data from parent components to child components

import Welcome from "./welcome"

const App = () => {

  const Users = {
    name:"rifat",
     age:25,
     isPassword:true
    }

  return (
    <>
      <Welcome {...Users} /> 
    </>
  )
}

export default App
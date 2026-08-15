import { useState } from "react"

const App = () => {

  const [count, setCounter] = useState(0);

  const Increment = () => {
    setCounter(count+1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={Increment}>Increment Count</button>
        <button onClick={ () => {
          setCounter(count-1)
        }} >Decrement Count</button>
      </div>
    </div>
  )
}

export default App
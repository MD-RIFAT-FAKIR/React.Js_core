
const App = () => {

function Click () {
    console.log("hello");
  }

function EnterMouse () {
  console.log("mouse on me!");
}

function EnterHere (event) {
  console.log(event.target.value)
}


  return (
    <div>
      <button onClick={Click} >click me!</button>
      <div onMouseEnter = {EnterMouse} className="box">
      </div>
      <input type="text" placeholder="Entr here" onChange={EnterHere}/>
    </div>
  )
}

export default App
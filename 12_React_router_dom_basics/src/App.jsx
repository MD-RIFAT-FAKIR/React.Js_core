import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './pages/NavBar'

import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/'  element={ <Home /> } />
        <Route path='/about'  element={ <About /> } />
        <Route path='/contact'  element={ <Contact /> } />
      </Routes>
    </div>
  )
}
export default App
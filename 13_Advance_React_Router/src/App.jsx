import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Men from "./pages/Men"
import Kids from "./pages/Kids"
import NotFound from "./pages/NotFound"
import Couses from "./pages/Couses"
import CousesDetails from "./pages/CousesDetails"

const App = () => {
    return (
      <div className="h-dvh w-full bg-amber-200"> 
          <div className="h-full w-full flex flex-col justify-between">
            <NavBar/>

            <Routes>
              <Route path="/" element={ <Home/> }/>
              <Route path="/about" element={ <About/> }/>

              <Route path="/product" element={ <Product/> }>
                  <Route path="kids" element={ <Kids/> }/>
                  <Route path="mens" element={ <Men/> }/>
              </Route>
              <Route path="/course" element={ <Couses/> }/>
              <Route path="/course/:values" element={ <CousesDetails/> }/>
              <Route path="*" element={ <NotFound/> }/>
            </Routes>

            <Footer/>
          </div>                   
      </div>
    )
}

export default App
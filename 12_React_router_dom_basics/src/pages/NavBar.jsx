import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className='navbar'>
        <p>NavBar</p>
        <div>
            <nav className="navItem">
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/contact" >Contact</Link>
            </nav>
        </div>
    </div>
  )
}

export default NavBar
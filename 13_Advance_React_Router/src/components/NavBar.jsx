import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <div className='w-full flex justify-between px-28 py-6 bg-amber-300'>
        <h3>React Router</h3>
        <div>
          <nav className='flex gap-5'>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/product" >Product</Link>
            <Link to="/course" >Coursers</Link>

          </nav>
        </div>
    </div>
  )
}

export default NavBar
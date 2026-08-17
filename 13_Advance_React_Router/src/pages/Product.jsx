import { Link, Outlet } from "react-router-dom"

const Product = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
        <nav className="flex">
            <Link className="mx-3 px-5 py-3 bg-amber-100" to="mens">Mens</Link>
            <Link className="mx-3 px-5 py-3 bg-amber-100" to="kids">Kids</Link>
        </nav>

        <Outlet/>
    </div>
  )
}

export default Product
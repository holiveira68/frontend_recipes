import { NavLink } from "react-router"
import logo from "../assets/img/logo.svg"


function linkClass({ isActive }) {
    return isActive ? "border-b-2 border-orange-500 " : "text-green-700 hover:text-yellow-500"
}

function Header() {
    return (
        <header className="bg-gray-50 text-green-700 font-bold py-6 text-center text-sm space-x-2 ">
            <div className="flex items-center justify-between px-4">
                <div className="flex-initial">
                    <img src={logo} alt="Logo" className="inline  fill-amber-200 stroke-green-600 stroke-2" />
                </div>

                <div className="space-x-4 text-xl">
                    <NavLink to="/" className={linkClass}>Home</NavLink>
                    <NavLink to="/about" className={linkClass}>About</NavLink>
                    <NavLink to="/recipes" className={linkClass}>Recipes</NavLink>
                </div>

                <div className="inline ml-60 ">
                    <a href="/login" className="bg-lime-800 text-white inline font- font-bold rounded px-4 py-1 ">Login</a>
                </div>

            </div>

        </header>
    )
}

export default Header
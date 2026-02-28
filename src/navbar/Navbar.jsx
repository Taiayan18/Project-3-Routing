import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-black text-white p-4 shadow-lg">
      <ul className="flex justify-center gap-10 text-lg font-semibold">
        
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "text-yellow-400" : "hover:text-yellow-400 transition"
          }
        >
          Home
        </NavLink>

        <NavLink 
          to="/product"
          className={({ isActive }) => 
            isActive ? "text-yellow-400" : "hover:text-yellow-400 transition"
          }
        >
          Product
        </NavLink>

        <NavLink 
          to="/addproduct"
          className={({ isActive }) => 
            isActive ? "text-yellow-400" : "hover:text-yellow-400 transition"
          }
        >
          Add Product
        </NavLink>

        <NavLink 
          to="/login"
          className={({ isActive }) => 
            isActive ? "text-yellow-400" : "hover:text-yellow-400 transition"
          }
        >
          Login
        </NavLink>

      </ul>
    </div>
  )
}

export default Navbar
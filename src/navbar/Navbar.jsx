import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = ({ user }) => {

  const handleLogout = async () => {
    await signOut(auth);
  };

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

        {/* ✅ Show Add Product only if logged in */}
        {user && (
          <NavLink 
            to="/addproduct"
            className={({ isActive }) => 
              isActive ? "text-yellow-400" : "hover:text-yellow-400 transition"
            }
          >
            Add Product
          </NavLink>
        )}

        {/* ✅ Toggle Login / Logout */}
        {!user ? (
          <NavLink 
            to="/login"
            className={({ isActive }) => 
              isActive ? "text-yellow-400" : "hover:text-yellow-400 transition"
            }
          >
            Login
          </NavLink>
        ) : (
          <button 
            onClick={handleLogout}
            className="hover:text-red-400 transition"
          >
            Logout
          </button>
        )}

      </ul>
    </div>
  );
};

export default Navbar;
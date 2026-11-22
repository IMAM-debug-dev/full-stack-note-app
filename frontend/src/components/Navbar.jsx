
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  console.log(isLoggedIn)

  return (
    <nav className="w-full bg-[#f7f7f2] border-b border-[#e5e8df] sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex justify-between items-center">

        {/* Logo */}
        <div
          onClick={() => handleNavigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-11 h-11 bg-[#769776] rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white text-2xl font-bold">T</span>
          </div>

          <h1 className="text-3xl font-bold text-[#293329] tracking-tight">
            Todo<span className="text-[#769776]">.</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <button
            onClick={() => handleNavigate("/")}
            className="text-[#596258] hover:text-[#769776] font-medium transition"
          >
            Home
          </button>

          <button
            onClick={() => handleNavigate("/about")}
            className="text-[#596258] hover:text-[#769776] font-medium transition"
          >
            About Us
          </button>

          <button
            onClick={() => handleNavigate("/register")}
            className="text-[#596258] hover:text-[#769776] font-medium transition"
          >
            Sign Up
          </button>

          <button
            onClick={() => handleNavigate("/login")}
            className="bg-[#769776] hover:bg-[#5d805f] text-white px-6 py-3 rounded-xl font-semibold shadow-sm transition duration-300 hover:-translate-y-1"
          >
            Sign In
          </button>

          {!isLoggedIn && ""}
          {isLoggedIn && (
                <button
             onClick={() => handleNavigate("/")}
             title="Logout"
               className="text-[#596258] hover:text-red-500 transition"
           >
               <CgProfile className="text-3xl" />
              </button>
              )}

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#e9eee6] text-[#455b46]"
          >
            {menuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#f7f7f2] border-t border-[#e5e8df] shadow-xl p-6 flex flex-col gap-4">

          <button
            onClick={() => handleNavigate("/")}
            className="text-left p-3 rounded-lg text-[#455b46] hover:bg-[#e9eee6]"
          >
            Home
          </button>

          <button
            onClick={() => handleNavigate("/about")}
            className="text-left p-3 rounded-lg text-[#455b46] hover:bg-[#e9eee6]"
          >
            About Us
          </button>

          <button
            onClick={() => handleNavigate("/register")}
            className="text-left p-3 rounded-lg text-[#455b46] hover:bg-[#e9eee6]"
          >
            Sign Up
          </button>

          <button
            onClick={() => handleNavigate("/login")}
            className="bg-[#769776] text-white p-3 rounded-xl font-semibold"
          >
            Sign In
          </button>

          <button
            onClick={() => handleNavigate("/")}
            className="text-left p-3 rounded-lg text-red-500 hover:bg-red-50"
          >
            Logout
          </button>

        </div>
      )}

    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaUserCircle,
  FaSearch,
  FaEnvelope,
  FaBell,
  FaKey,
  FaUserPlus,
} from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = ({ cartItems }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState(""); // Role admin/user
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu responsif
  const navigate = useNavigate();
  const location = useLocation();

  // Cek status login saat komponen dimuat
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.isLoggedIn) {
      setIsLoggedIn(true);
      setUserName(currentUser.name || "User");
      setRole(currentUser.role || "user"); // Ambil role dari localStorage
    } else {
      setIsLoggedIn(false);
    }
  }, [location.pathname]); // Perbarui saat lokasi berubah

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const cartCount = cartItems?.length || 0;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4">
      <div className="flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-2xl font-extrabold text-gray-800 cursor-pointer flex items-center space-x-2"
        >
          <span>
            Video<span className="text-green-500">Kita</span>
          </span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari video di VideoKita"
              className="w-full bg-gray-100 text-gray-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Right-side Icons */}
        <div className="hidden md:flex items-center space-x-6 text-gray-800">
          <button className="relative text-xl hover:text-gray-700 transition duration-200">
            <FaEnvelope />
          </button>
          <button className="relative text-xl hover:text-gray-700 transition duration-200">
            <FaBell />
          </button>
          <button
            onClick={() => navigate("/cart")}
            className="relative text-xl hover:text-gray-700 transition duration-200"
          >
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                {cartCount}
              </span>
            )}
          </button>

          {isLoggedIn ? (
            <>
              {role === "admin" && (
                <Link
                  to="/admin/dashboard"
                  className="text-gray-700 hover:text-green-500 transition duration-300"
                >
                  Admin Panel
                </Link>
              )}
              <div className="relative group">
                <button className="flex items-center text-xl hover:text-gray-700 transition duration-300">
                  <FaUserCircle />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-300">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    Halo,{" "}
                    <strong>{role === "admin" ? "Admin" : userName}</strong>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center space-x-2 text-gray-700 hover:text-green-500 transition duration-300"
              >
                <FaKey />
                <span>Masuk</span>
              </Link>
              <Link
                to="/register"
                className="flex items-center space-x-2 text-gray-700 hover:text-green-500 transition duration-300"
              >
                <FaUserPlus />
                <span>Daftar</span>
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Menu untuk Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-700">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Home
          </Link>
          {isLoggedIn && role === "admin" && (
            <Link
              to="/admin/dashboard"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Admin Panel
            </Link>
          )}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;

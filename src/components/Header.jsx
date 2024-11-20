import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaUserCircle, FaSearch, FaEnvelope, FaBell, FaKey, FaUserPlus, FaBars } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = ({ cartItems }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.isLoggedIn) {
      setIsLoggedIn(true);
      setUserName(currentUser.name || "User");
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const cartCount = cartItems.length;

  // Jika berada di halaman admin, tampilkan navbar khusus
  if (location.pathname === "/admin") {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white shadow-md py-3">
        <div className="flex justify-between items-center px-4 md:px-8">
          <div onClick={() => navigate("/admin")} className="cursor-pointer">
            <span className="text-xl font-bold">Admin Panel</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/")}
              className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Halaman Utama
            </button>
            <button
              onClick={handleLogout}
              className="text-sm bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    );
  }

  // Navbar default untuk halaman selain admin
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4">
      <div className="flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-2xl font-extrabold text-gray-800 cursor-pointer flex items-center space-x-2"
        >
          <span>
            Video<span className="text-green-500">Kita</span>
          </span>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800 text-2xl md:hidden focus:outline-none"
        >
          <FaBars />
        </button>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-8">
          <div className="relative w-full">
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
            <div className="relative group">
              <button className="flex items-center text-xl hover:text-gray-700 transition duration-300">
                <FaUserCircle />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-300">
                <div className="px-4 py-2 text-sm text-gray-700">
                  Halo, <strong>{userName}</strong>
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
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
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 text-gray-800 shadow-md">
          <div className="flex flex-col space-y-4 py-4 px-6">
            {isLoggedIn ? (
              <>
                <div>Halo, <strong>{userName}</strong></div>
                <button
                  onClick={handleLogout}
                  className="text-sm bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sm text-gray-800 hover:text-green-500">Masuk</Link>
                <Link to="/register" className="text-sm text-gray-800 hover:text-green-500">Daftar</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

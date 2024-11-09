// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaShoppingCart, FaUserCircle, FaSearch, FaBell, FaEnvelope, FaKey, FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const toggleProfileMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  const goToCart = () => {
    setIsMobileMenuOpen(false);
    navigate("/cart");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white text-gray-800 shadow-md py-3">
      <div className="flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <span className="text-xl font-bold">
            Video<span className="text-green-500">Kita</span>
          </span>
        </div>

        {/* Input Pencarian */}
        <div className="hidden md:flex flex-grow mx-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Cari video di VideoKita"
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full outline-none bg-gray-100 text-gray-600 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-green-400 transition duration-200"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Ikon Notifikasi, Pesan, Keranjang, dan Profil */}
        <nav className="flex items-center space-x-4">
          <button className="text-xl hover:text-gray-700 transition duration-200">
            <FaEnvelope />
          </button>
          <button className="text-xl hover:text-gray-700 transition duration-200">
            <FaBell />
          </button>
          <button onClick={goToCart} className="relative text-xl hover:text-gray-700 transition duration-200">
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* Menu Hamburger untuk Mobile */}
          <button className="text-xl md:hidden hover:text-gray-700" onClick={toggleMobileMenu}>
            <FaBars />
          </button>

          {/* Profil - Hanya di Desktop */}
          {isLoggedIn ? (
            <div className="hidden md:flex relative">
              <button onClick={toggleProfileMenu} className="text-xl hover:text-gray-700 transition duration-200">
                <FaUserCircle />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-lg">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profil
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Tombol Masuk dengan Ikon Kunci */}
              <Link to="/login" className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-gray-800 transition duration-200">
                <FaKey />
                <span class>Masuk</span>
              </Link>

              {/* Tombol Daftar dengan Ikon Tambah Akun */}
              <Link to="/register" className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-gray-800 transition duration-200">
                <FaUserPlus />
                <span>Daftar</span>
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex flex-col items-center justify-center text-lg space-y-6 text-white transition-all duration-300">
          <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-3xl focus:outline-none">
            ✕
          </button>
          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="hover:bg-gray-700 px-6 py-3 rounded-md transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Profil
              </Link>
              <button
                onClick={handleLogout}
                className="hover:bg-gray-700 px-6 py-3 rounded-md transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center space-x-2 hover:bg-gray-700 px-6 py-3 rounded-md transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaKey />
                <span>Masuk</span>
              </Link>
              <Link
                to="/register"
                className="flex items-center space-x-2 hover:bg-gray-700 px-6 py-3 rounded-md transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaUserPlus />
                <span>Daftar</span>
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;

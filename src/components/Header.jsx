// src/components/Header.jsx
import React, { useState } from "react";
import { FaBars, FaShoppingCart, FaSearch, FaBell, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 py-4 bg-white shadow-md">
      {/* Logo dan Kategori untuk Desktop */}
      <div className="hidden md:flex items-center space-x-2">
        <span className="text-2xl font-bold text-green-500">VideoKita</span>
        <span className="text-gray-500 text-sm font-semibold ml-2">Kategori</span>
      </div>

      {/* Input Pencarian Kecil untuk Mobile */}
      <div className="flex-grow md:hidden">
        <div className="relative">
          <input
            type="text"
            placeholder="Cari di VideoKita"
            className="w-full py-1 pl-8 pr-4 border rounded-full outline-none bg-gray-100 text-gray-700 text-sm"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Input Pencarian untuk Desktop */}
      <div className="hidden md:flex flex-grow mx-6">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Cari di VideoKita"
            className="w-full py-2 pl-10 pr-4 border rounded-full outline-none bg-gray-100 text-gray-700 focus:bg-white focus:ring-2 focus:ring-green-500 transition-colors duration-200"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Tombol dan Ikon untuk layar besar */}
      <nav className="hidden md:flex items-center space-x-4">
        <FaShoppingCart className="text-gray-600 text-2xl mr-4" />
        <Link to="/login">
          <button className="border border-green-500 text-green-500 py-2 px-4 rounded-lg hover:bg-green-100 transition-colors duration-200">
            Masuk
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200">
            Daftar
          </button>
        </Link>
      </nav>

      {/* Ikon untuk Mobile View */}
      <div className="flex md:hidden items-center space-x-4">
        <button className="text-gray-600 text-xl focus:outline-none">
          <FaEnvelope />
        </button>
        <button className="text-gray-600 text-xl focus:outline-none">
          <FaBell />
        </button>
        <button className="text-gray-600 text-xl focus:outline-none">
          <FaShoppingCart />
        </button>
        <button
          onClick={toggleMenu}
          className="text-gray-600 text-xl focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      {/* Dropdown Menu untuk Mobile */}
      {isMenuOpen && (
        <div className="absolute top-16 right-10 bg-white shadow-lg rounded-lg py-2 w-52 animate-slide-down transition-all duration-300">
          {/* Item Menu di Mobile */}
          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)} // Menutup menu saat di-klik
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            Masuk
          </Link>
          <Link
            to="/register"
            onClick={() => setIsMenuOpen(false)} // Menutup menu saat di-klik
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            Daftar
          </Link>
          <Link
            to="#"
            onClick={() => setIsMenuOpen(false)} // Menutup menu saat di-klik
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            Tentang Kami
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

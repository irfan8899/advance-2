// src/pages/RegisterPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-20 md:pt-32"> {/* Tambahkan padding-top untuk jarak */}
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Daftar Akun</h2>
        <p className="text-gray-500 mb-8">Mulai perjalanan belajarmu bersama kami!</p>

        <form className="space-y-6">
          <div>
            <label className="block text-left font-semibold text-gray-700 mb-1">Nama Lengkap *</label>
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-left font-semibold text-gray-700 mb-1">E-Mail *</label>
            <input
              type="email"
              placeholder="email@contoh.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-left font-semibold text-gray-700 mb-1">No. Hp *</label>
            <div className="flex">
              <span className="px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded-l-lg">+62</span>
              <input
                type="text"
                placeholder="81234567890"
                className="w-full px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:border-green-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-left font-semibold text-gray-700 mb-1">Kata Sandi *</label>
            <input
              type="password"
              placeholder="Kata Sandi"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-left font-semibold text-gray-700 mb-1">Konfirmasi Kata Sandi *</label>
            <input
              type="password"
              placeholder="Konfirmasi Kata Sandi"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <button className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200">
            Daftar
          </button>
        </form>

        <div className="flex items-center justify-center space-x-2 my-6 text-sm text-gray-400">
          <span className="border-b w-1/5"></span>
          <span>atau</span>
          <span className="border-b w-1/5"></span>
        </div>

        <button className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200">
          Daftar dengan Google
        </button>
        
        <p className="mt-6 text-sm text-gray-500">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-green-600 font-semibold hover:underline">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

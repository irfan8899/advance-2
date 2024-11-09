// src/pages/LoginPage.jsx
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 pt-20 md:pt-32"> {/* Tambahkan padding-top untuk jarak */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-2">Masuk ke Akun</h2>
        <p className="text-gray-600 mb-6">
          Yuk, lanjutin belajarmu di videobelajar.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-left font-semibold text-gray-700">
              E-Mail *
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-left font-semibold text-gray-700">
              Kata Sandi *
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="text-right text-green-500 text-sm">
            Lupa Password?
          </div>
          <button className="w-full py-2 bg-green-500 text-white rounded-lg font-semibold">
            Masuk
          </button>
        </form>

        <div className="flex items-center justify-center space-x-2 my-4 text-sm text-gray-600">
          <span className="border-b w-1/5"></span>
          <span>atau</span>
          <span className="border-b w-1/5"></span>
        </div>

        <button className="w-full py-2 bg-gray-100 rounded-lg text-gray-700 font-semibold">
          Masuk dengan Google
        </button>
        <p className="mt-4 text-sm">
          Belum punya akun?{" "}
          <a href="/register" className="text-green-500 font-semibold">
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

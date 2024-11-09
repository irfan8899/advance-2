// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem("user"));
    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      setErrorMessage("Email atau password salah");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-200 via-blue-100 to-gray-100 pt-20 md:pt-32">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <FaUserCircle className="text-6xl text-blue-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Selamat Datang Kembali!</h2>
        <p className="text-gray-600 mb-6">Masuk untuk melanjutkan pembelajaran</p>

        <form onSubmit={handleLogin} className="space-y-4">
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-Mail"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Kata Sandi"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition duration-200"
          >
            Masuk
          </button>
        </form>

        <div className="flex items-center justify-center space-x-2 my-4 text-sm text-gray-600">
          <span className="border-b w-1/5"></span>
          <span>atau</span>
          <span className="border-b w-1/5"></span>
        </div>

        <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 transition duration-200">
          <img
            src="https://img.icons8.com/color/24/000000/google-logo.png"
            alt="Google logo"
            className="w-5 h-5"
          />
          <span>Masuk dengan Google</span>
        </button>

        <p className="mt-6 text-sm text-gray-500">
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-600 font-semibold hover:underline">
            Daftar sekarang
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Ambil data admin dan user dari localStorage
    const adminAccount = JSON.parse(localStorage.getItem("admin"));
    const userAccount = JSON.parse(localStorage.getItem("user"));

    // Validasi Login
    if (adminAccount && email === adminAccount.email && password === adminAccount.password) {
      localStorage.setItem("currentUser", JSON.stringify({ ...adminAccount, isLoggedIn: true }));
      alert("Login berhasil sebagai Admin!");
      setIsLoading(false);
      navigate("/admin");
      return;
    }

    if (userAccount && email === userAccount.email && password === userAccount.password) {
      localStorage.setItem("currentUser", JSON.stringify({ ...userAccount, isLoggedIn: true }));
      alert("Login berhasil sebagai User!");
      setIsLoading(false);
      navigate("/");
      return;
    }

    setErrorMessage("Email atau password salah!");
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          <FaUserCircle className="text-blue-500 text-6xl mx-auto mb-2" />
          <h1 className="text-2xl font-bold text-gray-800">Selamat Datang Kembali!</h1>
          <p className="text-sm text-gray-500">Masuk untuk melanjutkan pembelajaran</p>
        </div>
        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-sm text-center mb-4">{errorMessage}</p>
        )}
        {/* Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-Mail"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Kata Sandi"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 rounded-md font-semibold transition duration-200 ${
              isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {isLoading ? "Memproses..." : "Masuk"}
          </button>
        </form>
        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="px-4 text-gray-500 text-sm">atau</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>
        {/* Google Login */}
        <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition duration-200">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Masuk dengan Google
        </button>
        {/* Register Link */}
        <p className="text-sm text-center text-gray-500 mt-4">
          Belum punya akun?{" "}
          <a
            href="/register"
            className="text-blue-500 font-semibold hover:underline"
          >
            Daftar sekarang
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

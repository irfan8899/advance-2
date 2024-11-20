import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, adminOnly = false }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // Periksa apakah pengguna sudah login
  if (!currentUser || !currentUser.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Periksa apakah pengguna adalah admin untuk halaman admin
  if (adminOnly && currentUser.role !== "admin") {
    alert("Anda tidak memiliki izin untuk mengakses halaman ini!");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;

// src/components/PublicRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const isLoggedIn = !!localStorage.getItem("user"); // Cek apakah pengguna sudah login
    return isLoggedIn ? <Navigate to="/" /> : children; // Jika sudah login, redirect ke homepage
};

export default PublicRoute;

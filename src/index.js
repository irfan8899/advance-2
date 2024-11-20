import React from "react";
import ReactDOM from "react-dom/client";
import AppWithRouter from "./App"; // Pastikan ini sesuai dengan file App Anda
import "./index.css"; // Gaya CSS global Anda

// Tambahkan data admin ke localStorage jika belum ada
if (!localStorage.getItem("user")) {
  localStorage.setItem(
    "user",
    JSON.stringify({
      email: "admin@videoku.com", // Email admin
      password: "admin123", // Password admin
      role: "admin", // Role admin
    })
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>
);

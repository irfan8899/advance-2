// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VideoGrid from "./components/VideoGrid";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  const location = useLocation();

  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <VideoGrid />
              <SubscribeSection />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      {/* Footer hanya ditampilkan jika URL bukan "/login" atau "/register" */}
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </div>
  );
};

// Membungkus App dengan Router agar memiliki akses ke useLocation
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;

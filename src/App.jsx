import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VideoGrid from "./components/VideoGrid";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const App = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);

  // Akun admin default ke localStorage
  useEffect(() => {
    const adminAccount = {
      email: "admin@example.com",
      password: "admin123",
      role: "admin",
      isLoggedIn: false,
    };

    if (!localStorage.getItem("admin")) {
      localStorage.setItem("admin", JSON.stringify(adminAccount));
    }
  }, []);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    alert(`${item.title} berhasil ditambahkan ke keranjang!`);
  };

  const removeItemFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    alert("Produk berhasil dihapus dari keranjang!");
  };

  const hideFooterRoutes = ["/login", "/register"];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <div className="font-sans bg-gray-50">
      <Header cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <VideoGrid onAddToCart={addItemToCart} />
              <SubscribeSection />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} onRemoveFromCart={removeItemFromCart} />}
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute adminOnly>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<h1 className="text-center">Page Not Found</h1>} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;

// src/App.js
import React, { useState, useEffect } from "react";
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
import CartPage from "./pages/CartPage";

const App = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (updatedCart) => {
    setCartItems(updatedCart);
  };

  return (
    <div className="font-sans bg-gray-50">
      <Header cartItems={cartItems} onRemoveFromCart={removeItemFromCart} />
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/cart"
          element={<CartPage onRemoveFromCart={removeItemFromCart} />}
        />
      </Routes>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;

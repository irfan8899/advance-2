// src/pages/CartPage.jsx
import React, { useEffect, useState } from "react";

const CartPage = ({ onRemoveFromCart }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    onRemoveFromCart(updatedCart);
  };

  return (
    <div className="min-h-screen pt-24 px-8 bg-gray-50">
      {" "}
      {/* Tambahkan pt-24 untuk jarak dari header */}
      <h1 className="text-4xl font-bold mb-8 text-center">Keranjang Belanja saya</h1>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-green-600 font-bold mt-2">{item.price}</p>
              <button
                onClick={() => removeItem(index)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200"
              >
                Hapus dari Keranjang
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Keranjang Anda kosong.</p>
      )}
    </div>
  );
};

export default CartPage;

// src/components/SubscribeSection.jsx
import React from "react";

const SubscribeSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center py-20 px-8 bg-cover bg-center rounded-lg shadow-lg mx-auto my-16"
      style={{
        backgroundImage: `url('/subscribe.jpeg')`, // Path gambar latar di folder public
        maxWidth: "1200px",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>

      {/* Konten Teks */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="text-md font-medium text-gray-300 mb-2">NEWSLETTER</p>
        <h3 className="text-3xl font-bold text-white mb-4">Mau Belajar Lebih Banyak?</h3>
        <p className="text-lg text-gray-200 mb-6">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
        </p>
        
        {/* Form Input dan Tombol */}
        <div className="flex justify-center w-full max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Masukkan Emailmu"
            className="p-4 w-3/4 sm:w-full rounded-l-md outline-none text-gray-700 placeholder-gray-500 text-lg border border-gray-300"
          />
          <button className="bg-yellow-500 text-white px-8 py-4 rounded-r-md font-semibold hover:bg-yellow-600 transition-colors duration-200 text-lg border border-gray-300 shadow-md">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;

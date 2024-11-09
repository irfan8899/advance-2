// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-gray-900 text-white flex flex-col items-center justify-center text-center mx-auto mt-24 rounded-[15px] px-6 py-20 md:px-16 lg:px-28" // Menambahkan mt-24
      style={{
        backgroundImage: `url('/bghero.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center 60%",
        maxWidth: "1200px",
        height: "400px",
      }}
    >
      {/* Overlay transparan */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-[15px]"></div>

      {/* Konten Hero Section */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative z-10 px-4">
        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
        Interaktif!
      </h1>
      <p className="mb-8 text-md md:text-lg lg:text-xl relative z-10 px-4 max-w-xl">
        Temukan koleksi video pembelajaran interaktif yang dapat meningkatkan
        pengetahuan Anda.
      </p>
      <button className="bg-green-500 text-white py-3 px-6 md:px-8 lg:px-10 rounded-lg text-lg font-semibold relative z-10 hover:bg-green-600 transition-colors duration-200">
        Mulai Sekarang
      </button>
    </section>
  );
};

export default HeroSection;

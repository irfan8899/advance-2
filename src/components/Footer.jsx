// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-6 text-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand dan Deskripsi */}
        <div>
          <h1 className="text-2xl font-bold text-orange-500">
            VideoKita
          </h1>
          <p className="mt-2 text-gray-600">
            Gali Potensi Anda Melalui Pembelajaran Video kami!
          </p>
          <p className="mt-4 text-gray-600">
            Jl. Usman Effendi No. 50 Bandar Lampung, Lampung
          </p>
          <p className="text-gray-600">+62-819-2726-6054</p>
        </div>

        {/* Kategori */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Kategori</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Digital & Teknologi</li>
            <li>Pemasaran</li>
            <li>Manajemen Bisnis</li>
            <li>Pengembangan Diri</li>
            <li>Desain</li>
          </ul>
        </div>

        {/* Perusahaan */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Perusahaan</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Tentang Kami</li>
            <li>FAQ</li>
            <li>Kebijakan Privasi</li>
            <li>Ketentuan Layanan</li>
            <li>Bantuan</li>
          </ul>
        </div>

        {/* Komunitas */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Komunitas</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Tips Sukses</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      {/* Copyright dan Ikon Sosial */}
      <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-600">
        <p>©2024 by irfan All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/VideoCard.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

const VideoCard = ({ title, description, instructorName, instructorTitle, profileImg, rating, price, imgSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Gambar Video */}
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />

      {/* Judul dan Deskripsi */}
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      {/* Profil Instruktur */}
      <div className="flex items-center mb-3">
        <img src={profileImg} alt={instructorName} className="w-8 h-8 rounded-full mr-2" />
        <div>
          <p className="text-sm font-semibold text-gray-800">{instructorName}</p>
          <p className="text-xs text-gray-500">{instructorTitle}</p>
        </div>
      </div>

      {/* Rating dan Harga */}
      <div className="flex items-center justify-between">
        {/* Rating */}
        <div className="flex items-center text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className={index < Math.round(rating) ? "text-yellow-500" : "text-gray-300"} />
          ))}
          <p className="text-sm text-gray-600 ml-2">(3.5)</p>
        </div>
        {/* Harga */}
        <p className="text-green-600 font-bold text-lg">{price}</p>
      </div>
    </div>
  );
};

export default VideoCard;

import React from "react";
import { FaStar } from "react-icons/fa";

const VideoCard = ({ video, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(video);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <img src={video.imgSrc} alt={video.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{video.description}</p>
      <div className="flex items-center justify-between">
        <p className="text-green-600 font-bold">{video.price}</p>
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Tambah
        </button>
      </div>
    </div>
  );
};

export default VideoCard;

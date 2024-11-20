import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { getProducts } from "../services/api/productsApi";

const VideoGrid = ({ onAddToCart }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getProducts();
        const mappedData = data.map((item) => ({
          title: item.title,
          description: item.description,
          instructorName: item.mentor,
          instructorTitle: item.roleMentor,
          profileImg: item.photoUrl,
          imgSrc: item.photoUrl,
          price: `Rp ${item.price}K`,
          rating: item.rating || 4.5,
        }));
        setVideos(mappedData);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section className="py-16 px-4 md:px-10 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Koleksi Video Pembelajaran Unggulan
      </h2>
      <p className="text-sm md:text-md text-gray-600 mb-8 text-center">
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;

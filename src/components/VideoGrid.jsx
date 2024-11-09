// src/components/VideoGrid.jsx
import React from "react";
import VideoCard from "./VideoCard";

const videoData = [
  {
    title: "Big 4 Auditor Financial Analyst",
    description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan…",
    instructorName: "Jenna Ortega",
    instructorTitle: "Senior Accountant di Gojek",
    profileImg: "/videocard1.png",
    rating: 4.5,
    price: "Rp 300K",
    imgSrc: "/videocard1.png",
  },
  {
    title: "Financial Planning Basics",
    description: "Pelajari dasar-dasar perencanaan keuangan dengan ahli berpengalaman.",
    instructorName: "Alex Johnson",
    instructorTitle: "Financial Advisor di HSBC",
    profileImg: "/videocard2.png",
    rating: 4.7,
    price: "Rp 280K",
    imgSrc: "/videocard2.png",
  },
  {
    title: "Investing 101",
    description: "Panduan dasar investasi untuk pemula.",
    instructorName: "Michael Lee",
    instructorTitle: "Investment Banker di BCA",
    profileImg: "/videocard3.png",
    rating: 4.3,
    price: "Rp 320K",
    imgSrc: "/videocard3.png",
  },
  {
    title: "Advanced Accounting",
    description: "Pelajari teknik akuntansi lanjutan untuk profesional.",
    instructorName: "Rachel Adams",
    instructorTitle: "Senior Accountant di PWC",
    profileImg: "/videocard4.png",
    rating: 4.8,
    price: "Rp 350K",
    imgSrc: "/videocard4.png",
  },
  {
    title: "Personal Budgeting",
    description: "Kelola anggaran pribadi Anda dengan cara yang efektif.",
    instructorName: "Sophia Williams",
    instructorTitle: "Budgeting Expert",
    profileImg: "/videocard5.png",
    rating: 4.6,
    price: "Rp 250K",
    imgSrc: "/videocard5.png",
  },
  {
    title: "Wealth Management",
    description: "Strategi pengelolaan kekayaan untuk masa depan.",
    instructorName: "David Kim",
    instructorTitle: "Wealth Manager di Bank Mandiri",
    profileImg: "/videocard6.png",
    rating: 4.9,
    price: "Rp 400K",
    imgSrc: "/videocard6.png",
  },
  {
    title: "Wealth Management",
    description: "Strategi pengelolaan kekayaan untuk masa depan.",
    instructorName: "David Kim",
    instructorTitle: "Wealth Manager di Bank Mandiri",
    profileImg: "/videocard6.png",
    rating: 4.9,
    price: "Rp 400K",
    imgSrc: "/videocard7.png",
  },
  {
    title: "Wealth Management",
    description: "Strategi pengelolaan kekayaan untuk masa depan.",
    instructorName: "David Kim",
    instructorTitle: "Wealth Manager di Bank Mandiri",
    profileImg: "/videocard6.png",
    rating: 4.9,
    price: "Rp 400K",
    imgSrc: "/videocard8.png",
  },
  {
    title: "Wealth Management",
    description: "Strategi pengelolaan kekayaan untuk masa depan.",
    instructorName: "David Kim",
    instructorTitle: "Wealth Manager di Bank Mandiri",
    profileImg: "/videocard6.png",
    rating: 4.9,
    price: "Rp 400K",
    imgSrc: "/videocard9.png",
  },
  // Tambahkan lebih banyak data video jika diperlukan
];

const VideoGrid = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-gray-100">
      {/* Judul dan Deskripsi */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Koleksi Video Pembelajaran Unggulan
      </h2>
      <p className="text-sm md:text-md text-gray-600 mb-8 text-center">
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </p>
      
      {/* Kategori */}
      <div className="flex justify-center space-x-4 md:space-x-8 mb-8 text-sm font-semibold">
        <p className="text-red-500 border-b-2 border-red-500 pb-2 cursor-pointer">Semua Kelas</p>
        <p className="text-gray-600 cursor-pointer hover:text-black">Pemasaran</p>
        <p className="text-gray-600 cursor-pointer hover:text-black">Design</p>
        <p className="text-gray-600 cursor-pointer hover:text-black">Pengembangan Diri</p>
        <p className="text-gray-600 cursor-pointer hover:text-black">Bisnis</p>
      </div>

      {/* Grid Video */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {videoData.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            description={video.description}
            instructorName={video.instructorName}
            instructorTitle={video.instructorTitle}
            profileImg={video.profileImg}
            rating={video.rating}
            price={video.price}
            imgSrc={video.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;

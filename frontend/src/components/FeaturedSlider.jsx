"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import DestinationCard from "@/reuseableCom/DestinationCard";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeaturedSlider = ({ featuredData }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalSlides = featuredData?.length || 0;

  return (
    <div className="relative">
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={26}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
        className="mySwiper !pb-12"
      >
        {featuredData?.map((data, idx) => (
          <SwiperSlide key={idx}>
            <DestinationCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Footer Controls (Progress, Counter & Arrows) */}
      <div className="flex items-center justify-between">
        {/* Left Side: Counter & Progress Line */}
        <div className="flex items-center gap-6 flex-1 ">
          <span className="text-lg font-medium text-slate-700">
            {currentIndex}/{totalSlides}
          </span>
          {/* Progress Bar Container */}
          <div className="h-[2px] bg-slate-100 flex-1 relative rounded-full overflow-hidden">
            <div
              className="h-full bg-slate-300 transition-all duration-300 ease-out"
              style={{ width: `${(currentIndex / totalSlides) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Right Side: Circular Navigation Buttons */}
        <div className="flex items-center gap-3 ml-6">
          <button className="custom-prev w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 active:scale-90 transition-all duration-300 cursor-pointer disabled:opacity-40">
            <FiArrowLeft size={20} />
          </button>
          <button className="custom-next w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 active:scale-90 transition-all duration-300 cursor-pointer disabled:opacity-40">
            <FiArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSlider;


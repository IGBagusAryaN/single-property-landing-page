import React, { useEffect, useState } from "react";

export default function Carousel({ children: slides, autoSlide = false, autoSlideInterval=3000 }){
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
  };

  useEffect(() => {
    if(!autoSlide) return 
    const slideInterval = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(slideInterval);
  })

  return (
    <div className="w-[505px] h-full relative">
      <div className="w-full h-full rounded-custom overflow-hidden">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides}
          </div>
      </div>

      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
        <button
          onClick={nextSlide}
          className="px-[20px] py-[15px] rounded-full bg-brand shadow-lg flex items-center justify-center text-white hover:bg-hoverBrand transition"
        >
          <img src="./assets/icon/arrow.svg" alt="next" />
        </button>
      </div>
    </div>
  );
};


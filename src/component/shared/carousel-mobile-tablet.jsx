import { useEffect, useState } from "react";

export default function CarouselMobileTablet({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-[310px] h-[205px]">
      <div className="w-full h-full rounded-[10px] overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="min-w-full h-full" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <button
          onClick={prevSlide}
          className="px-[20px] py-[15px] rounded-full bg-brand shadow-lg flex items-center justify-center text-white hover:bg-hoverBrand transition"
        >
          <img
            src="./assets/icon/arrow.svg"
            alt="previous"
            className="rotate-180"
          />
        </button>
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
}

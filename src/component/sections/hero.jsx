import Carousel from "../shared/carousel";
import CarouselMobile from "../shared/carousel-mobile-tablet";

const slides = [
  "/assets/images/hero.jpg",
  "/assets/images/hero2.jpg",
  "/assets/images/hero3.jpg",
];

const slidesMobile = [
  "/assets/images/hero4.jpg",
  "/assets/images/hero5.jpg",
  "/assets/images/hero6.jpg",
];

const Stats = [
  {
    icon: "/assets/icon/point-location.svg",
    value: "4.500",
    label: "Our Square Feets",
    alt: "Location Icon",
  },
  {
    icon: "/assets/icon/star.svg",
    value: "5.00",
    label: "Rates by 1.100",
    alt: "Star Icon",
  },
];

const Hero = () => {
  return (
    <div>
      <section className="px-10 lg:px-140 bg-dark md:bg-gray">
        <div className="h-screen md:h-[60vh] lg:h-[81.1vh] flex flex-col justify-center items-start gap-9 relative -mt-20 md:mt-0">
          <h2 className="text-lg lg:text-xl2 text-white font-semibold max-w-[411px]">
            Discover Modern Single Property
          </h2>
          <p className="font-normal text-sm lg:text-base  sm:max-w-530 md:max-w-[320px] lg:max-w-530 text-justify text-lightGray">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>

          <div className="md:flex items-center gap-3 ">
            <button className="py-5 px-14 w-full md:w-auto text-white bg-brand rounded-md text-md font-semibold hover:bg-hoverBrand">
              Overview
            </button>
            <button className="py-5 px-14 w-full md:w-auto mt-3 md:mt-0 text-white bg-none border border-white rounded-md text-md font-semibold hover:bg-white hover:text-dark">
              Learn More
            </button>
          </div>

          {/* Image carousel dekstop */}
          <div className="hidden lg:block absolute top-16 right-2 ">
            <Carousel autoSlide={true}>
              {slides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="w-full h-full object-cover rounded-custom"
                  alt={`Slide ${i + 1}`}
                />
              ))}
            </Carousel>
          </div>
          {/* Image carousel dekstop */}

          {/* Image carousel mobile & tablet*/}
          <div className="block lg:hidden absolute -bottom-24 md:bottom-auto md:top-32 md:right-3">
            <CarouselMobile autoSlide={true}>
              {slidesMobile.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="w-full h-full object-cover rounded-custom"
                  alt={`Slide ${i + 1}`}
                />
              ))}
            </CarouselMobile>
          </div>
          {/* Image carousel mobile & tablet*/}

        </div>
      </section>
      <section className="px-10 md:px-140 md:py-14 mt-32 md:mt-0">
        <div className="flex md:justify-center lg:justify-start items-center gap-16 md:gap-24">
          {Stats.map((stat) => (
            <div key={stat.label}>
              <div className="flex items-center gap-3">
                <img src={stat.icon} alt={stat.alt} />
                <span className="text-md2 md:text-xl font-bold">
                  {stat.value}
                </span>
              </div>
              <p className="text-center text-sm md:text-md mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;

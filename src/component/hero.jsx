const Hero = () => {
  return (
    <div>
      <section className="px-10 md:px-[140px] bg-dark md:bg-gray ">
        <div className="h-screen md:h-[81.1vh] flex flex-col justify-center items-start gap-9 relative -mt-24 md:mt-0">
          <div className="text-lg md:text-xl2 text-white font-semibold max-w-[411px]">
            Discover Modern Single Property
          </div>
          <p className="font-normal text-sm md:text-base max-w-[530px] text-justify text-[#F2F2F2]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>

          <div className="md:flex items-center gap-3 ">
            <button className="py-5 px-14 w-full md:w-auto text-white bg-brand rounded-md text-md font-semibold hover:bg-hoverBrand">
              Overview
            </button>
            <button className="py-5 px-14 w-full md:w-auto mt-[10px] md:mt-0 text-white bg-none border border-white rounded-md text-md font-semibold hover:bg-white hover:text-dark">
              Learn More
            </button>
          </div>

          {/* image carousel dekstop*/}
          <div className="hidden md:block absolute top-20 right-2">
            <div className="w-[505px] h-[723px] bg-dark rounded-[10px] relative">
              <img
                src="/assets/images/hero.jpg"
                alt=""
                className="w-full h-full object-cover rounded-[10px]"
              />

              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <button className="px-[20px] py-[15px] rounded-full bg-brand shadow-lg flex items-center justify-center text-white hover:bg-hoverBrand transition">
                  <img src="./assets/icon/arrow.svg" alt="" />
                </button>
              </div>
            </div>
          </div>

          {/* image carousel dekstop*/}
          <div className="block md:hidden absolute -bottom-36">
            <div className="w-[310px] h-[250px] bg-dark rounded-[10px] relative">
              <img
                src="/assets/images/hero.jpg"
                alt=""
                className="w-full h-full object-cover rounded-[10px]"
              />
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <button className="px-[20px] py-[15px] rounded-full bg-brand shadow-lg flex items-center justify-center text-white hover:bg-hoverBrand transition">
                  <img src="./assets/icon/arrow.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <button className="px-[20px] py-[15px] rounded-full bg-brand shadow-lg flex items-center justify-center text-white hover:bg-hoverBrand transition rotate-180">
                <img src="/assets/icon/arrow.svg" alt="previous" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-10 md:px-[140px] py-14 mt-32 md:mt-0">
        <div className="flex items-center gap-16 md:gap-24">
          <div>
            <div className="flex items-center gap-3">
              <img src="/assets/icon/point-location.svg" alt="" />
              <span className="text-md2 md:text-xl font-bold">4.500</span>
            </div>
            <p className="text-center text-sm md:text-md mt-1">
              Our Square Feets
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <img src="/assets/icon/star.svg" alt="" />
              <span className="text-md2 md:text-xl font-bold">5.00</span>
            </div>
            <p className="text-center text-sm md:text-md mt-1">
              Rates by 1.100
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

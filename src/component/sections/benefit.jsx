const Benefit = () => {
  return (
    <section className="px-10 lg:px-140 py-20">
      <div className="flex flex-col-reverse  lg:grid grid-cols-2 gap-10 md:gap-36">
        <div className="grid grid-cols-2 gap-1 md:gap-6">
          <div className="border border-grayBorder h-[210px] md:h-[280px] rounded-custom">
            <div className="flex flex-col items-center lg:items-start px-2 md:px-10 py-7">
              <div className="p-4 md:p-6 bg-brand border border-grayBorder rounded-full w-14 md:w-20">
                <img src="/assets/icon/snow.svg" alt="snow" />
              </div>
              <div className="mt-4 mb-3 text-sm md:text-md font-semibold">
                Air Conditioned
              </div>
              <p className="text-center lg:text-start text-xs1 md:text-sm font-thin text-softGray">
                Lorem ipsum dolor sit amet, consectetuer.
              </p>
              <img
                src="/assets/icon/arrow-button.svg"
                alt="arrow-button"
                className="mt-3 hidden md:block"
              />
            </div>
          </div>
          <div className="border border-grayBorder h-[210px] md:h-[280px] rounded-custom">
            <div className="flex flex-col items-center lg:items-start px-2 md:px-10 py-7">
              <div className="p-3 md:p-6 border border-grayBorder rounded-full w-14 md:w-20">
                <img src="/assets/icon/wifi.svg" alt="wifi" />
              </div>
              <div className="mt-4 mb-3 text-sm md:text-md font-semibold">
                Free Wifi
              </div>
              <p className="text-center lg:text-start text-xs1 md:text-sm font-thin text-softGray">
                Lorem ipsum dolor sit amet, consectetuer.
              </p>
              <img
                src="/assets/icon/arrow-button.svg"
                alt="arrow-button"
                className="mt-3 hidden md:block"
              />
            </div>
          </div>
          <div className="border border-grayBorder h-[210px] md:h-[280px] rounded-custom">
            <div className="flex flex-col items-center lg:items-start px-2 md:px-10 py-7">
              <div className="p-3 md:p-6 border border-grayBorder rounded-full w-14 md:w-20">
                <img src="/assets/icon/swimming-pool.svg" alt="swimming-pool" />
              </div>
              <div className="mt-4 mb-3 text-sm md:text-md font-semibold">
                Swimming Pool
              </div>
              <p className="text-center lg:text-start text-xs1 md:text-sm font-thin text-softGray">
                Lorem ipsum dolor sit amet, consectetuer.
              </p>
              <img
                src="/assets/icon/arrow-button.svg"
                alt="arrow-button"
                className="mt-3 hidden md:block"
              />
            </div>
          </div>
          <div className="border border-grayBorder h-[210px] md:h-[280px] rounded-custom">
            <div className="flex flex-col items-center lg:items-start px-2 md:px-10 py-7">
              <div className="p-3 md:p-6 border border-grayBorder rounded-full w-14 md:w-20">
                <img src="/assets/icon/tv.svg" alt="tv" />
              </div>
              <div className="mt-4 mb-3 text-sm md:text-md font-semibold">
                Television
              </div>
              <p className="text-center lg:text-start text-xs1 md:text-sm font-thin text-softGray">
                Lorem ipsum dolor sit amet, consectetuer.
              </p>
              <img
                src="/assets/icon/arrow-button.svg"
                alt="arrow-button"
                className="mt-3 hidden md:block"
              />
            </div>
          </div>
        </div>
        <div>
          <span className="text-md text-brand font-semibold">Benefits</span>
          <div>
            <span className="text-md2 md:text-lg font-semibold">
              Explore More About Our Property & Benefits
            </span>
            <p className="text-sm md:text-base mt-6 mb-11 md:mb-0 text-softGray">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
          <div className="mt-4 md:mt-9">
            <span className="text-base md:text-md font-semibold">
              Awesome Features
            </span>
            <p className="text-xs md:text-base mt-[7px] md:mt-5 text-softGray">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
          <div className="mt-4 md:mt-9">
            <span className="text-base md:text-md font-semibold">
              Luxurious Interior Design
            </span>
            <p className="text-xs md:text-base mt-[7px] md:mt-5 text-softGray">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
          <div className="mt-4 md:mt-9">
            <span className="text-base md:text-md font-semibold">
              Modern Concept
            </span>
            <p className="text-xs md:text-base mt-[7px] md:mt-5 text-softGray">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;

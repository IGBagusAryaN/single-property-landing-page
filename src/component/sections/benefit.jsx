const features = [
  { icon: "snow", iconHover: "snow-white", title: "Air Conditioned" },
  { icon: "wifi", iconHover: "wifi-white", title: "Free Wifi" },
  {
    icon: "swimming-pool",
    iconHover: "swimming-pool-white",
    title: "Swimming Pool",
  },
  { icon: "tv", iconHover: "tv-white", title: "Television" },
];

const Benefit = () => {
  return (
    <section className="px-10 lg:px-140 py-20">
      <div className="flex flex-col-reverse  lg:grid grid-cols-2 gap-10 md:gap-36">
        <div className="grid grid-cols-2 gap-1 md:gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="group cursor-pointer border border-grayBorder h-[210px] md:h-[280px] rounded-custom 
               hover:shadow-lg hover:border-transparent transition duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center lg:items-start px-2 md:px-10 py-7">
                <div className="p-3 md:p-6 border border-grayBorder rounded-full w-14 md:w-20 bg-white  group-hover:bg-brand ">
                  <img
                    src={`/assets/icon/${item.icon}.svg`}
                    alt={item.icon}
                    className="block group-hover:hidden"
                  />
                  <img
                    src={`/assets/icon/${item.iconHover}.svg`}
                    alt={item.iconHover}
                    className="hidden group-hover:block"
                  />
                </div>
                <div className="mt-4 mb-3 text-sm md:text-md font-semibold">
                  {item.title}
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
          ))}
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

const About = () => {
  return (
    <div>
      <section className="px-10 md:px-[140px] py-5 mt-24">
        <div className="flex flex-col md:grid grid-cols-2">
          <div className="hidden md:block md:w-[525px] md:h-[367px] rounded-md">
            <img
              src="/assets/images/about.jpg"
              alt=""
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div>
            <div className="text-md text-brand font-semibold">About Us</div>
            <div className="text-md2 md:text-lg font-semibold mt-3">
              Discover an Extraordinary Property With Us
            </div>
            <div className="block md:hidden w-full rounded-md mt-5">
              <img
                src="/assets/images/about.jpg"
                alt=""
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="text-sm md:text-base text-[#BABABA] mt-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </div>
            <blockquote className="text-sm md:text-base border-l-2 border-gray-400 pl-4 italic text-[#BABABA] leading-relaxed mt-6 underline">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a.
            </blockquote>
          </div>
        </div>
      </section>
      <section className="px-10 md:px-[140px] py-5 mt-20">
        <div className="flex flex-col md:grid grid-cols-2">
          <div>
            <div className="text-md text-brand font-semibold">Provide</div>
            <div className="text-md2 md:text-lg font-semibold mt-3 md:w-[500px]">
              We Provide Many Features and Property Benefits
            </div>
            <div className="block md:hidden w-full rounded-md mt-5">
              <img
                src="/assets/images/provide.jpg"
                alt=""
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>

            <div className="text-sm md:text-base text-[#BABABA] mt-6 max-w-[600px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </div>
            <ul className="space-y-2 text-gray-500 text-sm text-[#BABABA] mt-5">
              <li className="flex items-start gap-2">
                <span className="text-sm md:text-base">✓</span>
                <span>Lorem ipsum dolor sit amet, consectetuer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm md:text-base">✓</span>
                <span>Lorem ipsum dolor sit amet, consectetuer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm md:text-base">✓</span>
                <span>Lorem ipsum dolor sit amet, consectetuer</span>
              </li>
            </ul>
          </div>

          {/* Dekstop */}
          <div className="hidden md:block w-[595px] h-[367px] rounded-md">
            <img
              src="/assets/images/provide.jpg"
              alt=""
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

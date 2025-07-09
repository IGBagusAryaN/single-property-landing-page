const About = () => {
  return (
    <div>
      <section className="px-10 lg:px-140 py-5 mt-24">
        <div className="flex flex-col lg:grid grid-cols-2">

          {/* Dekstop Version */}
          <div className="hidden lg:block md:w-[525px] md:h-[367px] rounded-md">
            <img
              src="/assets/images/about.jpg"
              alt="about"
              className="w-full h-full object-cover rounded-custom"
            />
          </div>
          {/* Dekstop Version */}

          <div>
            <div className="text-md text-brand font-semibold">About Us</div>
            <div className="text-md2 md:text-lg font-semibold mt-3">
              Discover an Extraordinary Property With Us
            </div>

            {/* Mobile & Tablet Version */}
            <div className="block lg:hidden w-full rounded-md mt-5">
              <img
                src="/assets/images/about.jpg"
                alt=""
                className="w-full h-full object-cover rounded-custom"
              />
            </div>
            {/* Mobile & Tablet Version */}

            <div className="text-sm md:text-base text-verySoftGray mt-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </div>
            <blockquote className="text-sm md:text-base border-l-2 border-gray-400 pl-4 italic text-verySoftGray leading-relaxed mt-6 underline">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a.
            </blockquote>
          </div>
        </div>
      </section>
      <section className="px-10 lg:px-140 py-5 mt-20">
        <div className="flex flex-col lg:grid grid-cols-2">
          <div>
            <div className="text-md text-brand font-semibold">Provide</div>
            <div className="text-md2 md:text-lg font-semibold mt-3 lg:w-[500px]">
              We Provide Many Features and Property Benefits
            </div>

            {/* Mobile & Tablet Version */}
            <div className="block lg:hidden w-full rounded-md mt-5">
              <img
                src="/assets/images/provide.jpg"
                alt="provide"
                className="w-full h-full object-cover rounded-custom"
              />
            </div>
            {/* Mobile & Tablet Version */}

            <div className="text-sm md:text-base text-verySoftGray mt-6 lg:max-w-[600px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </div>
            <ul className="space-y-2 text-gray-500 text-sm text-verySoftGray mt-5">
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

          {/* Dekstop Version */}
          <div className="hidden lg:block w-[595px] h-[367px] rounded-md">
            <img
              src="/assets/images/provide.jpg"
              alt=""
              className="w-full h-full object-cover rounded-custom"
            />
          </div>
          {/* Dekstop Version */}

        </div>
      </section>
    </div>
  );
};

export default About;

const NavigationBar = () => {
  return (
    <section className="px-10 md:px-[140px] py-5 bg-dark md:bg-darkGray">
      <div className="flex justify-between items-center">
        <img src="/assets/icon/logo.svg" alt="" className="w-24 md:w-[132px]"/>
        <div className="hidden md:block">
          <ul className="flex items-center text-white text-md font-medium gap-12">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <div className="flex items-center bg-white rounded-full px-6 py-[14px] w-44 relative text-dark">
              <input
                type="text"
                placeholder="Search Here"
                className="flex-grow outline-none text-gray-700 placeholder-gray-400 bg-transparent text-xs font-thin max-w-24"
              />
              <img
                src="/assets/icon/search.svg"
                alt="Search Icon"
                className="w-5 h-5 right-6 absolute"
              />
            </div>
          </ul>
        </div>

        {/* mobile */}
        <div className="block md:hidden">
            <div className="flex gap-2">
                <img src="/assets/icon/search-mobile.svg" className="bg-brand p-2 rounded-sm hover:bg-hoverBrand" alt="" />
                <img src="/assets/icon/menu.svg" className="bg-brand p-2 rounded-sm hover:bg-hoverBrand" alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default NavigationBar;

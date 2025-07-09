import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NavigationBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="px-10 lg:px-140 py-5 bg-dark md:bg-darkGray relative z-50">
      <div className="flex justify-between items-center">
        <img src="/assets/icon/logo.svg" alt="" className="w-24 md:w-36 lg:w-[132px]" />

        {/* Desktop version */}
        <div className="hidden md:flex items-center md:gap-6 lg:gap-12 text-white md:text-sm lg:text-md font-medium">
          <ul className="flex items-center md:gap-6 lg:gap-12">
            <li>
              <a href="#" className="hover:text-brand">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center bg-white rounded-full px-6 py-[14px] w-44 relative text-dark">
            <input
              type="text"
              placeholder="Search Here"
              className="flex-grow outline-none text-gray-700 placeholder-gray-400 bg-transparent text-xs font-thin max-w-24"
            />
            <img
              src="/assets/icon/search.svg"
              alt="search-icon"
              className="w-5 h-5 absolute right-6"
            />
          </div>
        </div>
        {/* Desktop version */}

        {/* Mobile version */}
        <div className="block md:hidden relative">
          <div className="flex gap-2">
            <img
              src="/assets/icon/search-mobile.svg"
              className={`p-2 rounded-sm cursor-pointer transition-colors ${
                showSearch ? "bg-hoverBrand" : "bg-brand hover:bg-hoverBrand"
              }`}
              alt="search-mobile"
              onClick={() => setShowSearch(!showSearch)}
            />
            <img
              src="/assets/icon/menu.svg"
              className={`p-2 rounded-sm cursor-pointer transition-colors ${
                showMenu ? "bg-hoverBrand" : "bg-brand hover:bg-hoverBrand"
              }`}
              alt="menu"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>

          {(showSearch || showMenu) && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => {
                setShowSearch(false);
                setShowMenu(false);
              }}
            />
          )}

          <AnimatePresence>
            {showSearch && (
              <motion.input
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                type="text"
                placeholder="Search..."
                className="absolute top-10 -left-60 bg-white text-black px-4 py-2 rounded-md shadow-md z-50 w-[305px] outline-none text-gray-700 placeholder-gray-400 bg-transparent text-xs font-thin"
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-12 right-0 bg-gray text-white rounded-md shadow-md py-2 w-[310px] z-50"
              >
                <ul className="flex flex-col gap-2 px-4">
                  <li className="hover:text-brand cursor-pointer text-base">About</li>
                  <li className="hover:text-brand cursor-pointer text-base">Service</li>
                  <li className="hover:text-brand cursor-pointer text-base">Contact</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Mobile version */}
      </div>
    </section>
  );
};

export default NavigationBar;

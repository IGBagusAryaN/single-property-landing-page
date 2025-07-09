import React from "react";

const Footer = () => {
  return (
    <footer className="px-10 py-24 md:px-[140px] bg-dark mt-24 text-white">
      <div className="flex flex-wrap  md:grid grid-cols-[2fr_1fr_1fr_1fr] md:gap-10 ">
        {/* Logo & Description */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">
            <img src="/assets/icon/logo.svg" alt="" />
          </h2>
          <p className="text-xs md:text-sm text-gray-400 mb-8 max-w-[393px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <div className="flex gap-4 text-gray-300 mb-11">
            <a href="#">
              <img src="/assets/icon/google.svg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/icon/facebook.svg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/icon/twitter.svg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/icon/linkedin.svg" alt="" />
            </a>
          </div>
        </div>

        <div className="md:ml-9 w-1/2 md:w-auto">
          <h3 className="font-semibold text-white mb-4">Company</h3>
          <ul className="text-xs md:text-sm text-gray-400 space-y-2">
            <li>
              <a href="" className="flex items-center gap-3">
                <img src="/assets/icon/arrow-options.svg" alt="" /> 123 Avenue,
                New York
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-3">
                <img src="/assets/icon/arrow-options.svg" alt="" /> +(1600) 456
                7890
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-3">
                <img src="/assets/icon/arrow-options.svg" alt="" />{" "}
                yourid@example.com
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-3">
                <img src="/assets/icon/arrow-options.svg" alt="" /> 9:00 AM -
                7:00 PM
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-3">
                <img src="/assets/icon/arrow-options.svg" alt="" />{" "}
                @officialpage
              </a>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div className="pl-16 md:ml-9 w-1/2 md:w-auto">
          <h3 className="font-semibold text-white mb-4">Features</h3>
          <ul className="text-xs md:text-sm text-gray-400 space-y-2">
            <li>
              <a href="" className="flex items-center gap-3">
                <img src="/assets/icon/arrow-options.svg" alt="" /> Home
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-3">
                <img src="/assets/icon/arrow-options.svg" alt="" /> About
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-3">
                <img src="/assets/icon/arrow-options.svg" alt="" /> Provide
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-3">
                <img src="/assets/icon/arrow-options.svg" alt="" /> Benefits
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-3">
                <img src="/assets/icon/arrow-options.svg" alt="" /> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help Center */}
        <div className="hidden md:block">
          <h3 className="font-semibold text-white mb-4">Help Center</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="" className="flex items-center gap-3">
                <img src="/assets/icon/arrow-options.svg" alt="" /> Call Center
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-3">
                <img src="/assets/icon/arrow-options.svg" alt="" /> Official
                Pages
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-3">
                <img src="/assets/icon/arrow-options.svg" alt="" /> Frequently
                Asked Question
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-3">
                <img src="/assets/icon/arrow-options.svg" alt="" /> History
                Background
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-3">
                <img src="/assets/icon/arrow-options.svg" alt="" /> Newsletter
                Subscription
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-11 flex  md:flex-row md:items-center md:justify-between md:border-t border-gray-700 pt-6 text-sm text-gray-500">
        <span className="hidden md:block">Terms & Condition</span>
        <span>© 2022 Skatcher. All Rights Reserved</span>
        <span className="hidden md:block">Privacy & Policy</span>
      </div>
    </footer>
  );
};

export default Footer;

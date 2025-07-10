const companyItems = [
  "123 Avenue, New York",
  "+(1600) 456 7890",
  "yourid@example.com",
  "9:00 AM - 7:00 PM",
  "@officialpage",
];

const features = [
  { option: "Home", href: "#home" },
  { option: "About", href: "#about" },
  { option: "Provide", href: "#provide" },
  { option: "Benefits", href: "#benefits" },
  { option: "Contact", href: "#contact" },
];

const helpCenter = [
  { option: "Call Center", href: "#call-center" },
  { option: "Official Pages", href: "#official-pages" },
  { option: "Frequently Asked Question", href: "#frequently-asked-question" },
  { option: "History Background", href: "#benefits" },
  { option: "Newsletter Subscription", href: "#newsletter-subscription" },
];

const Footer = () => {
  return (
    <footer className="px-10 py-24 lg:px-140 bg-dark text-white">
      <div className="flex flex-wrap  lg:grid grid-cols-[2fr_1fr_1fr_1fr] md:gap-10 ">
        <div className="md:w-full lg:w-auto">
          <h2 className="text-white text-xl font-semibold mb-4">
            <img
              src="/assets/icon/logo.svg"
              alt="logo"
              className="w-24 md:w-[132px]"
            />
          </h2>
          <p className="text-xs md:text-sm text-gray-400 mb-8 md:max-w-full lg:max-w-[393px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <div className="flex gap-4 text-gray-300 mb-11">
            <a href="#">
              <img src="/assets/icon/google.svg" alt="google" />
            </a>
            <a href="#">
              <img src="/assets/icon/facebook.svg" alt="facebook" />
            </a>
            <a href="#">
              <img src="/assets/icon/twitter.svg" alt="twitter" />
            </a>
            <a href="#">
              <img src="/assets/icon/linkedin.svg" alt="linkedin" />
            </a>
          </div>
        </div>

        <div className="lg:ml-9 w-1/2 md:w-auto">
          <h3 className="font-semibold text-white mb-4">Company</h3>
          <ul className="text-xs md:text-sm text-gray-400 space-y-2">
            {companyItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center gap-3 hover:text-hoverBrand"
                >
                  <img
                    src="/assets/icon/arrow-options.svg"
                    alt="arrow-options"
                  />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="pl-16 w-1/2 md:w-auto">
          <h3 className="font-semibold text-white mb-4">Features</h3>
          <ul className="text-xs md:text-sm text-gray-400 space-y-2">
            {features.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 hover:text-hoverBrand"
                >
                  <img
                    src="/assets/icon/arrow-options.svg"
                    alt="arrow-options"
                  />
                  {item.option}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block ml-20 lg:ml-0 ">
          <h3 className="font-semibold text-white mb-4">Help Center</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            {helpCenter.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 hover:text-hoverBrand"
                >
                  <img
                    src="/assets/icon/arrow-options.svg"
                    alt="arrow-options"
                  />
                  {item.option}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-11 flex  md:flex-row md:items-center md:justify-between md:border-t border-gray-700 pt-6 text-sm text-gray-500">
        <a href="#terms-condition" className="hidden md:block">
          Terms & Condition
        </a>
        <span>© 2022 Skatcher. All Rights Reserved</span>
        <a href="#privacy-policy" className="hidden md:block">
          Privacy & Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;

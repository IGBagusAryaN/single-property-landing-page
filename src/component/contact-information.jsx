import React from "react";

const ContactInformation = () => {
  return (
    <section className="px-10 md:px-[140px] py-5 bg-dark">
      <div className="text-white flex justify-between">
        <div className="flex gap-5 md:gap-12">
          <span className="flex items-center gap-1 md:gap-3 text-xs2 md:text-xs">
            <img src="/assets/icon/phone.svg" alt="phone-icon" className="w-3 md:w-5" /> +(1600)
            4567890
          </span>
          <span className="flex items-center gap-1 md:gap-3 text-xs2 md:text-xs">
            <img src="/assets/icon/email.svg" alt="email-icon"  className="w-3 md:w-5" />{" "}
            yourid@example.com
          </span>
          <span className="flex items-center gap-1 md:gap-3 text-xs2 md:text-xs">
            <img src="/assets/icon/location.svg" alt="location-icon" className="w-3 md:w-5" /> 123
            Fifth Avenue<span className="hidden md:inline -ml-3">, New York - 1060, USA.</span>
          </span>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-3">
            <img src="/assets/icon/google.svg" alt="google-icon" />
            <img src="/assets/icon/facebook.svg" alt="facebook-icon" />
            <img src="/assets/icon/twitter.svg" alt="twitter-icon" />
            <img src="/assets/icon/linkedin.svg" alt="linkedin-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;

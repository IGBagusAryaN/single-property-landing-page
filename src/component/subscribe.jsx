import React from "react";

const Subscribe = () => {
  return (
    <section className="px-10 md:px-[140px] py-20">
      <div className="block md:flex items-center justify-between">
        <div className="text-md2 md:text-lg font-semibold">
          Subscribe to Our Newsletter
        </div>
        <div>
          <input
            type="text"
            className="border border-[#E2E2E2] w-full md:w-[388px] py-4 px-7 rounded-[10px] mt-[14px]"
            placeholder="E-mail Address"
          />
          <button className="text-white w-full md:w-auto py-4 px-12 bg-brand rounded-md mt-3 md:mt-0 md:ml-3">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

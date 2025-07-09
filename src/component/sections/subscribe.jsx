import React from "react";

const Subscribe = () => {
  return (
    <section className="px-10 lg:px-140 py-20">
      <div className="block lg:flex items-center justify-between">
        <div className="text-md2 md:text-lg font-semibold">
          Subscribe to Our Newsletter
        </div>
        <div>
          <input
            type="text"
            className="border border-grayBorder w-full lg:w-[388px] py-4 px-7 rounded-custom mt-[14px]"
            placeholder="E-mail Address"
          />
          <button className="text-white w-full lg:w-auto py-4 px-12 bg-brand rounded-md mt-3 lg:mt-0 lg:ml-3">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

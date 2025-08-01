const Contact = () => {
  return (
    <section className="px-10 lg:px-140 py-20">
      <div className="flex flex-col lg:grid grid-cols-2 gap-20 ">
        <div>
          <span className="text-md text-brand font-semibold">Get in touch</span>
          <div className="text-md2 md:text-lg font-semibold mt-[14px]">
            Let Us Know by Sent Your Message For More Information
          </div>

          {/* Mobile & Tablet version */}
          <div className="block lg:hidden w-full h-[240px] md:h-[320px] rounded-custom mt-6">
            <img
              src="/assets/images/contact.jpg"
              alt="contact"
              className="w-full h-full object-cover rounded-custom"
            />
          </div>
          {/* Mobile & Tablet version */}

          <p className="mt-6 text-sm md:text-base text-softGray">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>

          <div className="flex flex-col mt-11">
            <label className="text-base font-medium">E-mail Address</label>
            <input
              type="text"
              className="border border-grayBorder w-full lg:w-[488px] py-4 px-7 rounded-custom mt-[14px]"
              placeholder="Insert Your E-mail Address Here"
            />
          </div>
          <div className="flex flex-col mt-7">
            <label className="text-base font-medium">Message</label>
            <textarea
              rows={5}
              type="text"
              className="border border-grayBorder w-full lg:w-[488px] py-4 px-7 rounded-custom mt-[14px]"
              placeholder="Insert Your Message Here"
            />
          </div>
          <button className="w-full lg:w-[488px] bg-brand py-5 rounded-md text-white mt-6">
            Send Message
          </button>
        </div>

        {/* Dekstop version */}
        <div className="hidden lg:block w-full h-[694px] bg-gray  rounded-custom">
          <img
            src="/assets/images/contact.jpg"
            alt="contact"
            className="w-full h-full object-cover rounded-custom"
          />
        </div>
        {/* Dekstop version */}
        
      </div>
    </section>
  );
};

export default Contact;

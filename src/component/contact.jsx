const Contact = () => {
  return (
    <section className="px-10 md:px-[140px] py-20">
      <div className="flex flex-col md:grid grid-cols-2 gap-20 ">
        <div>
          <span className="text-md text-brand font-semibold">Get in touch</span>
          <div className="text-md2 md:text-lg font-semibold mt-[14px]">
            Let Us Know by Sent Your Message For More Information
          </div>
          <div className="md:hidden block w-full h-[240px] bg-gray rounded-[10px] mt-6">
            <img
              src="/assets/images/contact.jpg"
              alt=""
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <p className="mt-6 text-sm md:text-base text-[#8A8A8A]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>

          <div className="flex flex-col mt-11">
            <label className="text-base font-medium">E-mail Address</label>
            <input
              type="text"
              className="border border-[#E2E2E2] w-full md:w-[488px] py-4 px-7 rounded-[10px] mt-[14px]"
              placeholder="Insert Your E-mail Address Here"
            />
          </div>
          <div className="flex flex-col mt-7">
            <label className="text-base font-medium">Message</label>
            <textarea
              rows={6}
              type="text"
              className="border border-[#E2E2E2] w-full md:w-[488px] py-4 px-7 rounded-[10px] mt-[14px"
              placeholder="Insert Your Message Here"
            />
          </div>
          <button className="w-full md:w-[488px] bg-brand py-5 rounded-md text-white mt-6">
            Send Message
          </button>
        </div>
        <div className="hidden md:block w-full h-[694px] bg-gray  rounded-[10px]">
          <img
            src="/assets/images/contact.jpg"
            alt=""
            className="w-full h-full object-cover rounded-[10px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

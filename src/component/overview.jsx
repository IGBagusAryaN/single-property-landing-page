const Overview = () => {
  return (
    <section className="px-10 md:px-[140px] bg-dark mt-24 text-white">
      <div className="py-[150px]">
        <div className="text-md font-semibold">Overview</div>
        <div className="block space-y-4 md:flex justify-between items-center">
          <div className="text-md2 md:text-lg font-semibold max-w-[500px]">
            See Our Property Benefits by Preview Video Below
          </div>
          <div className="text-base max-w-[530px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </div>
        </div>
        <div className="w-full h-[200px] md:h-[400px] bg-gray rounded-xl mt-5">
          {/* ganti video */}
        </div>
        <div className="block space-y-4 md:flex justify-between mt-10">
          <div>
            <span className="text-md font-semibold">Awesome Feature</span>
            <p className="max-w-[530px] text-base">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
            </p>
          </div>
          <div>
            <span className="text-md font-semibold">Luxury Property</span>
            <p className="max-w-[530px] text-base">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

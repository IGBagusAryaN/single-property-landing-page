import { useRef, useState } from "react";

const Overview = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.controls = true;
      setIsPlaying(true);
    }
  };

  return (
    <section className="px-10 lg:px-140 bg-dark mt-24 text-white">
      <div className="py-[150px]">
        <div className="text-md font-semibold">Overview</div>
        <div className="block space-y-4 lg:flex justify-between items-center mt-5">
          <div className="text-md2 md:text-lg font-semibold lg:max-w-[500px]">
            See Our Property Benefits by Preview Video Below
          </div>
          <div className="text-base lg:max-w-530">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </div>
        </div>
        <div className="relative w-full h-[200px] md:h-[350px] lg:h-[500px] bg-gray-300 rounded-xl overflow-hidden mt-10">
       
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-xl"
            poster="/assets/images/thumbnail.jpg"
          >
            {/* source video: youtube */}
            <source src="/assets/videos/video.webm" type="video/webm" />
            {/* source video: youtube */}
          </video>

          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
            >
              <div className="bg-white rounded-full p-4 shadow-lg">
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
        </div>

        <div className="block md:flex justify-between md:gap-10 mt-10">
          <div>
            <span className="text-md font-semibold">Awesome Feature</span>
            <p className="max-w-530 text-base">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
            </p>
          </div>
          <div className="mt-10 md:mt-0">
            <span className="text-md font-semibold">Luxury Property</span>
            <p className="max-w-530 text-base">
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

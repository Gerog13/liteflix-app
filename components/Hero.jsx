import { PlayIcon, PlusIcon } from "@public/assets/icons";

const Hero = ({ nowPlaying }) => {
  const path = `https://image.tmdb.org/t/p/original${nowPlaying?.backdrop_path}`;
  return (
    <section
      style={{ backgroundImage: `url(${path})` }}
      className="relative bg-center bg-cover bg-no-repeat min-h-screen w-full"
    >
      <div className="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-liteflix-grey to-transparent lg:invisible"></div>
      <div className="absolute top-0 right-0 bottom-0 left-0 p-8 w-full h-full overflow-hidden bg-fixed">
        <div className="flex flex-col justify-center w-full lg:w-2/4 md:justify-end md:items-start md:pb-40 items-center h-full text-white">
          <div className="text-center md:text-start">
            <h3 className="text-2xl mb-2 tracking-widest font-extralight">
              Original de <span className="font-medium">Liteflix</span>
            </h3>
            <h1 className="text-7xl font-bold text-liteflix-green tracking-widest">
              {nowPlaying?.original_title}
            </h1>
          </div>

          <div className="flex flex-col md:flex-row w-full px-4 md:px-0 items-center justify-center md:justify-start text-xl mt-8 gap-y-6 md:gap-x-6 uppercase">
            <button className="flex items-center justify-center w-[18rem] py-4 bg-liteflix-grey hover:bg-neutral-800 transition-colors ease duration-100">
              <PlayIcon />
              <span className="ml-3 tracking-[0.25em]">Reproducir</span>
            </button>
            <button className="flex items-center justify-center w-[18rem] py-4 border border-white bg-liteflix-grey hover:bg-neutral-800 transition-colors ease duration-100">
              <PlusIcon />
              <span className="ml-3 tracking-[0.25em]">Mi Lista</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

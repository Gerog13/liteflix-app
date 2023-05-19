"use client";
import { PlayIcon, PlusIcon } from "@public/assets/icons";
import { motion } from "framer-motion";

const Hero = ({ nowPlaying }) => {
  const path = `https://image.tmdb.org/t/p/original${nowPlaying?.backdrop_path}`;
  return (
    <section
      style={{ backgroundImage: `url(${path})` }}
      className="relative bg-center bg-cover bg-no-repeat min-h-screen w-full"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-liteflix-grey hidden lg:block opacity-40"></div>
      {/* Diffuse Background */}
      <div className="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-liteflix-grey to-transparent lg:invisible"></div>

      <div className="absolute top-0 right-0 bottom-0 left-0 p-8 xl:px-16 w-full h-full overflow-hidden bg-fixed">
        <div className="flex flex-col justify-center w-full lg:w-2/4 xl:w-9/12 md:justify-end md:items-start md:pb-44 items-center h-full text-white">
          <div className="text-center md:text-start">
            <motion.h3
              className="text-2xl tracking-widest font-extralight"
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.2 },
              }}
            >
              Original de <span className="font-medium">Liteflix</span>
            </motion.h3>
            <motion.h1
              className="text-6xl sm:text-7xl xl:text-8xl font-bold text-liteflix-green tracking-widest"
              initial={{ x: 80, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 0.2 },
              }}
            >
              {nowPlaying?.original_title}
            </motion.h1>
          </div>

          <div className="flex flex-col md:flex-row w-full px-4 md:px-0 items-center justify-center md:justify-start text-xl mt-8 gap-y-6 md:gap-x-6 uppercase">
            <motion.button
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                  ease: "easeOut",
                },
              }}
              className="active:brightness-125 flex items-center justify-center w-[18rem] xl:w-[16rem] py-4 bg-liteflix-grey hover:bg-neutral-800 transition-colors ease duration-100"
            >
              <PlayIcon />
              <span className="ml-3 tracking-[0.25em]">Reproducir</span>
            </motion.button>
            <motion.button
              initial={{ y: 80, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 0.2 },
              }}
              className="active:brightness-125 flex items-center justify-center w-[18rem] xl:w-[16rem] lg:bg-opacity-40 py-4 border border-white bg-liteflix-grey hover:bg-neutral-800 lg:hover:bg-opacity-80 transition-colors ease duration-100"
            >
              <PlusIcon />
              <span className="ml-3 tracking-[0.25em]">Mi Lista</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

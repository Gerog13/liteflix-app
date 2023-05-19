import { ReproduceIcon, StarIcon } from "@public/assets/icons";
import React from "react";
import { motion } from "framer-motion";

const Movie = ({ movie }) => {
  const {
    original_title,
    title,
    image,
    backdrop_path,
    release_date,
    vote_average,
  } = movie;
  const releaseYear = new Date(release_date).getFullYear();
  const movieBackgroundPath = backdrop_path
    ? `https://image.tmdb.org/t/p/original${backdrop_path}`
    : image;

  return (
    <motion.article
      style={{ backgroundImage: `url(${movieBackgroundPath})` }}
      className="w-full sm:w-96 lg:w-full cursor-pointer group h-64 lg:h-40 bg-center bg-cover bg-no-repeat rounded-md relative"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        opacity: { duration: 0.7 },
        y: { duration: 0.7 },
      }}
    >
      <div className="absolute  inset-0 bg-liteflix-grey opacity-30 rounded-md group-hover:opacity-60"></div>

      <div className="flex flex-col text-center transition-all duration-200 ease-in-out group-hover:text-start group-hover:flex-row p-8 justify-center w-full inset-0 absolute items-center group-hover:mt-10 lg:group-hover:-mt-4">
        <ReproduceIcon
          size="large"
          className="mb-4 lg:hidden group-hover:hidden"
        />
        <ReproduceIcon
          size="small"
          className="hidden mb-0 lg:block group-hover:block"
        />
        <span className="tracking-[0.25em] text-lg lg:text-base group-hover:text-lg group-hover:w-4/5 group-hover:ml-4 lg:group-hover:w-8/12 lg:group-hover:text-sm">
          {original_title || title}
        </span>
      </div>

      <div className="hidden group-hover:flex justify-between items-center absolute w-full bottom-0 px-9 pb-8">
        <div className="flex items-center justify-center">
          <StarIcon className="mr-2" />
          <span>{vote_average || "-"}</span>
        </div>
        <span>{releaseYear || "-"}</span>
      </div>
    </motion.article>
  );
};

export default Movie;

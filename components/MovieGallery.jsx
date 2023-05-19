"use client";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import Dropdown from "./Dropdown";
import useMovieLocalStorage from "@hooks/useMovieLocalStorage ";
import { useModalContext } from "@context/ModalContext";
import { motion } from 'framer-motion'

const OPTIONS = {
  POPULARES: "Populares",
  MIS_PELICULAS: "Mis Películas",
};

const MovieGallery = ({ popularMovies }) => {
  const [dropdownSelection, setDropdownSelection] = useState("Populares");
  const [moviesList, setMoviesList] = useState([]);

  const { movies } = useMovieLocalStorage();
  const { openModal } = useModalContext();

  useEffect(() => {
    setMoviesList(
      dropdownSelection.toLowerCase() === "populares" ? popularMovies : movies
    );
  }, [dropdownSelection, popularMovies, movies]);

  const handleDropdownChange = (selectedOption) => {
    setDropdownSelection(selectedOption);
  };

  return (
    <section className="px-4 mt-6 mb-10 lg:m-0 lg:absolute lg:top-32 lg:right-10 xl:right-16 lg:w-72 2xl:w-80 lg:h-3/4 lg:overflow-y-scroll text-white flex flex-col items-center uppercase">
      <div className="flex items-center justify-center text-xl mb-12">
        <span className="font-extralight tracking-widest">Ver:</span>
        <Dropdown
          options={Object.values(OPTIONS)}
          selectedOption={dropdownSelection}
          onSelectOption={handleDropdownChange}
        />
      </div>
      <motion.div className="w-full flex items-center justify-center flex-wrap lg:flex-nowrap lg:flex-col gap-y-6 md:gap-x-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.6, delay: 0.1 },
        }}
      >
        {moviesList.length > 0 ? (
          moviesList.map((movie) => <Movie key={movie.id} movie={movie} />)
        ) : (
          <AddMovieCard openModal={openModal} />
        )}
      </motion.div>
    </section>
  );
};

const AddMovieCard = ({ openModal }) => {
  return (
    <article
      onClick={openModal}
      className="w-full flex items-center justify-center sm:w-96 lg:w-full cursor-pointer h-64 lg:h-40 bg-black lg:bg-liteflix-grey bg-opacity-60 rounded-md hover:shadow-lg transition-shadow duration-100 ease"
    >
      <span className="text-lg font-medium tracking-[0.25em] uppercase">
        Cargar película
      </span>
    </article>
  );
};

export default MovieGallery;

"use client";
import { useState } from "react";
import Movie from "./Movie";
import Dropdown from "./Dropdown";

const DROPDOWN_OPTIONS = ["Populares", "Mis Películas"];

const MovieGallery = ({ popularMovies }) => {
  const [dropdownSelection, setDropdownSelection] = useState("Populares");
  return (
    <section className="px-4 mt-6 mb-10 lg:m-0 lg:absolute lg:top-32 lg:right-10 lg:w-1/3 xl:w-1/4 2xl:w-1/5 lg:h-3/4 lg:overflow-y-scroll text-white flex flex-col items-center uppercase">
      <div className="flex items-center justify-center text-xl mb-12">
        <span className="font-extralight tracking-widest">Ver:</span>
        <Dropdown
          options={DROPDOWN_OPTIONS}
          selectedOption={dropdownSelection}
          onSelectOption={setDropdownSelection}
        />
      </div>
      <div className="w-full flex items-center justify-center flex-wrap lg:flex-nowrap lg:flex-col gap-y-6 md:gap-x-10">
        {popularMovies?.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieGallery;

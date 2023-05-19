"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FileDropzone from "./FileDropzone";
import useMovieLocalStorage from "@hooks/useMovieLocalStorage ";
import { v4 as uuidv4 } from "uuid";
import LiteflixLogo from "@public/assets/logo/LiteflixLogo";
import { useModalContext } from "@context/ModalContext";

const SuccessfulSubmit = ({ movieTitle }) => {
  const refresh = () => window.location.reload(true);
  return (
    <div className="h-1/2 sm:h-full w-full uppercase px-10  py-16 flex flex-col items-center justify-between text-white">
      <LiteflixLogo />
      <div className="flex flex-col tracking-[0.25em] text-center gap-y-4">
        <p className="font-medium text-2xl">¡Felicitaciones!</p>
        <span className="font-extralight text-xl">
          {movieTitle} fue correctamente subida.
        </span>
      </div>
      <button
        type="button"
        className="flex items-center justify-center w-[14rem] py-4 bg-white text-center text-liteflix-grey tracking-[0.25em] uppercase disabled:bg-opacity-50"
        onClick={refresh}
      >
        Ir a home
      </button>
    </div>
  );
};

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    setValue,
  } = useForm();
  const { saveMovie } = useMovieLocalStorage();
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [movieTitle, setMovieTitle] = useState(null);
  const { closeModal } = useModalContext();

  const onSubmit = (data) => {
    const movie = {
      id: uuidv4(),
      title: data.name,
      image: data.image,
    };
    setMovieTitle(movie.title);
    saveMovie(movie);
    setIsSubmitSuccessful(true);
  };

  const handleFileSelected = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const imageDataUrl = reader.result;
      setValue("image", imageDataUrl);
    };
  };

  return (
    <>
      {!isSubmitSuccessful && (
        <form
          className="h-1/2 sm:h-full w-full uppercase p-10 flex flex-col items-center justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4 className="text-liteflix-green tracking-[0.25em] text-xl">
            Agregar Película
          </h4>
          <div className="flex w-full flex-col items-center justify-center">
            <FileDropzone onFileSelected={handleFileSelected} />
          </div>

          <div className="flex flex-col items-center justify-center w-5/12">
            <input
              autoComplete="off"
              placeholder="Título"
              className="bg-transparent text-center text-xl tracking-widest w-full placeholder:text-white placeholder:text-opacity-70 text-white border-b focus:outline-none"
              {...register("name", { required: true })}
            />
          </div>
          <input type="hidden" {...register("image", { required: true })} />
          <button
            disabled={!isValid}
            type="submit"
            className="flex items-center justify-center w-[14rem] py-4 bg-white text-center tracking-[0.25em] uppercase disabled:bg-opacity-50"
          >
            Subir película
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="flex sm:hidden items-center justify-center text-white w-[14rem] py-4 bg-transparent border text-center tracking-[0.25em] uppercase"
          >
            Salir
          </button>
        </form>
      )}
      {isSubmitSuccessful && <SuccessfulSubmit movieTitle={movieTitle} />}
    </>
  );
};

export default MyForm;

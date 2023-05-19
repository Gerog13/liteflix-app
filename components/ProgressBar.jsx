const ProgressBar = ({ isValidInput, progress, onCancelUpload }) => {
  return (
    <div className="w-full flex flex-col items-center uppercase text-white">
      <span className="self-start mb-4 font-medium tracking-[0.25em]">
        {isValidInput ? (
          `Cargando ${progress}%`
        ) : (
          <span className="font-extralight">
            <span className="font-medium">¡ERROR!</span> NO SE PUDO CARGAR LA
            PELÍCULA
          </span>
        )}
      </span>
      <div className="bg-white bg-opacity-40 w-full flex items-center h-1">
        <div
          style={{ width: `${progress}%` }}
          className={`bg-liteflix-green h-3 ${!isValidInput && "bg-red-600"}`}
        ></div>
      </div>
      <div className="self-end mt-4 ">
        {(progress !== 100 || !isValidInput) && (
          <button
            onClick={onCancelUpload}
            className="font-medium text-lg tracking-[0.25em]"
          >
            {isValidInput ? "Cancelar" : "Reintentar"}
          </button>
        )}
        {progress === 100 && isValidInput && (
          <span
            className={`font-medium text-lg tracking-[0.25em] ${
              progress === 100 && "text-liteflix-green"
            }`}
          >
            ¡LISTO!
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;

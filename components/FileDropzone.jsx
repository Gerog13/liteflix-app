import { ClipIcon } from "@public/assets/icons";
import { useState, useEffect, useRef, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ProgressBar from "./ProgressBar";

const VALID_EXTENSIONS = ["jpg", "jpeg", "png", "gif"];

const FileDropzone = ({ onFileSelected }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [validInput, setValidInput] = useState(true);
  const intervalRef = useRef(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const fileExtension = file.type.split("/")[1];
        if (VALID_EXTENSIONS.includes(fileExtension)) {
          setIsLoading(true);
          setValidInput(true);
          setProgress(0);

          intervalRef.current = setInterval(() => {
            setProgress((prevProgress) => {
              const newProgress = prevProgress + 1;
              if (newProgress >= 100) {
                clearInterval(intervalRef.current);
                setIsLoading(false);
                onFileSelected(file);
              }
              return newProgress;
            });
          }, 40);
        } else {
          setValidInput(false);
          setProgress(100);
        }
      }
    },
    [onFileSelected]
  );

  const handleCancelUpload = () => {
    clearInterval(intervalRef.current);
    setIsLoading(false);
    setValidInput(true);
    setProgress(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <>
      {progress !== 0 && (
        <ProgressBar
          isValidInput={validInput}
          onCancelUpload={handleCancelUpload}
          progress={progress}
        />
      )}
      {!isLoading && progress !== 100 && validInput && (
        <div
          {...getRootProps()}
          className={`dropzone ${
            isDragActive ? "active" : ""
          } w-full flex items-center justify-center py-8 border-dashed border border-white cursor-pointer`}
        >
          <input {...getInputProps()} />

          <div className="flex items-center text-white text-sm sm:text-lg tracking-widest">
            <ClipIcon className="mr-3" />
            <p className="hidden sm:block">
              Agregá un archivo o arrastralo y soltalo aquí
            </p>
            <p className="sm:hidden">Agregá un archivo</p>
          </div>
        </div>
      )}
    </>
  );
};

export default FileDropzone;

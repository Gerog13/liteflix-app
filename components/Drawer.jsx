import { CloseIcon, PlusIcon } from "@public/assets/icons";
import LiteflixLogo from "@public/assets/logo/LiteflixLogo";
import Avatar from "@public/assets/images/avatar.webp";
import Image from "next/image";
import Link from "next/link";

const DrawerHeader = ({ onClose }) => {
  return (
    <header className="flex justify-between items-center mb-16">
      <button className="cursor-pointer" onClick={onClose}>
        <CloseIcon direction="left" />
      </button>
      <LiteflixLogo />
      <div className="cursor-pointer">
        <Image
          src={Avatar}
          alt="User avatar"
          priority
          width={46}
          height={60}
          style={{ width: "auto" }}
          className="rounded-full object-contain"
        />
      </div>
    </header>
  );
};

export default function Drawer({ isOpen, setIsOpen }) {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <main
      className={
        "fixed overflow-hidden z-10 bg-liteflix-grey bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0"
          : "transition-all delay-300 opacity-0 translate-x-full")
      }
    >
      <section
        className={
          "w-screen pt-4 px-8  right-0 absolute bg-liteflix-grey h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? "translate-x-0" : "translate-x-full")
        }
      >
        <DrawerHeader onClose={handleClose} />
        <ul className="flex flex-col gap-y-9 uppercase text-white text-xl font-extralight tracking-[0.25em]">
          <li>
            <Link href="/" onClick={handleClose}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/" onClick={handleClose}>
              Series
            </Link>
          </li>
          <li>
            <Link href="/" onClick={handleClose}>
              Películas
            </Link>
          </li>
          <li>
            <Link href="/" onClick={handleClose}>
              Agregadas Recientemente
            </Link>
          </li>
          <li>
            <Link href="/" onClick={handleClose}>
              Populares
            </Link>
          </li>
          <li>
            <Link href="/" onClick={handleClose}>
              Mis Películas
            </Link>
          </li>
          <li>
            <Link href="/" onClick={handleClose}>
              Mi Lista
            </Link>
          </li>
          <li className="my-4">
            <button className="flex items-center">
              <PlusIcon />
              <span className="ml-2 font-medium tracking-[0.25em]">Agregar Película</span>
            </button>
          </li>
          <li>
            <Link href="/" onClick={handleClose}>
              Cerrar Sesión
            </Link>
          </li>
        </ul>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={handleClose}
      ></section>
    </main>
  );
}

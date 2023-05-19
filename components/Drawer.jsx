import { CloseIcon, NotificationIcon, PlusIcon } from "@public/assets/icons";
import LiteflixLogo from "@public/assets/logo/LiteflixLogo";
import Avatar from "@public/assets/images/avatar.webp";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useModalContext } from "@context/ModalContext";
import Modal from "./Modal";
import MovieForm from "./MovieForm";

const DrawerHeader = ({ onClose }) => {
  return (
    <header className="flex justify-between items-center mb-16">
      <button className="cursor-pointer" onClick={onClose}>
        <CloseIcon direction="left" />
      </button>
      <LiteflixLogo className="lg:hidden" />
      <div className="cursor-pointer flex items-center gap-x-10">
        <NotificationIcon className="hidden lg:block" />
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

const Drawer = ({ isOpen, setIsOpen }) => {
  const { openModal } = useModalContext();
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.main
          className="fixed overflow-hidden z-10 bg-liteflix-grey bg-opacity-25 inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "just", stiffness: 100 }}
        >
          <motion.section
            className="w-screen lg:w-5/12 xl:w-1/3 pt-4 px-8 right-0 absolute bg-liteflix-grey h-full shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "just", stiffness: 100 }}
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
                <button onClick={openModal} className="flex items-center">
                  <PlusIcon />
                  <span className="ml-2 font-medium tracking-[0.25em]">
                    Agregar Película
                  </span>
                </button>
              </li>
              <li>
                <Link href="/" onClick={handleClose}>
                  Cerrar Sesión
                </Link>
              </li>
            </ul>
          </motion.section>
          <section className="w-screen h-full" onClick={handleClose}></section>
          {/* <motion.section
            className="w-screen h-full"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
          ></motion.section> */}
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default Drawer;

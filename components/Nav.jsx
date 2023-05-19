"use client";
import { useState } from "react";
import LiteflixLogo from "@public/assets/logo/LiteflixLogo";
import { MenuIcon, NotificationIcon, PlusIcon } from "@public/assets/icons";
import Image from "next/image";
import Avatar from "@public/assets/images/avatar.webp";
import Drawer from "./Drawer";
import { useModalContext } from "@context/ModalContext";
import Modal from "./Modal";
import MovieForm from "./MovieForm";
import Link from "next/link";

const Nav = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const { isModalOpen, openModal, closeModal } = useModalContext();

  return (
    <nav className="absolute flex justify-between items-center w-full pt-4 px-8 xl:px-16 z-50">
      <div className="lg:hidden">
        <button
          className="cursor-pointer"
          onClick={() => setToggleSideBar(true)}
        >
          <MenuIcon direction="left" />
        </button>
      </div>
      <div className="flex items-center">
        <Link href="/"><LiteflixLogo /></Link>
        
        <button onClick={openModal} className="hidden lg:flex lg:ml-14 text-white items-center">
          <PlusIcon />
          <span className="ml-2 font-medium tracking-[0.25em]">
            Agregar Película
          </span>
        </button>
      </div>

      <div className="cursor-pointer flex items-center gap-x-10">
        <button
          className="cursor-pointer hidden lg:block"
          onClick={() => setToggleSideBar(true)}
        >
          <MenuIcon direction="right" />
        </button>
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
      <Drawer isOpen={toggleSideBar} setIsOpen={setToggleSideBar} />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <MovieForm />
        </Modal>
      )}
    </nav>
  );
};

export default Nav;

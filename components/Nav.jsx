"use client";
import { useState } from "react";
import LiteflixLogo from "@public/assets/logo/LiteflixLogo";
import { MenuIcon, NotificationIcon, PlusIcon } from "@public/assets/icons";
import Image from "next/image";
import Avatar from "@public/assets/images/avatar.webp";
import Drawer from "./Drawer";
import Menu from "@public/assets/icons/Menu";

const Nav = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

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
        <LiteflixLogo />
        <button className="hidden lg:flex lg:ml-14 text-white items-center">
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
    </nav>
  );
};

export default Nav;

"use client";
import { useState } from "react";
import LiteflixLogo from "@public/assets/logo/LiteflixLogo";
import { MenuIcon } from "@public/assets/icons";
import Image from "next/image";
import Avatar from "@public/assets/images/avatar.webp";
import Drawer from "./Drawer";

const Nav = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <nav className="absolute flex justify-between items-center w-full lg:w-4/5 pt-4 px-8 z-50">
      <div className="lg:hidden">
        <button
          className="cursor-pointer"
          onClick={() => setToggleSideBar(true)}
        >
          <MenuIcon direction="left" />
        </button>
      </div>
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
      <Drawer isOpen={toggleSideBar} setIsOpen={setToggleSideBar} />
    </nav>
  );
};

export default Nav;

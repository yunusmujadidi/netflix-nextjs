import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { useCallback } from "react";

import NavbarItem from "../components/NavbarItem";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((prev) => !prev);
  }, []);
  return (
    <nav className="fixed w-full z-40">
      <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
        <Image src="/images/logo.png" width={100} height={140} alt="logo" />
        <div className="flex-row gap-7 ml-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Film" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className="text-white transition" />
          <MobileMenu isOpen={showMobileMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

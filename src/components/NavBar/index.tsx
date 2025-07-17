"use client";

import React, { useState } from "react";
import Image from "next/image";
import { type Menu as MenuType } from "@/types/Global";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Menu from "./Menu";

function Navbar({ menu }: { menu: MenuType[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy(menu.map((item) => item.slug));

  const toggleMenu = () => setIsOpen(!isOpen);
  console.log("hello active id");

  return (
    <nav className="text-gray-800 md:py-8 px-6 flex justify-end items-start w-full absolute top-0 right-0 left-0 z-10 mx-auto max-w-12xl">
      <div className="md:hidden w-full flex justify-end items-start">
        <button onClick={toggleMenu} className="focus:outline-none py-8">
          {!isOpen && (
            <Image
              src="/images/open.svg"
              className="w-8 h-8"
              alt="Open menu"
              width={40}
              height={40}
            />
          )}
        </button>
      </div>

      <div
        className={`w-full md:w-auto md:flex md:items-center ${
          isOpen
            ? "h-100vh md:h-auto bg-[url('/images/hero.jpg')] bg-cover bg-center fixed py-8 md:py-0 md:bg-transparent flex flex-col justify-end items-end"
            : "hidden"
        } absolute px-7 right-auto md:fixed z-10`}
      >
        {isOpen && (
          <button
            onClick={toggleMenu}
            className="focus:outline-none block md:hidden mb-6"
          >
            <Image
              src="/images/close.svg"
              className="w-8 h-8"
              alt="Close menu"
              width={40}
              height={40}
            />
          </button>
        )}

        <Menu menu={menu} activeId={activeId} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
}

export default Navbar;

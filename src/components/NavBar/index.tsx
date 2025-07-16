"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Scrollspy from "react-scrollspy";
import { Menu } from "@/types/Global";

function Navbar({ menu }: { menu: Menu[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-gray-800 md:py-8 px-6 flex justify-end items-start w-full absolute top-0 left-0 z-10 max-w-12xl">
      <div className="md:hidden w-full flex justify-end items-start">
        <button onClick={toggleMenu} className="focus:outline-none py-8">
          {!isOpen && (
            <Image
              src="images/open.svg"
              className="w-8 h-8"
              alt={""}
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
        }  md:bg-transparent absolute  right-0 px-7 md:fixed z-10`}
      >
        <>
          {isOpen && (
            <button
              onClick={toggleMenu}
              className="focus:outline-none block md:hidden"
            >
              <Image
                src="images/close.svg"
                className="w-8 h-8"
                alt={""}
                width={40}
                height={40}
              />
            </button>
          )}
          <Scrollspy
            items={menu.map((item: Menu) => item.slug)}
            currentClassName="group text-primary font-bold"
            className="list-none md:bg-secondary/40 md:backdrop-blur-md md:rounded-full md:px-6 flex flex-col h-full md:flex-row gap-14 md:gap-8 mt-10 md:mt-0 justify-start items-end m-0 p-0 w-full md:w-auto"
            offset={-100}
          >
            {menu.map((item: Menu) => (
              <li
                key={item.id}
                className="relative group font-bold md:font-medium text-5xl md:text-lg lg:text-2xl flex items-center justify-end gap-2"
              >
                <Link
                  href={item.slug}
                  className="hover:text-primary text-white scroll-smooth group-[.text-primary]:text-primary"
                >
                  {item.label}
                </Link>

                <span className="dot hidden"></span>
              </li>
            ))}
          </Scrollspy>
        </>
      </div>
    </nav>
  );
}

export default Navbar;

"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "#", label: "How we work", id: "home" },
  { href: "#partners", label: "Partners", id: "partners" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact Us", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
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
          <ul className="list-none md:bg-secondary/40 md:backdrop-blur-md md:rounded-full md:px-6 flex flex-col h-full md:flex-row gap-14 md:gap-8  mt-10 md:mt-0  justify-start items-end m-0 p-0 w-full md:w-auto">
            {menuItems.map((item) => {
              const isActive = pathname === item.id;
              return (
                <li
                  key={item.href}
                  className="relative font-bold md:font-medium text-5xl md:text-lg lg:text-2xl flex items-center justify-end gap-2"
                >
                  <Link
                    href={item.href}
                    className={`hover:text-primary ${
                      isActive ? "text-primary" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {isActive && (
                    <span className="w-8 md:w-2 h-8 md:h-2 bg-primary rounded-full"></span>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      </div>
    </nav>
  );
}

export default Navbar;

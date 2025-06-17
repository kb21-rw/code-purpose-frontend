"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const menuItems = [
  {
    href: "/",
    label: "How we work",
  },
  { href: "/partners", label: "Partners" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${
        isOpen ? "bg-gray-400" : "bg-transparent"
      } text-gray-800 py-8 px-6 flex justify-end items-start w-full absolute top-0 left-0 z-10 max-w-12xl`}
    >
      <div className="md:hidden w-full flex justify-end items-start">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? (
            <Image
              src="images/close.svg"
              className="w-8 h-8"
              alt={""}
              width={40}
              height={40}
            />
          ) : (
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
          isOpen ? "block h-92vh md:h-auto bg-gray-400" : "hidden"
        }  md:bg-transparent absolute top-12 left-0 px-7 md:static z-10`}
      >
        <ul className="nav-menu list-none font-semibold flex flex-col h-full md:flex-row gap-14 md:gap-8 text-4xl mt-10 md:mt-0 md:text-lg justify-start items-end m-0 p-0 w-full md:w-auto">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-gray-200 text-white animate-fly-in-down transition-all duration-500"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

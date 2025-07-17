import React from "react";
import { type Menu } from "@/types/Global";

type MenuProps = { menu: Menu[]; activeId: string; toggleMenu: () => void };
const Menu = ({ menu, activeId, toggleMenu }: MenuProps) => {
  return (
    <ul className="list-none md:bg-secondary/40 md:backdrop-blur-md md:rounded-full md:px-6 flex flex-col h-full md:flex-row gap-14 md:gap-8 mt-10 md:mt-0 justify-start items-end m-0 p-0 w-full md:w-auto">
      {menu.map((item) => (
        <li
          key={item.id}
          className={`relative group font-bold md:font-medium text-5xl md:text-lg lg:text-2xl flex items-center justify-end gap-2 ${
            activeId === item.slug ? "text-primary" : "text-white"
          }`}
          onClick={toggleMenu}
        >
          <a
            href={`#${item.slug}`}
            className="hover:text-primary scroll-smooth"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;

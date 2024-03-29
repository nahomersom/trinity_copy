"use client";

import { Children, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
type DropDownChild = {
  title: string;
  link: string;
};
type DropdownProps = {
  // children: React.ReactNode
  children: DropDownChild[];
  title: string;
};
// https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js

export default function NavDropdown({ title, children }: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <li className="dropdown group md:px-8 px-0  ">
      <button
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        className="text-gray-700 h-full hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4
        text-center
         py-2 md:hover:text-[#002937] md:p-0 font-medium font-playfair-display flex items-center justify-between w-full md:w-auto"
      >
        {title}
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdownNavbar"
        className=" hidden
        absolute mt-0  -z-1 group-hover:block bg-[#002937] text-white text-base  list-none  rounded shadow my-4 w-44"
      >
        <ul
          className="divide-y divide-gray-100"
          aria-labelledby="dropdownLargeButton"
        >
          {/*  */}
          {children.map((value, index) => (
            <li key={index}>
              <a
                href={value.link}
                className="text-sm hover:bg-gray-100 hover:text-[#002937] text-white block text-left px-4 py-2"
              >
                {value.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

// "use client";

import { Children, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { NavBarType, UserRole } from "@/app/app-constants";
import { unsetToken } from "@/app/api/auth";
import router from "next/router";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";
type DropDownChild = {
  title: string;
  link: string;
};
type DropdownProps = {
  // children: React.ReactNode
  children?: NavBarType[];
  title: string;
  isLogout : boolean;
  link? : string;
  navigateToPage :(page: string) => void;
  userRole : string;
  
};
// https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js

export default function NavDropdown({ title, children, link, userRole, isLogout,navigateToPage }: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const logout = () => {
    unsetToken();
    navigateToPage("/signin");
  };
  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };
  return (
    <li className="dropdown group md:px-8 px-0  ">
      <button
        id="dropdownNavbarLink"
        // onClick={() => {
        //   if (isLogout) {
        //     logout();
        //   } else if (link) {
        //     navigateToPage(link);
        //   } else {
        //     toggleDropdown(); // Toggle dropdown when button is clicked
        //   }
        // }}
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
          {children?.map((value, index) => (
            ( value.isAdminAllowed && userRole.toLowerCase() == "admin")
            || ( value.isMemberAllowed && userRole.toLowerCase() ==  "church-member" )
            || ( value.isPublicAllowed && userRole.toLowerCase() ==  "public")
            || ( value.isStudentAllowed && userRole.toLowerCase() ==  "student")
             
             ?
             <Link key={index} href={value.link??"#"} className="text-sm hover:bg-gray-100 hover:text-[#002937] text-white block text-left px-4 py-2">
            
                {value.title}
              
            </Link>
            :null
          ))}
        </ul>
      </div>
    </li>
  );
}

"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";
import { Inter, Playfair_Display } from "next/font/google";
import NavDropdown from "../utils/nav-dropdown";
import Image from "next/image";
// import profilePic from "../../public/images/partners_pic.svg";
import { unsetToken } from "@/app/api/auth";

import { useRouter } from "next/router";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { UserRole, navBarItems } from "@/app/app-constants";

type HeaderData = {
  hasUser: boolean;
  userName?: string;
  userImage?: string;
  router?: AppRouterInstance;
};

export default function Header({
  hasUser = false,
  userName,
  userImage,
  router,
}: HeaderData) {
  const [top, setTop] = useState<boolean>(true);
  const [name, setUserName] = useState("");
  const [image, setUserImage] = useState("");
  const [userRole, setUserRole] = useState("public");


  const navigateToPage = (page: string) => {
    router?.push(page);
};

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };
  const logout = () => {
    unsetToken();
    userName = undefined;
    userImage = undefined;

    router?.push("/signin");
  };
  useEffect(() => {
    if ( typeof localStorage !== "undefined") {
      var userName = localStorage.getItem("username");
      var userRole = localStorage.getItem("userRole") ;
      var userImage = localStorage.getItem("userProfileUrl")
      setUserName(userName || "");
      setUserRole(userRole || "public");
      setUserImage(userImage || "");


    }
  }, []);

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-[#002937] backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className=" max-w-[90rem] mx-auto px-1  flex items-center gap-12 justify-between h-16 md:h-20 sm:px-2">
        {/* Site branding */}
        <div className=" mr-4 w-[127px] h-[54px]">
          <Logo />
        </div>

        {/* Desktop navigation */}
        <nav
          className=" hidden bg-white flex-grow-3 md:flex md:grow md: font-Playfair_Display  max-w-[78%] mt-10  
        text-[#285463] h-[59px] mr-auto self-baseline rounded-[24px] border-[1.5px] border-[#002937]"
        >
          <ul className=" flex flex-grow justify-around px-6 items-stretch  text-[#002937] text-center font-medium text-[22px] ">
            {navBarItems.map((value, index) => (
             ( value.isAdminAllowed && userRole.toLowerCase() == "admin")
             || ( value.isMemberAllowed && userRole.toLowerCase() ==  "church-member" )
             || ( value.isPublicAllowed && userRole.toLowerCase() ==  "public")
             || ( value.isStudentAllowed && userRole.toLowerCase() ==  "student")
             
             ?
              <NavDropdown
                key={index}
                title={value.title}
                link={value.link}
                children={value.children}
                userRole={userRole}
                navigateToPage={navigateToPage}
                isLogout={value.islogout??false}
              ></NavDropdown>:null
            ))
            
            }
          </ul>

          {/* Desktop sign in links */}

          {/* <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li>
            </ul> */}
        </nav>

        <MobileMenu userRole={userRole} navigateToPage={navigateToPage}/>

        <div
          className={`hidden md:grow md:flex justify-center gap-4 max-w-max items-center ${
            (userRole.toLocaleLowerCase() == "public") ? "md:hidden hidden" : ""
          }  `}
        >
          <div className=" text-right">
            <div className=" text-xl font-bold font-raleway leading-6">
              {name}
            </div>
            <div
              className=" text-base font-normal font-raleway leading-4 hover:cursor-pointer"
              onClick={logout}
            >
              Sign Out
            </div>
          </div>
          <div
            className="  w-12 h-12 bg-black bg-cover bg-center rounded-full overflow-hidden "
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
      </div>
    </header>
  );
}

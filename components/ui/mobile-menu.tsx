
import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Accordion from "../utils/accordion";
import { navBarItems } from "@/app/app-constants";
 type MobileMenuType ={
  userRole : string,
  navigateToPage :(page: string) => void;
 }
export default function MobileMenu({userRole, navigateToPage }:MobileMenuType ) {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);
  const children: string[] = ["sermons ", "partners", "our history"];

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden mx-6">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"} `}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
           {navBarItems.map((value, index) => (
             ( value.isAdminAllowed && userRole.toLowerCase() == "admin")
             || ( value.isMemberAllowed && userRole.toLowerCase() ==  "church-member" )
             || ( value.isPublicAllowed && userRole.toLowerCase() ==  "public")
             || ( value.isStudentAllowed && userRole.toLowerCase() ==  "student")
             
             ?
              <Accordion
              key={index}
                title={value.title}
                link={value.link}
                navigateToPage={navigateToPage}
                children={value.children}
                userRole={userRole}
                isLogout = {value.islogout??false}

              ></Accordion>:null
            ))
            
            }
        
        </Transition>
      </div>
    </div>
  );
}

import { unsetToken } from "@/app/api/auth";
import { NavBarType } from "@/app/app-constants";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type AccordionpProps = {
  children?: NavBarType[];
  userRole: string;
  link?: string;
  isLogout: boolean;
  navigateToPage: (page: string) => void;
  tag?: string;
  title: string;
  active?: boolean;
};

export default function Accordion({
  children,
  tag = "li",
  link,
  userRole,
  isLogout,
  navigateToPage,
  title,
  active = false,
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
  const accordion = useRef<HTMLDivElement>(null);
  const Component = tag as keyof JSX.IntrinsicElements;
  const logout = () => {
    unsetToken();


    navigateToPage("/signin");
  };
  // Inside your component
  useEffect(() => {
    setAccordionOpen(active);
  }, [accordion]);

  return (
    <Component>
      <button
        className="flex items-center px-8 w-full justify-between text-black text-lg font-medium text-left py-5 border-t border-gray-200"
        onClick={(e) => {
          if (isLogout) {
            logout();
          }
          if (
            (link != undefined || link != null) &&
            (children == undefined || children == null)
          ) {
            navigateToPage(link);
          } else {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }
        }}
        aria-expanded={accordionOpen}
      >
        <span className="">{title}</span>
        
        {/* downward arrow  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ml-2 ${accordionOpen || children ==null || children.length==0 ? "hidden" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 14.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 17z"
          />
        </svg>
        {/* upward arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ml-2 ${!accordionOpen || children ==null ||children.length==0 ? "hidden" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 0 1 .707.293l4 4a1 1 0 0 1-1.414 1.414L10 5.414 6.707 8.707a1 1 0 0 1-1.414-1.414l4-4A1 1 0 0 1 10 3z"
          />
        </svg>
      </button>
      <div
        ref={accordion}
        className="overflow-hidden transition-all duration-300 ease-in-out bg-[#002937] text-white text-base"
        style={
          accordionOpen
            ? { maxHeight: accordion.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <ul
          className="divide-y divide-gray-100 "
          aria-labelledby="dropdownLargeButton"
        >
          {/*  */}
          {children?.map((value, index) =>
            (value.isAdminAllowed && userRole.toLowerCase() == "admin") ||
            (value.isMemberAllowed &&
              userRole.toLowerCase() == "church-member") ||
            (value.isPublicAllowed && userRole.toLowerCase() == "public") ||
            (value.isStudentAllowed && userRole.toLowerCase() == "student") ? (
              <li key={index}>
                <Link href={value.link??"#"}
                  className="text-sm hover:bg-gray-100 hover:text-[#002937] text-white block text-left px-4 py-2"
                >
                  {value.title}
                </Link>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </Component>
  );
}

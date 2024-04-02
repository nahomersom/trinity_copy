import Logo from "./logo";
import Image from "next/image";
import fbIcon from "@/public/images/icon _fb_footer.svg";
import instaIcon from "@/public/images/icon _insta_footer.svg";
import mailIcon from "@/public/images/icon _mail_footer.svg";
import twitterIcon from "@/public/images/icon _twiter_footer.svg";


export default function Footer() {
  return (
    <footer className="bg-white">
      <div className=" max-w-5xl mx-auto  sm:mx-auto ">
        <div className="  flex flex-col sm:flex-row justify-between items-start gap-6 py-6">
          <Logo type="dark" />
          <div className="flex items-end justify-around gap-10 self-end">
          <Image
            className="md:max-w-none mx-auto rounded"
            src={fbIcon}
            alt=""
          ></Image>
            <Image
            className="md:max-w-none mx-auto rounded"
            src={instaIcon}
            alt=""
          ></Image>
            <Image
            className="md:max-w-none mx-auto rounded"
            src={twitterIcon}
            alt=""
          ></Image>
            <Image
            className="md:max-w-none mx-auto rounded"
            src={mailIcon}
            alt=""
          ></Image>
          </div>
        </div>

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-4 grid-cols-2 justify-center gap-8 py-3 md:py-5 px-6 md:px-0 border-t-[3px] border-[#002937] md:justify-end">
          {/* 2nd block */}
          <div className="sm:col-span-4 md:col-span-2 lg:col-span-1">
            <ul className="text-[15px]">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Our Pastors 
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Our Staff
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Our Partners
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  History
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-4 md:col-span-2 lg:col-span-1">
          
            <ul className="text-[15px]">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Ministries
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Children Ministry 
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Explore
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Community Group
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-4 md:col-span-2 lg:col-span-1">
            <ul className="text-[15px]">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Resources
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Sermon
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Books
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-4 md:col-span-2 lg:col-span-1">
            <ul className="text-[15px]">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Connect
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Sign In
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="text-black text-center py-10 text-[13px]">
          <span className=" font-normal">Designed By </span>
          <span className=" font-bold">Colorem design studio</span>

        </div>
      </div>
    </footer>
  );
}

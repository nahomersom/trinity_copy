"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Announcement from "@/components/Announcement";
import { getUserFromLocalStorage, unsetToken } from "@/app/api/auth";

type AnnouncementData = {
  title: string;
  Detail: string;
  Date: string;
  by: string;
};

export default function UserHome() {
  const router = useRouter();
  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");
  var announcements: AnnouncementData[] = [
    {
      title: "Class Introduction",
      Detail:
        "Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here",
      Date: "September 20, 2023",
      by: "Admin",
    },
    {
      title: "Submit Papers",
      Detail:
        "Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here Details are written here",
      Date: "September 20, 2023",
      by: "Admin",
    },
  ];
  useEffect(() => {
    // Code here will run on the client side
    var res = getUserFromLocalStorage()?.then((res) => {
      var userName = res.username;
      console.log("user name issssssssssssss", res.profilePicture);
      var userImage = res.profilePicture?
        process.env.NEXT_PUBLIC_STRAPI_API_URL + res.profilePicture.url:"";
      setUserImage(userImage || "");
      setUserName(userName || "");
      return true;
    });

    if (!res) {
      router.push("/signin");
    }
  }, []);

  return (
    <section className="pt-20 md:pt-20  ">
      <div className="bg-white pl-[8%]  pb-20 ">
        <div className="m-auto flex flex-col items-center w-[80%] pt-14 ">
          <div
            className=" w-28 h-28 bg-black bg-cover bg-center rounded-full overflow-hidden "
            style={{ backgroundImage: `url(${userImage})` }}
          ></div>
          <div
            className=" py-8 text-2xl text-[#002937] hover:cursor-pointer font-raleway font-bold leading-7"
            onClick={() => router.push("/user-status")}
          >
            Welcome {userName}
          </div>

          <div className=" p-2 text-3xl bg-[#002937] font-raleway font-black leading-9">
            Announcement Board
          </div>
          <div className="py-16 flex flex-col justify-around gap-10  w-full items-stretch ">
            {announcements.map((value, index) => (
              <div className="flex flex-col justify-around gap-10  w-full items-stretch">
                <hr
                  className={`${
                    index == 0 ? "hidden" : ""
                  } bg-[#002937] h-[3px] self `}
                />
                <Announcement
                  title={value.title}
                  Detail={value.Detail}
                  Date={value.Date}
                  by={value.by}
                ></Announcement>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>{" "}
    </section>
  );
}

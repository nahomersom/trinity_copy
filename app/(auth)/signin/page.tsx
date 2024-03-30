"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import profile from "../../../public/images/profile_pic.svg";
import { fetcher } from "@/app/api/api";
import { setToken } from "@/app/api/auth";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const query = useSearchParams();
  const isPastorsCollage = query?.get("isPastorsCollage");

  const showToast = (type: string, message: string) => {
    if (type == "success") toast.success(message);
    if (type == "error") toast.error(message);
    if (type == "warning") toast.warning(message);
    if (type == "info") toast.info(message);
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true); // Set loading to true when the request starts

    try {
      const formData = new FormData(event.currentTarget);
      // ?filters[field][operator]=value
      var studentQuery =  `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local?filters[role][name]=student`
      var normalQuery = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`
      const res = await fetcher(
       isPastorsCollage ? studentQuery : normalQuery,
        {
          method: "POST",
          header: "Content-Type: application/json",
          body: formData,
        }
      );
      console.log("howwwwwwwwwwwwwwwwwwwwwwwwwwwwww")
      console.log(res)
      if (res.jwt != null ) {
        var data = await fetcher(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/me?populate=*`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${res.jwt}`,
            },
          }
        );
        if  (
          (data.role.name === "student" && isPastorsCollage) ||
          (data.role.name !== "student" && !isPastorsCollage)
      ) {
          toast.success("login succesfull");

          data.jwt = res.jwt;
          console.log("vvvvvvvvvvvvvvvvvv", data);
          // Save data to localStorage
          setToken(data);
          isPastorsCollage ? router.push("/user-home") : router.push("/");
          // ...
        } else {
          throw Error("incorrect email or password");
        }
      } else {
        throw Error(res.error.message);
      }
    } catch (error: any) {
      toast.error(error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false); // Set loading to false when the request completes
    }
  }

  return (
    <section className={` h-full pt-20 md:pt-20 font-raleway`}>
      <div
        className={` max-w-full mx-auto px-4 pb-12 sm:pb-40 h-full sm:px-6 ${
          !isPastorsCollage
            ? "bg-[#33545F] bg-opacity-80 text-white bg-cover bg-no-repeat  bg-center"
            : "bg-white text-[#002937]"
        }`}
        style={
          !isPastorsCollage
            ? { backgroundImage: "url('images/auth_bg_logo.svg')" }
            : undefined
        }
      >
        <div className=" h-full pt-20">
          <div className={`${!isPastorsCollage ? "hidden" : "pb-14"}`}>
            <h1 className="text-center text-[64px] font-bold font-Raleway leading-[75px]">
              Welcome to Trinity Pastors Collage
            </h1>
          </div>
          <div className=" mb-2">
            <h1 className="text-center text-2xl font-bold font-Raleway leading-7">
              SIGN IN
            </h1>
          </div>
          <div className=" mb-7">
            <h2 className="text-center text-base font-light leading-5">
              SIGN IN INTO YOUR ACCOUNT
            </h2>
          </div>
          <div className=" max-w-sm mx-auto">
            <form className="" onSubmit={onSubmit}>
              <div className="flex flex-wrap -mx-3 mb-7">
                <div
                  className={`${
                    !isPastorsCollage ? "bg-white" : "bg-[#33545F]"
                  } w-full px-3 border-2 rounded-2xl`}
                >
                  <input
                    id="identifier"
                    type="email"
                    name="identifier"
                    className={`${
                      !isPastorsCollage
                        ? "bg-white text-black"
                        : "bg-[#33545F] opacity-1 placeholder-white text-white"
                    } form-input w-full text-center border-0 text-base font-light leading-5`}
                    placeholder="E-mail Address"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-7">
                <div
                  className={`${
                    !isPastorsCollage ? "bg-white" : "bg-[#33545F]"
                  } w-full px-3 border-2 rounded-2xl`}
                >
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className={`${
                      !isPastorsCollage
                        ? "bg-white text-black"
                        : "bg-[#33545F] opacity-1 text-white placeholder-white"
                    } form-input w-full text-center border-0 text-base font-light leading-5`}
                    placeholder="Password"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center mt-7 ">
                <div
                  className={`${
                    !isPastorsCollage
                      ? " text-[#002937] bg-white"
                      : "bg-[#33545F] text-white "
                  } px-7 py-2 hover:opacity-80 rounded-2xl`}
                >
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="text-xl font-bold leading-6 text-center w-full"
                  >
                    {isLoading ? "Loading..." : "SIGN IN"}
                  </button>
                </div>
              </div>
              <div className="text-center italic mt-9">
                <span className=" text-xl font-light leading-4">
                  Don't have and account?{" "}
                </span>
                <span className=" text-xl font-bold leading-4">
                  {" "}
                  <Link href={"signup"}>Sign-up here.</Link>{" "}
                </span>
              </div>
            </form>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </section>
  );
}

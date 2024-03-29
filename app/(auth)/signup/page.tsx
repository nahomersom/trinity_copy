"use client";

import { fetcher } from "@/app/api/api";
import { getTokenFromLocalStorage } from "@/app/api/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { json } from "stream/consumers";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  async function createUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true); // Set loading to true when the request starts

    try {
      const formData = new FormData(event.currentTarget);
      var jwt = getTokenFromLocalStorage();
      var userObj = {
        username : formData.get("fullName".replace(" ","")),
        phone : formData.get("phone"),
        fullName: formData.get("fullName"),
        email :  formData.get("email"),
        password : formData.get("password"),
        role : 1
      }
      const res = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${jwt}`,
          },
          body: JSON.stringify(userObj),
        }
      );
    } catch (error: any) {
      console.log(error);
      setIsLoading(false)
    } finally {

    }
  }
  return (
    <section className=" bg-[rgb(51,84,95)] bg-opacity-60">
      <div className=" max-w-full mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className=" mb-2">
            <h1 className="text-center text-2xl font-bold font-Raleway leading-7">
              CREATE ACCOUNT
            </h1>
          </div>
          <div className=" mb-7">
            <h2 className="text-center text-base font-light leading-5">
              SIGN UP TO CREATE YOUR ACCOUNT
            </h2>
          </div>
          <div className=" max-w-sm mx-auto">
            <form className="" method="post" onSubmit={createUser}>
              <div className="flex flex-wrap -mx-3 mb-7">
                <div className="w-full px-3 border-2 rounded-2xl bg-white">
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    className="form-input w-full text-center border-0 text-base font-light text-black leading-5"
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-7">
                <div className="w-full px-3 border-2 rounded-2xl bg-white">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input w-full text-center border-0 text-base font-light text-black leading-5"
                    placeholder="E-mail Address"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-7">
                <div className="w-full px-3 border-2 rounded-2xl bg-white py-1">
                  <input
                    id="phone"
                    type="phone"
                    name="phone"
                    className="form-input w-full text-center border-0 text-base font-light text-black leading-5"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-7">
                <div className="w-full px-3 border-2 rounded-2xl bg-white">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-input w-full text-center border-0 text-base font-light text-black leading-5"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-7">
                <div className="w-full px-3 border-2 rounded-2xl bg-white">
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassord"
                    className="form-input w-full text-center border-0 text-base font-light text-black leading-5"
                    placeholder="Re-enter Passoword"
                    required
                  />
                </div>
              </div>
              <div className="text-center">
                <span className=" mr-2">
                  <input
                    className=" bg-transparent border-white border-2"
                    type="checkbox"
                    name=""
                    id=""
                  />
                </span>
                <span className=" text-sm font-light leading-4 text-white">
                  I agree with all statements in the{" "}
                </span>
                <span className=" text-sm font-bold leading-4 text-white">
                  terms of service
                </span>
              </div>
              <div className="flex flex-wrap justify-center mt-6 ">
                <div className="px-7 py-2 text-[#002937] bg-white hover:opacity-80 rounded-2xl">
                  <button className="text-xl font-bold leading-6 text-center w-full">
                    CREATE ACCOUNT
                  </button>
                </div>
              </div>
              {/* <button className="" type="submit">submit</button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

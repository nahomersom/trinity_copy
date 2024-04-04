"use client";

import { fetcher } from "@/app/api/api";
import { getTokenFromLocalStorage } from "@/app/api/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { json } from "stream/consumers";
import 'react-toastify/dist/ReactToastify.css';
import { SubmitHandler, useForm } from "react-hook-form";

interface createUserModel {
  username: string;
  phone: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: number;
  blocked:boolean;
}


export default function SignUp() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<createUserModel>();
  const password = watch("password");
  const createUser: SubmitHandler<createUserModel> = async (data) => {
    // Reset errors
   console.log('data is ',data)
    setIsLoading(true); // Set loading to true when the request starts
  
    try {
      var jwt = getTokenFromLocalStorage();
      var userObj = {
        username:data.fullName,
        phone:data.phone,
        fullName:data.fullName,
        email:data.email,
        password:data.password,
        role: 4,
        blocked:true
      };
       // Validate form fields
   

    
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(userObj),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error.message || "Failed to create user");
      }
  
      toast.success('User Created Successfully');
      router.push('/');
      setIsLoading(false);
  
    } catch (error:any) {
      console.error('Error creating user:', error);
      toast.error(error.message);
      setIsLoading(false);
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
            <form className="" method="post"onSubmit={handleSubmit(createUser)}>
              <div className="flex flex-wrap -mx-3 mb-7">
                <div className="w-full px-3 border-2 rounded-2xl bg-white">
                  <input
                    {...register("fullName", { required: true })}

                    id="fullName"
                    type="text"
                    name="fullName"
                    className="form-input w-full text-center border-0 text-base font-light text-black leading-5"
                    placeholder="Full Name"
                  
                  />
                </div>
                {errors.fullName && <p className="text-red-500 text-xs text-center pl-4 mt-1">*This field is required*</p>}

              </div>
              <div className="flex flex-wrap -mx-3 mb-7">
                <div className="w-full px-3 border-2 rounded-2xl bg-white">
                  <input
                    {...register("email",  {
                      required: true,
                      pattern: /^\S+@\S+$/i // Basic email pattern validation
                    })}

                    id="email"
                    type="email"
                    name="email"
                    className="form-input w-full text-center border-0 text-base font-light text-black leading-5"
                    placeholder="E-mail Address"
                  />
                </div>
                {errors.email?.type === "required" && <p className="text-red-500 text-xs">*Email is required*</p>}
                {errors.email?.type === "pattern" && <p className="text-red-500 text-xs">*Invalid email format*</p>}

              </div>
              <div className="flex flex-wrap -mx-3 mb-7">
                <div className="w-full px-3 border-2 rounded-2xl bg-white py-1">
                  <input
                    {...register("phone", { required: true })}

                    id="phone"
                    type="phone"
                    name="phone"
                    className="form-input w-full text-center border-0 text-base font-light text-black leading-5"
                    placeholder="Phone Number"
                  />
                  
                </div>
                {errors.phone && <p className="text-red-500 text-xs text-center pl-4 mt-1">*This field is required*</p>}

              </div>
              <div className="flex flex-wrap -mx-3 mb-7">
                <div className="w-full px-3 border-2 rounded-2xl bg-white">
                  <input
                    {...register("password", { required: true })}

                    id="password"
                    type="password"
                    name="password"
                    className="form-input w-full text-center border-0 text-base font-light text-black leading-5"
                    placeholder="Password"
                  />

                </div>
                {errors.password && <p className="text-red-500 text-xs text-center pl-4 mt-1">*This field is required*</p>}

              </div>
              <div className="flex flex-wrap -mx-3 mb-7">
                <div className="w-full px-3 border-2 rounded-2xl bg-white">
                  <input
                    {...register("confirmPassword", { required: true,    validate: (value) => value === password || "Passwords do not match" })}

                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    className="form-input w-full text-center border-0 text-base font-light text-black leading-5"
                    placeholder="Re-enter password"
                  />

                </div>
                {errors.confirmPassword && <p className="text-red-500 text-xs text-center pl-4 mt-1">*{errors.confirmPassword.message}*</p>}

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
                  <button className="text-xl font-bold leading-6 text-center w-full" disabled={isLoading}>
                       {!isLoading? 'CREATE ACCOUNT': 'Creating your account'} 
                  </button>
                </div>
              </div>
              {/* <button className="" type="submit">submit</button> */}
            </form>
          </div>
        </div>
      <ToastContainer />

      </div>

    </section>
  );
}

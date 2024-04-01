"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { getCoursesList } from "@/app/api/grade";
import { useSelectedUser } from "@/app/contexts/selected-user-context";
import { NumericTextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { getTokenFromLocalStorage } from "@/app/api/auth";
import { fetcher } from "@/app/api/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from "next/navigation";

interface GradeFormInput {
  CourseId: string;
  StudentId: string;
  given_by: string;
  Grade: string;
  paper25: string;
  exam25: string;
  paper50: string;
}

export default function GiveGrade() {

  const { selectedUserData } = useSelectedUser();
  const grades: string[] = ['A', 'B', 'C', 'D', 'F'];  
  const [coursesList, setCoursesList] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter(); 
  const courseField = {text:'text',value:'value'}

  useEffect(() => {
    getCoursesList()?.then((res) => {
      if (res) {
        const formattedCourses = res.map(course => ({ text: course.attributes.name, value: course.id }));
        console.log('courses: ', formattedCourses)
        setCoursesList(formattedCourses);
      }
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GradeFormInput>();

   const onSubmit: SubmitHandler<GradeFormInput> = async (data) => {
    setIsSubmitting(true);
    try {
      var jwt = getTokenFromLocalStorage();
      var userObj = {
        data:{
          CourseId: data.CourseId,
          studentId: selectedUserData?.id.toString(),
          givenBy: localStorage.getItem('id')!, // You need to specify where this value comes from
          Grade: data.Grade,
          paper25: data.paper25,
          exam25: data.exam25,
          paper50: data.paper50,
        }
      
      };
    //   var userObj = {
    //     StudentId: {
    //         disconnect: [],
    //         connect: [{ id: selectedUserData?.id }]
    //     },
    //     given_by: {
    //         disconnect: [],
    //         connect: [{ id: localStorage.getItem('id') }]
    //     },
    //     CourseId: {
    //         disconnect: [],
    //         connect: [{ id: data.CourseId }]
    //     },
    //     Grade: data.Grade,
    //     paper25: data.paper25,
    //     exam25: data.exam25,
    //     paper50: data.paper50
    // };


      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/student-grades`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
          body: JSON.stringify(userObj),
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error.message || "Failed to create user");
      }
     toast.success('Grade Added Successfully') ;
    setIsSubmitting(false);
    router.push(`/students`);
    
    } catch (error:any) {
      console.error('Error creating user:', error);
      toast.error(error.message);
      setIsSubmitting(false);
    }
  };
  return (
    <section className="pt-20 md:pt-20">
      <div className="bg-white pl-[8%] pb-20">
        <div className="m-auto w-[80%] pt-24">
          <div className="flex gap-6 items-start">
            <img
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${selectedUserData?.profilePicture.url}`}
              className="w-28 h-28 rounded-full border border-black"
              alt="User Profile"
            />
            <div className="max-h-1/1 pb-2 flex flex-col gap-3 justify-start h-1/1 w-1/1">
              <div className="text-[26px] text-[#002937] font-raleway font-bold leading-10">
                {selectedUserData?.fullName}
              </div>
              <div className="text-xl text-[#002937] font-raleway font-bold leading-6">
                {selectedUserData?.email}
              </div>
              <div className="text-xl text-[#002937] font-raleway font-bold leading-6">
                {selectedUserData?.phone}
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container mx-auto mt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label className="mb-2 mt-2 label text-[#002937]">Course <span className="text-[#d94949]">*</span></label>
                  <DropDownListComponent
                    {...register("CourseId", { required: true })}
                    id="ddlelement"
                    placeholder="Select a course"
                    dataSource={coursesList}
                    fields={courseField}
                    cssClass="e-outline e-small"
                  />
                  {errors.CourseId && <span className="text-xs text-red-500">*This field is required*</span>}
                </div>

                <div className="col-span-1">
                  <label className="mb-2 mt-2 label text-[#002937]">Exam 25% <span className="text-[#d94949]">*</span></label>
                  <NumericTextBoxComponent
                    {...register("exam25", { required: true })}
                    cssClass="e-outline e-small"
                    min={0} max={25} format="##" step={2} value={1}
                  />
                  {errors.exam25 && <span className="text-xs text-red-500">*This field is required*</span>}

                </div>

                <div className="col-span-1">
                  <label className="mb-2 mt-2 label text-[#002937]">Paper 50% <span className="text-[#d94949]">*</span></label>
                  <NumericTextBoxComponent
                    {...register("paper50", { required: true })}
                    cssClass="e-outline e-small"
                    min={0} max={50} format="##" step={2} value={1}
                  />

                  {errors.paper50 && <span className="text-xs text-red-500">*This field is required*</span>}
                </div>

                <div className="col-span-1">
                  <label className="mb-2 mt-2 label text-[#002937]">Paper 25% <span className="text-[#d94949]">*</span></label>
                  <NumericTextBoxComponent
                    {...register("paper25", { required: true })}
                    cssClass="e-outline e-small"
                    min={0} max={25} format="##" step={2} value={1}
                  />
                  {errors.paper25 && <span className="text-xs text-red-500">*This field is required*</span>}

                </div>
                <div className="col-span-1">
                  <label className="mb-2 mt-2 label text-[#002937]">Grades <span className="text-[#d94949]">*</span></label>
                  <DropDownListComponent
                    {...register("Grade", { required: true })}
                    id="ddlelement"
                    dataSource={grades}
                    cssClass="e-outline e-small"
                  />
                  {errors.Grade && <span className="text-xs text-red-500">*This field is required*</span>}

                </div>
                <div className="col-span-2">
                <button type="submit" disabled={isSubmitting} className={`mt-4 bg-[#002937] hover:bg-[#004050] focus:bg-[#004050] focus:outline-none text-white font-bold py-2 px-4 rounded ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

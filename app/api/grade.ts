import { fetcher } from "./api";
import { getTokenFromLocalStorage } from "./auth";

export type Course = {
    id: number;
    attributes: {
        name: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}


export type Grade = {
  id: number;
  attributes: {
    Grade: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    paper25: number;
    exam25: number;
    paper50: number;
    studentId: string;
    givenBy: string;
    CourseId: {
      data: {
        id: number;
        attributes: {
          name: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      };
    };
  };
};


export const getCoursesList = async (): Promise<Course[]> => {

  
    try {
      const response = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/Courses`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const Courses: Course[] = response.data;
  
      return Courses;
    } catch (error) {
      console.error("Error fetching users:", error);
      return []; // Return empty array if an error occurs during fetch
    }
  };
  
  export const getGradeList = async (): Promise<Grade[]> => {

  
    try {
      const response = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/student-grades?populate=* `,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const Grades: Grade[] = response.data;
  
      return Grades;
    } catch (error) {
      console.error("Error fetching users:", error);
      return []; // Return empty array if an error occurs during fetch
    }
  };
import { fetcher } from "./api";
import { getTokenFromLocalStorage } from "./auth";

export type Users = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  userType: string | null;
  fullName: string | null;
  phone: string | null;
  role: {
    id: number;
    name: string;
    description: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
  };
  profilePicture: {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: string | null;
        width: number;
        height: number;
        size: number;
        url: string;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: Date;
    updatedAt: Date;
  };
};

export type AnnouncementModel = {
  id: number,
            attributes: {
                Date: string;
                createdAt: Date,
                updatedAt: Date,
                publishedAt: Date,
                Schedule: string ,
                Start_Time: string,
                End_Time: string,
                Todo: string
            }
}
export const getUsersList = async (): Promise<Users[]> => {
    const jwt = getTokenFromLocalStorage();
    if (!jwt) {
      return []; // Return empty array if JWT token is not available
    }
  
    try {
      const response = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users?populate=*`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      const usersData: Users[] = response;
  
      return usersData;
    } catch (error) {
      console.error("Error fetching users:", error);
      return []; // Return empty array if an error occurs during fetch
    }
  };
  
  export const getAnnouncement = async (date:any): Promise<AnnouncementModel[]> => {
    const jwt = getTokenFromLocalStorage();
    if (!jwt) {
      return []; // Return empty array if JWT token is not available
    }
  
    try {
      const response = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/announcements?filters[Date][$eq]=${date}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      const announcementData: AnnouncementModel[] = response.data;
  
      return announcementData;
    } catch (error) {
      console.error("Error fetching users:", error);
      return []; // Return empty array if an error occurs during fetch
    }
  };
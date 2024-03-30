import { throws } from "assert";
import { fetcher } from "./api";
import { Router } from "next/router";

type AppUser = {
  id: string;
  username: string;
  profilePicture: any;
  phone? : string;
  email? : string;
  // role ? : {name : string};
  fullName? : string;
};

export const setToken = (user: any) => {
  if (typeof window === "undefined") {
    return;
  }
  console.log("saving token dataaaaaaaaaaaaaaaaaaaa",user.profilePicture)

  localStorage.setItem("id", user.id);
  localStorage.setItem("username", user.username);
  localStorage.setItem("userRole", user.role?.name?.toLowerCase()??"public" );
  localStorage.setItem("jwt", user.jwt);
  console.log("token -------------------", localStorage.getItem("jwt"))
  localStorage.setItem(
    "userProfileUrl",
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${user.profilePicture?.url}`
  );
};

export const unsetToken = () => {
  // if (typeof window === "undefined") {
  //   return;
  // }
  localStorage.removeItem("id");
  localStorage.removeItem("jwt");
  localStorage.removeItem("username");
  localStorage.removeItem("userProfileUrl");
  localStorage.removeItem("userRole");

  
};
export const getUserType = () => {
  const jwt = getTokenFromLocalStorage();
  if (jwt) {
    return fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/me?populate=*`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((data) => {
      return data.role.type;
    });
  }
  return;
};

export const getUserFromLocalStorage = () => {
  const jwt = getTokenFromLocalStorage();
  if (jwt) {
    return fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/me?populate=*`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((data) => {
        console.log("data from user fetchhhhhhhhhhhhhhh.....", data)
        return data as AppUser;
      })

      // .catch((error) => console.error(error));
  } 
};

export const getIdFromLocalStorage = () => {
  const jwt = getTokenFromLocalStorage();
  if (jwt) {
    return fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/me?populate=*`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((data) => {
      return data.id;
    });
  } else {
    return;
  }
};

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("jwt");
};

// export const getTokenFromServerStorage = (req) => {
//   if (!req.headers.Storage || '') {
//     return undefined;
//   }
//   const jwtStorage = req.headers.Storage
//     .split(';')
//     .find((c) => c.trim().startsWith('jwt='));
//   if (!jwtStorage) {
//     return undefined;
//   }
//   const jwt = jwtStorage.split('=')[1];
//   return jwt;
// };

// export const getIdFromServerStorage = (req) => {
//   if (!req.headers.Storage || '') {
//     return undefined;
//   }
//   const idStorage = req.headers.Storage
//     .split(';')
//     .find((c) => c.trim().startsWith('id='));
//   if (!idStorage) {
//     return undefined;
//   }
//   const id = idStorage.split('=')[1];
//   return id;
// };


export enum UserRole {
    Admin, ChurchMember , Student , Public
}


export type NavBarType = {
  title: string;
  link?: string;
  isAdminAllowed: boolean;
  isPublicAllowed: boolean;
  isStudentAllowed: boolean;
  isMemberAllowed: boolean;
  islogout? : boolean;
  children?: NavBarType[];
};
export const navBarItems: NavBarType[] = [
  {
    title: "About",
    isAdminAllowed: true,
    isPublicAllowed: true,
    isStudentAllowed: false,
    isMemberAllowed: true,
    children: [
      {
        title: "Our Pastors",
        link: "#",
        isAdminAllowed: true,
        isPublicAllowed: true,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
      {
        title: "Our Staff",
        link: "/ourStaff",
        isAdminAllowed: true,
        isPublicAllowed: true,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
      {
        title: "Our Partners",
        link: "/ourPartners",
        isAdminAllowed: true,
        isPublicAllowed: true,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
      {
        title: "History",
        link: "/ourHistory",
        isAdminAllowed: true,
        isPublicAllowed: true,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
    ],
  },
  {
    title: "Ministries",
    isAdminAllowed: true,
    isPublicAllowed: true,
    isStudentAllowed: false,
    isMemberAllowed: true,
    children: [
      {
        title: "Explore",
        link: "#",
        isAdminAllowed: true,
        isPublicAllowed: true,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
      {
        title: "Children's Ministry",
        link: "#",
        isAdminAllowed: true,
        isPublicAllowed: false,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
      {
        title: "Women's Ministry",
        link: "#",
        isAdminAllowed: true,
        isPublicAllowed: true,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
      {
        title: "Community Group",
        link: "#",
        isAdminAllowed: true,
        isPublicAllowed: true,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
      {
        title: "Worship",
        link: "#",
        isAdminAllowed: true,
        isPublicAllowed: true,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
    ],
  },
  {
    title: "Resources",
    isAdminAllowed: true,
    isPublicAllowed: true,
    isStudentAllowed: false,
    isMemberAllowed: true,
    children: [
      {
        title: "Students",
        link: "/students",
        isAdminAllowed: true,
        isPublicAllowed: false,
        isStudentAllowed: false,
        isMemberAllowed: false,
      },
      {
        title: "Children's Ministry",
        link: "#",
        isAdminAllowed: true,
        isPublicAllowed: false,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
      {
        title: "Sermons",
        link: "/sermons",
        isAdminAllowed: true,
        isPublicAllowed: true,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
      {
        title: "Seminars",
        link: "#",
        isAdminAllowed: true,
        isPublicAllowed: false,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
      {
        title: "Books",
        link: "#",
        isAdminAllowed: true,
        isPublicAllowed: false,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
      {
        title: "Blog",
        link: "#",
        isAdminAllowed: true,
        isPublicAllowed: false,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
    ],
  },
  {
    title: "Connect",
    isAdminAllowed: true,
    isPublicAllowed: true,
    isStudentAllowed: false,
    isMemberAllowed: true,
    children: [
      {
        title: "I'm New",
        link: "#",
        isAdminAllowed: true,
        isPublicAllowed: true,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
      {
        title: "Events",
        link: "#",
        isAdminAllowed: true,
        isPublicAllowed: false,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
      {
        title: "Serving",
        link: "#",
        isAdminAllowed: true,
        isPublicAllowed: true,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
      {
        title: "Baptism",
        link: "#",
        isAdminAllowed: true,
        isPublicAllowed: false,
        isStudentAllowed: false,
        isMemberAllowed: true,
      },
    ],
  },
  {
    title: "Sign-In",
    isAdminAllowed: false,
    isPublicAllowed: true,
    isStudentAllowed: false,
    isMemberAllowed: false,
    children: [
      {
        title: "Pastors collage",
        link: "/signin?isPastorsCollage=true",
        isAdminAllowed: false,
        isPublicAllowed: true,
        isStudentAllowed: false,
        isMemberAllowed: false,
      },
      {
        title: "Church members",
        link: "/signin",
        isAdminAllowed: false,
        isPublicAllowed: true,
        isStudentAllowed: false,
        isMemberAllowed: false,
      },
    ],
  },
  //   student navigations
  {
    title: "Classes",
    link: "#",
    isAdminAllowed: true,
    isPublicAllowed: false,
    isStudentAllowed: true,
    isMemberAllowed: false,
  },
  {
    title: "Calendar",
    link: "#",
    isAdminAllowed: false,
    isPublicAllowed: false,
    isStudentAllowed: true,
    isMemberAllowed: false,
  },
  {
    title: "Resources",
    link: "/sermons",
    isAdminAllowed: false,
    isPublicAllowed: false,
    isStudentAllowed: true,
    isMemberAllowed: false,
  },
  {
    title: "Results",
    link: "/user-status",
    isAdminAllowed: false,
    isPublicAllowed: false,
    isStudentAllowed: true,
    isMemberAllowed: false,
  },
  {
    title: "Sign-out",
    isAdminAllowed: true,
    isPublicAllowed: false,
    isStudentAllowed: true,
    isMemberAllowed: true,
    islogout:true
  },

];

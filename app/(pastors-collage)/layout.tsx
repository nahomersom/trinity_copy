"use client";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PastorsCollage({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userImage, setUserImage] = useState('');
  const [userName, setUserName] = useState('');
  const router = useRouter()

  useEffect(() => {
    // Code here will run on the client side
    if (typeof localStorage !== "undefined") {
       const name = localStorage.getItem("userName");
       const imageUrl = localStorage.getItem("userProfileUrl");
       setUserImage(imageUrl||"")
       setUserName(name||"")

    }
  }, []);

  return (
    <>
      <Header hasUser userImage={userImage} userName={userName} router={router} ></Header>
      <main className="grow font-raleway">{children}</main>
      <Footer />
    </>
  );
}

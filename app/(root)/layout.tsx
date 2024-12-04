import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Landing from "@/components/Landing";
import { auth } from "@/auth";
import React from "react";




export default async function Layout({ children } : {children: React.ReactNode}) {

  const session = await auth();


  return session ? (
    <main className="flex w-full h-full">
      <div className="hidden xl:block w-80 h-full xl:fixed">
        <SideBar />
      </div>
      <div className="w-full xl:ml-80">
        <NavBar />
        <div className="p-6 bg-[#fafbfc] dark:bg-secondary rounded-xl">{children}</div>
      </div>
    </main>
  ) : (
    <Landing />
  );
}
